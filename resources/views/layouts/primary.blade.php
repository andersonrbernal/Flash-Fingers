<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title> Flash Fingers | @yield('title') </title>
    @stack('head')
    @vite('resources/css/app.css')
    @vite('node_modules/@fortawesome/fontawesome-free/css/all.min.css')
</head>

<body>
    @yield('content')
    @stack('scripts')
</body>

</html>
