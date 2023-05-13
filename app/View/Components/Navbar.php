<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\Component;

class Navbar extends Component
{
    public bool $authenticated;
    public $user;

    public function __construct()
    {
        $this->authenticated = Auth::check();
        $this->user = Auth::user();
    }

    public function render(): View|Closure|string
    {
        return view('components.navbar');
    }
}
