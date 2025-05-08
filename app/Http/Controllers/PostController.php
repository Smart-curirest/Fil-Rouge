<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Dotenv\Validator;
use Illuminate\Contracts\Validation\Validator as ValidationValidator;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator as FacadesValidator;
use Illuminate\Validation\Rules\ImageFile;

class PostController extends Controller implements HasMiddleware
{
    public static function middleware()
    {
        return [
            new Middleware('auth:sanctum', except: ['index', 'show'])
        ];
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        // return Post::all();
        $query = Post::query();

    if ($request->filled('prixMin')) {
        $query->where('prix', '>=', $request->input('prixMin'));
    }

    if ($request->filled('prixMax')) {
        $query->where('prix', '<=', $request->input('prixMax'));
    }

    if ($request->filled('chambres')) {
        $query->where('chambres', '>=', $request->input('chambres'));
    }

    if ($request->filled('ville')) {
        $query->where('adresse', 'like', '%' . $request->input('ville') . '%');
    }

    if ($request->filled('disponible')) {
        $query->where('disponible', $request->boolean('disponible'));
    }

    return $query->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // 1) Validation
        $data = $request->validate([
            'titre'          => 'required|string|max:255',
            'description'    => 'required|string',
            'prix'           => 'required|numeric',
            'adresse'        => 'required|string',
            'disponible'     => 'sometimes|boolean',
            'surface'        => 'nullable|integer|min:0',
            'chambres'       => 'required|integer|min:1',
            'salles_de_bain' => 'required|integer|min:1',
            'image'          => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
        ]);

        // 2) Stockage de l'image
        if ($request->hasFile('image')) {
            $data['image_path'] = $request
                ->file('image')
                ->store('posts', 'public');
        }

        // 3) Ajout de l'ID de l'utilisateur authentifié
        $data['user_id'] = $request->user()->id;

        // 4) Création du Post (logement)
        $post = Post::create($data);

        // 5) Retour JSON avec code 201
        return response()->json($post, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        return $post;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        Gate::authorize('modify', $post);

        $fields = $request->validate([
            'titre'         => 'required|string|max:255',
            'description'   => 'required|string',
            'prix'          => 'required|numeric',
            'adresse'       => 'required|string',
            'disponible'    => 'boolean',
            'image_path'    => 'nullable|string',
            'surface'       => 'nullable|integer',
            'chambres'      => 'required|integer|min:1',
            'salles_de_bain' => 'required|integer|min:1',
        ]);

        $post->update($fields);
        return  $post;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        Gate::authorize('modify', $post);

        $post->delete();
        return ['message' => "The post $post[id] was delate succesfully"];
    }
}
