<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#ff3cac">
<link rel="icon" type="image/png" href="{{ asset('assets/logo/templix-favicon-64.png') }}">
<title>@yield('title') — TEMPLIX</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet">
<link href="{{ asset('css/auth.css') }}" rel="stylesheet">
</head>
<body>
@yield('content')
</body>
</html>
