@extends('layouts.app')

@section('content')
    <div class="App">
        @include('components.header')
        
        <div class="fade-in-up">
            @include('components.hero')
        </div>

        <div class="scale-up">
            @include('components.stats')
        </div>

        <div class="fade-in-left">
            @include('components.experience')
        </div>

        <div class="fade-in-right">
            @include('components.education')
        </div>

        <div class="fade-in-up" id="projects-section">
            @include('components.projects')
        </div>

        <div class="rotate-in">
            @include('components.contact')
        </div>
    </div>
@endsection
