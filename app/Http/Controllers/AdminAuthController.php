<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;

class AdminAuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'username' => 'required|string',
            'password' => 'required|string',
        ]);

        $username = $request->input('username');
        $password = $request->input('password');

        $user = DB::table('users')->where('username', $username)->first();

        if ($user && Hash::check($password, $user->password)) {
            Session::put('admin_user_id', $user->id);
            Session::put('admin_username', $user->username);
            return redirect('/admin');
        }

        if (!$user) {
            return redirect('/admin/login?error=not_found');
        }

        return redirect('/admin/login?error=invalid_password');
    }

    public function logout(Request $request)
    {
        Session::forget(['admin_user_id', 'admin_username']);
        Session::save();
        return redirect('/admin/login');
    }
}


