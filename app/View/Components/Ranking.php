<?php

namespace App\View\Components;

use App\Models\PlayedGame;
use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\DB;
use Illuminate\View\Component;

class Ranking extends Component
{
    public $playedGames;

    /**
     * Create a new component instance.
     */
    public function __construct()
    {
        $this->playedGames = DB::table('users')
            ->join('played_games', 'users.id', '=', 'played_games.user_id')
            ->select('users.*', DB::raw('ROUND(AVG(wordsPerMinute)) as avarage'))
            ->groupBy('users.id')
            ->orderByDesc('avarage')
            ->take(5)
            ->get();
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.ranking');
    }
}
