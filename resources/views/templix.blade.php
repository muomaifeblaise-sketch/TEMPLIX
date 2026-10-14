<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#ff3cac">
<meta name="csrf-token" content="{{ csrf_token() }}">
<link rel="icon" type="image/png" href="{{ asset('assets/logo/templix-favicon-64.png') }}">
<link rel="apple-touch-icon" href="{{ asset('assets/logo/templix-favicon-192.png') }}">
<title>TEMPLIX — Professional Design Studio</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700;1,900&family=Righteous&family=Abril+Fatface&family=Oswald:wght@200;300;400;500;600;700&family=Dancing+Script:wght@400;500;600;700&family=Rajdhani:wght@300;400;500;600;700&family=Black+Han+Sans&family=Permanent+Marker&family=Fredericka+the+Great&family=Cinzel:wght@400;600;700;800;900&family=Uncial+Antiqua&family=Press+Start+2P&family=Satisfy&family=Russo+One&family=Anton&family=Exo+2:ital,wght@0,100;0,400;0,700;0,900;1,400&family=Lobster&family=Pacifico&family=Rock+Salt&family=Special+Elite&family=VT323&family=Monoton&family=Bungee+Shade&family=Bungee+Inline&family=Bungee&family=Alfa+Slab+One&family=Big+Shoulders+Display:wght@100;400;700;900&family=Changa:wght@400;700;800&family=Wallpoet&family=Teko:wght@300;400;500;600;700&family=Raleway:ital,wght@0,100;0,400;0,700;0,900;1,400&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,300;1,400&family=Poppins:ital,wght@0,300;0,400;0,600;0,700;0,800;0,900;1,400&family=Nunito:wght@300;400;600;700;800;900&family=Source+Sans+3:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,400&family=Roboto+Condensed:wght@300;400;700&family=Barlow:wght@300;400;600;700;800;900&family=Barlow+Condensed:wght@300;400;600;700;800;900&family=Barlow+Semi+Condensed:wght@300;400;600;700&family=Fjalla+One&family=Passion+One:wght@400;700;900&family=Squada+One&family=Ultra&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=PT+Serif:ital,wght@0,400;0,700;1,400&family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400&family=IM+Fell+English:ital@0;1&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Josefin+Sans:ital,wght@0,100;0,300;0,400;0,600;0,700;1,400&family=Josefin+Slab:ital,wght@0,100;0,300;0,400;0,700;1,400&family=Sacramento&family=Great+Vibes&family=Pinyon+Script&family=Alex+Brush&family=Allura&family=Kaushan+Script&family=Courgette&family=Yellowtail&family=Niconne&family=Amatic+SC:wght@400;700&family=Indie+Flower&family=Handlee&family=Caveat:wght@400;500;600;700&family=Shadows+Into+Light&family=Coming+Soon&family=Patrick+Hand&family=Gloria+Hallelujah&family=Reenie+Beanie&family=Orbitron:wght@400;500;600;700;800;900&family=Audiowide&family=Syncopate:wght@400;700&family=Share+Tech&family=Share+Tech+Mono&family=Michroma&family=Electrolize&family=Rajdhani:wght@300;400;500;600;700&family=Questrial&family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400&family=Kanit:ital,wght@0,300;0,400;0,600;0,700;0,900;1,400&family=Jost:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,700;1,400&family=Inter:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,400&family=Spectral:ital,wght@0,400;0,600;0,700;1,400&family=Karla:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Manrope:wght@300;400;600;700;800&family=Syne:wght@400;600;700;800&family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Chakra+Petch:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Lexend:wght@300;400;600;700&family=Outfit:wght@300;400;600;700;800&family=Unbounded:wght@400;600;700;800;900&family=Be+Vietnam+Pro:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet">
<link href="{{ asset('css/templix.css') }}" rel="stylesheet">
<script src="{{ asset('js/watermark.js') }}"></script>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet">
<link href="{{ asset('css/templix-v5.css') }}" rel="stylesheet">
</head>
<body>

<!-- SPLASH SCREEN -->
<div id="splash-screen">
  <div class="splash-logo" style="flex-direction:column;align-items:center;gap:18px;">
    <img src="{{ asset('assets/logo/templix-mark.png') }}" alt="Templix" width="120" height="116" style="width:120px;height:auto;animation: splashPulse 1.5s ease-in-out infinite alternate;">
    <div class="splash-text" style="text-align:center;">
      <img src="{{ asset('assets/logo/templix-wordmark-light.png') }}" alt="Templix" style="height:54px;width:auto;display:block;margin:0 auto 6px">
      <div class="splash-sub">GRAPHIC EDITOR</div>
    </div>
  </div>
  <div class="splash-loader">
    <div class="splash-bar"></div>
  </div>
  <div class="splash-version">v4.0 PRO &middot; DESIGN STUDIO</div>
</div>

<!-- PROFILE / ONBOARDING SCREEN -->
<div id="profile-screen" style="display:none">
  <div class="profile-container">
    <div class="profile-header"><img src="{{ asset('assets/logo/templix-mark.png') }}" alt="Templix" style="height:64px;width:auto;display:block;margin:0 auto 12px">
      <div class="profile-title">Welcome to TEMPLIX! <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:-0.15em;flex-shrink:0"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10c.513 0 1-.025 1.48-.073a1 1 0 0 0 .92-1v-.001a1 1 0 0 1 1-1h1.1a2 2 0 0 0 2-2 8 8 0 0 0-6.5-7.926"/></svg></div>
      <div class="profile-subtitle">Tell us about yourself so we can personalize your design experience</div>
    </div>

    <form class="profile-form" id="profile-form">
      <div class="form-group">
        <label for="user-name">Your Name</label>
        <input type="text" id="user-name" placeholder="Enter your name" required>
      </div>

      <div class="form-group">
        <label>Your Profession / Industry</label>
        <div class="professions-grid">
          <button type="button" class="profession-btn" data-profession="designer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:-0.15em;flex-shrink:0"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10c.513 0 1-.025 1.48-.073a1 1 0 0 0 .92-1v-.001a1 1 0 0 1 1-1h1.1a2 2 0 0 0 2-2 8 8 0 0 0-6.5-7.926"/></svg> Designer</button>
          <button type="button" class="profession-btn" data-profession="marketer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:-0.15em;flex-shrink:0"><path d="M3 11l19-9-9 19-2-8-8-2z"/></svg> Marketer</button>
          <button type="button" class="profession-btn" data-profession="entrepreneur"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:-0.15em;flex-shrink:0"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2"/><path d="M12 13V3l-3 3M12 3l3 3"/><path d="M9 13h6l1.5 5h-9L9 13z"/></svg> Entrepreneur</button>
          <button type="button" class="profession-btn" data-profession="educator"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:-0.15em;flex-shrink:0"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg> Educator</button>
          <button type="button" class="profession-btn" data-profession="artist"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:-0.15em;flex-shrink:0"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg> Artist</button>
          <button type="button" class="profession-btn" data-profession="other">⭐ Other</button>
        </div>
        <input type="hidden" id="user-profession" required>
      </div>
    </form>

    <div class="profile-actions">
      <button class="profile-btn profile-btn-skip" id="skip-profile-btn">Skip</button>
      <button class="profile-btn profile-btn-primary" id="submit-profile-btn">Continue</button>
    </div>
  </div>
</div>

<!-- MAIN APP -->
<div id="app" style="display:none">

<!-- TOP BAR -->
<header id="topbar">
  <div class="tb-left">
    <button class="tb-icon-btn" id="toggle-left-btn" title="Toggle Sidebar">
      <i class="fas fa-bars"></i>
    </button>
    <div class="logo-wrap">
      <img src="{{ asset('assets/logo/templix-mark.png') }}" alt="Templix" style="height:34px;width:auto;flex-shrink:0">
      
    </div>
  </div>

  <div class="tb-center" id="tb-center">
    <button class="tb-tool-btn active" data-tool="pointer" title="Select (V)"><i class="fas fa-mouse-pointer"></i></button>
    <button class="tb-tool-btn" data-tool="text" title="Text (T)"><i class="fas fa-font"></i></button>
    <button class="tb-tool-btn" data-tool="shape" title="Shapes (S)"><i class="fas fa-shapes"></i></button>
    <div class="tb-sep"></div>
    <button class="tb-tool-btn" id="undo-btn" title="Undo (Ctrl+Z)"><i class="fas fa-undo"></i></button>
    <button class="tb-tool-btn" id="redo-btn" title="Redo (Ctrl+Y)"><i class="fas fa-redo"></i></button>
    <div class="tb-sep"></div>
    <button class="tb-tool-btn" id="zoom-in-btn" title="Zoom In"><i class="fas fa-search-plus"></i></button>
    <span class="zoom-label" id="zoom-label">100%</span>
    <button class="tb-tool-btn" id="zoom-out-btn" title="Zoom Out"><i class="fas fa-search-minus"></i></button>
  </div>

  <div class="tb-right">
    <button class="tb-action-btn" onclick="openSavedModal()" title="Saved &amp; Favorites"><i class="fas fa-bookmark"></i> <span>Saved</span></button>
    <button class="tb-action-btn" id="save-btn"><i class="fas fa-save"></i> <span>Save</span></button>
    <button class="tb-action-btn primary" id="gen-btn"><i class="fas fa-magic"></i> <span>Generate</span></button>
    <button class="tb-action-btn success" id="export-all-btn"><i class="fas fa-download"></i> <span>Export All</span></button>
    <button class="tb-icon-btn" onclick="startTutorial()" title="Help / Tutorial"><i class="fas fa-question-circle"></i></button>
    <button class="tb-icon-btn" id="toggle-right-btn" title="Toggle Panel">
      <i class="fas fa-sliders-h"></i>
    </button>
  </div>
</header>

<!-- LAYOUT -->
<div id="layout">

  <!-- LEFT SIDEBAR -->
  <aside id="left-sidebar" class="open">
    <div class="sidebar-scroll">

      <!-- DESIGN CATEGORIES -->
      <div class="sidebar-section">
        <div class="section-header">
          <i class="fas fa-layer-group"></i> Design Style
          <span class="section-badge" id="cat-badge">Modern</span>
        </div>
        <div class="cat-search">
          <input type="text" placeholder="Search styles..." id="cat-search-input" class="mini-input">
        </div>
        <div class="cat-scroll" id="cat-list">
          <!-- Populated by JS -->
        </div>
      </div>

      <!-- BACKGROUNDS -->
      <div class="sidebar-section">
        <div class="section-header">
          <i class="fas fa-image"></i> Backgrounds
          <span class="section-badge" id="bg-count-badge">0</span>
        </div>
        <div class="upload-area" id="upload-area">
          <input type="file" id="bg-file-input" accept="image/*" multiple hidden>
          <div class="upload-inner" onclick="document.getElementById('bg-file-input').click()">
            <div class="upload-icon"><i class="fas fa-cloud-upload-alt"></i></div>
            <div class="upload-title">Import Backgrounds</div>
            <div class="upload-hint">Drag & drop or click</div>
            <div class="upload-formats">PNG · JPG · WEBP · SVG</div>
          </div>
        </div>

        <!-- Gradient Presets -->
        <div class="subsection-label">Gradient Presets</div>
        <div class="gradient-grid" id="gradient-grid">
          <!-- Populated by JS -->
        </div>

        <!-- Pattern Presets -->
        <div class="subsection-label">Canvas Patterns</div>
        <div class="pattern-grid" id="pattern-grid">
          <!-- Populated by JS -->
        </div>

        <!-- Uploaded BGs -->
        <div class="subsection-label" id="uploaded-label" style="display:none">Uploaded Images</div>
        <div class="bg-thumbs" id="bg-thumbs"></div>
      </div>

      <!-- LOGO / WATERMARK -->
      <div class="sidebar-section">
        <div class="section-header">
          <i class="fas fa-id-badge"></i> Brand Logo
          <span class="section-badge" id="logo-badge">None</span>
        </div>

        <!-- Logo upload or preview -->
        <div id="logo-preview-wrap" class="logo-preview-wrap" style="display:none">
          <img id="logo-preview-img" class="logo-preview-img" src="" alt="Logo">
          <button class="logo-remove-btn" onclick="removeLogo()" title="Remove logo"><i class="fas fa-times"></i></button>
        </div>

        <div class="upload-area" id="logo-upload-area" style="margin-bottom:8px">
          <input type="file" id="logo-file-input" accept="image/png,image/jpeg,image/jpg,image/gif,image/svg+xml,image/webp" hidden>
          <div class="upload-inner" onclick="document.getElementById('logo-file-input').click()">
            <div class="upload-icon"><i class="fas fa-image"></i></div>
            <div class="upload-title" id="logo-upload-title">Upload Logo</div>
            <div class="upload-hint">PNG · JPG · SVG · GIF</div>
          </div>
        </div>

        <!-- Position -->
        <div class="subsection-label">Logo Position</div>
        <div class="logo-pos-grid" id="logo-pos-grid">
          <button class="logo-pos-btn active" data-pos="top-left" onclick="setLogoPos(this)">↖ Top Left</button>
          <button class="logo-pos-btn" data-pos="top-center" onclick="setLogoPos(this)">↑ Top Center</button>
          <button class="logo-pos-btn" data-pos="top-right" onclick="setLogoPos(this)">↗ Top Right</button>
          <button class="logo-pos-btn" data-pos="bottom-left" onclick="setLogoPos(this)">↙ Bot Left</button>
          <button class="logo-pos-btn" data-pos="bottom-center" onclick="setLogoPos(this)">↓ Bot Center</button>
          <button class="logo-pos-btn" data-pos="bottom-right" onclick="setLogoPos(this)">↘ Bot Right</button>
          <button class="logo-pos-btn" data-pos="center" style="grid-column:1/-1" onclick="setLogoPos(this)">⊙ Center</button>
        </div>

        <!-- Size -->
        <div class="subsection-label" style="margin-top:8px">Logo Size <span id="logo-size-val">20</span>%</div>
        <div class="logo-size-row">
          <input type="range" class="rp-range" id="logo-size-range" min="5" max="60" value="20"
            oninput="document.getElementById('logo-size-val').textContent=this.value; updateLogoSettings()">
        </div>

        <!-- Opacity -->
        <div class="subsection-label" style="margin-top:8px">Logo Opacity <span id="logo-opacity-val">100</span>%</div>
        <div class="logo-opacity-row">
          <input type="range" class="rp-range" id="logo-opacity-range" min="10" max="100" value="100"
            oninput="document.getElementById('logo-opacity-val').textContent=this.value; updateLogoSettings()">
        </div>
      </div>

      <!-- COLOR PALETTES -->
      <div class="sidebar-section">
        <div class="section-header">
          <i class="fas fa-palette"></i> Color Palettes
        </div>
        <div class="palette-list" id="palette-list">
          <!-- Populated by JS -->
        </div>
      </div>

      <!-- TYPOGRAPHY PRESETS -->
      <div class="sidebar-section">
        <div class="section-header">
          <i class="fas fa-font"></i> Font Pairs
          <button onclick="openFontPicker()" style="margin-left:auto;background:rgba(255,60,172,0.15);border:1px solid var(--accent);color:var(--accent);padding:2px 8px;border-radius:4px;font-size:0.6rem;font-weight:700;cursor:pointer;letter-spacing:1px">100 FONTS</button>
        </div>
        <div class="font-pairs" id="font-pairs">
          <!-- Populated by JS -->
        </div>
      </div>

      <!-- STATS -->
      <div class="sidebar-section stats-section">
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-val" id="stat-gen">0</div>
            <div class="stat-lbl">Generated</div>
          </div>
          <div class="stat-item">
            <div class="stat-val" id="stat-exp">0</div>
            <div class="stat-lbl">Exported</div>
          </div>
          <div class="stat-item">
            <div class="stat-val" id="stat-bgs">0</div>
            <div class="stat-lbl">Backgrounds</div>
          </div>
          <div class="stat-item">
            <div class="stat-val" id="stat-designs">0</div>
            <div class="stat-lbl">Designs</div>
          </div>
        </div>
      </div>

    </div>
  </aside>

  <!-- MAIN CANVAS AREA -->
  <main id="main-area">
    <!-- Canvas Top Bar -->
    <div id="canvas-bar">
      <div class="cbar-left">
        <div class="view-btns">
          <button class="view-btn active" data-cols="1" title="Single"><i class="fas fa-square"></i></button>
          <button class="view-btn" data-cols="2" title="2 columns"><i class="fas fa-th-large"></i></button>
          <button class="view-btn" data-cols="3" title="3 columns"><i class="fas fa-th"></i></button>
          <button class="view-btn" data-cols="4" title="4 columns"><i class="fas fa-border-all"></i></button>
        </div>
        <div class="cbar-sep"></div>
        <button class="cbar-btn" id="shuffle-btn"><i class="fas fa-random"></i> Shuffle</button>
        <button class="cbar-btn" id="clear-btn"><i class="fas fa-trash"></i> Clear</button>
        <button class="cbar-btn" id="sort-btn"><i class="fas fa-sort"></i> Sort</button>
      </div>
      <div class="cbar-center">
        <span class="design-counter" id="design-counter" style="display:none">
          <i class="fas fa-layer-group"></i> <span id="dc-num">0</span> Designs
        </span>
      </div>
      <div class="cbar-right">
        <select class="mini-select" id="aspect-select">
          <option value="3/4">Portrait 3:4</option>
          <option value="4/5">Portrait 4:5</option>
          <option value="1/1">Square 1:1</option>
          <option value="9/16">Story 9:16</option>
          <option value="16/9">Landscape 16:9</option>
          <option value="2/3">Tall 2:3</option>
          <option value="4/3">Wide 4:3</option>
        </select>
        <button class="cbar-btn" id="fullscreen-btn"><i class="fas fa-expand"></i></button>
      </div>
    </div>

    <!-- Designs Grid -->
    <div id="designs-wrapper">
      <div id="designs-grid" class="cols-2">
        <!-- Empty state -->
        <div id="empty-state">
          <div class="empty-icon">
            <i class="fas fa-magic"></i>
          </div>
          <h2>Your Studio Awaits</h2>
          <p>Fill in your content on the right, choose a design style, import your backgrounds, and hit <strong>Generate Designs</strong> to create stunning poster variations.</p>
          <div class="empty-tips">
            <div class="tip"><i class="fas fa-lightbulb"></i> Tip: Import multiple backgrounds to get more variations</div>
            <div class="tip"><i class="fas fa-keyboard"></i> Shortcut: Ctrl+Enter to generate instantly</div>
            <div class="tip"><i class="fas fa-star"></i> Mix Styles mode creates one design per style category</div>
          </div>
          <button class="start-btn" onclick="document.getElementById('gen-btn').click()">
            <i class="fas fa-rocket"></i> Start Creating
          </button>
        </div>
      </div>
    </div>
  </main>

  <!-- RIGHT PANEL -->
  <aside id="right-panel" class="open">
    <div class="sidebar-scroll">

      <!-- CONTENT INPUT TABS -->
      <div class="rp-tabs">
        <button class="rp-tab active" data-rtab="content" onclick="switchRpTab('content',this)"><i class="fas fa-edit"></i> <span>Content</span></button>
        <button class="rp-tab" data-rtab="style" onclick="switchRpTab('style',this)"><i class="fas fa-palette"></i> <span>Style</span></button>
        <button class="rp-tab" data-rtab="layers" onclick="switchRpTab('layers',this)"><i class="fas fa-layer-group"></i> <span>Layers</span></button>
        <button class="rp-tab" data-rtab="export" onclick="switchRpTab('export',this)"><i class="fas fa-download"></i> <span>Export</span></button>
      </div>

      <!-- CONTENT TAB -->
      <div class="rp-pane active" id="rp-content">
        <div class="rp-section">
          <div class="rp-sec-title"><i class="fas fa-tag"></i> Top Label / Tag</div>
          <input type="text" class="rp-input" id="inp-tag" placeholder="e.g. BREAKING · EVENT · SPECIAL" maxlength="80">
          <div class="tag-presets" id="tag-presets">
            <span class="tag-chip" onclick="setVal('inp-tag',this)">BREAKING</span>
            <span class="tag-chip" onclick="setVal('inp-tag',this)">NEW</span>
            <span class="tag-chip" onclick="setVal('inp-tag',this)">EXCLUSIVE</span>
            <span class="tag-chip" onclick="setVal('inp-tag',this)">LIMITED</span>
            <span class="tag-chip" onclick="setVal('inp-tag',this)">LIVE</span>
            <span class="tag-chip" onclick="setVal('inp-tag',this)">SALE</span>
          </div>
        </div>

        <div class="rp-section">
          <div class="rp-sec-title"><i class="fas fa-heading"></i> Main Headline <span class="char-count" id="cc-heading">0/120</span></div>
          <textarea class="rp-input" id="inp-heading" placeholder="Your powerful headline that grabs attention" rows="2" maxlength="120" oninput="updateCharCount('inp-heading','cc-heading',120)"></textarea>
        </div>

        <div class="rp-section">
          <div class="rp-sec-title"><i class="fas fa-h2"></i> Sub-Headline</div>
          <input type="text" class="rp-input" id="inp-sub" placeholder="Supporting statement or tagline" maxlength="120">
        </div>

        <div class="rp-section">
          <div class="rp-sec-title"><i class="fas fa-align-left"></i> Body Text <span class="char-count" id="cc-body">0/400</span></div>
          <textarea class="rp-input" id="inp-body" placeholder="Details, description, extra information..." rows="4" maxlength="400" oninput="updateCharCount('inp-body','cc-body',400)"></textarea>
        </div>

        <div class="rp-section">
          <div class="rp-sec-title"><i class="fas fa-bullhorn"></i> Call To Action</div>
          <input type="text" class="rp-input" id="inp-cta" placeholder="e.g. REGISTER NOW · LEARN MORE" maxlength="50">
        </div>

        <div class="rp-section">
          <div class="rp-sec-title"><i class="fas fa-hashtag"></i> Hashtag / Handle</div>
          <input type="text" class="rp-input" id="inp-hashtag" placeholder="#templix @yourbrand" maxlength="60">
        </div>

        <div class="rp-section">
          <div class="rp-sec-title"><i class="fas fa-map-marker-alt"></i> Date / Location / Contact</div>
          <input type="text" class="rp-input" id="inp-footer" placeholder="Dec 25 · Lagos · www.site.com" maxlength="100">
        </div>

        <div class="rp-section">
          <div class="rp-sec-title"><i class="fas fa-phone"></i> Phone / Website</div>
          <input type="text" class="rp-input" id="inp-contact" placeholder="+234 800 000 0000 · info@brand.com" maxlength="80">
        </div>

        <!-- Quick Templates -->
        <div class="rp-section">
          <div class="rp-sec-title"><i class="fas fa-file-alt"></i> Quick Templates</div>
          <div class="template-list" id="template-list">
            <!-- Populated by JS -->
          </div>
        </div>
      </div>

      <!-- STYLE TAB -->
      <div class="rp-pane" id="rp-style">
        <div class="rp-section">
          <div class="rp-sec-title"><i class="fas fa-copy"></i> Variations</div>
          <div class="stepper-row">
            <button class="stepper-btn" onclick="changeVar(-1)"><i class="fas fa-minus"></i></button>
            <span class="stepper-val" id="var-val">6</span>
            <button class="stepper-btn" onclick="changeVar(1)"><i class="fas fa-plus"></i></button>
            <span class="stepper-hint">designs per style</span>
          </div>
        </div>

        <div class="rp-section">
          <div class="rp-sec-title"><i class="fas fa-paint-brush"></i> Accent Color</div>
          <div class="color-palette" id="accent-palette">
            <!-- Populated by JS -->
          </div>
          <div class="custom-color-row">
            <input type="color" id="custom-color" class="custom-color-picker" onchange="setCustomAccent(this)">
            <label for="custom-color" class="custom-color-label">Custom Color</label>
            <span class="current-accent" id="current-accent-swatch"></span>
          </div>
        </div>

        <div class="rp-section">
          <div class="rp-sec-title"><i class="fas fa-adjust"></i> Overlay Strength <span id="ov-val">70</span>%</div>
          <input type="range" class="rp-range" id="overlay-range" min="10" max="98" value="70" oninput="document.getElementById('ov-val').textContent=this.value">
        </div>

        <div class="rp-section">
          <div class="rp-sec-title"><i class="fas fa-text-height"></i> Text Scale <span id="ts-val">100</span>%</div>
          <input type="range" class="rp-range" id="textscale-range" min="60" max="150" value="100" oninput="document.getElementById('ts-val').textContent=this.value">
        </div>

        <div class="rp-section">
          <div class="rp-sec-title"><i class="fas fa-border-style"></i> Border Style</div>
          <div class="border-opts" id="border-opts">
            <div class="border-opt active" data-border="none" onclick="selectBorder(this)">None</div>
            <div class="border-opt" data-border="thin" onclick="selectBorder(this)">Thin</div>
            <div class="border-opt" data-border="thick" onclick="selectBorder(this)">Thick</div>
            <div class="border-opt" data-border="double" onclick="selectBorder(this)">Double</div>
            <div class="border-opt" data-border="glow" onclick="selectBorder(this)">Glow</div>
            <div class="border-opt" data-border="dash" onclick="selectBorder(this)">Dashed</div>
          </div>
        </div>

        <div class="rp-section">
          <div class="rp-sec-title"><i class="fas fa-moon"></i> Vignette Effect <span id="vig-val">0</span>%</div>
          <input type="range" class="rp-range" id="vignette-range" min="0" max="100" value="0" oninput="document.getElementById('vig-val').textContent=this.value">
        </div>

        <div class="rp-section">
          <div class="rp-sec-title"><i class="fas fa-wave-square"></i> Noise / Grain <span id="noise-val">0</span>%</div>
          <input type="range" class="rp-range" id="noise-range" min="0" max="100" value="0" oninput="document.getElementById('noise-val').textContent=this.value">
        </div>

        <div class="rp-section">
          <div class="rp-sec-title"><i class="fas fa-toggle-on"></i> Options</div>
          <div class="toggle-list">
            <div class="toggle-row">
              <span>Mix All Styles</span>
              <label class="tgl"><input type="checkbox" id="tog-mix"><span class="tgl-sl"></span></label>
            </div>
            <div class="toggle-row">
              <span>Show CTA Button</span>
              <label class="tgl"><input type="checkbox" id="tog-cta" checked><span class="tgl-sl"></span></label>
            </div>
            <div class="toggle-row">
              <span>Show Hashtag</span>
              <label class="tgl"><input type="checkbox" id="tog-hash" checked><span class="tgl-sl"></span></label>
            </div>
            <div class="toggle-row">
              <span>Show Footer Bar</span>
              <label class="tgl"><input type="checkbox" id="tog-footer" checked><span class="tgl-sl"></span></label>
            </div>
            <div class="toggle-row">
              <span>Decorative Elements</span>
              <label class="tgl"><input type="checkbox" id="tog-deco" checked><span class="tgl-sl"></span></label>
            </div>
            <div class="toggle-row">
              <span>Show Style Label</span>
              <label class="tgl"><input type="checkbox" id="tog-label" checked><span class="tgl-sl"></span></label>
            </div>
            <div class="toggle-row">
              <span>Show Logo on Designs</span>
              <label class="tgl"><input type="checkbox" id="tog-logo" checked><span class="tgl-sl"></span></label>
            </div>
            <div class="toggle-row">
              <span>Watermark</span>
              <label class="tgl"><input type="checkbox" id="tog-wm"><span class="tgl-sl"></span></label>
            </div>
          </div>
        </div>
      </div>

      <!-- LAYERS TAB -->
      <div class="rp-pane" id="rp-layers">
        <div class="rp-section">
          <div class="rp-sec-title"><i class="fas fa-info-circle"></i> Layer Overview</div>
          <div class="layer-info">Each generated design is a layer. Click a design card to select it, then use the controls below.</div>
          <button onclick="openImageEditor()" style="width:100%;margin-top:10px;padding:8px;background:linear-gradient(135deg,#7c3aed,#a855f7);border:none;border-radius:var(--radius-sm);color:#fff;font-size:0.72rem;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;font-family:var(--font-main)">
            <i class="fas fa-paint-brush"></i> Open Image Editor
          </button>
        </div>
        <div class="rp-section">
          <div id="layers-list" class="layers-list">
            <div class="no-layers-msg">No designs yet. Generate to see layers.</div>
          </div>
        </div>
        <div class="rp-section">
          <div class="rp-sec-title"><i class="fas fa-sliders-h"></i> Selected Design</div>
          <div class="sel-controls">
            <div class="rp-sec-title" style="font-size:0.7rem;margin-top:8px">Brightness <span id="bright-val">100</span>%</div>
            <input type="range" class="rp-range" id="bright-range" min="30" max="200" value="100" oninput="adjustSelected('brightness',this.value,'%');document.getElementById('bright-val').textContent=this.value">
            <div class="rp-sec-title" style="font-size:0.7rem;margin-top:8px">Contrast <span id="cont-val">100</span>%</div>
            <input type="range" class="rp-range" id="cont-range" min="30" max="200" value="100" oninput="adjustSelected('contrast',this.value,'%');document.getElementById('cont-val').textContent=this.value">
            <div class="rp-sec-title" style="font-size:0.7rem;margin-top:8px">Saturate <span id="sat-val">100</span>%</div>
            <input type="range" class="rp-range" id="sat-range" min="0" max="250" value="100" oninput="adjustSelected('saturate',this.value,'%');document.getElementById('sat-val').textContent=this.value">
            <div class="rp-sec-title" style="font-size:0.7rem;margin-top:8px">Blur <span id="blur-val">0</span>px</div>
            <input type="range" class="rp-range" id="blur-range" min="0" max="20" value="0" oninput="adjustSelectedBlur(this.value)">
          </div>
        </div>
      </div>

      <!-- EXPORT TAB -->
      <div class="rp-pane" id="rp-export">
        <div class="rp-section">
          <div class="rp-sec-title"><i class="fas fa-file-export"></i> Export Format</div>
          <div class="format-grid">
            <div class="format-card active" data-fmt="png" onclick="selectFormat(this)">
              <i class="fas fa-file-image"></i>
              <span>PNG</span>
              <small>Lossless</small>
            </div>
            <div class="format-card" data-fmt="jpeg" onclick="selectFormat(this)">
              <i class="fas fa-image"></i>
              <span>JPEG</span>
              <small>Compressed</small>
            </div>
            <div class="format-card" data-fmt="webp" onclick="selectFormat(this)">
              <i class="fas fa-file-code"></i>
              <span>WEBP</span>
              <small>Modern</small>
            </div>
          </div>
        </div>

        <div class="rp-section">
          <div class="rp-sec-title"><i class="fas fa-expand-arrows-alt"></i> Export Scale <span id="escale-val">2x</span></div>
          <input type="range" class="rp-range" id="escale-range" min="1" max="4" value="2" step="1" oninput="document.getElementById('escale-val').textContent=this.value+'x'">
          <div class="export-quality-info" id="export-quality-info">~1080×1440px · Good quality</div>
        </div>

        <div class="rp-section">
          <div class="rp-sec-title"><i class="fas fa-file-alt"></i> File Naming</div>
          <input type="text" class="rp-input" id="export-prefix" placeholder="templix-design" value="templix-design">
        </div>

        <div class="rp-section">
          <button class="big-export-btn" onclick="exportAll()">
            <i class="fas fa-download"></i> Export All Designs
          </button>
          <button class="big-export-btn secondary" onclick="exportSelected()" style="margin-top:8px">
            <i class="fas fa-file-export"></i> Export Selected
          </button>
          <button class="big-export-btn outline" onclick="copyToClipboard()" style="margin-top:8px">
            <i class="fas fa-copy"></i> Copy Selected to Clipboard
          </button>
        </div>

        <div class="rp-section">
          <div class="rp-sec-title"><i class="fas fa-share-alt"></i> Share</div>
          <button class="share-btn" onclick="shareDesign()"><i class="fas fa-share"></i> Share Design</button>
          <button class="share-btn" onclick="printDesign()" style="margin-top:6px"><i class="fas fa-print"></i> Print</button>
        </div>
      </div>

      <!-- GENERATE BUTTON (always visible) -->
      <div class="rp-gen-area">
        <button class="generate-mega-btn" onclick="generateDesigns()">
          <div class="gmb-icon"><i class="fas fa-magic"></i></div>
          <div class="gmb-text">
            <span class="gmb-main">Generate Designs</span>
            <span class="gmb-sub">Create all variations now</span>
          </div>
          <div class="gmb-arrow"><i class="fas fa-arrow-right"></i></div>
        </button>
        <div class="gen-hint">
          <kbd>Ctrl</kbd> + <kbd>Enter</kbd> to generate quickly
        </div>
      </div>

    </div>
  </aside>
</div>
</div>

<!-- SPINNER OVERLAY -->
<div id="spinner-overlay">
  <div class="spinner-box">
    <div class="spinner-rings">
      <div class="sr1"></div>
      <div class="sr2"></div>
      <div class="sr3"></div>
    </div>
    <div class="spinner-title">TEMPLIX STUDIO</div>
    <div class="spinner-msg" id="spinner-msg">Generating your masterpiece...</div>
    <div class="spinner-prog">
      <div class="spinner-bar" id="spinner-bar"></div>
    </div>
    <div class="spinner-count" id="spinner-count">0 / 0</div>
  </div>
</div>

<!-- PREVIEW MODAL -->
<div id="preview-modal">
  <div class="pm-backdrop" onclick="closePreview()"></div>
  <div class="pm-box">
    <div class="pm-header">
      <span class="pm-title" id="pm-title">Design Preview</span>
      <div class="pm-actions">
        <button class="pm-btn" onclick="exportPreview()"><i class="fas fa-download"></i> Export</button>
        <button class="pm-btn" onclick="closePreview()"><i class="fas fa-times"></i></button>
      </div>
    </div>
    <div class="pm-content" id="pm-content"></div>
    <div class="pm-nav">
      <button class="pm-nav-btn" onclick="prevPreview()"><i class="fas fa-chevron-left"></i></button>
      <span class="pm-nav-info" id="pm-nav-info">1 / 1</span>
      <button class="pm-nav-btn" onclick="nextPreview()"><i class="fas fa-chevron-right"></i></button>
    </div>
  </div>
</div>

<!-- TOAST CONTAINER -->
<div id="toast-box"></div>

<!-- CONTEXT MENU -->
<div id="ctx-menu">
  <div class="ctx-item" onclick="ctxAction('preview')"><i class="fas fa-eye"></i> Preview</div>
  <div class="ctx-item" onclick="ctxAction('export')"><i class="fas fa-download"></i> Export PNG</div>
  <div class="ctx-item" onclick="ctxAction('duplicate')"><i class="fas fa-copy"></i> Duplicate</div>
  <div class="ctx-item" onclick="ctxAction('favorite')"><i class="fas fa-heart"></i> Favorite</div>
  <div class="ctx-sep"></div>
  <div class="ctx-item danger" onclick="ctxAction('delete')"><i class="fas fa-trash"></i> Delete</div>
</div>

<!-- MOBILE FLOATING BTNS -->
<div id="mobile-fabs">
  <button class="fab" id="fab-left" onclick="toggleLeftSidebar()"><i class="fas fa-th-list"></i></button>
  <button class="fab primary" id="fab-gen" onclick="generateDesigns()"><i class="fas fa-magic"></i></button>
  <button class="fab" id="fab-right" onclick="toggleRightPanel()"><i class="fas fa-sliders-h"></i></button>
</div>

<!-- TUTORIAL OVERLAY -->
<div id="tutorial-overlay">
  <div class="tut-spotlight" id="tut-spotlight"></div>
  <div class="tut-card" id="tut-card">
    <div class="tut-progress" id="tut-progress"></div>
    <div class="tut-step-num" id="tut-step-num">Step 1 / 10</div>
    <div class="tut-title" id="tut-title">Welcome to TEMPLIX Studio!</div>
    <div class="tut-desc" id="tut-desc">Let's take a quick tour so you can start creating amazing designs. Click Next to begin!</div>
    <div class="tut-arrow down" id="tut-arrow"></div>
    <div class="tut-btns">
      <button class="tut-btn skip" onclick="endTutorial()">Skip Tour</button>
      <button class="tut-btn next" id="tut-next-btn" onclick="tutorialNext()">Next →</button>
    </div>
  </div>
</div>

<!-- SAVED DESIGNS MODAL -->
<div id="saved-modal">
  <div class="saved-backdrop" onclick="closeSavedModal()"></div>
  <div class="saved-box">
    <div class="saved-header">
      <h3><i class="fas fa-bookmark" style="color:var(--accent)"></i> Saved & Favorites</h3>
      <div class="saved-tabs">
        <button class="saved-tab active" onclick="switchSavedTab('saved',this)">💾 Saved</button>
        <button class="saved-tab" onclick="switchSavedTab('favorites',this)">❤️ Favorites</button>
        <button class="saved-tab" onclick="switchSavedTab('history',this)">🕒 History</button>
      </div>
      <button class="saved-close" onclick="closeSavedModal()"><i class="fas fa-times"></i></button>
    </div>
    <div class="saved-content" id="saved-content">
      <div class="saved-grid" id="saved-grid"></div>
    </div>
  </div>
</div>

<!-- SAVE NAME MODAL -->
<div id="save-name-modal">
  <div class="sn-backdrop" onclick="document.getElementById('save-name-modal').classList.remove('show')"></div>
  <div class="sn-box">
    <div class="sn-title"><i class="fas fa-save" style="color:var(--accent)"></i> Save Design Project</div>
    <div class="sn-hint">Give this project a name so you can find it later.</div>
    <input type="text" class="rp-input" id="save-name-input" placeholder="e.g. My Event Poster" style="font-size:0.85rem">
    <div class="sn-btns">
      <button class="imgEdit-footer-btn" onclick="document.getElementById('save-name-modal').classList.remove('show')">Cancel</button>
      <button class="imgEdit-footer-btn primary" onclick="confirmSaveProject()">Save Project</button>
    </div>
  </div>
</div>

<!-- IMAGE EDITOR MODAL -->
<div id="img-editor-modal">
  <div class="imgEdit-backdrop" onclick="closeImageEditor()"></div>
  <div class="imgEdit-box">
    <div class="imgEdit-header">
      <h3><i class="fas fa-paint-brush" style="color:var(--accent2)"></i> TEMPLIX Image Editor</h3>
      <input type="file" id="imgEdit-file-input" accept="image/*" hidden onchange="loadImageToEditor(this)">
      <button class="imgEdit-footer-btn" onclick="document.getElementById('imgEdit-file-input').click()"><i class="fas fa-folder-open"></i> Open Image</button>
      <button class="imgEdit-footer-btn" style="margin-left:auto" onclick="closeImageEditor()"><i class="fas fa-times"></i></button>
    </div>
    <div class="imgEdit-body">
      <!-- Tool sidebar -->
      <div class="imgEdit-tools">
        <button class="imgEdit-tool-btn active" data-tool="brush" title="Brush" onclick="setEditorTool(this,'brush')"><i class="fas fa-paint-brush"></i></button>
        <button class="imgEdit-tool-btn" data-tool="eraser" title="Eraser" onclick="setEditorTool(this,'eraser')"><i class="fas fa-eraser"></i></button>
        <button class="imgEdit-tool-btn" data-tool="fill" title="Fill" onclick="setEditorTool(this,'fill')"><i class="fas fa-fill-drip"></i></button>
        <button class="imgEdit-tool-btn" data-tool="text" title="Add Text" onclick="setEditorTool(this,'text')"><i class="fas fa-text-height"></i></button>
        <button class="imgEdit-tool-btn" data-tool="crop" title="Crop" onclick="setEditorTool(this,'crop')"><i class="fas fa-crop-alt"></i></button>
        <button class="imgEdit-tool-btn" data-tool="blur-brush" title="Blur Brush" onclick="setEditorTool(this,'blur-brush')"><i class="fas fa-wind"></i></button>
        <button class="imgEdit-tool-btn" data-tool="lighten" title="Lighten Brush" onclick="setEditorTool(this,'lighten')"><i class="fas fa-sun"></i></button>
        <button class="imgEdit-tool-btn" data-tool="darken" title="Darken Brush" onclick="setEditorTool(this,'darken')"><i class="fas fa-moon"></i></button>
        <div class="imgEdit-tool-sep"></div>
        <button class="imgEdit-tool-btn" title="Undo" onclick="editorUndo()"><i class="fas fa-undo"></i></button>
        <button class="imgEdit-tool-btn" title="Redo" onclick="editorRedo()"><i class="fas fa-redo"></i></button>
        <div class="imgEdit-tool-sep"></div>
        <button class="imgEdit-tool-btn" title="Zoom In" onclick="editorZoom(1.2)"><i class="fas fa-search-plus"></i></button>
        <button class="imgEdit-tool-btn" title="Zoom Out" onclick="editorZoom(0.8)"><i class="fas fa-search-minus"></i></button>
        <button class="imgEdit-tool-btn" title="Fit" onclick="editorFit()"><i class="fas fa-compress-arrows-alt"></i></button>
        <div class="imgEdit-tool-sep"></div>
        <button class="imgEdit-tool-btn" title="Rotate Left" onclick="editorRotate(-90)"><i class="fas fa-undo-alt"></i></button>
        <button class="imgEdit-tool-btn" title="Rotate Right" onclick="editorRotate(90)"><i class="fas fa-redo-alt"></i></button>
        <button class="imgEdit-tool-btn" title="Flip Horizontal" onclick="editorFlip('h')"><i class="fas fa-arrows-alt-h"></i></button>
        <button class="imgEdit-tool-btn" title="Flip Vertical" onclick="editorFlip('v')"><i class="fas fa-arrows-alt-v"></i></button>
      </div>
      <!-- Canvas -->
      <div class="imgEdit-canvas-wrap" id="imgEdit-canvas-wrap">
        <canvas id="imgEdit-canvas"></canvas>
        <div id="imgEdit-placeholder" style="color:var(--text3);font-size:0.85rem;text-align:center;padding:20px">
          <i class="fas fa-image" style="font-size:3rem;margin-bottom:12px;display:block;color:var(--text3)"></i>
          Open an image to start editing<br>
          <small style="opacity:0.6">PNG, JPG, WEBP supported</small>
        </div>
      </div>
      <!-- Settings sidebar -->
      <div class="imgEdit-sidebar">
        <div class="imgEdit-section">
          <div class="imgEdit-sec-title">Brush Settings</div>
          <div class="brush-size-preview" id="brush-size-preview"></div>
          <div class="imgEdit-row">
            <label>Size</label>
            <input type="range" class="imgEdit-range" id="brush-size" min="2" max="80" value="20" oninput="updateBrushPreview()">
            <span class="imgEdit-val" id="brush-size-val">20</span>
          </div>
          <div class="imgEdit-row">
            <label>Opacity</label>
            <input type="range" class="imgEdit-range" id="brush-opacity" min="1" max="100" value="80" oninput="document.getElementById('brush-opacity-val').textContent=this.value">
            <span class="imgEdit-val" id="brush-opacity-val">80</span>
          </div>
          <div class="imgEdit-row">
            <label>Hardness</label>
            <input type="range" class="imgEdit-range" id="brush-hard" min="0" max="100" value="60" oninput="document.getElementById('brush-hard-val').textContent=this.value">
            <span class="imgEdit-val" id="brush-hard-val">60</span>
          </div>
          <div class="imgEdit-sec-title" style="margin-top:10px">Brush Color</div>
          <div class="brush-color-row">
            <div class="brush-color-swatch active" style="background:#ff3cac" onclick="setBrushColor(this,'#ff3cac')"></div>
            <div class="brush-color-swatch" style="background:#00f5d4" onclick="setBrushColor(this,'#00f5d4')"></div>
            <div class="brush-color-swatch" style="background:#f9c859" onclick="setBrushColor(this,'#f9c859')"></div>
            <div class="brush-color-swatch" style="background:#ffffff" onclick="setBrushColor(this,'#ffffff')"></div>
            <div class="brush-color-swatch" style="background:#000000" onclick="setBrushColor(this,'#000000')"></div>
            <div class="brush-color-swatch" style="background:#4ade80" onclick="setBrushColor(this,'#4ade80')"></div>
            <div class="brush-color-swatch" style="background:#f87171" onclick="setBrushColor(this,'#f87171')"></div>
            <div class="brush-color-swatch" style="background:#a78bfa" onclick="setBrushColor(this,'#a78bfa')"></div>
          </div>
          <div style="display:flex;align-items:center;gap:6px;margin-top:6px">
            <input type="color" id="brush-custom-color" style="width:30px;height:30px;border:none;background:none;cursor:pointer;border-radius:4px;padding:0" onchange="setBrushColorCustom(this.value)">
            <label style="font-size:0.65rem;color:var(--text3)">Custom Color</label>
          </div>
        </div>
        <div class="imgEdit-section">
          <div class="imgEdit-sec-title">Image Adjustments</div>
          <div class="imgEdit-row">
            <label>Brightness</label>
            <input type="range" class="imgEdit-range" id="adj-brightness" min="0" max="200" value="100" oninput="applyAdjustments();document.getElementById('adj-b-val').textContent=this.value">
            <span class="imgEdit-val" id="adj-b-val">100</span>
          </div>
          <div class="imgEdit-row">
            <label>Contrast</label>
            <input type="range" class="imgEdit-range" id="adj-contrast" min="0" max="200" value="100" oninput="applyAdjustments();document.getElementById('adj-c-val').textContent=this.value">
            <span class="imgEdit-val" id="adj-c-val">100</span>
          </div>
          <div class="imgEdit-row">
            <label>Saturation</label>
            <input type="range" class="imgEdit-range" id="adj-saturation" min="0" max="300" value="100" oninput="applyAdjustments();document.getElementById('adj-s-val').textContent=this.value">
            <span class="imgEdit-val" id="adj-s-val">100</span>
          </div>
          <div class="imgEdit-row">
            <label>Blur</label>
            <input type="range" class="imgEdit-range" id="adj-blur" min="0" max="20" value="0" oninput="applyAdjustments();document.getElementById('adj-bl-val').textContent=this.value">
            <span class="imgEdit-val" id="adj-bl-val">0</span>
          </div>
          <div class="imgEdit-row">
            <label>Hue</label>
            <input type="range" class="imgEdit-range" id="adj-hue" min="-180" max="180" value="0" oninput="applyAdjustments();document.getElementById('adj-h-val').textContent=this.value">
            <span class="imgEdit-val" id="adj-h-val">0</span>
          </div>
        </div>
        <div class="imgEdit-section">
          <div class="imgEdit-sec-title">Filters</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">
            <button class="imgEdit-footer-btn" onclick="applyFilter('grayscale')">Grayscale</button>
            <button class="imgEdit-footer-btn" onclick="applyFilter('sepia')">Sepia</button>
            <button class="imgEdit-footer-btn" onclick="applyFilter('invert')">Invert</button>
            <button class="imgEdit-footer-btn" onclick="applyFilter('vintage')">Vintage</button>
            <button class="imgEdit-footer-btn" onclick="applyFilter('cold')">Cold</button>
            <button class="imgEdit-footer-btn" onclick="applyFilter('warm')">Warm</button>
            <button class="imgEdit-footer-btn" onclick="applyFilter('fade')">Fade</button>
            <button class="imgEdit-footer-btn" onclick="applyFilter('sharpen')">Sharpen</button>
            <button class="imgEdit-footer-btn" onclick="applyFilter('emboss')">Emboss</button>
            <button class="imgEdit-footer-btn" onclick="applyFilter('reset')">Reset All</button>
          </div>
        </div>
        <div class="imgEdit-section">
          <div class="imgEdit-sec-title">Add Text</div>
          <input type="text" class="rp-input" id="imgEdit-text-input" placeholder="Type your text..." style="margin-bottom:6px">
          <input type="range" class="imgEdit-range" id="imgEdit-text-size" min="12" max="120" value="32" style="width:100%;margin-bottom:6px">
          <select class="mini-input" id="imgEdit-text-font" style="margin-bottom:6px">
            <option>Bebas Neue</option><option>Montserrat</option><option>Anton</option>
            <option>Playfair Display</option><option>Dancing Script</option><option>Press Start 2P</option>
          </select>
          <input type="color" id="imgEdit-text-color" value="#ffffff" style="width:100%;height:28px;border:none;border-radius:4px;cursor:pointer">
        </div>
      </div>
    </div>
    <div class="imgEdit-footer">
      <button class="imgEdit-footer-btn" onclick="resetEditorCanvas()"><i class="fas fa-undo"></i> Reset</button>
      <button class="imgEdit-footer-btn" onclick="editorUndo()"><i class="fas fa-step-backward"></i> Undo</button>
      <div style="flex:1"></div>
      <button class="imgEdit-footer-btn" onclick="useEditedAsBackground()"><i class="fas fa-image"></i> Use as Background</button>
      <button class="imgEdit-footer-btn primary" onclick="downloadEditedImage()"><i class="fas fa-download"></i> Download</button>
    </div>
  </div>
</div>

<!-- FONT PICKER MODAL -->
<div id="font-picker-modal">
  <div class="fp-backdrop" onclick="closeFontPicker()"></div>
  <div class="fp-box">
    <div class="fp-header">
      <h3><i class="fas fa-font" style="color:var(--accent)"></i> Font Library — 100 Fonts</h3>
      <input type="text" class="mini-input fp-search" placeholder="Search fonts..." id="fp-search-input" oninput="filterFonts(this.value)">
      <button class="saved-close" onclick="closeFontPicker()"><i class="fas fa-times"></i></button>
    </div>
    <div class="fp-cats" id="fp-cats"></div>
    <div class="fp-body"><div class="fp-grid" id="fp-grid"></div></div>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
<script>
window.TX = {
  user: @json($txUser),
  csrf: @json(csrf_token()),
  keys: @json($txKeys),
  routes: {
    state: @json(url('/api/state/__KEY__')),
    upload: @json(route('uploads.store')),
    uploads: @json(route('uploads.index')),
    logout: @json(route('logout'))
  }
};
(function () {
  var saved = @json($txState);
  try {
    TX.keys.forEach(function (k) { localStorage.removeItem(k); });
    Object.keys(saved).forEach(function (k) { localStorage.setItem(k, saved[k]); });
  } catch (e) {}
})();
</script>
<script src="{{ asset('js/app-core.js') }}"></script>
<script src="{{ asset('js/app-extensions.js') }}"></script>
<script src="{{ asset('js/app-editor.js') }}"></script>
<script src="{{ asset('js/app-dashboard.js') }}"></script>
<script src="{{ asset('js/backend-sync.js') }}"></script>
</body>
</html>
