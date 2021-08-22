<?php

namespace App\Http\Controllers;

use App\Models\Property;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PropertyController extends Controller
{
    /**
     * Get a list of Jobs.
     */
    public function index(Request $request): JsonResponse
    {
        return response()->json(Property::all());
    }
}
