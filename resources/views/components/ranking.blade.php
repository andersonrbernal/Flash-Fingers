<aside
    class="hidden lg:block max-w-[280px] w-full rounded-xl bg-gradient-to-b from-primary to-green-sea text-white px-4">
    <h2 class="font-semibold text-lg text-center mb-3">Ranking semanal</h2>
    <ul class="flex flex-col gap-4">
        @foreach ($playedGames as $playedGame)
            <li class="flex gap-2">
                <img src="{{ URL::to('/') }}/assets/images/users/{{ $playedGame->photo_image_url }}"
                    alt="{{ $playedGame->name }}" class="rounded-full h-12 w-12 object-cover">
                <div class="flex flex-col">
                    <p class="font-semibold">{{ $playedGame->name }}</p>
                    <p class="text-sm">Média de {{ $playedGame->avarage }} PPM</p>
                </div>
            </li>
        @endforeach
    </ul>
</aside>
