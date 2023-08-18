<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePlayedGameRequest extends FormRequest
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
            'wordsPerMinute' => 'required|numeric|max:500',
            'keystrokes' => 'required|numeric',
            'correctWords' => 'required|numeric',
            'incorrectWords' => 'required|numeric',
            'accuracy' => 'required|numeric|max:100',
            'user_id' => 'required|numeric|exists:users,id',
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'wordsPerMinute.required' => 'O campo palavras por minuto é obrigatório.',
            'wordsPerMinute.numeric' => 'O campo palavras por minuto não é numérico.',
            'wordsPerMinute.max' => 'O campo palavras por minuto não pode ser maior que 500.',
            'keystrokes.required' => 'O campo teclas pressionadas é obrigatório.',
            'keystrokes.numeric' => 'O campo teclas pressionadas não é numérico.',
            'correctWords.required' => 'O campo palavras corretas é obrigatório.',
            'correctWords.numeric' => 'O campo palavras corretas não é numérico.',
            'incorrectWords.required' => 'O campo palavras incorretas é obrigatório.',
            'incorrectWords.numeric' => 'O campo palavras incorretas não é numérico.',
            'accuracy.required' => 'O campo precisão é obrigatório.',
            'accuracy.numeric' => 'O campo precisão não é numérico.',
            'accuracy.max' => 'O campo precisão não pode ser maior que 100.',
            'user_id.required' => 'O campo ID de usuário é obrigatório.',
            'user_id.numeric' => 'O campo ID de usuário não é numérico.',
            'user_id.unique' => 'O campo ID de usuário não é único.',
        ];
    }
}
