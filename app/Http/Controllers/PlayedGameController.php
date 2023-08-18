<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePlayedGameRequest;
use App\Models\PlayedGame;
use Exception;
use Illuminate\Http\Request;

class PlayedGameController extends Controller
{
    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePlayedGameRequest $request)
    {
        try {
            $playedGame = new PlayedGame($request->all());
            $playedGame->save();
            return response($playedGame, 201);
        } catch (\Exception $e) {
            return response($e->getMessage(), 500);
        }
    }
}
