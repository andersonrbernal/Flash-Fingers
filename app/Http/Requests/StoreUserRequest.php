<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|max:255',
            'email' => 'required|email|unique:users,email|max:255',
            'password' => 'required|confirmed|min:8|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,bmp|max:2048'
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'O campo nome é obrigatório',
            'name.max' => 'O campo nome não pode exceder 255 caracteres.',
            'email.email' => 'O campo email é invalido',
            'email.unique' => 'O campo email já foi registrado.',
            'email.required' => 'O campo email é obrigatório',
            'email.max' => 'O campo email não pode exceder 255 caracteres.',
            'password.required' => 'O campo senha é obrigatório.',
            'password.min' => 'O campo senha não pode ser menor do que 8 caracteres.',
            'password.max' => 'O campo senha não pode exceder 255 caracteres.',
            'password.confirmed' => 'Os campos das senhas não são iguais.',
            'image.image' => 'O arquivo enviado não é uma imagem.',
            'image.mimes' => 'O formato do arquivo enviado não pode ser aceito.',
            'image.max' => 'O tamanho do arquivo da imagem é muito grande.',
        ];
    }
}
