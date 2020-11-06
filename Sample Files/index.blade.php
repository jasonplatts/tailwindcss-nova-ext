<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{ config('app.name') }}@hasSection('tab-title') / @yield('tab-title')@endif</title>

        <link rel="stylesheet" type="text/css" href="/css/app.css">
    </head>

    <body class="bg-gray-100">
        <div class="text-black">Hello, world.</div>
    </body>
</html>