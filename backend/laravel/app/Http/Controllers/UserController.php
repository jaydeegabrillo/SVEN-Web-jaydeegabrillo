<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;


/**
 * @OA\Info(
 *     title="Users API",
 *     version="1.0.0"
 */

/**
 * @OA\Tag(
 *     name="Users",
 *     description="API Endpoints for Users"
 * )
 */
class UserController extends Controller
{

    /**
     * @OA\Get(
     *     path="/api/users",
     *     tags={"Users"},
     *     summary="Get list of users",
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation"
     *     )
     * )
     */
    public function index()
    {
        // Logic to retrieve and return a list of users
        return User::all();
    }
}
