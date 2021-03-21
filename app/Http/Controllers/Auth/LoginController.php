<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;

use App\Models\User;
use Auth;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function Sign_in(Request $request)
    {
        $credentials = [
            'username'=>$request['username'],
            'password'=>$request['password']
        ];
        $status = null;
        $authenticationToken = null;
        if(Auth::attempt($credentials))
        {
            $user = User::where('username',$credentials['username'])->first();
            $authenticationToken = $user->createToken('authToken')->plainTextToken;
            $status = 200;
        } else {
            $status = 422;
        }

        return Response()->json([
            
            'access_token'=>$authenticationToken,
            'token_type'=>'Bearer'
        ],$status);

    }


    public function username()
    {
        return 'username';
    }
}
