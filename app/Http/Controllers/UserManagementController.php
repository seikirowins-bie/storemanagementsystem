<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Role;
use Hash;
class UserManagementController extends Controller
{
    public function createAccount(Request $request)
    {   
        $user = User::create([
            'first_name'=>$request['first_name'],
            'last_name'=>$request['last_name'],
            'email'=>$request['email'],
            'username'=>$request['username'],
            'password'=>Hash::make('pass1234'),
            'mobile_no'=>$request['phone_no'],
            'role_id'=>$request['role_id'],
            'account_status'=>1
        ]);

        return Response()->json($user);
    }


    public function getRoles()
    {
        return Response()->json(Role::all());
    }

}
