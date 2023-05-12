<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

# /
Route::get('/', [HomeController::class, 'index'])->name('home.index');

# /auth
Route::get('/auth/signup', [AuthController::class, 'signup'])->name('auth.signup');
Route::get('/auth/login', [AuthController::class, 'login'])->name('auth.login');
