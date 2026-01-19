<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Amal Raj V - PHP Laravel Developer with 2 years of experience and 10+ live projects. Specializing in Laravel 12, AWS, and modern web development.">
    <meta name="keywords" content="PHP Developer, Laravel Developer, Web Development, AWS, Full Stack Developer">
    <meta name="author" content="Amal Raj V">
    
    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="Amal Raj V - PHP Laravel Developer">
    <meta property="og:description" content="Building robust web applications through 2 years of experience and 10+ successful project deliveries.">
    <meta property="og:type" content="website">
    
    <title>Amal Raj V</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <!-- Scripts -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body>
    @yield('content')
</body>
</html>
