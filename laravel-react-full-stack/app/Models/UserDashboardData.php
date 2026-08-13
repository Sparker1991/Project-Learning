<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserDashboardData extends Model
{
    use HasFactory;

    protected $table = 'user_dashboard_data';

    public $timestamps = false;

    protected $fillable = [
        'user_id',
        'created_dt',
        'card_type',
        'progress',
        'archived',
    ];

    protected $casts = [
        'created_dt' => 'datetime',
        'progress' => 'integer',
        'archived' => 'boolean',
    ];
}
