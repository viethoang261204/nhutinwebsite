<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    use HasFactory;

    protected $fillable = [
        'slug', 'title_vi', 'title_en', 'excerpt_vi', 'excerpt_en', 'content_vi', 'content_en', 'cover_image_path', 'published_at', 'is_published'
    ];
}
