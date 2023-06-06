<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Flash Fingers | @yield('title') </title>
    @if (auth()->check())
        <meta name="user-id" content="{{ auth()->user()->id }}">
    @endif
    <meta name="csrf-token" content="{{ csrf_token() }}">
    @stack('head')
    @vite('resources/css/app.css')
    @vite('node_modules/@fortawesome/fontawesome-free/css/all.min.css')
</head>

<body>
    <x-navbar />
    @yield('content')
    @stack('scripts')
</body>

</html>
