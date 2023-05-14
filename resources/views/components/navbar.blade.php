<nav class="flex justify-between my-4 mx-5 md:mx-10 lg:mx-20">
    <h1 class="text-lg">
        <a href="{{ route('home.index') }}">
            <img src="{{ url('/assets/images/flash-fingers-logo.png') }}" alt="logo" class="w-20">
        </a>
    </h1>
    <ul class="relative flex items-center gap-5">
        @if ($authenticated)
            <img src="assets/images/users/{{ $user->photo_image_url }}" alt="{{ $user->name }}"
                class="rounded-full w-12 h-12 object-cover">
            <p> {{ $user->name }} <i class="fa-solid fa-chevron-down text-xs cursor-pointer"></i> </p>
        @endif
        @guest
            <li>
                <a href="{{ route('auth.signup') }}"
                    class="shadow-md rounded-full text-center hover:bg-gray-100 py-1 px-5">Cadastrar
                </a>
            </li>
            <li>
                <a href="{{ route('auth.login') }}"
                    class="shadow-sm rounded-full text-center bg-primary hover:brightness-110 text-white py-1 px-7">Logar
                </a>
            </li>
        @endguest
    </ul>
</nav>
