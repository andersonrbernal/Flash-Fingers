<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PlayedGameController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

# /
Route::get('/', [HomeController::class, 'index'])->name('home.index');

# /auth
Route::get('/auth/signup', [AuthController::class, 'signup'])->name('auth.signup');
Route::get('/auth/login', [AuthController::class, 'login'])->name('auth.login');
Route::post('/auth/authenticate', [AuthController::class, 'authenticate'])->name('auth.authenticate');
Route::get('/auth/logout', [AuthController::class, 'logout'])->name('auth.logout');

# /users
Route::post('/users', [UserController::class, 'store'])->name('users.store');

# /played-game
Route::post('/played-game', [PlayedGameController::class, 'store'])->name('played-game.store');
