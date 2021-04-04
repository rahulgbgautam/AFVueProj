<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DonateNowTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('donates', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('country');
            $table->string('currency');
            $table->string('name');
            $table->string('email');
            $table->string('mobile_number');
            $table->string('initiative');
            $table->string('donate_amount');
            $table->string('own_amount');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('donates');
    }
}
