<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class AdminStatsController extends Controller
{
    public function getStats(Request $request)
    {
        // This method is already protected by auth:admin middleware in routes

        // Ensure visits table exists (API runs under /admin where logging is skipped)
        try {
            \DB::statement('CREATE TABLE IF NOT EXISTS visits (
                id INT AUTO_INCREMENT PRIMARY KEY,
                path VARCHAR(255) NULL,
                ip VARCHAR(64) NULL,
                user_agent VARCHAR(512) NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                INDEX idx_created_at (created_at)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4');
        } catch (\Throwable $e) {
            // ignore; queries below will fail and return 500 which helps surface DB issues
        }

        // Counts
        $newsCount = (int) DB::table('posts')->count();
        $commentCount = (int) DB::table('comments')->count();

        // Total visits
        $totalVisits = (int) DB::table('visits')->count();
        
        // Yesterday visits
        $yesterdayVisits = (int) DB::table('visits')
            ->whereDate('created_at', DB::raw('DATE_SUB(CURDATE(), INTERVAL 1 DAY)'))
            ->count();
        // Today visits
        $todayVisits = (int) DB::table('visits')
            ->whereDate('created_at', DB::raw('CURDATE()'))
            ->count();
        // Calculate change
        $visitChange = $yesterdayVisits > 0 ? round((($todayVisits - $yesterdayVisits) / $yesterdayVisits) * 100) : 0;

        // Visits per day for last 30 days
        $visitsByDay = DB::table('visits')
            ->selectRaw('DATE(created_at) as d, COUNT(*) as c')
            ->where('created_at', '>=', DB::raw('DATE_SUB(NOW(), INTERVAL 30 DAY)'))
            ->groupBy('d')
            ->orderBy('d')
            ->get();

        // Visits per month for last 12 months
        $visitsByMonth = DB::table('visits')
            ->selectRaw('DATE_FORMAT(created_at, "%Y-%m") as m, COUNT(*) as c')
            ->where('created_at', '>=', DB::raw('DATE_SUB(NOW(), INTERVAL 12 MONTH)'))
            ->groupBy('m')
            ->orderBy('m')
            ->get();

        // Visits per year for last 5 years
        $visitsByYear = DB::table('visits')
            ->selectRaw('YEAR(created_at) as y, COUNT(*) as c')
            ->where('created_at', '>=', DB::raw('DATE_SUB(NOW(), INTERVAL 5 YEAR)'))
            ->groupBy('y')
            ->orderBy('y')
            ->get();

        // No sources aggregation (removed per request)

        return response()->json([
            'newsCount' => $newsCount,
            'commentCount' => $commentCount,
            'totalVisits' => $totalVisits,
            'visitChange' => $visitChange,
            'visitsByDay' => $visitsByDay,
            'visitsByMonth' => $visitsByMonth,
            'visitsByYear' => $visitsByYear,
        ]);
    }
}