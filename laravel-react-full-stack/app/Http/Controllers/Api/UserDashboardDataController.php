<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\UserDashboardData;
use Illuminate\Http\Request;

class UserDashboardDataController extends Controller
{
    public function index(Request $request)
    {
        $data = UserDashboardData::where('user_id', $request->user()->id)
            ->where('archived', false)
            ->get();

        return response()->json([
            'data' => $data
        ]);
    }
}
