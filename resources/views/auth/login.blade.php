@extends('layouts.plain')
@section('title', 'Log in')
@section('content')
<main class="auth-wrap">
  <div class="auth-card">
    <img class="auth-logo" src="{{ asset('assets/logo/templix-mark.png') }}" alt="Templix">
    <h1>Welcome back</h1>
    <p class="auth-sub">Log in to continue designing.</p>

    <form method="POST" action="{{ route('login') }}" novalidate>
      @csrf
      <label for="email">Email</label>
      <input id="email" type="email" name="email" value="{{ old('email') }}" required autofocus autocomplete="email">
      @error('email')<div class="auth-error">{{ $message }}</div>@enderror

      <label for="password">Password</label>
      <input id="password" type="password" name="password" required autocomplete="current-password">
      @error('password')<div class="auth-error">{{ $message }}</div>@enderror

      <label class="auth-check"><input type="checkbox" name="remember" value="1"> Remember me</label>

      <button type="submit" class="auth-btn">Log in</button>
    </form>

    <p class="auth-alt">New to Templix? <a href="{{ route('register') }}">Create an account</a></p>
  </div>
</main>
@endsection
