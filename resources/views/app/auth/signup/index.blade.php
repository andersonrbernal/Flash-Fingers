@extends('layouts.primary')

@section('title', 'Página de cadastro')

@section('content')
    <x-navbar />
    <main class="w-full flex justify-center">
        <form action="{{ route('users.store') }}" method="post" enctype="multipart/form-data"
            class="max-w-xs w-full rounded-xl shadow-md p-4 flex flex-col gap-5">
            <h2 class="text-2xl font-semibold text-center">Cadastrar</h2>
            @csrf
            <div class="flex items-center justify-center w-full rounded-xl hover:bg-gray-100">
                <label for="input-image"
                    class="flex flex-col items-center justify-center w-full h-56 border rounded-lg cursor-pointer">
                    <div class="flex flex-col items-center justify-center pt-5 pb-6" id="label-text">
                        <i class="fa-regular fa-image text-xl"></i>
                        <strong class="mb-2 text-sm text-gray-500 text-center">
                            Clique para selecionar uma imagem de perfil.
                        </strong>
                        <p class="text-xs text-center text-gray-500">PNG, JPG ou JPEG.</p>
                    </div>
                    <img src='' alt="preview image" id="preview-image"
                        class="w-full h-full object-contain rounded-lg hidden">
                    <input type="file" name="image" id="input-image" accept="image/png, image/jpg, image/jpeg"
                        class="hidden" />
                </label>
            </div>
            <div class="rounded-xl p-2 border focus-within:border-primary">
                <label for="name" class="font-semibold">Name</label>
                <div class="flex gap-3 items-center bg-white text-sm mt-1">
                    <i class="fa-regular fa-user"></i>
                    <input type="text" required name="name" id="name" placeholder="Nome"
                        class="w-full outline-none">
                </div>
            </div>
            <div class="rounded-xl p-2 border focus-within:border-primary">
                <label for="name" class="font-semibold">Email</label>
                <div class="flex gap-3 items-center bg-white text-sm mt-1">
                    <i class="fa-regular fa-envelope"></i>
                    <input type="text" required name="email" id="email" placeholder="email@example.com"
                        class="w-full outline-none">
                </div>
            </div>
            <div class="rounded-xl p-2 border focus-within:border-primary">
                <label for="name" class="font-semibold">Password</label>
                <div class="flex gap-3 items-center bg-white text-sm mt-1">
                    <i class="fa fa-lock"></i>
                    <input type="password" required name="password" id="password" placeholder="********"
                        class="w-full outline-none">
                </div>
            </div>
            <button class="bg-primary text-white font-semibold hover:brightness-105 rounded-xl p-2">
                Enviar
            </button>
        </form>
    </main>
@endsection

@push('scripts')
    <script>
        const labelText = document.getElementById('label-text');
        const inputImage = document.getElementById('input-image');
        const previewImage = document.getElementById('preview-image');

        inputImage.addEventListener('change', function() {
            const file = inputImage.files[0];
            const reader = new FileReader();

            labelText.classList.add('hidden')
            previewImage.classList.remove('hidden')

            reader.addEventListener('load', function() {
                previewImage.src = reader.result;
            });

            reader.readAsDataURL(file)
        });
    </script>
@endpush
