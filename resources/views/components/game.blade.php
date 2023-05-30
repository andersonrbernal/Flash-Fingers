<div class="flex flex-col mx-3 max-w-2xl rounded-xl w-full text-white bg-gradient-to-r from-primary to-violet">
    <h3 class="text-xl font-semibold text-center mt-2">Jogar</h3>
    {{-- Header --}}
    <div class="flex flex-col items-center justify-center gap-5 my-5">
        <p class="text-xl font-semibold" id="typing-game-presentation">
            Fase
            <span id="current-phase-index">1</span>
        </p>
        <div class="hidden flex gap-2 justify-center items-center mt-2" id="typing-game">
            <div class="hidden" id="ppm-group">
                <p class="font-semibold" id="ppm-title">PPM</p>
                <p class="text-center" id="ppm-text">0</p>
            </div>
            <div id="error-group">
                <p class="font-semibold" id="error-title">Erros</p>
                <p class="text-center" id="error-text">0</p>
            </div>
            <div id="time-group">
                <p class="font-semibold" id="time-title">Tempo</p>
                <p class="text-center" id="time-text">0s</p>
            </div>
            <div id="accuracy-group">
                <p class="font-semibold" id="accuracy-title">Precisão</p>
                <p class="text-center" id="accuracy-text">0%</p>
            </div>
        </div>
        <p class="text-center mt-3" id="quote-element">
            Clique para começar.
        </p>
        <div class="my-4 px-2">
            <div class="flex justify-center">
                <input type="text" id="inputField" class="hidden px-2 py-1 rounded-full text-black w-full max-w-md my-4"
                    placeholder="Comece a digitar aqui...">
            </div>
            <div class="flex items-center justify-center gap-4 w-full mb-4">
                <button id="play-again-button" class="h-10">
                    <i class="fa-solid fa-play text-2xl hover:text-3xl transition"></i>
                </button>
                <button id="restart-phase-button" class="h-10 hidden">
                    <i class="fa-solid fa-rotate-right text-2xl hover:text-3xl transition"></i>
                </button>
                <button id="next-phase-button" class="h-10 hidden">
                    <i class="fa-solid fa-arrow-right text-2xl hover:text-3xl transition"></i>
                </button>
            </div>
            <x-keyboard id="inputField" />
        </div>
    </div>
</div>


@push('scripts')
    <script type="module" src="{{ url('assets/js/typingGame/elements.js') }}"></script>
    <script type="module" src="{{ url('assets/js/typingGame/quotes.js') }}"></script>
    <script type="module" src="{{ url('assets/js/typingGame/Statistic.js') }}"></script>
    <script type="module" src="{{ url('assets/js/typingGame/UI.js') }}"></script>
    <script type="module" src="{{ url('assets/js/typingGame/Phase.js') }}"></script>
    <script type="module" src="{{ url('assets/js/typingGame/Game.js') }}"></script>
    <script type="module" src="{{ url('assets/js/typingGame/index.js') }}"></script>
@endpush
