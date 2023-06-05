@extends('layouts.primary')

@section('title', 'Home')

@section('content')
    <div class="max-w-6xl mx-auto">
        <main class="flex justify-between">
            <div class="hidden lg:block">
                <p class="text-2xl">Finge que aqui é o ranking</p>
            </div>
            <x-game />
        </main>
    </div>
@endsection
