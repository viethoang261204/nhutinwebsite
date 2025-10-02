<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\Admin;
use App\Models\News;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // Default admin
        if (!Admin::query()->where('email', 'admin@example.com')->exists()) {
            Admin::create([
                'name' => 'Admin',
                'email' => 'admin@example.com',
                'password' => Hash::make('admin123'),
            ]);
        }

        // Example news item
        if (!News::query()->exists()) {
            News::create([
                'slug' => 'gioi-thieu-keith-walking-floor',
                'title_vi' => 'Giới thiệu KEITH WALKING FLOOR',
                'title_en' => 'Introduction to KEITH WALKING FLOOR',
                'excerpt_vi' => 'Giải pháp xả hàng tự động an toàn và hiệu quả.',
                'excerpt_en' => 'Automatic unloading solution that is safe and efficient.',
                'content_vi' => 'Nội dung mẫu tiếng Việt...',
                'content_en' => 'Sample English content...',
                'is_published' => true,
                'published_at' => now(),
            ]);
        }
    }
}
