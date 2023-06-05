<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Models\User;

class UserController extends Controller
{
    public function store(StoreUserRequest $request)
    {
        try {
            $validatedData = $request->validated();

            if (isset($validatedData['image'])) {
                $image = $validatedData['image'];
                $extension = $image->extension();
                $imageName = md5($image->getClientOriginalName() . strtotime('now') . '.' . $extension);
                $image->move(public_path('assets/images/users'), $imageName);
            }

            $user = new User();
            $user->name = $validatedData['name'];
            $user->email = $validatedData['email'];
            $user->password = bcrypt($validatedData['password']);

            if (isset($imageName)) {
                $user->photo_image_url = $imageName;
            }

            $user->save();

            return redirect()->route('auth.login');
        } catch (\Exception $e) {
            return dd($e);
            return redirect()->back()->withErrors(['server' => 'Oops, algo deu errado. Volte mais tarde.'])->withInput();
        }
    }
}
