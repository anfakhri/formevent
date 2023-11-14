<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ParticipantCreateRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            //
            'name'=> 'required|max:50',
            'email'=> 'required|unique:users,email',
            'phone'=> 'required|numeric|digits_between:10,13',
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
            'name.required' => 'Nama wajib diisi',
            'name.max' => 'Maksimal 50 karakter',
            'email.required' => 'Email wajib diisi',
            'email.unique' => 'Email sudah pernah dipakai',
            'phone.required' => 'Nomor HP wajib diisi',
            'phone.digits_between' => 'Minimal 10 digit dan Maksimal 13 digit',
            'phone.numeric' => 'Nomor HP harus berupa angka',
        ];
    }
}