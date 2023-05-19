@props(['profile', 'settings', 'logout'])
<ul class="absolute right-0 top-14 bg-gray-100 bg-opacity-90 p-1">
    <li class="px-1">
        <a href="{{ $profile }}">
            <i class="fa-regular fa-user"></i> Perfil
        </a>
    </li>
    <li class="px-1 pb-1">
        <a href="{{ $settings }}">
            <i class="fa-solid fa-gear"></i> Configurações
        </a>
    </li>
    <li class="px-1 border-t border-neutral-400">
        <a href="{{ $logout }}">
            <i class="fa-solid fa-arrow-right-from-bracket"></i> Logout
        </a>
    </li>
</ul>
