<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Hash;
class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('email')->nullable();
            $table->string('username');
            $table->string('password');
            $table->integer('role_id');
            $table->integer('account_status');
            $table->rememberToken();
            $table->timestamps();
        });

        DB::table('users')->insert([
            'first_name'=>"Rowins",
            'last_name'=>'Bie',
            'email'=>'seikirowins.bie.srb@gmail.com',
            'username'=>'rowins.bie',
            'password'=>Hash::make('pass1234'),
            'role_id'=>1,
            'account_status'=>1
        ]);

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
