<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('played_games', function (Blueprint $table) {
            $table->id();
            $table->integer('words_per_minute');
            $table->integer('keystrokes');
            $table->integer('right_words');
            $table->integer('wrong_words');
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users');
            $table->unsignedBigInteger('game_id');
            $table->foreign('game_id')->references('id')->on('game');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('played_games');
    }
};
