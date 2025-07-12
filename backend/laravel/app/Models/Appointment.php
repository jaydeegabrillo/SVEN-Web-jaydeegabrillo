<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    use HasFactory;

    // App\Models\Appointment.php
    protected $fillable = [
        'patient_name',
        'appointment_date',
    ];
}
