<div class="flex flex-col items-center justify-center gap-3 m-2">
    <div class="keyboard_row">
        <kbd data-key="81" class="key py-1 px-3">q</kbd>
        <kbd data-key="87" class="key py-1 px-3">w</kbd>
        <kbd data-key="69" class="key py-1 px-3">e</kbd>
        <kbd data-key="82" class="key py-1 px-3">r</kbd>
        <kbd data-key="84" class="key py-1 px-3">t</kbd>
        <kbd data-key="89" class="key py-1 px-3">y</kbd>
        <kbd data-key="85" class="key py-1 px-3">u</kbd>
        <kbd data-key="73" class="key py-1 px-3">i</kbd>
        <kbd data-key="79" class="key py-1 px-3">o</kbd>
        <kbd data-key="80" class="key py-1 px-3">p</kbd>
        <kbd data-key="8" class="key py-1 px-3">
            <i class="fa fa-delete-left"></i>
        </kbd>
    </div>
    <div class="keyboard_row">
        <kbd data-key="20" class="key py-1 px-3">caps</kbd>
        <kbd data-key="65" class="key py-1 px-3">a</kbd>
        <kbd data-key="83" class="key py-1 px-3">s</kbd>
        <kbd data-key="68" class="key py-1 px-3">d</kbd>
        <kbd data-key="70" class="key py-1 px-3">f</kbd>
        <kbd data-key="71" class="key py-1 px-3">g</kbd>
        <kbd data-key="72" class="key py-1 px-3">h</kbd>
        <kbd data-key="74" class="key py-1 px-3">j</kbd>
        <kbd data-key="75" class="key py-1 px-3">k</kbd>
        <kbd data-key="76" class="key py-1 px-3">l</kbd>
    </div>
    <div class="keyboard_row">
        <kbd data-key="90" class="key py-1 px-3">z</kbd>
        <kbd data-key="88" class="key py-1 px-3">x</kbd>
        <kbd data-key="67" class="key py-1 px-3">c</kbd>
        <kbd data-key="86" class="key py-1 px-3">v</kbd>
        <kbd data-key="66" class="key py-1 px-3">b</kbd>
        <kbd data-key="78" class="key py-1 px-3">n</kbd>
        <kbd data-key="77" class="key py-1 px-3">m</kbd>
    </div>
    <div class="keyboard_row">
        <kbd data-key="17" class="key py-1 px-3">Ctrl</kbd>
        <kbd data-key="32" class="key py-1 px-10">Espaço</kbd>
    </div>

</div>

@push('scripts')
    <script>
        const keys = document.querySelectorAll('.key');
        const inputField = document.getElementById("{{ $id }}");

        inputField.addEventListener('keydown', (event) => {
            const keyPressed = event.keyCode.toString();
            const keyElement = Array.from(keys).find(key => key.getAttribute('data-key') === keyPressed);

            if (keyElement) {
                keyElement.classList.add('active');
            }
        });

        inputField.addEventListener('keyup', (event) => {
            const keyPressed = event.keyCode.toString();
            const keyElement = Array.from(keys).find(key => key.getAttribute('data-key') === keyPressed);

            if (keyElement) {
                keyElement.classList.remove('active');
            }
        });
    </script>
@endpush
