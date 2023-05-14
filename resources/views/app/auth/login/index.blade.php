@extends('layouts.primary')

@section('title', 'Página de login')

@section('content')
    <x-navbar />
    <main class="w-full flex justify-center">
        @error('server')
            <div class="absolute rounded-full border-2 p-2 bg-white border-red-600">
                <p class="text-center text-red-600 font-semibold">
                    <i class="fa fa-fire"></i> {{ $message }}
                </p>
            </div>
        @enderror
        <form action="{{ route('auth.authenticate') }}" method="post"
            class="max-w-xs w-full rounded-xl shadow-md p-4 flex flex-col gap-5">
            <h2 class="text-2xl font-semibold text-center">Login</h2>
            @error('credentials')
                <p class="text-center text-red-600">{{ $message }}</p>
            @enderror
            @csrf
            <div class="rounded-xl p-2 border @error('email') border-red-600 @enderror focus-within:border-primary">
                <label for="name" class="font-semibold">Email</label>
                <div class="flex gap-3 items-center bg-white text-sm mt-1">
                    <i class="fa-regular fa-envelope"></i>
                    <input type="text" name="email" id="email" placeholder="email@example.com"
                        class="w-full outline-none">
                </div>
            </div>
            <div class="rounded-xl p-2 border @error('password') border-red-600 @enderror focus-within:border-primary">
                <label for="name" class="font-semibold">Password</label>
                <div class="flex gap-3 items-center bg-white text-sm mt-1">
                    <i class="fa fa-lock"></i>
                    <input type="password" name="password" id="password" placeholder="********"
                        class="w-full outline-none">
                </div>
            </div>
            <button class="bg-primary text-white font-semibold hover:brightness-105 rounded-xl p-2">
                Enviar
            </button>
        </form>
    </main>
@endsection
