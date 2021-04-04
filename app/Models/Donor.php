<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Donor extends Model
{
    // use HasFactory;
    protected $fillable =['f_name','l_name','mob_num','email_id','country','aadhar_num','pass','confirm_pass'];
}
