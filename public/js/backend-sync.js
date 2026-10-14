/* Templix back-end bridge: saves editor data to the database, uploads files, adds account buttons. */
(function () {
  var TX = window.TX;
  if (!TX) return;

  function headers() {
    return {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-CSRF-TOKEN': TX.csrf,
      'X-Requested-With': 'XMLHttpRequest'
    };
  }

  // 1) Every time the editor writes one of the tracked localStorage keys, save it to the server too.
  var timers = {};
  function push(key, value) {
    clearTimeout(timers[key]);
    timers[key] = setTimeout(function () {
      fetch(TX.routes.state.replace('__KEY__', encodeURIComponent(key)), {
        method: 'PUT',
        headers: headers(),
        body: JSON.stringify({ value: String(value) }),
        credentials: 'same-origin',
        keepalive: true
      }).catch(function () {});
    }, 500);
  }

  var originalSetItem = Storage.prototype.setItem;
  Storage.prototype.setItem = function (key, value) {
    originalSetItem.apply(this, arguments);
    if (this === window.localStorage && TX.keys.indexOf(key) !== -1) push(key, value);
  };

  // 2) Logged-in users skip the onboarding screen (their profile comes from the account).
  window.initProfileScreen = function () {
    var p = document.getElementById('profile-screen');
    if (p) p.style.display = 'none';
    if (typeof window.goToApp === 'function') window.goToApp(TX.user.name);
  };

  // 3) Copy uploaded backgrounds and logos to the server (storage/app/public/uploads).
  function uploadFiles(input, kind) {
    input.addEventListener('change', function () {
      Array.prototype.forEach.call(input.files || [], function (file) {
        var fd = new FormData();
        fd.append('file', file);
        fd.append('kind', kind);
        fetch(TX.routes.upload, {
          method: 'POST',
          headers: { 'Accept': 'application/json', 'X-CSRF-TOKEN': TX.csrf, 'X-Requested-With': 'XMLHttpRequest' },
          body: fd,
          credentials: 'same-origin'
        }).then(function (r) {
          if (r.ok && typeof window.showToast === 'function') window.showToast('Uploaded to your account', 'success');
        }).catch(function () {});
      });
    }, true);
  }
  [['bg-file-input', 'background'], ['logo-file-input', 'logo']].forEach(function (pair) {
    var el = document.getElementById(pair[0]);
    if (el) uploadFiles(el, pair[1]);
  });

  // 4) Account buttons in the top bar: My uploads + Log out.
  var right = document.querySelector('#topbar .tb-right');
  if (right) {
    var uploads = document.createElement('a');
    uploads.className = 'tb-action-btn';
    uploads.href = TX.routes.uploads;
    uploads.title = 'My uploads';
    uploads.style.textDecoration = 'none';
    uploads.innerHTML = '<i class="fas fa-images"></i> <span>Uploads</span>';
    right.insertBefore(uploads, right.firstChild);

    var form = document.createElement('form');
    form.method = 'POST';
    form.action = TX.routes.logout;
    form.style.display = 'inline';
    var token = document.createElement('input');
    token.type = 'hidden'; token.name = '_token'; token.value = TX.csrf;
    var btn = document.createElement('button');
    btn.type = 'submit';
    btn.className = 'tb-icon-btn';
    btn.title = 'Log out (' + TX.user.name + ')';
    btn.innerHTML = '<i class="fas fa-sign-out-alt"></i>';
    form.appendChild(token);
    form.appendChild(btn);
    right.appendChild(form);
  }
})();
