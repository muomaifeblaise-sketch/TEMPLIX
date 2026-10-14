/* ========================================
   TEMPLIX GRAPHIC EDITOR - APP CONTROLLER
   app.js
   ======================================== */

// ======================== APP STATE ========================
window.APP_STATE = {
  category: 'modern',
  backgrounds: [],
  selectedBg: null,
  selectedGradient: null,
  selectedPattern: null,
  designs: [],
  selectedIndex: -1,
  variations: 6,
  aspectRatio: '3/4',
  accentColor: '#ff3cac',
  overlayIntensity: 70,
  gridCols: 2,
  borderStyle: 'none',
  exportFormat: 'png',
  fontPair: null,
  colorPalette: null,
  stats: { generated: 0, exports: 0 },
  undoStack: [],
  redoStack: [],
  logo: null,           // base64 data URL of uploaded logo
  logoPosition: 'top-left',
  logoSize: 20,         // percent of card width
  logoOpacity: 100,
};

// ======================== INIT ========================
document.addEventListener('DOMContentLoaded', function() {
  // Splash screen
  setTimeout(() => {
    const splash = document.getElementById('splash-screen');
    splash.style.transition = 'opacity 0.6s ease';
    splash.style.opacity = '0';
    setTimeout(() => {
      splash.style.display = 'none';
      document.getElementById('profile-screen').style.display = 'flex';
      initProfileScreen();
    }, 600);
  }, 2400);
});

// ======================== PROFILE SCREEN ========================
function initProfileScreen() {
  const profileForm = document.getElementById('profile-form');
  const professionBtns = document.querySelectorAll('.profession-btn');
  const userProfessionInput = document.getElementById('user-profession');
  const submitBtn = document.getElementById('submit-profile-btn');
  const skipBtn = document.getElementById('skip-profile-btn');

  // Handle profession button clicks
  professionBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      professionBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      userProfessionInput.value = btn.dataset.profession;
    });
  });

  // Handle form submission
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const userName = document.getElementById('user-name').value.trim();
    const profession = userProfessionInput.value;

    if (!userName) {
      showToast('Please enter your name', 'error');
      return;
    }
    if (!profession) {
      showToast('Please select your profession', 'error');
      return;
    }

    // Save user profile to localStorage
    localStorage.setItem('userProfile', JSON.stringify({
      name: userName,
      profession: profession,
      createdAt: new Date().toISOString()
    }));

    goToApp(userName);
  });

  // Handle skip button
  skipBtn.addEventListener('click', (e) => {
    e.preventDefault();
    goToApp();
  });
}

function goToApp(userName = null) {
  const profileScreen = document.getElementById('profile-screen');
  profileScreen.style.transition = 'opacity 0.6s ease';
  profileScreen.style.opacity = '0';
  setTimeout(() => {
    profileScreen.style.display = 'none';
    document.getElementById('app').style.display = 'block';
    
    // Get user profile from localStorage
    let userProfile = null;
    try {
      const stored = localStorage.getItem('userProfile');
      if (stored) {
        userProfile = JSON.parse(stored);
      }
    } catch (e) {
      console.error('Error loading user profile:', e);
    }
    
    // Init components
    renderCategories(userProfile?.profession);
    renderGradients();
    renderPatterns();
    renderPalettes();
    renderFontPairs();
    renderAccentColors();
    renderTemplates(userProfile?.profession);
    loadFromStorage();
    bindEvents();
    applyProfessionCustomization(userProfile);
    
    // Greeting
    const profConfig = userProfile ? window.PROFESSION_CONFIG[userProfile.profession] : null;
    let greeting;
    if (profConfig) {
      // include name if known
      if (userProfile && userProfile.name) {
        greeting = `Welcome, ${userProfile.name}! ${profConfig.welcomeMessage}`;
      } else {
        greeting = profConfig.welcomeMessage;
      }
    } else {
      if (userProfile && userProfile.name) {
        greeting = `Welcome, ${userProfile.name}! 🎨`;
      } else {
        greeting = `Welcome to TEMPLIX Studio! 🎨`;
      }
    }
    showToast(greeting, 'info');
  }, 600);
}

// ======================== APPLY PROFESSION CUSTOMIZATION ========================
function applyProfessionCustomization(userProfile) {
  if (!userProfile || !userProfile.profession) return;
  
  const config = window.PROFESSION_CONFIG[userProfile.profession];
  if (!config) return;
  
  // Store profession config in session for reference
  window.USER_PROFESSION = userProfile.profession;
  window.PROFESSION_PREFS = config;
  
  // Auto-select first recommended category
  if (config.recommendedCategories.length > 0 && config.recommendedCategories[0] !== 'all') {
    setTimeout(() => {
      const recommendedCat = config.recommendedCategories[0];
      const categoryItem = document.querySelector(`[data-cat-id="${recommendedCat}"]`);
      if (categoryItem) {
        categoryItem.click();
      }
    }, 500);
  }
  
  // Apply profession-based color highlights to category badges
  highlightRecommendedCategories(config);
}

function highlightRecommendedCategories(config) {
  const categoryItems = document.querySelectorAll('.cat-item');
  categoryItems.forEach(item => {
    const catId = item.dataset.catId;
    if (config.recommendedCategories.includes(catId)) {
      item.classList.add('recommended');
    }
  });
}

// ======================== RENDER CATEGORIES ========================
function renderCategories(profession = null) {
  const list = document.getElementById('cat-list');
  list.innerHTML = '';
  window.CATEGORIES.forEach(cat => {
    const item = document.createElement('div');
    item.className = 'cat-item' + (cat.id === window.APP_STATE.category ? ' active' : '');
    item.dataset.catId = cat.id;
    item.innerHTML = `
      <div class="cat-icon" style="background:${cat.color}22;color:${cat.color}">
        <i class="${cat.icon}"></i>
      </div>
      <span class="cat-name">${cat.name}</span>
      <span class="cat-count">${cat.count}</span>
    `;
    item.addEventListener('click', () => {
      document.querySelectorAll('.cat-item').forEach(c => c.classList.remove('active'));
      item.classList.add('active');
      window.APP_STATE.category = cat.id;
      document.getElementById('cat-badge').textContent = cat.name;
    });
    list.appendChild(item);
  });

  // Search
  document.getElementById('cat-search-input').addEventListener('input', function() {
    const q = this.value.toLowerCase();
    document.querySelectorAll('.cat-item').forEach(item => {
      item.style.display = item.querySelector('.cat-name').textContent.toLowerCase().includes(q) ? '' : 'none';
    });
  });
}

// ======================== RENDER GRADIENTS ========================
function renderGradients() {
  const grid = document.getElementById('gradient-grid');
  grid.innerHTML = '';
  window.GRADIENTS.forEach(g => {
    const swatch = document.createElement('div');
    swatch.className = 'grad-swatch';
    swatch.style.background = g.css;
    swatch.title = g.name;
    swatch.addEventListener('click', () => {
      document.querySelectorAll('.grad-swatch').forEach(s => s.classList.remove('active'));
      document.querySelectorAll('.pat-swatch').forEach(s => s.classList.remove('active'));
      swatch.classList.add('active');
      window.APP_STATE.selectedGradient = g;
      window.APP_STATE.selectedPattern = null;
      window.APP_STATE.selectedBg = null;
      document.querySelectorAll('.bg-thumb-item').forEach(t => t.classList.remove('active'));
      showToast(`"${g.name}" selected`, 'info');
    });
    grid.appendChild(swatch);
  });
}

// ======================== RENDER PATTERNS ========================
function renderPatterns() {
  const grid = document.getElementById('pattern-grid');
  grid.innerHTML = '';
  window.PATTERNS.forEach(p => {
    const swatch = document.createElement('div');
    swatch.className = 'pat-swatch';
    swatch.setAttribute('style', p.css + ';');
    swatch.title = p.name;
    const label = document.createElement('div');
    label.className = 'pat-label';
    label.textContent = p.name;
    swatch.appendChild(label);
    swatch.addEventListener('click', () => {
      document.querySelectorAll('.pat-swatch').forEach(s => s.classList.remove('active'));
      document.querySelectorAll('.grad-swatch').forEach(s => s.classList.remove('active'));
      swatch.classList.add('active');
      window.APP_STATE.selectedPattern = p;
      window.APP_STATE.selectedGradient = null;
      window.APP_STATE.selectedBg = null;
      document.querySelectorAll('.bg-thumb-item').forEach(t => t.classList.remove('active'));
      showToast(`"${p.name}" pattern selected`, 'info');
    });
    grid.appendChild(swatch);
  });
}

// ======================== RENDER PALETTES ========================
function renderPalettes() {
  const list = document.getElementById('palette-list');
  list.innerHTML = '';
  window.COLOR_PALETTES.forEach(p => {
    const item = document.createElement('div');
    item.className = 'palette-item';
    item.innerHTML = `
      <div class="palette-swatches">${p.colors.map(c => `<div class="palette-swatch" style="background:${c}"></div>`).join('')}</div>
      <div class="palette-name">${p.name}</div>
    `;
    item.addEventListener('click', () => {
      document.querySelectorAll('.palette-item').forEach(pi => pi.classList.remove('active'));
      item.classList.add('active');
      window.APP_STATE.colorPalette = p;
      // Apply first accent color from palette
      setAccentColor(p.colors[0]);
      showToast(`"${p.name}" palette applied`, 'info');
    });
    list.appendChild(item);
  });
}

// ======================== RENDER FONT PAIRS ========================
function renderFontPairs() {
  const container = document.getElementById('font-pairs');
  container.innerHTML = '';
  window.FONT_PAIRS.forEach(fp => {
    const item = document.createElement('div');
    item.className = 'font-pair-item';
    item.innerHTML = `
      <div class="fp-display" style="font-family:${fp.displayCSS}">${fp.preview}</div>
      <div class="fp-body" style="font-family:${fp.bodyCSS}">${fp.previewBody}</div>
      <div class="fp-name">${fp.name} · ${fp.displayFont} + ${fp.bodyFont}</div>
    `;
    item.addEventListener('click', () => {
      document.querySelectorAll('.font-pair-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      window.APP_STATE.fontPair = fp;
      showToast(`"${fp.name}" font pair selected`, 'info');
    });
    container.appendChild(item);
  });
}

// ======================== RENDER ACCENT COLORS ========================
function renderAccentColors() {
  const palette = document.getElementById('accent-palette');
  palette.innerHTML = '';
  window.ACCENT_COLORS.forEach(color => {
    const swatch = document.createElement('div');
    swatch.className = 'cp-swatch';
    swatch.style.background = color;
    swatch.dataset.color = color;
    swatch.addEventListener('click', () => setAccentColor(color, swatch));
    if (color === window.APP_STATE.accentColor) swatch.classList.add('active');
    palette.appendChild(swatch);
  });
  updateAccentSwatch();
}

function setAccentColor(color, swatchEl) {
  window.APP_STATE.accentColor = color;
  document.querySelectorAll('.cp-swatch').forEach(s => {
    s.classList.toggle('active', s.dataset.color === color);
  });
  if (swatchEl) {
    document.querySelectorAll('.cp-swatch').forEach(s => s.classList.remove('active'));
    swatchEl.classList.add('active');
  }
  updateAccentSwatch();
}

window.setCustomAccent = function(input) {
  setAccentColor(input.value);
};

function updateAccentSwatch() {
  const swatch = document.getElementById('current-accent-swatch');
  if (swatch) swatch.style.background = window.APP_STATE.accentColor;
}

// ======================== RENDER TEMPLATES ========================
function renderTemplates(profession = null) {
  const list = document.getElementById('template-list');
  if (!list) return;
  list.innerHTML = '';
  
  // Define profession-friendly templates
  const professionTemplates = {
    designer: ['Event Promo', 'Product Launch', 'Announcement'],
    marketer: ['Product Launch', 'Sale Promo', 'Announcement', 'Event Promo'],
    entrepreneur: ['Product Launch', 'Job Vacancy', 'Announcement', 'Sale Promo'],
    educator: ['Announcement', 'Motivational', 'Event Promo'],
    artist: ['Musical Release', 'Motivational'],
    other: null // Show all
  };
  
  const recommendedForProfession = professionTemplates[profession] || null;
  
  window.QUICK_TEMPLATES.forEach((tmpl, i) => {
    const isRecommended = !recommendedForProfession || recommendedForProfession.includes(tmpl.name);
    
    const btn = document.createElement('button');
    btn.className = 'tmpl-btn' + (isRecommended && profession ? ' recommended' : '');
    btn.textContent = tmpl.name;
    if (isRecommended && profession) {
      btn.innerHTML = `<i class="fas fa-star" style="margin-right:6px;color:#f9c859"></i>${tmpl.name}`;
    }
    btn.addEventListener('click', () => applyTemplate(tmpl));
    list.appendChild(btn);
  });
}

function applyTemplate(tmpl) {
  setInp('inp-tag', tmpl.tag || '');
  setInp('inp-heading', tmpl.heading || '');
  setInp('inp-sub', tmpl.sub || '');
  setInp('inp-body', tmpl.body || '');
  setInp('inp-cta', tmpl.cta || '');
  setInp('inp-hashtag', tmpl.hashtag || '');
  setInp('inp-footer', tmpl.footer || '');
  setInp('inp-contact', tmpl.contact || '');
  updateCharCount('inp-heading', 'cc-heading', 120);
  updateCharCount('inp-body', 'cc-body', 400);
  showToast(`"${tmpl.name}" template loaded! ✨`, 'success');
  // Switch to content tab
  switchRpTab('content', document.querySelector('[data-rtab="content"]'));
}

function setInp(id, val) {
  const el = document.getElementById(id);
  if (el) el.value = val;
}

// ======================== BIND EVENTS ========================
function bindEvents() {
  // Background file upload
  const bgInput = document.getElementById('bg-file-input');
  bgInput.addEventListener('change', handleBgUpload);

  // Drag and drop
  const uploadArea = document.getElementById('upload-area');
  uploadArea.addEventListener('dragover', e => { e.preventDefault(); uploadArea.classList.add('dragover'); });
  uploadArea.addEventListener('dragleave', () => uploadArea.classList.remove('dragover'));
  uploadArea.addEventListener('drop', e => {
    e.preventDefault();
    uploadArea.classList.remove('dragover');
    const files = Array.from(e.dataTransfer.files).filter(f => f.type.startsWith('image/'));
    if (files.length) processImageFiles(files);
  });

  // Topbar buttons
  document.getElementById('gen-btn').addEventListener('click', generateDesigns);
  document.getElementById('save-btn').addEventListener('click', saveProject);
  document.getElementById('export-all-btn').addEventListener('click', exportAll);
  document.getElementById('toggle-left-btn').addEventListener('click', toggleLeftSidebar);
  document.getElementById('toggle-right-btn').addEventListener('click', toggleRightPanel);
  document.getElementById('undo-btn').addEventListener('click', undoAction);
  document.getElementById('redo-btn').addEventListener('click', redoAction);

  // Zoom
  document.getElementById('zoom-in-btn').addEventListener('click', () => changeZoom(10));
  document.getElementById('zoom-out-btn').addEventListener('click', () => changeZoom(-10));

  // Canvas bar
  document.getElementById('shuffle-btn').addEventListener('click', shuffleDesigns);
  document.getElementById('clear-btn').addEventListener('click', clearDesigns);
  document.getElementById('sort-btn').addEventListener('click', sortDesigns);
  document.getElementById('fullscreen-btn').addEventListener('click', toggleFullscreen);

  // View buttons
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cols = parseInt(btn.dataset.cols);
      window.APP_STATE.gridCols = cols;
      const grid = document.getElementById('designs-grid');
      grid.className = `cols-${cols}`;
    });
  });

  // Aspect ratio
  document.getElementById('aspect-select').addEventListener('change', function() {
    window.APP_STATE.aspectRatio = this.value;
  });

  // Right panel tabs — use switchRpTab for reliability
  document.querySelectorAll('.rp-tab').forEach(tab => {
    tab.addEventListener('click', () => switchRpTab(tab.dataset.rtab, tab));
  });
  // Make sure content pane is visible on load
  switchRpTab('content', document.querySelector('.rp-tab[data-rtab="content"]'));

  // Overlay range
  document.getElementById('overlay-range').addEventListener('input', function() {
    window.APP_STATE.overlayIntensity = parseInt(this.value);
  });

  // Scale range quality info
  document.getElementById('escale-range').addEventListener('input', function() {
    const scale = parseInt(this.value);
    const info = document.getElementById('export-quality-info');
    const baseW = 400, baseH = 533;
    const scales = { 1: 'Draft', 2: 'Good quality', 3: 'High quality', 4: 'Ultra quality' };
    if (info) info.textContent = `~${baseW*scale}×${baseH*scale}px · ${scales[scale]}`;
  });

  // Keyboard shortcuts
  document.addEventListener('keydown', e => {
    if (e.ctrlKey || e.metaKey) {
      switch (e.key.toLowerCase()) {
        case 'enter': e.preventDefault(); generateDesigns(); break;
        case 's': e.preventDefault(); saveProject(); break;
        case 'z': e.preventDefault(); undoAction(); break;
        case 'y': e.preventDefault(); redoAction(); break;
        case 'e': e.preventDefault(); exportAll(); break;
        case 'a': e.preventDefault(); break;
      }
    }
    if (e.key === 'Escape') {
      closePreview();
      closeMobileSidebars();
    }
    if (e.key === 'ArrowLeft' && document.getElementById('preview-modal').classList.contains('show')) {
      prevPreview();
    }
    if (e.key === 'ArrowRight' && document.getElementById('preview-modal').classList.contains('show')) {
      nextPreview();
    }
  });

  // Mobile sidebar overlay
  document.getElementById('sidebar-overlay')?.addEventListener('click', closeMobileSidebars);

  // Logo file upload
  const logoInput = document.getElementById('logo-file-input');
  logoInput.addEventListener('change', handleLogoUpload);

  // Logo drag and drop
  const logoUploadArea = document.getElementById('logo-upload-area');
  logoUploadArea.addEventListener('dragover', e => { e.preventDefault(); logoUploadArea.classList.add('dragover'); });
  logoUploadArea.addEventListener('dragleave', () => logoUploadArea.classList.remove('dragover'));
  logoUploadArea.addEventListener('drop', e => {
    e.preventDefault();
    logoUploadArea.classList.remove('dragover');
    const files = Array.from(e.dataTransfer.files).filter(f => f.type.startsWith('image/'));
    if (files.length) processLogoFile(files[0]);
  });
}

// ======================== LOGO UPLOAD ========================
function handleLogoUpload(e) {
  const files = Array.from(e.target.files).filter(f => f.type.startsWith('image/'));
  if (files.length) processLogoFile(files[0]);
  e.target.value = '';
}

function processLogoFile(file) {
  const reader = new FileReader();
  reader.onload = ev => {
    window.APP_STATE.logo = ev.target.result;
    // Show preview
    const previewWrap = document.getElementById('logo-preview-wrap');
    const previewImg = document.getElementById('logo-preview-img');
    const badge = document.getElementById('logo-badge');
    const uploadTitle = document.getElementById('logo-upload-title');
    previewImg.src = ev.target.result;
    previewWrap.style.display = 'block';
    badge.textContent = 'Loaded';
    badge.style.color = 'var(--green)';
    uploadTitle.textContent = 'Change Logo';
    showToast('Logo uploaded! ✅ Re-generate Re-generate to apply.', 'success');
  };
  reader.readAsDataURL(file);
}

window.removeLogo = function() {
  window.APP_STATE.logo = null;
  const previewWrap = document.getElementById('logo-preview-wrap');
  const previewImg = document.getElementById('logo-preview-img');
  const badge = document.getElementById('logo-badge');
  const uploadTitle = document.getElementById('logo-upload-title');
  previewWrap.style.display = 'none';
  previewImg.src = '';
  badge.textContent = 'None';
  badge.style.color = '';
  uploadTitle.textContent = 'Upload Logo';
  showToast('Logo removed');
};

window.setLogoPos = function(btn) {
  document.querySelectorAll('.logo-pos-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  window.APP_STATE.logoPosition = btn.dataset.pos;
};

window.updateLogoSettings = function() {
  window.APP_STATE.logoSize = parseInt(document.getElementById('logo-size-range').value);
  window.APP_STATE.logoOpacity = parseInt(document.getElementById('logo-opacity-range').value);
};

// ======================== LOGO OVERLAY INJECTOR ========================
window.injectLogoOverlay = function(canvas) {
  if (!window.APP_STATE.logo) return;
  if (!document.getElementById('tog-logo')?.checked) return;

  const pos = window.APP_STATE.logoPosition || 'top-left';
  const size = window.APP_STATE.logoSize || 20;
  const opacity = (window.APP_STATE.logoOpacity || 100) / 100;

  const logoEl = document.createElement('div');
  logoEl.className = `dc-logo-overlay logo-pos-${pos}`;
  logoEl.style.cssText = `width:${size}%;opacity:${opacity};`;

  const img = document.createElement('img');
  img.src = window.APP_STATE.logo;
  img.style.cssText = 'width:100%;height:auto;max-height:80px;object-fit:contain;display:block;filter:drop-shadow(0 1px 4px rgba(0,0,0,0.5))';
  logoEl.appendChild(img);
  canvas.appendChild(logoEl);
};

// background upload handler moved here
function handleBgUpload(e) {
  const files = Array.from(e.target.files).filter(f => f.type.startsWith('image/'));
  if (files.length) processImageFiles(files);
  e.target.value = '';
}

function processImageFiles(files) {
  let loaded = 0;
  files.forEach(file => {
    const reader = new FileReader();
    reader.onload = ev => {
      const bg = {
        id: Date.now() + Math.random(),
        type: 'image',
        url: ev.target.result,
        name: file.name.replace(/\.[^.]+$/, ''),
      };
      window.APP_STATE.backgrounds.push(bg);
      loaded++;
      renderBgThumbs();
      if (loaded === files.length) {
        showToast(`${files.length} background${files.length > 1 ? 's' : ''} imported! 🖼️`, 'success');
        updateStats();
        document.getElementById('uploaded-label').style.display = '';
      }
    };
    reader.readAsDataURL(file);
  });
}

function renderBgThumbs() {
  const container = document.getElementById('bg-thumbs');
  const imgBgs = window.APP_STATE.backgrounds.filter(b => b.type === 'image');
  document.getElementById('bg-count-badge').textContent = imgBgs.length;
  container.innerHTML = '';
  imgBgs.forEach(bg => {
    const item = document.createElement('div');
    item.className = 'bg-thumb-item' + (window.APP_STATE.selectedBg?.id === bg.id ? ' active' : '');
    item.style.backgroundImage = `url(${bg.url})`;
    const del = document.createElement('button');
    del.className = 'bg-thumb-del';
    del.innerHTML = '<i class="fas fa-times"></i>';
    del.title = 'Remove';
    del.onclick = e => { e.stopPropagation(); removeBackground(bg.id); };
    item.appendChild(del);
    item.addEventListener('click', () => {
      document.querySelectorAll('.bg-thumb-item').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.grad-swatch').forEach(s => s.classList.remove('active'));
      document.querySelectorAll('.pat-swatch').forEach(s => s.classList.remove('active'));
      item.classList.add('active');
      window.APP_STATE.selectedBg = bg;
      window.APP_STATE.selectedGradient = null;
      window.APP_STATE.selectedPattern = null;
      showToast(`"${bg.name}" selected`, 'info');
    });
    container.appendChild(item);
  });
  updateStats();
}

function removeBackground(id) {
  window.APP_STATE.backgrounds = window.APP_STATE.backgrounds.filter(b => b.id !== id);
  if (window.APP_STATE.selectedBg?.id === id) window.APP_STATE.selectedBg = null;
  renderBgThumbs();
  const imgBgs = window.APP_STATE.backgrounds.filter(b => b.type === 'image');
  if (imgBgs.length === 0) document.getElementById('uploaded-label').style.display = 'none';
  showToast('Background removed');
}

// ======================== GENERATE DESIGNS ========================
window.generateDesigns = async function() {
  const heading = document.getElementById('inp-heading')?.value?.trim();
  const tag = document.getElementById('inp-tag')?.value?.trim();

  if (!heading && !tag) {
    showToast('Please enter a headline or tag to generate designs!', 'error');
    document.getElementById('inp-heading').focus();
    return;
  }

  // Collect backgrounds to use
  let bgPool = [];

  // Image uploads
  const imgBgs = window.APP_STATE.backgrounds.filter(b => b.type === 'image');
  imgBgs.forEach(b => bgPool.push({ type: 'image', url: b.url, name: b.name, id: b.id }));

  // Selected gradient
  if (window.APP_STATE.selectedGradient) {
    bgPool.push({ type: 'gradient', css: window.APP_STATE.selectedGradient.css, name: window.APP_STATE.selectedGradient.name });
  }

  // Selected pattern
  if (window.APP_STATE.selectedPattern) {
    bgPool.push({ type: 'pattern', css: window.APP_STATE.selectedPattern.css, name: window.APP_STATE.selectedPattern.name });
  }

  // If nothing selected, add several default gradients
  if (bgPool.length === 0) {
    const defaults = window.GRADIENTS.slice(0, 4);
    defaults.forEach(g => bgPool.push({ type: 'gradient', css: g.css, name: g.name }));
    showToast('No background imported — using defaults. Import your own for best results!', 'warning');
  }

  // Content
  const content = {
    tag: tag || '',
    heading: heading || '',
    sub: document.getElementById('inp-sub')?.value?.trim() || '',
    body: document.getElementById('inp-body')?.value?.trim() || '',
    cta: document.getElementById('inp-cta')?.value?.trim() || '',
    hashtag: document.getElementById('inp-hashtag')?.value?.trim() || '',
    footer: document.getElementById('inp-footer')?.value?.trim() || '',
    contact: document.getElementById('inp-contact')?.value?.trim() || '',
  };

  // Options
  const opts = {
    showCTA: document.getElementById('tog-cta')?.checked ?? true,
    showHashtag: document.getElementById('tog-hash')?.checked ?? true,
    showFooter: document.getElementById('tog-footer')?.checked ?? true,
    showDeco: document.getElementById('tog-deco')?.checked ?? true,
    showLabel: document.getElementById('tog-label')?.checked ?? true,
    showWatermark: document.getElementById('tog-wm')?.checked ?? false,
    mixStyles: document.getElementById('tog-mix')?.checked ?? false,
  };

  // Determine styles
  const cat = window.APP_STATE.category;
  let stylePool = [];
  if (opts.mixStyles || cat === 'all') {
    stylePool = [...window.DESIGN_STYLES];
  } else {
    stylePool = window.DESIGN_STYLES.filter(s => s.category === cat);
    if (stylePool.length === 0) stylePool = window.DESIGN_STYLES;
  }

  const variations = window.APP_STATE.variations;
  const totalDesigns = variations;

  // Start spinner
  const spinner = document.getElementById('spinner-overlay');
  const bar = document.getElementById('spinner-bar');
  const msg = document.getElementById('spinner-msg');
  const countEl = document.getElementById('spinner-count');
  spinner.classList.add('show');

  // Clear existing designs
  window.APP_STATE.undoStack.push([...window.APP_STATE.designs.map(d => d.el.cloneNode(true))]);
  window.APP_STATE.designs = [];

  // Clear grid
  const grid = document.getElementById('designs-grid');
  grid.innerHTML = '';

  // Generate cards with async delay for progress
  for (let i = 0; i < totalDesigns; i++) {
    const pct = ((i / totalDesigns) * 100).toFixed(0);
    bar.style.width = pct + '%';
    msg.textContent = `Creating design ${i+1} of ${totalDesigns}...`;
    countEl.textContent = `${i+1} / ${totalDesigns}`;

    const styleObj = stylePool[i % stylePool.length];
    const bgData = bgPool[i % bgPool.length];
    const accent = window.APP_STATE.accentColor;

    const card = window.createDesignCard(styleObj, bgData, content, accent, opts, i);

    window.APP_STATE.designs.push({
      el: card,
      styleId: styleObj.name,
      bg: bgData,
      content: { ...content },
      accent,
    });

    grid.appendChild(card);

    // Yield to UI
    if (i % 3 === 0) await sleep(60);
  }

  bar.style.width = '100%';
  window.APP_STATE.stats.generated += totalDesigns;

  await sleep(300);
  spinner.classList.remove('show');

  updateDesignCount();
  updateStats();
  updateLayersList();
  checkEmptyState();
  saveProject(true);

  showToast(`🎉 ${totalDesigns} designs created!`, 'success');

  // Scroll to designs
  document.getElementById('designs-wrapper').scrollTo({ top: 0, behavior: 'smooth' });

  // Close mobile panels
  closeMobileSidebars();
};

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// ======================== SELECT / FORMAT / BORDER ========================
window.selectBorder = function(el) {
  document.querySelectorAll('.border-opt').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  window.APP_STATE.borderStyle = el.dataset.border;
};

window.selectFormat = function(el) {
  document.querySelectorAll('.format-card').forEach(f => f.classList.remove('active'));
  el.classList.add('active');
  window.APP_STATE.exportFormat = el.dataset.fmt;
};

window.changeVar = function(delta) {
  window.APP_STATE.variations = Math.max(1, Math.min(24, window.APP_STATE.variations + delta));
  document.getElementById('var-val').textContent = window.APP_STATE.variations;
};

window.updateCharCount = function(inputId, countId, max) {
  const input = document.getElementById(inputId);
  const count = document.getElementById(countId);
  if (input && count) count.textContent = `${input.value.length}/${max}`;
};

window.setVal = function(inputId, el) {
  const input = document.getElementById(inputId);
  if (input) input.value = el.textContent;
};

// ======================== SIDEBAR TOGGLES ========================
window.toggleLeftSidebar = function() {
  const sb = document.getElementById('left-sidebar');
  sb.classList.toggle('collapsed');
};

window.toggleRightPanel = function() {
  const rp = document.getElementById('right-panel');
  rp.classList.toggle('collapsed');
};

window.closeMobileSidebars = function() {
  // Only on mobile
  if (window.innerWidth <= 1024) {
    document.getElementById('left-sidebar').classList.add('collapsed');
    document.getElementById('right-panel').classList.add('collapsed');
    document.getElementById('sidebar-overlay')?.classList.remove('show');
  }
};

// ======================== CANVAS BAR ACTIONS ========================
window.shuffleDesigns = function() {
  const grid = document.getElementById('designs-grid');
  const cards = Array.from(grid.querySelectorAll('.design-card'));
  if (cards.length < 2) { showToast('Need at least 2 designs to shuffle', 'warning'); return; }
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    grid.appendChild(cards[j]);
  }
  showToast('Designs shuffled!');
};

window.clearDesigns = function() {
  if (!window.APP_STATE.designs.length) return;
  window.APP_STATE.undoStack.push([...window.APP_STATE.designs.map(d => d.el.cloneNode(true))]);
  const grid = document.getElementById('designs-grid');
  grid.querySelectorAll('.design-card').forEach(c => c.remove());
  window.APP_STATE.designs = [];
  updateDesignCount();
  updateStats();
  updateLayersList();
  checkEmptyState();
  showToast('All designs cleared');
};

window.sortDesigns = function() {
  const grid = document.getElementById('designs-grid');
  const cards = Array.from(grid.querySelectorAll('.design-card'));
  cards.sort((a, b) => {
    const ai = parseInt(a.dataset.index || 0);
    const bi = parseInt(b.dataset.index || 0);
    return ai - bi;
  });
  cards.forEach(c => grid.appendChild(c));
  showToast('Designs sorted by creation order');
};

// ======================== ZOOM ========================
let zoomLevel = 100;
window.changeZoom = function(delta) {
  zoomLevel = Math.max(50, Math.min(200, zoomLevel + delta));
  document.getElementById('zoom-label').textContent = zoomLevel + '%';
  document.getElementById('designs-wrapper').style.zoom = (zoomLevel / 100).toFixed(2);
};

// ======================== FULLSCREEN ========================
window.toggleFullscreen = function() {
  if (!document.fullscreenElement) {
    document.getElementById('main-area').requestFullscreen?.().catch(err => {
      document.documentElement.requestFullscreen?.();
    });
    document.getElementById('fullscreen-btn').innerHTML = '<i class="fas fa-compress"></i>';
  } else {
    document.exitFullscreen?.();
    document.getElementById('fullscreen-btn').innerHTML = '<i class="fas fa-expand"></i>';
  }
};

// ======================== UNDO / REDO ========================
window.undoAction = function() {
  if (!window.APP_STATE.undoStack || !window.APP_STATE.undoStack.length) {
    showToast('Nothing to undo', 'warning'); return;
  }
  // Save current state to redo stack
  window.APP_STATE.redoStack.push(window.APP_STATE.designs.map(d => ({
    el: d.el.cloneNode(true), styleId: d.styleId, bg: d.bg, content: d.content, accent: d.accent
  })));
  // Restore previous state
  const prev = window.APP_STATE.undoStack.pop();
  const grid = document.getElementById('designs-grid');
  grid.innerHTML = '';
  window.APP_STATE.designs = prev.map((d, i) => {
    const clone = d.el.cloneNode(true);
    clone.dataset.index = i;
    clone.addEventListener('click', () => selectCard(clone, i));
    clone.addEventListener('contextmenu', e => { e.preventDefault(); showContextMenu(e, i); });
    grid.appendChild(clone);
    return { el: clone, styleId: d.styleId, bg: d.bg, content: d.content, accent: d.accent };
  });
  updateDesignCount(); updateLayersList(); checkEmptyState();
  showToast('↩ Undone', 'info');
};

window.redoAction = function() {
  if (!window.APP_STATE.redoStack || !window.APP_STATE.redoStack.length) {
    showToast('Nothing to redo', 'warning'); return;
  }
  // Save current to undo stack
  window.APP_STATE.undoStack.push(window.APP_STATE.designs.map(d => ({
    el: d.el.cloneNode(true), styleId: d.styleId, bg: d.bg, content: d.content, accent: d.accent
  })));
  const next = window.APP_STATE.redoStack.pop();
  const grid = document.getElementById('designs-grid');
  grid.innerHTML = '';
  window.APP_STATE.designs = next.map((d, i) => {
    const clone = d.el.cloneNode(true);
    clone.dataset.index = i;
    clone.addEventListener('click', () => selectCard(clone, i));
    clone.addEventListener('contextmenu', e => { e.preventDefault(); showContextMenu(e, i); });
    grid.appendChild(clone);
    return { el: clone, styleId: d.styleId, bg: d.bg, content: d.content, accent: d.accent };
  });
  updateDesignCount(); updateLayersList(); checkEmptyState();
  showToast('↪ Redone', 'info');
};

// ======================== SAVE PROJECT ========================
window.saveProject = function(silent = false) {
  try {
    const data = {
      category: window.APP_STATE.category,
      variations: window.APP_STATE.variations,
      aspectRatio: window.APP_STATE.aspectRatio,
      accentColor: window.APP_STATE.accentColor,
      overlayIntensity: window.APP_STATE.overlayIntensity,
      borderStyle: window.APP_STATE.borderStyle,
      exportFormat: window.APP_STATE.exportFormat,
      gridCols: window.APP_STATE.gridCols,
      stats: window.APP_STATE.stats,
      content: {
        tag: document.getElementById('inp-tag')?.value || '',
        heading: document.getElementById('inp-heading')?.value || '',
        sub: document.getElementById('inp-sub')?.value || '',
        body: document.getElementById('inp-body')?.value || '',
        cta: document.getElementById('inp-cta')?.value || '',
        hashtag: document.getElementById('inp-hashtag')?.value || '',
        footer: document.getElementById('inp-footer')?.value || '',
        contact: document.getElementById('inp-contact')?.value || '',
      }
    };
    localStorage.setItem('templix_studio_v3', JSON.stringify(data));
    if (!silent) showToast('Project saved!', 'success');
  } catch(e) {
    if (!silent) showToast('Save failed (storage full?)', 'error');
  }
};

function loadFromStorage() {
  try {
    const saved = JSON.parse(localStorage.getItem('templix_studio_v3'));
    if (!saved) return;
    if (saved.content) {
      Object.entries(saved.content).forEach(([key, val]) => {
        const el = document.getElementById('inp-' + key);
        if (el) el.value = val;
      });
    }
    if (saved.category) {
      window.APP_STATE.category = saved.category;
      document.querySelectorAll('.cat-item').forEach(c => {
        c.classList.toggle('active', c.dataset.catId === saved.category);
      });
    }
    if (saved.accentColor) {
      window.APP_STATE.accentColor = saved.accentColor;
      setAccentColor(saved.accentColor);
    }
    if (saved.variations) {
      window.APP_STATE.variations = saved.variations;
      document.getElementById('var-val').textContent = saved.variations;
    }
    if (saved.overlayIntensity) {
      window.APP_STATE.overlayIntensity = saved.overlayIntensity;
      document.getElementById('overlay-range').value = saved.overlayIntensity;
    }
    if (saved.aspectRatio) {
      window.APP_STATE.aspectRatio = saved.aspectRatio;
      document.getElementById('aspect-select').value = saved.aspectRatio;
    }
    if (saved.stats) window.APP_STATE.stats = saved.stats;
    updateStats();
    updateCharCount('inp-heading', 'cc-heading', 120);
    updateCharCount('inp-body', 'cc-body', 400);
  } catch(e) { console.warn('Could not load saved project', e); }
}

// ======================== TOAST ========================
window.showToast = function(msg, type = 'info') {
  const container = document.getElementById('toast-box');
  const toast = document.createElement('div');
  const icons = { success: 'fa-check-circle', error: 'fa-times-circle', warning: 'fa-exclamation-triangle', info: 'fa-info-circle' };
  toast.className = `toast-item ${type}`;
  toast.innerHTML = `<i class="fas ${icons[type] || icons.info}"></i> ${msg}`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3200);
};

// ======================== MOBILE FABs ========================
document.addEventListener('DOMContentLoaded', function() {
  const fabLeft = document.getElementById('fab-left');
  const fabRight = document.getElementById('fab-right');
  const fabGen = document.getElementById('fab-gen');

  if (fabLeft) fabLeft.addEventListener('click', () => {
    document.getElementById('left-sidebar').classList.toggle('collapsed');
    if (window.innerWidth <= 1024) {
      document.getElementById('right-panel').classList.add('collapsed');
      document.getElementById('sidebar-overlay')?.classList.toggle('show', !document.getElementById('left-sidebar').classList.contains('collapsed'));
    }
  });
  if (fabRight) fabRight.addEventListener('click', () => {
    document.getElementById('right-panel').classList.toggle('collapsed');
    if (window.innerWidth <= 1024) {
      document.getElementById('left-sidebar').classList.add('collapsed');
      document.getElementById('sidebar-overlay')?.classList.toggle('show', !document.getElementById('right-panel').classList.contains('collapsed'));
    }
  });
});

// Sidebar overlay (mobile)
const overlayEl = document.createElement('div');
overlayEl.id = 'sidebar-overlay';
overlayEl.style.cssText = 'display:none;position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:700';
overlayEl.addEventListener('click', closeMobileSidebars);
document.body.appendChild(overlayEl);

// Responsive check
function handleResize() {
  if (window.innerWidth > 1024) {
    document.getElementById('left-sidebar').classList.remove('collapsed');
    document.getElementById('right-panel').classList.remove('collapsed');
    overlayEl.style.display = 'none';
  }
}
window.addEventListener('resize', handleResize);

// =====================================================================
// ======================== NEW FEATURES BLOCK =========================
// =====================================================================

// ======================== TAB SWITCHER (bulletproof) ========================
window.switchRpTab = function(tabId, btn) {
  // Remove active from all tabs
  document.querySelectorAll('.rp-tab').forEach(t => t.classList.remove('active'));
  // Hide all panes via inline style (overrides any CSS)
  document.querySelectorAll('.rp-pane').forEach(p => {
    p.classList.remove('active');
    p.style.setProperty('display', 'none', 'important');
  });
  // Activate clicked tab
  if (btn) btn.classList.add('active');
  // Show target pane
  const pane = document.getElementById('rp-' + tabId);
  if (pane) {
    pane.classList.add('active');
    pane.style.setProperty('display', 'block', 'important');
  }
};

// ======================== SAVE PROJECT OVERRIDE (with named saves) ========================
window.saveProject = function(silent = false) {
  try {
    const data = {
      category: window.APP_STATE.category,
      variations: window.APP_STATE.variations,
      aspectRatio: window.APP_STATE.aspectRatio,
      accentColor: window.APP_STATE.accentColor,
      overlayIntensity: window.APP_STATE.overlayIntensity,
      borderStyle: window.APP_STATE.borderStyle,
      exportFormat: window.APP_STATE.exportFormat,
      gridCols: window.APP_STATE.gridCols,
      stats: window.APP_STATE.stats,
      content: {
        tag: document.getElementById('inp-tag')?.value || '',
        heading: document.getElementById('inp-heading')?.value || '',
        sub: document.getElementById('inp-sub')?.value || '',
        body: document.getElementById('inp-body')?.value || '',
        cta: document.getElementById('inp-cta')?.value || '',
        hashtag: document.getElementById('inp-hashtag')?.value || '',
        footer: document.getElementById('inp-footer')?.value || '',
        contact: document.getElementById('inp-contact')?.value || '',
      }
    };
    localStorage.setItem('templix_studio_v3', JSON.stringify(data));
    if (!silent) {
      document.getElementById('save-name-input').value = '';
      document.getElementById('save-name-modal').classList.add('show');
    }
  } catch(e) {
    if (!silent) showToast('Save failed (storage full?)', 'error');
  }
};

window.confirmSaveProject = function() {
  const nameInput = document.getElementById('save-name-input');
  const name = nameInput.value.trim() || 'Untitled Project';
  document.getElementById('save-name-modal').classList.remove('show');
  try {
    const saves = JSON.parse(localStorage.getItem('templix_saved_projects') || '[]');
    const heading = document.getElementById('inp-heading')?.value || '';
    const tag = document.getElementById('inp-tag')?.value || '';
    const savedData = {
      id: Date.now(),
      name,
      date: new Date().toLocaleDateString('en-GB', { day:'numeric', month:'short', year:'numeric' }),
      category: window.APP_STATE.category,
      accentColor: window.APP_STATE.accentColor,
      content: {
        tag, heading,
        sub: document.getElementById('inp-sub')?.value || '',
        body: document.getElementById('inp-body')?.value || '',
        cta: document.getElementById('inp-cta')?.value || '',
        hashtag: document.getElementById('inp-hashtag')?.value || '',
        footer: document.getElementById('inp-footer')?.value || '',
        contact: document.getElementById('inp-contact')?.value || '',
      }
    };
    saves.unshift(savedData);
    if (saves.length > 30) saves.pop();
    localStorage.setItem('templix_saved_projects', JSON.stringify(saves));
    showToast(`"${name}" saved successfully! 💾`, 'success');
  } catch(e) { showToast('Could not save project', 'error'); }
};

// ======================== SAVED DESIGNS MODAL ========================
window.openSavedModal = function() {
  document.getElementById('saved-modal').classList.add('show');
  loadSavedTab('saved');
};
window.closeSavedModal = function() {
  document.getElementById('saved-modal').classList.remove('show');
};
window.switchSavedTab = function(tab, btn) {
  document.querySelectorAll('.saved-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  loadSavedTab(tab);
};
window.loadSavedTab = function(tab) {
  const grid = document.getElementById('saved-grid');
  grid.innerHTML = '';
  if (tab === 'saved') {
    const saves = JSON.parse(localStorage.getItem('templix_saved_projects') || '[]');
    if (!saves.length) {
      grid.innerHTML = '<div class="saved-empty"><i class="fas fa-bookmark"></i>No saved projects yet.<br><small>Click Save in the topbar to save your work.</small></div>';
      return;
    }
    saves.forEach(s => {
      const item = document.createElement('div');
      item.className = 'saved-item';
      item.innerHTML = `
        <div class="saved-thumb" style="background:${s.accentColor||'#ff3cac'}15;display:flex;align-items:center;justify-content:center">
          <div style="font-family:'Bebas Neue',sans-serif;font-size:1.2rem;color:${s.accentColor||'#ff3cac'};text-align:center;padding:8px">${s.content?.heading?.slice(0,30)||s.name}</div>
        </div>
        <div class="saved-info">
          <div class="saved-name">${s.name}</div>
          <div class="saved-date">${s.date}</div>
        </div>
        <div class="saved-item-acts">
          <div class="saved-act" onclick="loadSavedProject(${s.id})">Load</div>
          <div class="saved-act danger" onclick="deleteSavedProject(${s.id})">Delete</div>
        </div>`;
      grid.appendChild(item);
    });
  } else if (tab === 'favorites') {
    const favs = JSON.parse(localStorage.getItem('templix_favorites') || '[]');
    if (!favs.length) {
      grid.innerHTML = '<div class="saved-empty"><i class="fas fa-heart"></i>No favorites yet.<br><small>Click the ❤️ heart on any design to favorite it.</small></div>';
      return;
    }
    favs.forEach(f => {
      const item = document.createElement('div');
      item.className = 'saved-item';
      item.innerHTML = `
        <div class="saved-thumb" style="background:${f.accent||'#ff3cac'}20;display:flex;align-items:center;justify-content:center;font-size:2rem">❤️</div>
        <div class="saved-info">
          <div class="saved-name">${f.styleId||'Favorite Design'}</div>
          <div class="saved-date">${f.date||''}</div>
        </div>
        <div class="saved-item-acts">
          <div class="saved-act danger" onclick="deleteFavorite(${f.id})">Remove</div>
        </div>`;
      grid.appendChild(item);
    });
  } else if (tab === 'history') {
    const history = JSON.parse(localStorage.getItem('templix_gen_history') || '[]');
    if (!history.length) {
      grid.innerHTML = '<div class="saved-empty"><i class="fas fa-clock"></i>No history yet.<br><small>Your generation history will appear here.</small></div>';
      return;
    }
    history.slice(0,20).forEach((h, i) => {
      const item = document.createElement('div');
      item.className = 'saved-item';
      item.innerHTML = `
        <div class="saved-thumb" style="background:linear-gradient(135deg,#ff3cac22,#2b86c522);display:flex;align-items:center;justify-content:center;font-size:1.5rem">🕒</div>
        <div class="saved-info">
          <div class="saved-name">${h.heading?.slice(0,30)||'Design #'+(i+1)}</div>
          <div class="saved-date">${h.date||''} · ${h.count||0} designs</div>
        </div>
        <div class="saved-item-acts">
          <div class="saved-act" onclick="reloadHistory(${i})">Reload</div>
        </div>`;
      grid.appendChild(item);
    });
  }
};
window.loadSavedProject = function(id) {
  const saves = JSON.parse(localStorage.getItem('templix_saved_projects') || '[]');
  const s = saves.find(x => x.id === id);
  if (!s || !s.content) { showToast('Project not found', 'error'); return; }
  Object.entries(s.content).forEach(([key, val]) => {
    const el = document.getElementById('inp-' + key);
    if (el) el.value = val;
  });
  if (s.category) {
    window.APP_STATE.category = s.category;
    document.querySelectorAll('.cat-item').forEach(c => c.classList.toggle('active', c.dataset.catId === s.category));
  }
  if (s.accentColor) setAccentColor(s.accentColor);
  closeSavedModal();
  showToast(`"${s.name}" loaded! ✨`, 'success');
};
window.deleteSavedProject = function(id) {
  let saves = JSON.parse(localStorage.getItem('templix_saved_projects') || '[]');
  saves = saves.filter(x => x.id !== id);
  localStorage.setItem('templix_saved_projects', JSON.stringify(saves));
  loadSavedTab('saved');
  showToast('Project deleted');
};
window.deleteFavorite = function(id) {
  let favs = JSON.parse(localStorage.getItem('templix_favorites') || '[]');
  favs = favs.filter(x => x.id !== id);
  localStorage.setItem('templix_favorites', JSON.stringify(favs));
  loadSavedTab('favorites');
  showToast('Removed from favorites');
};
window.reloadHistory = function(i) {
  const history = JSON.parse(localStorage.getItem('templix_gen_history') || '[]');
  const h = history[i];
  if (!h) return;
  Object.entries(h.content || {}).forEach(([key, val]) => {
    const el = document.getElementById('inp-' + key);
    if (el) el.value = val;
  });
  closeSavedModal();
  showToast('History loaded! Generate to recreate.', 'info');
};

// Save to history on generate
const _origGenerate = window.generateDesigns;
window.generateDesigns = async function() {
  const heading = document.getElementById('inp-heading')?.value?.trim() || '';
  try {
    const history = JSON.parse(localStorage.getItem('templix_gen_history') || '[]');
    history.unshift({
      heading,
      date: new Date().toLocaleDateString('en-GB', {day:'numeric',month:'short',year:'numeric'}),
      count: window.APP_STATE.variations,
      content: {
        tag: document.getElementById('inp-tag')?.value || '',
        heading,
        sub: document.getElementById('inp-sub')?.value || '',
        body: document.getElementById('inp-body')?.value || '',
        cta: document.getElementById('inp-cta')?.value || '',
        hashtag: document.getElementById('inp-hashtag')?.value || '',
        footer: document.getElementById('inp-footer')?.value || '',
        contact: document.getElementById('inp-contact')?.value || '',
      }
    });
    if (history.length > 20) history.pop();
    localStorage.setItem('templix_gen_history', JSON.stringify(history));
  } catch(e) {}
  return _origGenerate();
};

// Override toggleFavorite to also save to localStorage
const _origToggleFav = window.toggleFavorite;
window.toggleFavorite = function(btn, index) {
  const card = btn.closest('.design-card');
  const icon = btn.querySelector('i');
  const isFaved = icon.classList.contains('fas');
  if (!isFaved) {
    // Adding to favorites
    icon.className = 'fas fa-heart';
    btn.style.color = '#f87171';
    const d = window.APP_STATE.designs[index];
    try {
      const favs = JSON.parse(localStorage.getItem('templix_favorites') || '[]');
      favs.unshift({
        id: Date.now(),
        styleId: d?.styleId || 'Design',
        accent: d?.accent,
        date: new Date().toLocaleDateString('en-GB', {day:'numeric',month:'short',year:'numeric'})
      });
      if (favs.length > 50) favs.pop();
      localStorage.setItem('templix_favorites', JSON.stringify(favs));
    } catch(e) {}
    showToast('Added to favorites ❤️', 'success');
  } else {
    icon.className = 'far fa-heart';
    btn.style.color = '';
    showToast('Removed from favorites');
  }
};

// ======================== TUTORIAL SYSTEM ========================
const TUTORIAL_STEPS = [
  {
    title: '👋 Welcome to TEMPLIX Studio!',
    desc: 'This is your professional graphic design studio. Let\'s take a 2-minute tour so you can start creating stunning designs. Use the arrows or buttons to navigate.',
    target: null, arrow: null
  },
  {
    title: '🎨 Choose a Design Style',
    desc: 'In the left sidebar, pick a design style category like Modern, Neon, Editorial, or Punk. This determines the visual style of your generated designs.',
    target: '#cat-list', arrow: 'right', side: 'right'
  },
  {
    title: '🖼️ Import Backgrounds',
    desc: 'Upload your own photos or images as backgrounds. You can also choose from gradient presets or canvas patterns. More backgrounds = more unique variations!',
    target: '#upload-area', arrow: 'right', side: 'right'
  },
  {
    title: '✍️ Enter Your Content',
    desc: 'In the right panel, type your headline, sub-heading, body text, call to action, and hashtags. This text will appear on all your generated designs.',
    target: '#inp-heading', arrow: 'left', side: 'left'
  },
  {
    title: '⚡ Quick Templates',
    desc: 'Don\'t know what to write? Scroll down in the Content tab and pick a Quick Template! There are 50 templates for events, products, announcements and more.',
    target: '#template-list', arrow: 'left', side: 'left'
  },
  {
    title: '🎭 Style Settings',
    desc: 'Click the Style tab in the right panel to control accent colors, overlay strength, vignette, border style, and many other visual settings.',
    target: '#rp-style', arrow: 'left', side: 'left'
  },
  {
    title: '🔢 Set Variations',
    desc: 'Use the +/- buttons to choose how many design variations to generate (1–24). More variations give you more options to pick from.',
    target: '.stepper-row', arrow: 'left', side: 'left'
  },
  {
    title: '🚀 Generate Your Designs!',
    desc: 'Click the big "Generate Designs" button at the bottom of the right panel, or press Ctrl+Enter. Your designs will appear in the canvas area in seconds!',
    target: '.generate-mega-btn', arrow: 'left', side: 'left'
  },
  {
    title: '💾 Save & Export',
    desc: 'Once generated, hover over a design to see Export and Preview buttons. Click "Export All" to download all designs at once. Use the Save button to save your project.',
    target: '#save-btn', arrow: 'down', side: 'top'
  },
  {
    title: '🖌️ Image Editor',
    desc: 'Click the "Layers" tab → "Open Image Editor" to access brushes, filters, adjustments and more. You can edit images and use them as backgrounds!',
    target: null, arrow: null
  },
  {
    title: '✅ You\'re Ready!',
    desc: 'That\'s the full tour! You can restart this tutorial anytime by clicking the ❓ button in the top bar. button in the top bar. Now go create something amazing!',
    target: null, arrow: null
  }
];

let tutStep = 0;
window.startTutorial = function() {
  tutStep = 0;
  renderTutStep();
  document.getElementById('tutorial-overlay').classList.add('show');
};
window.endTutorial = function() {
  document.getElementById('tutorial-overlay').classList.remove('show');
  document.getElementById('tut-spotlight').style.cssText = '';
};
window.tutorialNext = function() {
  tutStep++;
  if (tutStep >= TUTORIAL_STEPS.length) { endTutorial(); return; }
  renderTutStep();
};
function renderTutStep() {
  const step = TUTORIAL_STEPS[tutStep];
  const card = document.getElementById('tut-card');
  const spotlight = document.getElementById('tut-spotlight');
  if (!card || !spotlight) return;

  document.getElementById('tut-step-num').textContent = `Step ${tutStep + 1} / ${TUTORIAL_STEPS.length}`;
  document.getElementById('tut-title').textContent = step.title;
  document.getElementById('tut-desc').textContent = step.desc;
  document.getElementById('tut-next-btn').textContent = tutStep === TUTORIAL_STEPS.length - 1 ? '✅ Finish' : 'Next →';

  // Progress dots
  const progress = document.getElementById('tut-progress');
  progress.innerHTML = TUTORIAL_STEPS.map((_, i) => `<div class="tut-dot${i === tutStep ? ' active' : ''}"></div>`).join('');

  // Arrow
  const arrow = document.getElementById('tut-arrow');
  if (step.arrow) {
    arrow.className = 'tut-arrow ' + step.arrow;
    arrow.style.display = 'block';
  } else {
    arrow.style.display = 'none';
  }

  // Reset card styles first
  card.style.cssText = '';

  if (step.target) {
    const el = document.querySelector(step.target);
    if (el) {
      const rect = el.getBoundingClientRect();
      const pad = 8;
      // Spotlight on element
      spotlight.style.cssText = `
        top:${rect.top - pad}px;
        left:${rect.left - pad}px;
        width:${rect.width + pad*2}px;
        height:${rect.height + pad*2}px;
        box-shadow: 0 0 0 9999px rgba(0,0,0,0.78);
      `;

      // Card positioning — keep within viewport
      const cardW = 300, cardH = 220;
      let cardLeft, cardTop;

      if (step.side === 'right') {
        cardLeft = Math.min(rect.right + 16, window.innerWidth - cardW - 10);
        cardTop = Math.min(Math.max(rect.top, 10), window.innerHeight - cardH - 10);
      } else if (step.side === 'left') {
        cardLeft = Math.max(rect.left - cardW - 16, 10);
        cardTop = Math.min(Math.max(rect.top, 10), window.innerHeight - cardH - 10);
      } else if (step.side === 'top') {
        cardLeft = Math.min(Math.max(rect.left, 10), window.innerWidth - cardW - 10);
        cardTop = Math.min(rect.bottom + 16, window.innerHeight - cardH - 10);
      } else {
        cardLeft = Math.round(window.innerWidth / 2 - cardW / 2);
        cardTop = Math.round(window.innerHeight / 2 - cardH / 2);
      }

      card.style.cssText = `position:fixed;left:${cardLeft}px;top:${cardTop}px;max-width:300px;`;
    } else {
      // Element not found — center card
      spotlight.style.cssText = '';
      card.style.cssText = `position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);`;
    }
  } else {
    // No target — hide spotlight and center card
    spotlight.style.cssText = '';
    card.style.cssText = `position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);`;
  }
}

// Auto-start tutorial for first-time visitors
if (!localStorage.getItem('templix_tutorial_done')) {
  setTimeout(() => {
    localStorage.setItem('templix_tutorial_done', '1');
    startTutorial();
  }, 2500);
}

// ======================== FONT PICKER ========================
window.openFontPicker = function() {
  renderFontPicker();
  document.getElementById('font-picker-modal').classList.add('show');
};
window.closeFontPicker = function() {
  document.getElementById('font-picker-modal').classList.remove('show');
};
window.filterFonts = function(query) {
  const q = query.toLowerCase();
  const filtered = q ? window.ALL_FONTS.filter(f => f.name.toLowerCase().includes(q) || f.category.toLowerCase().includes(q)) : window.ALL_FONTS;
  renderFontGrid(filtered);
};
window.renderFontPicker = function(filterCat = 'All') {
  // Render category tabs
  const cats = document.getElementById('fp-cats');
  const allCats = ['All', ...new Set(window.ALL_FONTS.map(f => f.category))];
  cats.innerHTML = allCats.map(c => `<button class="fp-cat-btn${c === filterCat ? ' active' : ''}" onclick="filterFontsByCat('${c}', this)">${c}</button>`).join('');
  const fonts = filterCat === 'All' ? window.ALL_FONTS : window.ALL_FONTS.filter(f => f.category === filterCat);
  renderFontGrid(fonts);
};
window.filterFontsByCat = function(cat, btn) {
  document.querySelectorAll('.fp-cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const fonts = cat === 'All' ? window.ALL_FONTS : window.ALL_FONTS.filter(f => f.category === cat);
  renderFontGrid(fonts);
};
window.renderFontGrid = function(fonts) {
  const grid = document.getElementById('fp-grid');
  grid.innerHTML = fonts.map((f, i) => `
    <div class="fp-item${window.APP_STATE.selectedFont === f.name ? ' active' : ''}" onclick="selectFont('${f.name.replace(/'/g,'\\\'')}')"
      data-font="${f.name}">
      <div class="fp-preview" style="font-family:${f.css}">${f.preview}</div>
      <div class="fp-name">${f.name}</div>
      <div class="fp-category">${f.category}</div>
    </div>`).join('');
};
window.selectFont = function(fontName) {
  window.APP_STATE.selectedFont = fontName;
  document.querySelectorAll('.fp-item').forEach(el => el.classList.toggle('active', el.dataset.font === fontName));
  showToast(`Font "${fontName}" selected! Re-generate to apply.`, 'success');
};

// ======================== IMAGE EDITOR ========================
let imgEditorState = {
  canvas: null, ctx: null,
  originalImage: null, currentImage: null,
  history: [], historyIndex: -1,
  tool: 'brush',
  brushColor: '#ff3cac',
  painting: false,
  zoom: 1, offsetX: 0, offsetY: 0,
  rotation: 0, flipH: false, flipV: false,
};

window.openImageEditor = function() {
  document.getElementById('img-editor-modal').classList.add('show');
  if (!imgEditorState.canvas) {
    imgEditorState.canvas = document.getElementById('imgEdit-canvas');
    imgEditorState.ctx = imgEditorState.canvas.getContext('2d');
    setupEditorCanvas();
  }
  updateBrushPreview();
};
window.closeImageEditor = function() {
  document.getElementById('img-editor-modal').classList.remove('show');
};
window.loadImageToEditor = function(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    const img = new Image();
    img.onload = () => {
      document.getElementById('imgEdit-placeholder').style.display = 'none';
      imgEditorState.canvas.style.display = 'block';
      const maxW = imgEditorState.canvas.parentElement.clientWidth - 10;
      const maxH = imgEditorState.canvas.parentElement.clientHeight - 10;
      let w = img.width, h = img.height;
      if (w > maxW) { h = h * maxW / w; w = maxW; }
      if (h > maxH) { w = w * maxH / h; h = maxH; }
      imgEditorState.canvas.width = w;
      imgEditorState.canvas.height = h;
      imgEditorState.ctx.drawImage(img, 0, 0, w, h);
      imgEditorState.originalImage = imgEditorState.ctx.getImageData(0, 0, w, h);
      imgEditorState.currentImage = imgEditorState.ctx.getImageData(0, 0, w, h);
      imgEditorState.history = [imgEditorState.ctx.getImageData(0, 0, w, h)];
      imgEditorState.historyIndex = 0;
    };
    img.src = ev.target.result;
  };
  reader.readAsDataURL(file);
  input.value = '';
};
function setupEditorCanvas() {
  const canvas = imgEditorState.canvas;
  canvas.style.display = 'none';
  let lastX, lastY;
  canvas.addEventListener('mousedown', e => {
    imgEditorState.painting = true;
    lastX = e.offsetX; lastY = e.offsetY;
    const tool = imgEditorState.tool;
    if (tool === 'text') {
      drawTextOnCanvas(e.offsetX, e.offsetY);
    } else if (tool === 'fill') {
      floodFill(e.offsetX, e.offsetY, imgEditorState.brushColor);
    }
  });
  canvas.addEventListener('mousemove', e => {
    if (!imgEditorState.painting) return;
    const tool = imgEditorState.tool;
    if (tool === 'brush') {
      drawBrushStroke(lastX, lastY, e.offsetX, e.offsetY);
    } else if (tool === 'eraser') {
      eraseStroke(lastX, lastY, e.offsetX, e.offsetY);
    } else if (tool === 'blur-brush') {
      blurBrushStroke(e.offsetX, e.offsetY);
    } else if (tool === 'lighten') {
      dodgeBrushStroke(e.offsetX, e.offsetY, 10);
    } else if (tool === 'darken') {
      dodgeBrushStroke(e.offsetX, e.offsetY, -10);
    }
    lastX = e.offsetX; lastY = e.offsetY;
  });
  canvas.addEventListener('mouseup', () => {
    if (imgEditorState.painting) {
      imgEditorState.painting = false;
      pushEditorHistory();
    }
  });
  canvas.addEventListener('mouseleave', () => {
    if (imgEditorState.painting) {
      imgEditorState.painting = false;
      pushEditorHistory();
    }
  });
  // Touch support
  canvas.addEventListener('touchstart', e => { e.preventDefault(); const t = e.touches[0]; const r = canvas.getBoundingClientRect(); imgEditorState.painting = true; }, {passive:false});
  canvas.addEventListener('touchmove', e => { e.preventDefault(); if (!imgEditorState.painting) return; const t = e.touches[0]; const r = canvas.getBoundingClientRect(); drawBrushStroke(t.clientX-r.left, t.clientY-r.top, t.clientX-r.left, t.clientY-r.top); }, {passive:false});
  canvas.addEventListener('touchend', () => { imgEditorState.painting = false; pushEditorHistory(); });
}
function drawBrushStroke(x1, y1, x2, y2) {
  const ctx = imgEditorState.ctx;
  const size = parseInt(document.getElementById('brush-size').value);
  const opacity = parseInt(document.getElementById('brush-opacity').value) / 100;
  const hard = parseInt(document.getElementById('brush-hard').value) / 100;
  ctx.globalAlpha = opacity;
  ctx.strokeStyle = imgEditorState.brushColor;
  ctx.lineWidth = size;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  if (hard < 0.5) {
    const grd = ctx.createRadialGradient(x2, y2, 0, x2, y2, size/2);
    grd.addColorStop(0, imgEditorState.brushColor);
    grd.addColorStop(1, 'transparent');
    ctx.fillStyle = grd;
    ctx.beginPath();
    ctx.arc(x2, y2, size/2, 0, Math.PI*2);
    ctx.fill();
  } else {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }
  ctx.globalAlpha = 1;
}
function eraseStroke(x1, y1, x2, y2) {
  const ctx = imgEditorState.ctx;
  const size = parseInt(document.getElementById('brush-size').value);
  ctx.globalCompositeOperation = 'destination-out';
  ctx.strokeStyle = 'rgba(0,0,0,1)';
  ctx.lineWidth = size;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.globalCompositeOperation = 'source-over';
}
function blurBrushStroke(x, y) {
  const ctx = imgEditorState.ctx;
  const size = parseInt(document.getElementById('brush-size').value);
  ctx.save();
  ctx.filter = 'blur(4px)';
  ctx.drawImage(ctx.canvas, x - size/2, y - size/2, size, size, x - size/2, y - size/2, size, size);
  ctx.filter = 'none';
  ctx.restore();
}
function dodgeBrushStroke(x, y, amount) {
  const ctx = imgEditorState.ctx;
  const size = parseInt(document.getElementById('brush-size').value);
  const imageData = ctx.getImageData(x - size/2, y - size/2, size, size);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    data[i] = Math.max(0, Math.min(255, data[i] + amount));
    data[i+1] = Math.max(0, Math.min(255, data[i+1] + amount));
    data[i+2] = Math.max(0, Math.min(255, data[i+2] + amount));
  }
  ctx.putImageData(imageData, x - size/2, y - size/2);
}
function drawTextOnCanvas(x, y) {
  const ctx = imgEditorState.ctx;
  const text = document.getElementById('imgEdit-text-input').value || 'Click to type';
  const size = document.getElementById('imgEdit-text-size').value || 32;
  const font = document.getElementById('imgEdit-text-font').value || 'Bebas Neue';
  const color = document.getElementById('imgEdit-text-color').value || '#ffffff';
  ctx.font = `${size}px '${font}', sans-serif`;
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
  pushEditorHistory();
}
function floodFill(x, y, fillColor) {
  const ctx = imgEditorState.ctx;
  const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
  const data = imageData.data;
  const r = parseInt(fillColor.slice(1,3), 16);
  const g = parseInt(fillColor.slice(3,5), 16);
  const b = parseInt(fillColor.slice(5,7), 16);
  const targetIdx = (Math.round(y) * ctx.canvas.width + Math.round(x)) * 4;
  const targetR = data[targetIdx], targetG = data[targetIdx+1], targetB = data[targetIdx+2];
  if (targetR === r && targetG === g && targetB === b) return;
  const stack = [[Math.round(x), Math.round(y)]];
  while (stack.length) {
    const [px, py] = stack.pop();
    const idx = (py * ctx.canvas.width + px) * 4;
    if (px < 0 || px >= ctx.canvas.width || py < 0 || py >= ctx.canvas.height) continue;
    if (data[idx] !== targetR || data[idx+1] !== targetG || data[idx+2] !== targetB) continue;
    data[idx] = r; data[idx+1] = g; data[idx+2] = b;
    stack.push([px+1,py],[px-1,py],[px,py+1],[px,py-1]);
  }
  ctx.putImageData(imageData, 0, 0);
  pushEditorHistory();
}
function pushEditorHistory() {
  const ctx = imgEditorState.ctx;
  const snap = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
  imgEditorState.history = imgEditorState.history.slice(0, imgEditorState.historyIndex + 1);
  imgEditorState.history.push(snap);
  imgEditorState.historyIndex = imgEditorState.history.length - 1;
}
window.editorUndo = function() {
  if (imgEditorState.historyIndex <= 0) { showToast('Nothing to undo', 'warning'); return; }
  imgEditorState.historyIndex--;
  imgEditorState.ctx.putImageData(imgEditorState.history[imgEditorState.historyIndex], 0, 0);
};
window.editorRedo = function() {
  if (imgEditorState.historyIndex >= imgEditorState.history.length - 1) { showToast('Nothing to redo', 'warning'); return; }
  imgEditorState.historyIndex++;
  imgEditorState.ctx.putImageData(imgEditorState.history[imgEditorState.historyIndex], 0, 0);
};
window.resetEditorCanvas = function() {
  if (imgEditorState.originalImage) {
    imgEditorState.ctx.putImageData(imgEditorState.originalImage, 0, 0);
    pushEditorHistory();
    // Reset sliders
    ['adj-brightness','adj-contrast','adj-saturation','adj-blur','adj-hue'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = id === 'adj-brightness' || id === 'adj-contrast' || id === 'adj-saturation' ? 100 : 0;
    });
    showToast('Canvas reset to original');
  }
};
window.setEditorTool = function(btn, tool) {
  document.querySelectorAll('.imgEdit-tool-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  imgEditorState.tool = tool;
  const canvas = imgEditorState.canvas;
  const cursors = { brush:'crosshair', eraser:'cell', fill:'copy', text:'text', 'blur-brush':'crosshair', lighten:'crosshair', darken:'crosshair', crop:'nwse-resize' };
  canvas.style.cursor = cursors[tool] || 'crosshair';
};
window.setBrushColor = function(el, color) {
  document.querySelectorAll('.brush-color-swatch').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
  imgEditorState.brushColor = color;
};
window.setBrushColorCustom = function(color) {
  imgEditorState.brushColor = color;
};
window.updateBrushPreview = function() {
  const size = document.getElementById('brush-size')?.value || 20;
  document.getElementById('brush-size-val').textContent = size;
  const preview = document.getElementById('brush-size-preview');
  if (preview) {
    const px = Math.max(10, Math.min(40, parseInt(size)));
    preview.style.width = px + 'px';
    preview.style.height = px + 'px';
    preview.style.background = imgEditorState.brushColor;
  }
};
window.applyAdjustments = function() {
  if (!imgEditorState.canvas || imgEditorState.canvas.style.display === 'none') return;
  const b = document.getElementById('adj-brightness')?.value || 100;
  const c = document.getElementById('adj-contrast')?.value || 100;
  const s = document.getElementById('adj-saturation')?.value || 100;
  const bl = document.getElementById('adj-blur')?.value || 0;
  const h = document.getElementById('adj-hue')?.value || 0;
  imgEditorState.canvas.style.filter = `brightness(${b}%) contrast(${c}%) saturate(${s}%) blur(${bl}px) hue-rotate(${h}deg)`;
};
window.applyFilter = function(filter) {
  if (!imgEditorState.canvas || imgEditorState.canvas.style.display === 'none') { showToast('Open an image first', 'warning'); return; }
  const ctx = imgEditorState.ctx;
  const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
  const d = imageData.data;
  if (filter === 'grayscale') {
    for (let i = 0; i < d.length; i += 4) { const g = 0.299*d[i]+0.587*d[i+1]+0.114*d[i+2]; d[i]=d[i+1]=d[i+2]=g; }
  } else if (filter === 'sepia') {
    for (let i = 0; i < d.length; i += 4) { const r=d[i],g=d[i+1],b=d[i+2]; d[i]=Math.min(255,r*.393+g*.769+b*.189); d[i+1]=Math.min(255,r*.349+g*.686+b*.168); d[i+2]=Math.min(255,r*.272+g*.534+b*.131); }
  } else if (filter === 'invert') {
    for (let i = 0; i < d.length; i += 4) { d[i]=255-d[i]; d[i+1]=255-d[i+1]; d[i+2]=255-d[i+2]; }
  } else if (filter === 'vintage') {
    for (let i = 0; i < d.length; i += 4) { d[i]=Math.min(255,d[i]*0.9+30); d[i+1]=Math.min(255,d[i+1]*0.85+20); d[i+2]=Math.min(255,d[i+2]*0.7); }
  } else if (filter === 'cold') {
    for (let i = 0; i < d.length; i += 4) { d[i]=Math.max(0,d[i]-30); d[i+2]=Math.min(255,d[i+2]+30); }
  } else if (filter === 'warm') {
    for (let i = 0; i < d.length; i += 4) { d[i]=Math.min(255,d[i]+30); d[i+2]=Math.max(0,d[i+2]-20); }
  } else if (filter === 'fade') {
    for (let i = 0; i < d.length; i += 4) { d[i]=d[i]*0.8+40; d[i+1]=d[i+1]*0.8+40; d[i+2]=d[i+2]*0.8+40; }
  } else if (filter === 'sharpen') {
    const w = ctx.canvas.width, h2 = ctx.canvas.height;
    const kernel = [0,-1,0,-1,5,-1,0,-1,0];
    const temp = new Uint8ClampedArray(d);
    for (let y = 1; y < h2-1; y++) for (let x = 1; x < w-1; x++) {
      const idx = (y*w+x)*4;
      for (let c = 0; c < 3; c++) {
        let s = 0;
        for (let ky = -1; ky <= 1; ky++) for (let kx = -1; kx <= 1; kx++) s += temp[((y+ky)*w+(x+kx))*4+c] * kernel[(ky+1)*3+(kx+1)];
        d[idx+c] = Math.max(0, Math.min(255, s));
      }
    }
  } else if (filter === 'emboss') {
    const w = ctx.canvas.width, h2 = ctx.canvas.height;
    const kernel = [-2,-1,0,-1,1,1,0,1,2];
    const temp = new Uint8ClampedArray(d);
    for (let y = 1; y < h2-1; y++) for (let x = 1; x < w-1; x++) {
      const idx = (y*w+x)*4;
      for (let c = 0; c < 3; c++) {
        let s = 128;
        for (let ky = -1; ky <= 1; ky++) for (let kx = -1; kx <= 1; kx++) s += temp[((y+ky)*w+(x+kx))*4+c] * kernel[(ky+1)*3+(kx+1)];
        d[idx+c] = Math.max(0, Math.min(255, s));
      }
    }
  } else if (filter === 'reset') {
    if (imgEditorState.originalImage) { ctx.putImageData(imgEditorState.originalImage, 0, 0); imgEditorState.canvas.style.filter = 'none'; showToast('All filters reset'); return; }
  }
  if (filter !== 'reset') ctx.putImageData(imageData, 0, 0);
  pushEditorHistory();
  showToast(`${filter.charAt(0).toUpperCase()+filter.slice(1)} filter applied!`, 'success');
};
window.editorZoom = function(factor) {
  imgEditorState.zoom = Math.max(0.25, Math.min(5, imgEditorState.zoom * factor));
  imgEditorState.canvas.style.transform = `scale(${imgEditorState.zoom})`;
};
window.editorFit = function() {
  imgEditorState.zoom = 1;
  imgEditorState.canvas.style.transform = 'scale(1)';
};
window.editorRotate = function(degrees) {
  imgEditorState.rotation = (imgEditorState.rotation + degrees) % 360;
  const ctx = imgEditorState.ctx;
  const w = ctx.canvas.width, h = ctx.canvas.height;
  const img = ctx.getImageData(0, 0, w, h);
  const tmp = document.createElement('canvas');
  tmp.width = h; tmp.height = w;
  const tctx = tmp.getContext('2d');
  tctx.translate(tmp.width/2, tmp.height/2);
  tctx.rotate(degrees * Math.PI / 180);
  const img2 = document.createElement('canvas');
  img2.width = w; img2.height = h;
  img2.getContext('2d').putImageData(img, 0, 0);
  tctx.drawImage(img2, -w/2, -h/2);
  ctx.canvas.width = tmp.width; ctx.canvas.height = tmp.height;
  ctx.drawImage(tmp, 0, 0);
  pushEditorHistory();
};
window.editorFlip = function(dir) {
  const ctx = imgEditorState.ctx;
  const w = ctx.canvas.width, h = ctx.canvas.height;
  const tmp = document.createElement('canvas');
  tmp.width = w; tmp.height = h;
  const tctx = tmp.getContext('2d');
  if (dir === 'h') { tctx.translate(w, 0); tctx.scale(-1, 1); }
  else { tctx.translate(0, h); tctx.scale(1, -1); }
  const img = document.createElement('canvas');
  img.width = w; img.height = h;
  img.getContext('2d').putImageData(ctx.getImageData(0, 0, w, h), 0, 0);
  tctx.drawImage(img, 0, 0);
  ctx.clearRect(0, 0, w, h);
  ctx.drawImage(tmp, 0, 0);
  pushEditorHistory();
};
window.downloadEditedImage = function() {
  const canvas = imgEditorState.canvas;
  if (canvas.style.display === 'none') { showToast('No image to download', 'warning'); return; }
  const url = canvas.toDataURL('image/png');
  const a = document.createElement('a');
  a.href = url; a.download = 'templix-edited-image.png';
  a.click();
  showToast('Image downloaded!', 'success');
};
window.useEditedAsBackground = function() {
  const canvas = imgEditorState.canvas;
  if (canvas.style.display === 'none') { showToast('No image loaded', 'warning'); return; }
  const url = canvas.toDataURL('image/png');
  const bg = {
    id: Date.now() + Math.random(),
    type: 'image',
    url,
    name: 'Edited Image',
  };
  window.APP_STATE.backgrounds.push(bg);
  renderBgThumbs();
  document.getElementById('uploaded-label').style.display = '';
  closeImageEditor();
  showToast('Edited image added as background! 🎨', 'success');
};

// ======================== FIRST TIME LOAD FROM STORAGE ========================
document.addEventListener('DOMContentLoaded', function() {
  try {
    const saved = JSON.parse(localStorage.getItem('templix_studio_v3'));
    if (saved && saved.content) {
      const heading = saved.content.heading;
      if (heading) {
        // Small welcome back toast
        setTimeout(() => showToast(`Welcome back! Last project: "${heading.slice(0,30)}..."`, 'info'), 3000);
      }
    }
  } catch(e) {}
}, { once: true });

