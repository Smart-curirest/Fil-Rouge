<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
// use Illuminate\Support\Facades\Auth;

abstract class Controller
{
    public function register(Request $request)
    {
        $fields = $request->validate([
            'name' => 'required|max:255',
            'lastName' => 'required|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed'
        ]);

        $user = User::create($fields);

        $token = $user->createToken($request->name);

        return [
            'user' => $user,
            'token' => $token->plainTextToken
        ];
    }

    public function updateUser(Request $request, $id)
    {
       // 1. Validation des données
       $fields = $request->validate([
        'name' => 'sometimes|max:255',        // 'sometimes' = valide seulement si présent
        'lastName' => 'sometimes|max:255',
        'email' => 'sometimes|email|unique:users,email,'.$id, // vérifie l'unicité sauf pour l'utilisateur actuel
        'password' => 'sometimes|confirmed'   // mot de passe optionnel
    ]);

    // 2. Récupération de l'utilisateur
    $user = User::findOrFail($id);

    // 3. Mise à jour des champs
    if ($request->has('name')) {
        $user->name = $fields['name'];
    }
    
    if ($request->has('lastName')) {
        $user->lastName = $fields['lastName'];
    }
    
    if ($request->has('email')) {
        $user->email = $fields['email'];
    }
    
    // Hashage du nouveau mot de passe s'il est fourni
    if ($request->has('password')) {
        $user->password = Hash::make($fields['password']);
    }

    // 4. Sauvegarde des modifications
    $user->save();

    // 5. Retour de la réponse
    return [
        'message' => 'User updated successfully',
        'user' => $user
    ];
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email|exists:users',
            'password' => 'required'
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return [
                'message' => "The provided credentials are incorect."
            ];
        }
        // if (Auth::attempt($credentials)) {
        //     $request->session()->regenerate();
        // } 

        $token = $user->createToken($user->name);

        return [
            'user' => $user,
            'token' => $token->plainTextToken
        ];
    }

    public function logout(Request $request)
    {
        $request -> user()->tokens()->delete();
        return [
            'message' => "You are logged out"
        ];
    }
}
