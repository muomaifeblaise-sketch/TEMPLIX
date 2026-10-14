/* ========================================
   TEMPLIX GRAPHIC EDITOR - DESIGN RENDERER
   designs.js
   ======================================== */

// ======================== DESIGN CARD CREATOR ========================
window.createDesignCard = function(styleObj, bgData, content, accent, opts, index) {
  const card = document.createElement('div');
  card.className = 'design-card';
  card.dataset.styleId = styleObj.id;
  card.dataset.index = index;
  card.style.animationDelay = `${index * 0.06}s`;

  // ---- CANVAS ----
  const canvas = document.createElement('div');
  canvas.className = 'dc-canvas';
  const ratio = window.APP_STATE?.aspectRatio || '3/4';
  canvas.style.aspectRatio = ratio;

  // Background layer
  const bgLayer = document.createElement('div');
  bgLayer.className = 'dc-bg';
  if (bgData.type === 'image') {
    bgLayer.style.backgroundImage = `url(${bgData.url})`;
    bgLayer.style.backgroundSize = 'cover';
    bgLayer.style.backgroundPosition = 'center';
  } else if (bgData.type === 'gradient') {
    bgLayer.style.background = bgData.css;
  } else if (bgData.type === 'pattern') {
    // Apply pattern CSS as style attribute
    bgLayer.setAttribute('style', bgData.css);
  } else if (bgData.type === 'color') {
    bgLayer.style.background = bgData.css;
  }
  canvas.appendChild(bgLayer);

  // Overlay
  const intensity = parseInt(window.APP_STATE?.overlayIntensity || 70);
  const overlayEl = document.createElement('div');
  overlayEl.className = 'dc-overlay';
  overlayEl.style.background = window.getOverlay(styleObj.overlayType || 'bottom-fade', intensity, accent);
  canvas.appendChild(overlayEl);

  // Vignette
  const vigStrength = parseInt(document.getElementById('vignette-range')?.value || 0);
  if (vigStrength > 0) {
    const vigEl = document.createElement('div');
    vigEl.className = 'dc-vignette';
    vigEl.style.background = window.getVignette(vigStrength);
    vigEl.style.position = 'absolute';
    vigEl.style.inset = '0';
    canvas.appendChild(vigEl);
  }

  // Noise
  const noiseStrength = parseInt(document.getElementById('noise-range')?.value || 0);
  if (noiseStrength > 0) {
    const noiseEl = document.createElement('div');
    noiseEl.className = 'dc-noise';
    noiseEl.style.cssText = `position:absolute;inset:0;pointer-events:none;${window.generateNoiseCSS(noiseStrength)}`;
    canvas.appendChild(noiseEl);
  }

  // Border frame
  const borderStyle = window.APP_STATE?.borderStyle || 'none';
  if (borderStyle !== 'none') {
    const borderEl = document.createElement('div');
    borderEl.className = 'dc-border-frame';
    borderEl.style.cssText = `position:absolute;inset:0;pointer-events:none;${window.getBorderFrame(borderStyle, accent)}`;
    canvas.appendChild(borderEl);
  }

  // Content layer
  const contentEl = document.createElement('div');
  contentEl.className = 'dc-content';
  const textScale = parseFloat((document.getElementById('textscale-range')?.value || 100)) / 100;

  const innerDiv = document.createElement('div');
  innerDiv.className = `dc-content-inner ${styleObj.class}`;
  innerDiv.style.cssText = `position:absolute;inset:0;font-size:${textScale}em`;

  // Apply style's custom inner
  const innerContentDiv = document.createElement('div');
  innerContentDiv.className = `${styleObj.class} dc-content-inner`;
  innerContentDiv.style.cssText = `position:absolute;inset:0;`;

  const contentHTML = window.buildDesignHTML(styleObj, content, accent, opts);

  // Wrap in style class with selected font
  const fontCSS = window.getSelectedFontCSS();
  contentEl.innerHTML = `<div class="${styleObj.class}" style="position:absolute;inset:0;font-size:${textScale * 16}px;font-family:${fontCSS}"><div class="dc-content-inner">${contentHTML}</div></div>`;
  canvas.appendChild(contentEl);

  // Style tag
  if (opts.showLabel) {
    const tagEl = document.createElement('div');
    tagEl.className = 'card-style-tag';
    tagEl.textContent = styleObj.name;
    canvas.appendChild(tagEl);
  }

  // Card number
  const numEl = document.createElement('div');
  numEl.className = 'card-number';
  numEl.textContent = `#${(index + 1).toString().padStart(2, '0')}`;
  canvas.appendChild(numEl);

  // Watermark
  if (opts.showWatermark) {
    const wm = document.createElement('div');
    wm.className = 'dc-watermark';
    wm.innerHTML = '<img src="'+WM_URI+'" alt="Templix" style="height:22px;width:auto;display:block;opacity:.6">';
    canvas.appendChild(wm);
  }

  // Logo overlay
  window.injectLogoOverlay(canvas);

  // Actions overlay
  const actionsEl = document.createElement('div');
  actionsEl.className = 'dc-actions';
  actionsEl.innerHTML = `
    <button class="dca icon-only" title="Preview" onclick="event.stopPropagation(); openPreview(${index})"><i class="fas fa-expand"></i></button>
    <button class="dca" title="Export" onclick="event.stopPropagation(); exportSingleCard(${index})"><i class="fas fa-download"></i> Export</button>
  `;
  canvas.appendChild(actionsEl);

  card.appendChild(canvas);

  // ---- FOOTER BAR ----
  const footerBar = document.createElement('div');
  footerBar.className = 'dc-footer-bar';
  const bgName = bgData.name || (bgData.type === 'image' ? 'Uploaded Image' : bgData.type === 'gradient' ? bgData.gradName : 'Pattern');
  footerBar.innerHTML = `
    <div class="dcf-info">
      <div class="dcf-style">${styleObj.name}</div>
      <div class="dcf-bg-name">${bgName}</div>
    </div>
    <div class="dcf-acts">
      <button class="dcf-btn" title="Favorite" onclick="event.stopPropagation(); toggleFavorite(this, ${index})"><i class="far fa-heart"></i></button>
      <button class="dcf-btn" title="Duplicate" onclick="event.stopPropagation(); duplicateCard(${index})"><i class="fas fa-copy"></i></button>
      <button class="dcf-btn" title="Delete" onclick="event.stopPropagation(); deleteCard(${index}, this)"><i class="fas fa-trash"></i></button>
    </div>
  `;
  card.appendChild(footerBar);

  // Click to select
  card.addEventListener('click', () => selectCard(card, index));
  // Right-click context menu
  card.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    showContextMenu(e, index);
  });

  return card;
};

// ======================== CARD INTERACTIONS ========================
window.selectCard = function(card, index) {
  document.querySelectorAll('.design-card').forEach(c => c.classList.remove('selected'));
  card.classList.add('selected');
  window.APP_STATE.selectedIndex = index;
  updateLayerHighlight(index);
};

window.toggleFavorite = function(btn, index) {
  const card = btn.closest('.design-card');
  const icon = btn.querySelector('i');
  if (icon.classList.contains('far')) {
    icon.className = 'fas fa-heart';
    btn.style.color = '#f87171';
    showToast('Added to favorites ❤️', 'success');
  } else {
    icon.className = 'far fa-heart';
    btn.style.color = '';
    showToast('Removed from favorites');
  }
};

window.duplicateCard = function(index) {
  const original = window.APP_STATE.designs[index];
  if (!original) return;
  const clone = original.el.cloneNode(true);
  clone.style.animationDelay = '0s';
  clone.dataset.index = window.APP_STATE.designs.length;
  // Re-attach click
  clone.addEventListener('click', () => selectCard(clone, window.APP_STATE.designs.length));
  clone.addEventListener('contextmenu', (e) => { e.preventDefault(); showContextMenu(e, window.APP_STATE.designs.length); });
  window.APP_STATE.designs.push({ el: clone, styleId: original.styleId, bg: original.bg });
  document.getElementById('designs-grid').appendChild(clone);
  updateDesignCount();
  updateLayersList();
  showToast('Design duplicated!', 'success');
};

window.deleteCard = function(index, btn) {
  const card = btn.closest('.design-card');
  card.style.animation = 'none';
  card.style.opacity = '0';
  card.style.transform = 'scale(0.9)';
  card.style.transition = 'all 0.2s ease';
  setTimeout(() => {
    card.remove();
    window.APP_STATE.designs = window.APP_STATE.designs.filter((_, i) => i !== index);
    updateDesignCount();
    updateLayersList();
    checkEmptyState();
  }, 200);
  showToast('Design removed');
};

// ======================== LAYER MANAGEMENT ========================
window.updateLayersList = function() {
  const list = document.getElementById('layers-list');
  if (!list) return;
  if (!window.APP_STATE.designs || window.APP_STATE.designs.length === 0) {
    list.innerHTML = '<div class="no-layers-msg">No designs yet. Generate to see layers.</div>';
    return;
  }
  list.innerHTML = '';
  window.APP_STATE.designs.forEach((d, i) => {
    const item = document.createElement('div');
    item.className = 'layer-item' + (i === window.APP_STATE.selectedIndex ? ' active' : '');
    item.innerHTML = `
      <div class="layer-thumb" style="${d.bg?.type === 'image' ? `background-image:url(${d.bg.url});background-size:cover` : `background:${d.bg?.css || '#111'}`}"></div>
      <div class="layer-info-text">
        <div class="layer-name">${d.styleId || 'Design'} #${i+1}</div>
        <div class="layer-sub">${d.bg?.name || 'Background'}</div>
      </div>
      <button class="layer-act" onclick="deleteCard(${i}, this)" title="Delete"><i class="fas fa-times"></i></button>
    `;
    item.addEventListener('click', () => {
      selectCard(d.el, i);
      item.classList.add('active');
      list.querySelectorAll('.layer-item').forEach((el, j) => { if (j !== i) el.classList.remove('active'); });
    });
    list.appendChild(item);
  });
};

window.updateLayerHighlight = function(index) {
  const items = document.querySelectorAll('.layer-item');
  items.forEach((item, i) => {
    item.classList.toggle('active', i === index);
  });
};

// ======================== ADJUST SELECTED CARD ========================
window.currentFilters = { brightness: 100, contrast: 100, saturate: 100 };
window.adjustSelected = function(prop, value, unit) {
  window.currentFilters[prop] = value;
  const card = window.APP_STATE.designs?.[window.APP_STATE.selectedIndex]?.el;
  if (!card) { showToast('Select a design first', 'warning'); return; }
  const bg = card.querySelector('.dc-bg');
  if (bg) {
    const { brightness, contrast, saturate } = window.currentFilters;
    bg.style.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%)`;
  }
};

window.adjustSelectedBlur = function(value) {
  const card = window.APP_STATE.designs?.[window.APP_STATE.selectedIndex]?.el;
  if (!card) { showToast('Select a design first', 'warning'); return; }
  const bg = card.querySelector('.dc-bg');
  if (bg) { bg.style.filter = (bg.style.filter || '') + ` blur(${value}px)`; }
  document.getElementById('blur-val').textContent = value;
};

// ======================== PREVIEW ========================
window.previewIndex = 0;
window.openPreview = function(index) {
  window.previewIndex = index;
  renderPreview(index);
  document.getElementById('preview-modal').classList.add('show');
};

window.renderPreview = function(index) {
  const d = window.APP_STATE.designs[index];
  if (!d) return;
  const content = document.getElementById('pm-content');
  content.innerHTML = '';
  const clone = d.el.cloneNode(true);
  clone.querySelectorAll('.dc-actions').forEach(a => a.remove());
  content.appendChild(clone);
  document.getElementById('pm-nav-info').textContent = `${index+1} / ${window.APP_STATE.designs.length}`;
  document.getElementById('pm-title').textContent = `${d.styleId || 'Design'} — Preview`;
};

window.closePreview = function() {
  document.getElementById('preview-modal').classList.remove('show');
};

window.prevPreview = function() {
  window.previewIndex = Math.max(0, window.previewIndex - 1);
  renderPreview(window.previewIndex);
};

window.nextPreview = function() {
  window.previewIndex = Math.min(window.APP_STATE.designs.length - 1, window.previewIndex + 1);
  renderPreview(window.previewIndex);
};

window.exportPreview = function() {
  exportSingleCard(window.previewIndex);
};

// ======================== CONTEXT MENU ========================
window.ctxTargetIndex = -1;
window.showContextMenu = function(e, index) {
  const menu = document.getElementById('ctx-menu');
  window.ctxTargetIndex = index;
  menu.style.top = Math.min(e.clientY, window.innerHeight - 200) + 'px';
  menu.style.left = Math.min(e.clientX, window.innerWidth - 180) + 'px';
  menu.classList.add('show');
};

window.ctxAction = function(action) {
  const index = window.ctxTargetIndex;
  document.getElementById('ctx-menu').classList.remove('show');
  switch (action) {
    case 'preview': openPreview(index); break;
    case 'export': exportSingleCard(index); break;
    case 'duplicate': duplicateCard(index); break;
    case 'favorite':
      const card = window.APP_STATE.designs[index]?.el;
      if (card) { const btn = card.querySelector('.dcf-btn'); if (btn) toggleFavorite(btn, index); }
      break;
    case 'delete':
      const delCard = window.APP_STATE.designs[index]?.el;
      if (delCard) { const delBtn = delCard.querySelector('.dcf-btn.trash') || delCard.querySelector('.dcf-acts button:last-child'); deleteCard(index, { closest: () => delCard }); }
      break;
  }
};

document.addEventListener('click', (e) => {
  if (!e.target.closest('#ctx-menu')) {
    document.getElementById('ctx-menu').classList.remove('show');
  }
});

// ======================== EXPORT FUNCTIONS ========================
window.exportSingleCard = async function(index) {
  const d = window.APP_STATE.designs[index];
  if (!d) { showToast('No design found', 'error'); return; }
  await exportElement(d.el.querySelector('.dc-canvas'), index);
};

window.exportAll = async function() {
  if (!window.APP_STATE.designs || window.APP_STATE.designs.length === 0) {
    showToast('No designs to export!', 'error'); return;
  }
  const spinner = document.getElementById('spinner-overlay');
  const bar = document.getElementById('spinner-bar');
  const msg = document.getElementById('spinner-msg');
  const count = document.getElementById('spinner-count');
  spinner.classList.add('show');

  let exported = 0;
  for (let i = 0; i < window.APP_STATE.designs.length; i++) {
    const pct = ((i / window.APP_STATE.designs.length) * 100).toFixed(0);
    bar.style.width = pct + '%';
    msg.textContent = `Exporting design ${i+1}...`;
    count.textContent = `${i+1} / ${window.APP_STATE.designs.length}`;
    try {
      await exportElement(window.APP_STATE.designs[i].el.querySelector('.dc-canvas'), i, false);
      exported++;
      window.APP_STATE.stats.exports++;
    } catch(e) { console.warn('Export failed for design', i, e); }
    await sleep(300);
  }

  bar.style.width = '100%';
  spinner.classList.remove('show');
  updateStats();
  showToast(`✅ ${exported} designs exported!`, 'success');
};

window.exportSelected = function() {
  const idx = window.APP_STATE.selectedIndex;
  if (idx < 0 || !window.APP_STATE.designs[idx]) {
    showToast('Select a design first', 'warning'); return;
  }
  exportSingleCard(idx);
};

window.exportElement = async function(el, index, showFeedback = true) {
  if (!el) return;
  const scale = parseInt(document.getElementById('escale-range')?.value || 2);
  const fmt = window.APP_STATE.exportFormat || 'png';
  const prefix = document.getElementById('export-prefix')?.value || 'templix-design';

  if (!window.html2canvas) {
    showToast('html2canvas not loaded', 'error'); return;
  }

  try {
    const canvas = await html2canvas(el, {
      scale: scale,
      useCORS: true,
      allowTaint: true,
      backgroundColor: null,
      logging: false,
      imageTimeout: 0,
    });
    const quality = fmt === 'jpeg' ? 0.95 : 1;
    const mimeType = fmt === 'webp' ? 'image/webp' : fmt === 'jpeg' ? 'image/jpeg' : 'image/png';
    const ext = fmt === 'jpeg' ? 'jpg' : fmt;
    const url = canvas.toDataURL(mimeType, quality);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${prefix}-${(index+1).toString().padStart(2,'0')}-${Date.now()}.${ext}`;
    a.click();
    window.APP_STATE.stats.exports++;
    updateStats();
    if (showFeedback) showToast(`Design ${index+1} exported as ${ext.toUpperCase()}!`, 'success');
  } catch (err) {
    if (showFeedback) showToast('Export failed. Try a different browser.', 'error');
    console.error('Export error:', err);
  }
};

window.copyToClipboard = async function() {
  const idx = window.APP_STATE.selectedIndex;
  if (idx < 0 || !window.APP_STATE.designs[idx]) {
    showToast('Select a design first', 'warning'); return;
  }
  const el = window.APP_STATE.designs[idx].el.querySelector('.dc-canvas');
  try {
    const canvas = await html2canvas(el, { scale: 2, useCORS: true, allowTaint: true, backgroundColor: null });
    canvas.toBlob(async (blob) => {
      try {
        await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
        showToast('Copied to clipboard!', 'success');
      } catch {
        showToast('Clipboard not supported in this browser', 'warning');
      }
    });
  } catch { showToast('Copy failed', 'error'); }
};

window.shareDesign = function() {
  if (navigator.share) {
    navigator.share({ title: 'TEMPLIX — My Design', text: 'Check out my design created with TEMPLIX!', url: window.location.href });
  } else {
    navigator.clipboard.writeText(window.location.href).then(() => showToast('Link copied to clipboard!', 'success'));
  }
};

window.printDesign = function() {
  window.print();
};

// ======================== HELPERS ========================

window.updateDesignCount = function() {
  const n = window.APP_STATE.designs?.length || 0;
  const counter = document.getElementById('design-counter');
  const num = document.getElementById('dc-num');
  if (num) num.textContent = n;
  if (counter) counter.style.display = n > 0 ? 'flex' : 'none';
  const badge = document.getElementById('design-count-badge');
  if (badge) { badge.textContent = n + ' Designs'; badge.style.display = n > 0 ? '' : 'none'; }
};

window.checkEmptyState = function() {
  const grid = document.getElementById('designs-grid');
  const hasDesigns = document.querySelectorAll('.design-card').length > 0;
  let empty = document.getElementById('empty-state');
  if (!hasDesigns && !empty) {
    const emptyDiv = document.createElement('div');
    emptyDiv.id = 'empty-state';
    emptyDiv.innerHTML = `
      <div class="empty-icon"><i class="fas fa-magic"></i></div>
      <h2>No Designs</h2>
      <p>All designs were removed. Generate new ones!</p>
      <button class="start-btn" onclick="generateDesigns()"><i class="fas fa-magic"></i> Generate</button>
    `;
    grid.appendChild(emptyDiv);
  }
  if (hasDesigns && empty) empty.remove();
};

window.updateStats = function() {
  const state = window.APP_STATE?.stats || {};
  const els = {
    'stat-gen': state.generated || 0,
    'stat-exp': state.exports || 0,
    'stat-bgs': window.APP_STATE?.backgrounds?.filter(b => b.type === 'image').length || 0,
    'stat-designs': window.APP_STATE?.designs?.length || 0,
  };
  Object.entries(els).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  });
};

