<?php

namespace App\Http\Controllers;

use App\Models\UserState;
use Illuminate\Http\Request;
use Illuminate\View\View;

class EditorController extends Controller
{
    public function index(Request $request): View
    {
        $user = $request->user();

        $state = $user->states()->pluck('state_value', 'state_key')->all();

        // First visit: seed the profile from the registration details so the
        // onboarding screen is skipped.
        if (! isset($state['userProfile'])) {
            $state['userProfile'] = json_encode([
                'name' => $user->name,
                'profession' => $user->profession ?: 'other',
                'createdAt' => now()->toIso8601String(),
            ]);
        }

        return view('templix', [
            'txUser' => ['name' => $user->name, 'email' => $user->email],
            'txState' => $state,
            'txKeys' => UserState::KEYS,
        ]);
    }
}
