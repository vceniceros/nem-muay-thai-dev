<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fight extends Model
{
    use HasFactory;
    protected $fillable = ['eventsId', 'fighter1', 'fighter2', 'weight', 'description', 'video_link', 'technicPoints', 'actitudPoints', 'contundesPoints', 'promPoints'];
}
