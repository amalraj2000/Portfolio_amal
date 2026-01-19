<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PortfolioController extends Controller
{
    /**
     * Display the portfolio homepage.
     */
    public function index()
    {
        return view('portfolio.index');
    }
}
