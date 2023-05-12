<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function signup()
    {
        return view('app.auth.signup.index');
    }

    public function login()
    {
        return view('app.auth.login.index');
    }
}
