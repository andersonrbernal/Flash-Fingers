@extends('layouts.primary')

@section('title', 'Home')

@section('content')
    <div class="max-w-6xl mx-auto">
        <x-navbar />
        <main class="flex justify-between">
            <div>
                <p class="text-2xl">Finge que aqui é o ranking</p>
            </div>
            <div class="max-w-2xl w-full">
                <x-game />
            </div>
        </main>
    </div>
@endsection
