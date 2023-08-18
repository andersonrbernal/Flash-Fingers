@extends('layouts.primary')

@section('title', 'Home')

@section('content')
    <div class="max-w-6xl mx-auto">
        <main class="flex justify-between">
            <x-ranking />
            <x-game />
        </main>
    </div>
@endsection
