<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    /** @use HasFactory<\Database\Factories\PostFactory> */
    use HasFactory;

    protected $fillable = [
        'titre',
        'description',
        'prix',
        'adresse',
        'disponible',
        'surface',
        'chambres',
        'salles_de_bain',
        'image_path',
        'user_id'
    ];

    // protected $casts = [
    //     'prix' => 'decimal:2',
    //     'disponible' => 'boolean',
    //     'surface' => 'integer',
    //     'chambres' => 'integer',
    //     'salles_de_bain' => 'integer',
    // ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
