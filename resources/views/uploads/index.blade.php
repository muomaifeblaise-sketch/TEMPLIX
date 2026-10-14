@extends('layouts.plain')
@section('title', 'My uploads')
@section('content')
<main class="page-wrap">
  <header class="page-head">
    <a class="auth-link" href="{{ route('home') }}"><i class="fas fa-arrow-left"></i> Back to editor</a>
    <h1>My uploads</h1>
    <p class="auth-sub">Backgrounds and logos you uploaded in the editor.</p>
  </header>

  @if (session('status'))
    <div class="auth-ok">{{ session('status') }}</div>
  @endif

  @if ($uploads->isEmpty())
    <div class="empty">No uploads yet. Add a background or logo in the editor and it will show up here.</div>
  @else
    <div class="up-grid">
      @foreach ($uploads as $upload)
        <figure class="up-item">
          <img src="{{ $upload->url }}" alt="{{ $upload->original_name }}" loading="lazy">
          <figcaption>
            <span class="up-name" title="{{ $upload->original_name }}">{{ $upload->original_name }}</span>
            <small>{{ ucfirst($upload->kind) }} · {{ number_format($upload->size / 1024, 0) }} KB</small>
            <form method="POST" action="{{ route('uploads.destroy', $upload) }}" onsubmit="return confirm('Delete this upload?')">
              @csrf
              @method('DELETE')
              <button type="submit" class="up-del"><i class="fas fa-trash"></i> Delete</button>
            </form>
          </figcaption>
        </figure>
      @endforeach
    </div>
  @endif
</main>
@endsection
