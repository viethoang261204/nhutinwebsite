<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;
use App\Http\Controllers\AdminAuthController;
use App\Http\Controllers\AdminNewsController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get('/index.html', function () {
    return view('index');
});

// Admin pages (static HTML served from public)
Route::get('/admin/login', function () {
    $path = public_path('admin-login.html');
    return response()->file($path);
});

Route::get('/admin', function () {
    if (!Session::has('admin_user_id')) {
        return redirect('/admin/login');
    }
    $path = public_path('admin-dashboard.html');
    return response()->file($path);
});

Route::get('/admin/news', function () {
    if (!Session::has('admin_user_id')) {
        return redirect('/admin/login');
    }
    $path = public_path('admin-news.html');
    return response()->file($path);
});

Route::get('/admin/news/add', function () {
    if (!Session::has('admin_user_id')) {
        return redirect('/admin/login');
    }
    $path = public_path('admin-news-add.html');
    return response()->file($path);
});

Route::get('/admin/news/edit', function () {
    if (!Session::has('admin_user_id')) {
        return redirect('/admin/login');
    }
    $path = public_path('admin-news-edit.html');
    return response()->file($path);
});

Route::post('/admin/login', [AdminAuthController::class, 'login']);
Route::get('/admin/logout', [AdminAuthController::class, 'logout']);

// Admin stats API
Route::get('/admin/api/stats', [\App\Http\Controllers\AdminStatsController::class, 'getStats']);

// Admin news API
Route::get('/admin/api/csrf-token', function() {
    return response()->json(['csrf_token' => csrf_token()]);
});
Route::get('/admin/api/news', [AdminNewsController::class, 'getNews']);
Route::get('/admin/api/categories', [AdminNewsController::class, 'getCategories']);
Route::post('/admin/api/news', [AdminNewsController::class, 'store']);
Route::put('/admin/api/news/{id}', [AdminNewsController::class, 'update']);
Route::delete('/admin/api/news/{id}', [AdminNewsController::class, 'destroy']);
Route::delete('/admin/api/news/bulk-delete', [AdminNewsController::class, 'bulkDestroy']);

// Redirect from .html to pretty URL without extension
Route::get('/{slug}.html', function ($slug) {
    return redirect('/' . $slug, 301);
})->where('slug', '(aboutkeith|aboutnhutin|news|downloads|product|ungdung|pdf-viewer)');

// Serve static HTML files from public as pretty URLs
Route::get('/{slug}', function ($slug) {
    $allowed = ['aboutkeith','aboutnhutin','news','downloads','product','ungdung','pdf-viewer'];
    if (!in_array($slug, $allowed, true)) {
        abort(404);
    }
    $path = public_path($slug . '.html');
    if (file_exists($path)) {
        return response()->file($path);
    }
    abort(404);
});
