<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class AdminNewsController extends Controller
{
    public function index()
    {
        return response()->file(public_path('admin-news.html'));
    }

    public function getNews()
    {
        $news = DB::table('posts')
            ->leftJoin('categories', 'posts.category_id', '=', 'categories.id')
            ->select('posts.*', 'categories.name as category_name')
            ->orderBy('posts.created_at', 'desc')
            ->get();

        return response()->json($news);
    }

    public function getCategories()
    {
        $categories = DB::table('categories')->get();
        return response()->json($categories);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title_vi' => 'required|string|max:255',
            'title_en' => 'required|string|max:255',
            'content_vi' => 'required|string',
            'content_en' => 'required|string',
            'image_url' => 'nullable|url',
            'category_id' => 'nullable|integer|exists:categories,id'
        ]);

        $data = [
            'title_vi' => $request->title_vi,
            'title_en' => $request->title_en,
            'content_vi' => $request->content_vi,
            'content_en' => $request->content_en,
            'image_url' => $request->image_url,
            'category_id' => $request->category_id,
            'author_id' => 1, // Default author
            'is_published' => false, // Default to draft
            'created_at' => now(),
            'updated_at' => now()
        ];

        $id = DB::table('posts')->insertGetId($data);
        
        return response()->json(['id' => $id, 'message' => 'News created successfully']);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'title_vi' => 'required|string|max:255',
            'title_en' => 'required|string|max:255',
            'content_vi' => 'required|string',
            'content_en' => 'required|string',
            'image_url' => 'nullable|url',
            'category_id' => 'nullable|integer|exists:categories,id'
        ]);

        $data = [
            'title_vi' => $request->title_vi,
            'title_en' => $request->title_en,
            'content_vi' => $request->content_vi,
            'content_en' => $request->content_en,
            'image_url' => $request->image_url,
            'category_id' => $request->category_id,
            'updated_at' => now()
        ];

        DB::table('posts')->where('id', $id)->update($data);
        
        return response()->json(['message' => 'News updated successfully']);
    }

    public function destroy($id)
    {
        try {
            // Validate ID
            if (!is_numeric($id) || $id <= 0) {
                return response()->json(['message' => 'ID không hợp lệ'], 400);
            }

            // Check if news exists
            $news = DB::table('posts')->where('id', $id)->first();
            if (!$news) {
                return response()->json(['message' => 'Tin tức không tồn tại'], 404);
            }

            // Get news title for logging
            $newsTitle = $news->title_vi;

            // Delete the news
            $deleted = DB::table('posts')->where('id', $id)->delete();
            
            if ($deleted) {
                // Log the deletion (optional)
                \Log::info("News deleted: ID {$id}, Title: {$newsTitle}");
                
                return response()->json([
                    'message' => 'Xóa tin tức thành công',
                    'deleted_title' => $newsTitle
                ]);
            } else {
                return response()->json(['message' => 'Không thể xóa tin tức'], 500);
            }
            
        } catch (\Exception $e) {
            \Log::error("Error deleting news ID {$id}: " . $e->getMessage());
            return response()->json(['message' => 'Có lỗi xảy ra khi xóa tin tức'], 500);
        }
    }

    public function bulkDestroy(Request $request)
    {
        try {
            $request->validate([
                'ids' => 'required|array|min:1',
                'ids.*' => 'integer|min:1'
            ]);

            $ids = $request->ids;
            
            // Check if all news exist
            $existingNews = DB::table('posts')->whereIn('id', $ids)->get();
            if ($existingNews->count() !== count($ids)) {
                return response()->json(['message' => 'Một số tin tức không tồn tại'], 404);
            }

            // Get titles for logging
            $titles = $existingNews->pluck('title_vi')->toArray();

            // Delete the news
            $deletedCount = DB::table('posts')->whereIn('id', $ids)->delete();
            
            if ($deletedCount > 0) {
                // Log the deletion
                \Log::info("Bulk news deleted: IDs " . implode(', ', $ids) . ", Titles: " . implode(', ', $titles));
                
                return response()->json([
                    'message' => "Đã xóa thành công {$deletedCount} tin tức",
                    'deleted_count' => $deletedCount,
                    'deleted_titles' => $titles
                ]);
            } else {
                return response()->json(['message' => 'Không thể xóa tin tức'], 500);
            }
            
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['message' => 'Dữ liệu không hợp lệ: ' . implode(', ', $e->validator->errors()->all())], 400);
        } catch (\Exception $e) {
            \Log::error("Error bulk deleting news: " . $e->getMessage());
            return response()->json(['message' => 'Có lỗi xảy ra khi xóa tin tức'], 500);
        }
    }
}
