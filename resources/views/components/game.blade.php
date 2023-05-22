<div class="flex flex-col rounded-xl w-full text-white bg-gradient-to-r from-primary to-violet">
    <h3 class="text-xl font-semibold text-center mt-2">Jogar</h3>
    {{-- Header --}}
    <div class="flex gap-2 justify-center items-center mt-2">
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
    <p class="text-center mt-3" id="quote">
        Clique na área abaixo para começar.
    </p>
    <div class="my-4 px-2">
        <div class="flex justify-center">
            <input type="text" id="inputField" class="px-2 py-1 rounded-full text-black w-full max-w-md my-4"
                placeholder="Comece a digitar aqui...">
        </div>
        <div class="flex items-center justify-center mb-4">
            <button id="restart-button"
                class="hidden rounded-full py-1 px-3 border border-white text-white active:bg-white active:text-black">
                Recomeçar
            </button>
        </div>
        <x-keyboard id="inputField" />
    </div>
</div>


@push('scripts')
    <script type="module" src="{{ url('assets/js/game/GameManager.js') }}"></script>
    <script type="module" src="{{ url('assets/js/game/QuoteManager.js') }}"></script>
    <script type="module" src="{{ url('assets/js/game/InputManager.js') }}"></script>
    <script type="module" src="{{ url('assets/js/game/UIManager.js') }}"></script>
    <script type="module" src="{{ url('assets/js/game/index.js') }}"></script>
@endpush
