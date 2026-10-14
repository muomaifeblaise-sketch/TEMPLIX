<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\EditorController;
use App\Http\Controllers\StateController;
use App\Http\Controllers\UploadController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {
    Route::get('/login', [AuthController::class, 'showLogin'])->name('login');
    Route::post('/login', [AuthController::class, 'login']);
    Route::get('/register', [AuthController::class, 'showRegister'])->name('register');
    Route::post('/register', [AuthController::class, 'register']);
});

Route::middleware('auth')->group(function () {
    Route::get('/', [EditorController::class, 'index'])->name('home');
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

    // Editor data sync (saved projects, favorites, history, profile)
    Route::put('/api/state/{key}', [StateController::class, 'update'])->name('state.update');

    // File uploads
    Route::get('/uploads', [UploadController::class, 'index'])->name('uploads.index');
    Route::post('/api/uploads', [UploadController::class, 'store'])->name('uploads.store');
    Route::delete('/uploads/{upload}', [UploadController::class, 'destroy'])->name('uploads.destroy');
});
