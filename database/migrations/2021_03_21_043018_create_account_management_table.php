<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAccountManagementTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('account_management', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
        });

        DB::table('account_management')->insert([
            [
                'status'=>'Active'
            ],
            [
                'status'=>'Blocked'
            ],
            [
                'status'=>'Deactivated'
            ]
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('account_management');
    }
}
