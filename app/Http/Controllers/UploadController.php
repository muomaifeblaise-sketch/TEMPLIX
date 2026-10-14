<?php

namespace App\Http\Controllers;

use App\Models\Upload;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\View\View;

class UploadController extends Controller
{
    public function index(Request $request): View
    {
        return view('uploads.index', [
            'uploads' => $request->user()->uploads()->latest()->get(),
        ]);
    }

    public function store(Request $request): JsonResponse
    {
        $request->validate([
            'file' => ['required', 'image', 'max:5120'],
            'kind' => ['nullable', 'in:background,logo,other'],
        ]);

        $file = $request->file('file');
        $path = $file->store('uploads/' . $request->user()->id, 'public');

        $upload = $request->user()->uploads()->create([
            'original_name' => $file->getClientOriginalName(),
            'path' => $path,
            'mime' => $file->getMimeType(),
            'size' => $file->getSize(),
            'kind' => $request->input('kind', 'other'),
        ]);

        return response()->json([
            'id' => $upload->id,
            'url' => $upload->url,
            'name' => $upload->original_name,
        ], 201);
    }

    public function destroy(Request $request, Upload $upload): RedirectResponse
    {
        abort_unless($upload->user_id === $request->user()->id, 403);

        Storage::disk('public')->delete($upload->path);
        $upload->delete();

        return back()->with('status', 'Upload deleted.');
    }
}
