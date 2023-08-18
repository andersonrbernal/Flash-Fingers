<div class="grid grid-cols-3 max-w-4xl rounded-xl text-white bg-gradient-to-r from-primary to-violet">
    {{-- Header --}}
    <div class="col-span-2 flex flex-col items-center justify-center gap-5 my-5">
        <p class="text-xl font-semibold" id="typing-game-presentation">
            Fase
            <span id="current-phase-index">1</span>
        </p>
        <p class="max-w-sm text-center mt-3" id="quote-element">
            Clique para começar.
        </p>
        <div class="my-4 px-2">
            <div class="flex justify-center">
                <input type="text" id="inputField"
                    class="hidden px-2 py-1 rounded-full text-black w-full max-w-md my-4"
                    placeholder="Comece a digitar aqui...">
            </div>
            <div class="flex items-center justify-center gap-4 w-full mb-4">
                <button id="play-again-button" class="h-10">
                    <i class="fa-solid fa-play text-2xl hover:scale-110 transition"></i>
                </button>
                <button id="restart-phase-button" class="h-10 hidden">
                    <i class="fa-solid fa-rotate-right text-2xl hover:scale-110 transition"></i>
                </button>
                <button id="next-phase-button" class="h-10 hidden">
                    <i class="fa-solid fa-arrow-right text-2xl hover:scale-110 transition"></i>
                </button>
            </div>
            <x-keyboard id="inputField" />
        </div>
    </div>
    <x-statistics />
</div>


@push('scripts')
    <script type="module" src="{{ url('assets/js/typingGame/elements.js') }}"></script>
    <script type="module" src="{{ url('assets/js/typingGame/quotes.js') }}"></script>
    <script type="module" src="{{ url('assets/js/typingGame/UI.js') }}"></script>
    <script type="module" src="{{ url('assets/js/typingGame/Phase.js') }}"></script>
    <script type="module" src="{{ url('assets/js/typingGame/Game.js') }}"></script>
    <script type="module" src="{{ url('assets/js/typingGame/PlayedGame.js') }}"></script>
    <script type="module" src="{{ url('assets/js/typingGame/index.js') }}"></script>
@endpush
