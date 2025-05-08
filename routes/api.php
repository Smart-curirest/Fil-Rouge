<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Route::get('/', function() {
//     return "good";
// });

Route::apiResource('posts', PostController::class);
// Route::apiResource(['posts', PostController::class, 'store']);

// Route::middleware('auth:sanctum')->group(function () {
//     Route::post('/posts', [PostController::class, 'store']);
// });

// Route::middleware('auth:sanctum')->post('/posts', [PostController::class, 'store']);


Route::post('/register', [AuthController::class, 'register']);
Route::put('/user/{id}', [AuthController::class, 'updateUser']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
