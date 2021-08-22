<?php

namespace App\Http\Controllers;

use App\Models\Job;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class JobController extends Controller
{
    /**
     * Get a list of Jobs.
     */
    public function index(Request $request): JsonResponse
    {
        return response()->json(Job::with('property')->get());
    }

    /**
     * Create a job.
     */

    public function create(Request $request): JsonResponse
    {
        $job = new Job($request->only(['summary', 'description', 'property_id']));

        DB::transaction(function () use ($job) {
            $job->save();
        });

        return response()->json([
            'id' => $job->id,
        ]);
    }
}
