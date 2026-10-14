@extends('layouts.plain')
@section('title', 'Sign up')
@section('content')
<main class="auth-wrap">
  <div class="auth-card">
    <img class="auth-logo" src="{{ asset('assets/logo/templix-mark.png') }}" alt="Templix">
    <h1>Create your account</h1>
    <p class="auth-sub">Your designs and uploads are saved to your account.</p>

    <form method="POST" action="{{ route('register') }}" novalidate>
      @csrf
      <label for="name">Your name</label>
      <input id="name" type="text" name="name" value="{{ old('name') }}" required autofocus autocomplete="name">
      @error('name')<div class="auth-error">{{ $message }}</div>@enderror

      <label for="email">Email</label>
      <input id="email" type="email" name="email" value="{{ old('email') }}" required autocomplete="email">
      @error('email')<div class="auth-error">{{ $message }}</div>@enderror

      <label for="profession">Profession / industry</label>
      <select id="profession" name="profession" required>
        <option value="" disabled {{ old('profession') ? '' : 'selected' }}>Choose one</option>
        @foreach ($professions as $value => $label)
          <option value="{{ $value }}" {{ old('profession') === $value ? 'selected' : '' }}>{{ $label }}</option>
        @endforeach
      </select>
      @error('profession')<div class="auth-error">{{ $message }}</div>@enderror

      <label for="password">Password</label>
      <input id="password" type="password" name="password" required autocomplete="new-password">
      @error('password')<div class="auth-error">{{ $message }}</div>@enderror

      <label for="password_confirmation">Confirm password</label>
      <input id="password_confirmation" type="password" name="password_confirmation" required autocomplete="new-password">

      <button type="submit" class="auth-btn">Sign up</button>
    </form>

    <p class="auth-alt">Already have an account? <a href="{{ route('login') }}">Log in</a></p>
  </div>
</main>
@endsection
