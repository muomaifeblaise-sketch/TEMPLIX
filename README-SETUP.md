# Templix: Laravel project (front end + back end)

Works with a fresh Laravel 11 or 12 project (PHP 8.2+).

## Setup
1. composer create-project laravel/laravel templix
2. Copy everything from this folder into the project root. Merge folders, and
   overwrite when asked (app/Models/User.php and routes/web.php).
3. cd templix
4. php artisan migrate        (answer "yes" if it asks to create the SQLite database)
5. php artisan storage:link   (makes uploaded files viewable)
6. php artisan serve          -> open http://127.0.0.1:8000

## What the back end does
- Register / login / logout (hashed passwords, CSRF, sessions, "remember me").
- The editor (/) and uploads page are only available when logged in.
- Saved projects, favorites, history and profile are saved per user in the database (user_states table).
- Backgrounds and logos uploaded in the editor are stored in storage/app/public/uploads/{user id}
  and listed at /uploads, where they can be deleted (uploads table).

## Files added
app/Http/Controllers: AuthController, EditorController, StateController, UploadController
app/Models: User (replaced), UserState, Upload
database/migrations: add profession to users, user_states, uploads
routes/web.php
resources/views: templix, layouts/plain, auth/login, auth/register, uploads/index
public: css/ (templix, templix-v5, auth), js/, assets/
