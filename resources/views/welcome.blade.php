<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Portfolio of Amal Raj V - Full Stack Developer specializing in Laravel, React, AWS, and scalable cloud solutions.">
        <title>Amal Raj V | Portfolio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    </head>
    <body>
        <x-header />
        
        <main>
            <x-hero />
            
            <x-stats />
            <x-experience />
            <x-education />
            <x-projects />
            <x-contact />
        </main>

        <footer class="container section" style="padding-top: 2rem; padding-bottom: 2rem; text-align: center; color: var(--text-muted); font-size: 0.9rem;">
            <div class="divider"></div>
            <p>&copy; {{ date('Y') }} Amal Raj V. All rights reserved.</p>
        </footer>
    </body>
</html>
