<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class UserController extends Controller
{
    public function store(StoreUserRequest $request)
    {
        try {
            throw new Exception();
            $validatedData = $request->validated();

            if ($validatedData['image']) {
                $image = $validatedData['image'];
                $extension = $image->extension();
                $imageName = md5($image->getClientOriginalName() . strtotime('now') . '.' . $extension);
                $image->move(public_path('assets/images/users'), $imageName);
            }

            $user = new User();
            $user->name = $validatedData['name'];
            $user->email = $validatedData['email'];
            $user->password = $validatedData['password'];
            $user->photo_image_url = $imageName ? $imageName : 'default-avatar.png';

            $user->save();

            return redirect()->route('home.index');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['server' => 'Oops, algo deu errado. Volte mais tarde.'])->withInput();
        }
    }
}
