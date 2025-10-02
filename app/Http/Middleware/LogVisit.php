<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LogVisit
{
    public function handle(Request $request, Closure $next)
    {
        // Skip admin area and admin assets
        $path = $request->path();
        if (str_starts_with($path, 'admin') || str_starts_with($path, 'admin-assets')) {
            return $next($request);
        }

        // Skip static assets (only count main site page views)
        if (preg_match('/\.(?:js|css|png|jpe?g|gif|svg|ico|webmanifest|pdf|mp4)$/i', $path)) {
            return $next($request);
        }

        try {
            // Create table if not exists (idempotent)
            DB::statement('CREATE TABLE IF NOT EXISTS visits (
                id INT AUTO_INCREMENT PRIMARY KEY,
                path VARCHAR(255) NULL,
                ip VARCHAR(64) NULL,
                user_agent VARCHAR(512) NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                INDEX idx_created_at (created_at)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4');

            DB::table('visits')->insert([
                'path' => $path,
                'ip' => $request->ip(),
                'user_agent' => substr($request->userAgent() ?? '', 0, 512),
            ]);
        } catch (\Throwable $e) {
            // ignore logging failures
        }

        return $next($request);
    }
}


