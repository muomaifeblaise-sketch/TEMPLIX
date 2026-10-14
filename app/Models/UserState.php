<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class UserState extends Model
{
    /** The editor data keys that are saved per user in the database. */
    public const KEYS = [
        'userProfile',
        'tx_niche',
        'templix_tutorial_done',
        'templix_favorites',
        'templix_gen_history',
        'templix_saved_projects',
    ];

    protected $fillable = ['user_id', 'state_key', 'state_value'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
