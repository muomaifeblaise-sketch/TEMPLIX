<?php

namespace App\Http\Controllers;

use App\Models\UserState;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class StateController extends Controller
{
    /** Save one editor data value (saved projects, favorites, history...) for the logged-in user. */
    public function update(Request $request, string $key): JsonResponse
    {
        abort_unless(in_array($key, UserState::KEYS, true), 404);

        $validated = $request->validate([
            'value' => ['required', 'string', 'max:2000000'],
        ]);

        $request->user()->states()->updateOrCreate(
            ['state_key' => $key],
            ['state_value' => $validated['value']]
        );

        return response()->json(['ok' => true]);
    }
}
