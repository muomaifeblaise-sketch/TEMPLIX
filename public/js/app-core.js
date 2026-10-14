/* ========================================
   TEMPLIX GRAPHIC EDITOR - DESIGN ENGINE
   engine.js - Design algorithms & data
   ======================================== */

// ======================== PROFESSION-BASED CUSTOMIZATION ========================
window.PROFESSION_CONFIG = {
  designer: {
    name: 'Designer',
    icon: '🎨',
    recommendedCategories: ['modern', 'minimal', 'elegant', 'editorial'],
    recommendedStyles: ['Clean, professional aesthetics', 'Minimalist approach', 'Editorial layouts'],
    colorPalette: ['#2b86c5', '#784ba0', '#f9c859', '#b8b8d8'],
    welcomeMessage: 'Welcome Designer! 🎨 Explore our curated design styles optimized for professional work.'
  },
  marketer: {
    name: 'Marketer',
    icon: '📢',
    recommendedCategories: ['bold', 'neon', 'cyberpunk', 'modern'],
    recommendedStyles: ['High impact designs', 'Bold typography', 'Eye-catching visuals'],
    colorPalette: ['#ff3cac', '#fb923c', '#f87171', '#00f5d4'],
    welcomeMessage: 'Welcome Marketer! 📢 Let\'s create campaigns that convert and captivate.'
  },
  entrepreneur: {
    name: 'Entrepreneur',
    icon: '🚀',
    recommendedCategories: ['modern', 'bold', 'minimal', 'editorial'],
    recommendedStyles: ['Professional yet bold', 'Business-focused', 'Trustworthy designs'],
    colorPalette: ['#2b86c5', '#ff3cac', '#4ade80', '#fb923c'],
    welcomeMessage: 'Welcome Entrepreneur! 🚀 Build your brand with impactful visual content.'
  },
  educator: {
    name: 'Educator',
    icon: '📚',
    recommendedCategories: ['editorial', 'minimal', 'artdeco', 'cinema'],
    recommendedStyles: ['Information-rich layouts', 'Clear hierarchy', 'Educational focus'],
    colorPalette: ['#2b86c5', '#f9c859', '#4ade80', '#f5576c'],
    welcomeMessage: 'Welcome Educator! 📚 Create stunning educational and informative designs.'
  },
  artist: {
    name: 'Artist',
    icon: '🖼️',
    recommendedCategories: ['street', 'grunge', 'retro', 'cyberpunk'],
    recommendedStyles: ['Artistic expression', 'Creative freedom', 'Experimental designs'],
    colorPalette: ['#784ba0', '#ff0066', '#4ade80', '#fbbf24'],
    welcomeMessage: 'Welcome Artist! 🖼️ Express your creativity with unlimited design possibilities.'
  },
  other: {
    name: 'General User',
    icon: '⭐',
    recommendedCategories: ['all'],
    recommendedStyles: ['All design styles'],
    colorPalette: ['#ff3cac', '#2b86c5', '#784ba0', '#00f5d4'],
    welcomeMessage: 'Welcome! ⭐ Explore all design styles and find your perfect aesthetic.'
  }
};

// ======================== DESIGN CATEGORIES ========================
window.CATEGORIES = [
  { id: 'all', name: 'All Styles', icon: 'fas fa-th', color: '#ff3cac', count: 30 },
  { id: 'modern', name: 'Modern Clean', icon: 'fas fa-bolt', color: '#2b86c5', count: 8 },
  { id: 'editorial', name: 'Editorial', icon: 'fas fa-newspaper', color: '#f9c859', count: 6 },
  { id: 'punk', name: 'Punk Raw', icon: 'fas fa-skull', color: '#f87171', count: 5 },
  { id: 'neon', name: 'Neon Glow', icon: 'fas fa-star', color: '#00f5d4', count: 7 },
  { id: 'minimal', name: 'Minimal', icon: 'fas fa-minus', color: '#b8b8d8', count: 5 },
  { id: 'bold', name: 'Bold Impact', icon: 'fas fa-crown', color: '#fb923c', count: 6 },
  { id: 'elegant', name: 'Elegant Script', icon: 'fas fa-feather-alt', color: '#c084fc', count: 5 },
  { id: 'retro', name: 'Retro Vintage', icon: 'fas fa-compact-disc', color: '#fbbf24', count: 6 },
  { id: 'street', name: 'Street Art', icon: 'fas fa-spray-can', color: '#4ade80', count: 5 },
  { id: 'pixel', name: 'Pixel Game', icon: 'fas fa-gamepad', color: '#a78bfa', count: 4 },
  { id: 'cinema', name: 'Cinema', icon: 'fas fa-film', color: '#64748b', count: 5 },
  { id: 'artdeco', name: 'Art Deco', icon: 'fas fa-gem', color: '#d4a853', count: 5 },
  { id: 'cyberpunk', name: 'Cyberpunk', icon: 'fas fa-robot', color: '#ff0066', count: 6 },
  { id: 'grunge', name: 'Grunge', icon: 'fas fa-fire', color: '#8b5c2a', count: 5 },
  { id: 'poster', name: 'Poster/Flyer', icon: 'fas fa-image', color: '#fb923c', count: 6 },
  { id: 'product', name: 'Product', icon: 'fas fa-box', color: '#2b86c5', count: 4 },
  { id: 'menu', name: 'Menu/Food', icon: 'fas fa-utensils', color: '#4ade80', count: 4 },
  { id: 'promo', name: 'Promo/Sale', icon: 'fas fa-tag', color: '#f87171', count: 4 },
  { id: 'infographic', name: 'Infographic', icon: 'fas fa-chart-bar', color: '#c084fc', count: 4 },
];

// ======================== GRADIENT PRESETS ========================
window.GRADIENTS = [
  { id: 'dark-space', css: 'linear-gradient(135deg,#0a0a0f,#1a1a2e,#16213e)', name: 'Dark Space' },
  { id: 'midnight', css: 'linear-gradient(135deg,#0d0d1a,#1e0533,#0a1628)', name: 'Midnight' },
  { id: 'sunset', css: 'linear-gradient(135deg,#f093fb,#f5576c,#fd8e34)', name: 'Sunset' },
  { id: 'ocean', css: 'linear-gradient(135deg,#4facfe,#00f2fe,#0972db)', name: 'Ocean' },
  { id: 'forest', css: 'linear-gradient(135deg,#11998e,#38ef7d,#1a6b4a)', name: 'Forest' },
  { id: 'fire', css: 'linear-gradient(135deg,#f7971e,#ffd200,#ff6b35)', name: 'Fire' },
  { id: 'aurora', css: 'linear-gradient(135deg,#00f5d4,#784ba0,#2b86c5)', name: 'Aurora' },
  { id: 'candy', css: 'linear-gradient(135deg,#f9c859,#ff3cac,#784ba0)', name: 'Candy' },
  { id: 'midnight-blue', css: 'linear-gradient(135deg,#000428,#004e92)', name: 'Deep Blue' },
  { id: 'toxic', css: 'linear-gradient(135deg,#1a1a1a,#2c5f2e,#00ff9d20)', name: 'Toxic' },
  { id: 'blood-moon', css: 'linear-gradient(135deg,#1a0000,#5c0000,#c0392b)', name: 'Blood Moon' },
  { id: 'violet-dream', css: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', name: 'Violet Dream' },
  { id: 'citrus', css: 'linear-gradient(135deg,#fc4a1a,#f7b733)', name: 'Citrus' },
  { id: 'purple-haze', css: 'linear-gradient(135deg,#360033,#0b8793)', name: 'Purple Haze' },
  { id: 'rose-gold', css: 'linear-gradient(135deg,#b06ab3,#4568dc)', name: 'Rose Gold' },
  { id: 'ash', css: 'linear-gradient(135deg,#606c88,#3f4c6b)', name: 'Ash' },
  { id: 'emerald', css: 'linear-gradient(135deg,#0f2027,#203a43,#2c5364)', name: 'Teal Depth' },
  { id: 'crimson', css: 'linear-gradient(160deg,#2d132c,#ee4540,#c72c41,#801336)', name: 'Crimson' },
  { id: 'gold-dust', css: 'linear-gradient(135deg,#1a1200,#463a00,#f9c859)', name: 'Gold Dust' },
  { id: 'nordic', css: 'linear-gradient(135deg,#3d5a80,#98c1d9,#e0fbfc)', name: 'Nordic' },
];

// ======================== PATTERN PRESETS ========================
window.PATTERNS = [
  {
    id: 'dots', name: 'Dots',
    css: `background-color:#0a0a0f;background-image:radial-gradient(circle,rgba(255,255,255,0.15) 1px,transparent 1px);background-size:20px 20px`
  },
  {
    id: 'grid', name: 'Grid',
    css: `background-color:#0a0a0f;background-image:linear-gradient(rgba(255,255,255,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.05) 1px,transparent 1px);background-size:30px 30px`
  },
  {
    id: 'diagonal', name: 'Lines',
    css: `background-color:#0a0a0f;background-image:repeating-linear-gradient(45deg,rgba(255,255,255,0.06),rgba(255,255,255,0.06) 1px,transparent 1px,transparent 20px)`
  },
  {
    id: 'hex', name: 'Hex',
    css: `background-color:#0d0d1a;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100'%3E%3Cpath d='M28 66L0 50V18L28 2 56 18v32L28 66zm0 2L0 52V18L28 0l28 18v34L28 68z' fill='none' stroke='rgba(255,255,255,0.06)' stroke-width='1'/%3E%3C/svg%3E");background-size:56px 100px`
  },
  {
    id: 'circuit', name: 'Circuit',
    css: `background-color:#001a1a;background-image:repeating-linear-gradient(0deg,transparent,transparent 19px,rgba(0,245,212,0.05) 20px),repeating-linear-gradient(90deg,transparent,transparent 19px,rgba(0,245,212,0.05) 20px);background-size:20px 20px`
  },
  {
    id: 'noise', name: 'Noise',
    css: `background-color:#111;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.12'/%3E%3C/svg%3E")`
  },
  {
    id: 'cross', name: 'Cross',
    css: `background-color:#0a0a0f;background-image:repeating-linear-gradient(0deg,transparent 0,transparent 9px,rgba(255,255,255,0.04) 10px),repeating-linear-gradient(90deg,transparent 0,transparent 9px,rgba(255,255,255,0.04) 10px);background-size:10px 10px`
  },
  {
    id: 'waves', name: 'Waves',
    css: `background-color:#0d0d2b;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='20'%3E%3Cpath d='M0 10 Q25 0 50 10 Q75 20 100 10' fill='none' stroke='rgba(120,75,160,0.2)' stroke-width='1'/%3E%3C/svg%3E");background-size:100px 20px`
  },
  {
    id: 'triangles', name: 'Tri',
    css: `background-color:#0a0a0f;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpolygon points='20,2 38,38 2,38' fill='none' stroke='rgba(255,255,255,0.05)' stroke-width='1'/%3E%3C/svg%3E");background-size:40px 40px`
  },
  {
    id: 'morocco', name: 'Geo',
    css: `background-color:#0f0f1a;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M30 5L5 30 30 55 55 30z' fill='none' stroke='rgba(249,200,89,0.1)' stroke-width='1'/%3E%3Cpath d='M30 15L15 30 30 45 45 30z' fill='none' stroke='rgba(249,200,89,0.07)' stroke-width='1'/%3E%3C/svg%3E");background-size:60px 60px`
  },
  {
    id: 'brick', name: 'Brick',
    css: `background-color:#1a0a00;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='20'%3E%3Crect x='0' y='0' width='40' height='20' fill='none' stroke='rgba(255,100,0,0.1)' stroke-width='1'/%3E%3Crect x='20' y='10' width='40' height='20' fill='none' stroke='rgba(255,100,0,0.1)' stroke-width='1'/%3E%3C/svg%3E");background-size:40px 20px`
  },
  {
    id: 'stars', name: 'Stars',
    css: `background-color:#000510;background-image:radial-gradient(1px 1px at 10% 20%,rgba(255,255,255,0.8),transparent),radial-gradient(1px 1px at 30% 60%,rgba(255,255,255,0.6),transparent),radial-gradient(1.5px 1.5px at 60% 10%,rgba(255,255,255,0.9),transparent),radial-gradient(1px 1px at 80% 80%,rgba(255,255,255,0.7),transparent),radial-gradient(2px 2px at 50% 40%,rgba(255,255,255,0.5),transparent),radial-gradient(1px 1px at 90% 30%,rgba(255,255,255,0.8),transparent),radial-gradient(1.5px 1.5px at 20% 90%,rgba(255,255,255,0.6),transparent);background-size:300px 300px`
  },
];

// ======================== COLOR PALETTES ========================
window.COLOR_PALETTES = [
  { name: 'Neon Punk', colors: ['#ff3cac','#784ba0','#2b86c5','#00f5d4','#f9c859'] },
  { name: 'Sunset Vibes', colors: ['#f7971e','#ffd200','#ff6b35','#e63946','#6d002e'] },
  { name: 'Ocean Deep', colors: ['#023e8a','#0077b6','#0096c7','#00b4d8','#90e0ef'] },
  { name: 'Forest', colors: ['#1a3a1a','#2d6a2d','#4d9b4d','#80c980','#b3e8b3'] },
  { name: 'Gold & Black', colors: ['#000000','#1a1200','#f9c859','#ffd700','#fff8dc'] },
  { name: 'Crimson Night', colors: ['#1a0000','#5c0000','#c0392b','#e74c3c','#fadbd8'] },
  { name: 'Violet Dream', colors: ['#0f0c29','#302b63','#6b21a8','#a855f7','#e9d5ff'] },
  { name: 'Monochrome', colors: ['#000000','#333333','#666666','#aaaaaa','#ffffff'] },
  { name: 'Retro Warm', colors: ['#2d0922','#7d2b4d','#c46b4d','#e8a35c','#f2d9a0'] },
  { name: 'Ice Blue', colors: ['#000f2b','#002b5b','#0055a5','#4d9de0','#b8d9f0'] },
  { name: 'Fire Ember', colors: ['#0d0000','#4a0000','#8b0000','#cc3300','#ff6600'] },
  { name: 'Mint Dark', colors: ['#001a12','#003d2b','#006644','#00cc88','#66ffd4'] },
];

// ======================== FONT PAIRS ========================
window.FONT_PAIRS = [
  {
    id: 'modern-sans',
    displayFont: 'Bebas Neue',
    bodyFont: 'Montserrat',
    displayCSS: "'Bebas Neue', sans-serif",
    bodyCSS: "'Montserrat', sans-serif",
    name: 'Modern Sans',
    preview: 'BOLD',
    previewBody: 'Clean and modern'
  },
  {
    id: 'editorial',
    displayFont: 'Playfair Display',
    bodyFont: 'Montserrat',
    displayCSS: "'Playfair Display', serif",
    bodyCSS: "'Montserrat', sans-serif",
    name: 'Editorial',
    preview: 'Elegant',
    previewBody: 'Editorial body text'
  },
  {
    id: 'punk-raw',
    displayFont: 'Anton',
    bodyFont: 'Oswald',
    displayCSS: "'Anton', sans-serif",
    bodyCSS: "'Oswald', sans-serif",
    name: 'Punk Raw',
    preview: 'RAW',
    previewBody: 'Oswald body style'
  },
  {
    id: 'neon-future',
    displayFont: 'Righteous',
    bodyFont: 'Rajdhani',
    displayCSS: "'Righteous', cursive",
    bodyCSS: "'Rajdhani', sans-serif",
    name: 'Neon Future',
    preview: 'Glow',
    previewBody: 'Future tech style'
  },
  {
    id: 'cinematic',
    displayFont: 'Cinzel',
    bodyFont: 'Playfair Display',
    displayCSS: "'Cinzel', serif",
    bodyCSS: "'Playfair Display', serif",
    name: 'Cinematic',
    preview: 'CINEMA',
    previewBody: 'Classic serif body'
  },
  {
    id: 'street',
    displayFont: 'Bungee',
    bodyFont: 'Rajdhani',
    displayCSS: "'Bungee', sans-serif",
    bodyCSS: "'Rajdhani', sans-serif",
    name: 'Street',
    preview: 'STREET',
    previewBody: 'Urban body text'
  },
  {
    id: 'game',
    displayFont: 'Press Start 2P',
    bodyFont: 'VT323',
    displayCSS: "'Press Start 2P', monospace",
    bodyCSS: "'VT323', monospace",
    name: 'Pixel Game',
    preview: 'PIXEL',
    previewBody: 'Insert coin to play'
  },
  {
    id: 'luxury',
    displayFont: 'Abril Fatface',
    bodyFont: 'Playfair Display',
    displayCSS: "'Abril Fatface', cursive",
    bodyCSS: "'Playfair Display', serif",
    name: 'Luxury',
    preview: 'Luxury',
    previewBody: 'Premium serif body'
  },
  {
    id: 'script-pair',
    displayFont: 'Dancing Script',
    bodyFont: 'Montserrat',
    displayCSS: "'Dancing Script', cursive",
    bodyCSS: "'Montserrat', sans-serif",
    name: 'Script Pair',
    preview: 'Script',
    previewBody: 'Clean sans body'
  },
  {
    id: 'tech',
    displayFont: 'Exo 2',
    bodyFont: 'Teko',
    displayCSS: "'Exo 2', sans-serif",
    bodyCSS: "'Teko', sans-serif",
    name: 'Tech Specs',
    preview: 'TECH',
    previewBody: 'Technical body style'
  },
  {
    id: 'retro-pair',
    displayFont: 'Oswald',
    bodyFont: 'Rajdhani',
    displayCSS: "'Oswald', sans-serif",
    bodyCSS: "'Rajdhani', sans-serif",
    name: 'Retro Pair',
    preview: 'RETRO',
    previewBody: 'Condensed body text'
  },
  {
    id: 'art-deco',
    displayFont: 'Fredericka the Great',
    bodyFont: 'Cinzel',
    displayCSS: "'Fredericka the Great', cursive",
    bodyCSS: "'Cinzel', serif",
    name: 'Art Deco',
    preview: 'Deco',
    previewBody: 'Classic deco body'
  },
];

// ======================== ACCENT COLORS ========================
window.ACCENT_COLORS = [
  '#ff3cac', '#ff0044', '#ff6b35', '#f9c859',
  '#4ade80', '#00f5d4', '#00bfff', '#2b86c5',
  '#a78bfa', '#784ba0', '#c084fc', '#e879f9',
  '#ffffff', '#f0f0f0', '#d4a853', '#ff4500',
];

// ======================== 100 FONTS LIBRARY ========================
window.ALL_FONTS = [
  // Display / Impact
  { name: 'Bebas Neue', css: "'Bebas Neue', sans-serif", category: 'Display', preview: 'BOLD DISPLAY' },
  { name: 'Anton', css: "'Anton', sans-serif", category: 'Display', preview: 'STRONG IMPACT' },
  { name: 'Oswald', css: "'Oswald', sans-serif", category: 'Display', preview: 'CONDENSED STYLE' },
  { name: 'Black Han Sans', css: "'Black Han Sans', sans-serif", category: 'Display', preview: 'THICK WEIGHT' },
  { name: 'Bungee', css: "'Bungee', sans-serif", category: 'Display', preview: 'STREET STYLE' },
  { name: 'Bungee Inline', css: "'Bungee Inline', sans-serif", category: 'Display', preview: 'INLINE BUNGEE' },
  { name: 'Bungee Shade', css: "'Bungee Shade', sans-serif", category: 'Display', preview: 'SHADOW BUNGEE' },
  { name: 'Alfa Slab One', css: "'Alfa Slab One', cursive", category: 'Display', preview: 'SLAB IMPACT' },
  { name: 'Big Shoulders Display', css: "'Big Shoulders Display', cursive", category: 'Display', preview: 'BIG SHOULDERS' },
  { name: 'Passion One', css: "'Passion One', cursive", category: 'Display', preview: 'PASSION WIDE' },
  { name: 'Ultra', css: "'Ultra', serif", category: 'Display', preview: 'ULTRA WEIGHT' },
  { name: 'Fjalla One', css: "'Fjalla One', sans-serif", category: 'Display', preview: 'FJALLA MODERN' },
  { name: 'Barlow', css: "'Barlow', sans-serif", category: 'Display', preview: 'BARLOW MEDIUM' },
  { name: 'Barlow Condensed', css: "'Barlow Condensed', sans-serif", category: 'Display', preview: 'CONDENSED WIDE' },
  { name: 'Squada One', css: "'Squada One', cursive", category: 'Display', preview: 'SQUAD DISPLAY' },
  { name: 'Russo One', css: "'Russo One', sans-serif", category: 'Display', preview: 'RUSSO STYLE' },
  { name: 'Abril Fatface', css: "'Abril Fatface', cursive", category: 'Display', preview: 'Abril Style' },
  { name: 'Fredericka the Great', css: "'Fredericka the Great', cursive", category: 'Display', preview: 'Ornate Display' },
  { name: 'Righteous', css: "'Righteous', cursive", category: 'Display', preview: 'Righteous Bold' },
  { name: 'Wallpoet', css: "'Wallpoet', cursive", category: 'Display', preview: 'WALLPOET' },
  // Serif
  { name: 'Playfair Display', css: "'Playfair Display', serif", category: 'Serif', preview: 'Elegant Serif' },
  { name: 'Cinzel', css: "'Cinzel', serif", category: 'Serif', preview: 'CINZEL ROMAN' },
  { name: 'Uncial Antiqua', css: "'Uncial Antiqua', cursive", category: 'Serif', preview: 'Antiqua Style' },
  { name: 'Libre Baskerville', css: "'Libre Baskerville', serif", category: 'Serif', preview: 'Classic Serif' },
  { name: 'Merriweather', css: "'Merriweather', serif", category: 'Serif', preview: 'Merriweather' },
  { name: 'PT Serif', css: "'PT Serif', serif", category: 'Serif', preview: 'PT Serif Style' },
  { name: 'Crimson Text', css: "'Crimson Text', serif", category: 'Serif', preview: 'Crimson Elegant' },
  { name: 'IM Fell English', css: "'IM Fell English', serif", category: 'Serif', preview: 'Fell Italic' },
  { name: 'Cormorant Garamond', css: "'Cormorant Garamond', serif", category: 'Serif', preview: 'Cormorant Fine' },
  { name: 'Lora', css: "'Lora', serif", category: 'Serif', preview: 'Lora Balanced' },
  { name: 'Josefin Slab', css: "'Josefin Slab', serif", category: 'Serif', preview: 'Geometric Slab' },
  // Sans-Serif
  { name: 'Montserrat', css: "'Montserrat', sans-serif", category: 'Sans-Serif', preview: 'Montserrat Modern' },
  { name: 'Raleway', css: "'Raleway', sans-serif", category: 'Sans-Serif', preview: 'Raleway Light' },
  { name: 'Lato', css: "'Lato', sans-serif", category: 'Sans-Serif', preview: 'Lato Friendly' },
  { name: 'Poppins', css: "'Poppins', sans-serif", category: 'Sans-Serif', preview: 'Poppins Round' },
  { name: 'Nunito', css: "'Nunito', sans-serif", category: 'Sans-Serif', preview: 'Nunito Soft' },
  { name: 'Ubuntu', css: "'Ubuntu', sans-serif", category: 'Sans-Serif', preview: 'Ubuntu Clean' },
  { name: 'Roboto Condensed', css: "'Roboto Condensed', sans-serif", category: 'Sans-Serif', preview: 'Roboto Tight' },
  { name: 'Josefin Sans', css: "'Josefin Sans', sans-serif", category: 'Sans-Serif', preview: 'Josefin Geometric' },
  { name: 'Source Sans 3', css: "'Source Sans 3', sans-serif", category: 'Sans-Serif', preview: 'Source Clean' },
  { name: 'Jost', css: "'Jost', sans-serif", category: 'Sans-Serif', preview: 'Jost Elegant' },
  { name: 'Space Grotesk', css: "'Space Grotesk', sans-serif", category: 'Sans-Serif', preview: 'Space Grotesk' },
  { name: 'DM Sans', css: "'DM Sans', sans-serif", category: 'Sans-Serif', preview: 'DM Modern' },
  { name: 'Inter', css: "'Inter', sans-serif", category: 'Sans-Serif', preview: 'Inter Interface' },
  { name: 'Plus Jakarta Sans', css: "'Plus Jakarta Sans', sans-serif", category: 'Sans-Serif', preview: 'Jakarta Fresh' },
  { name: 'Rubik', css: "'Rubik', sans-serif", category: 'Sans-Serif', preview: 'Rubik Rounded' },
  { name: 'Kanit', css: "'Kanit', sans-serif", category: 'Sans-Serif', preview: 'Kanit Thai-Latin' },
  { name: 'Changa', css: "'Changa', sans-serif", category: 'Sans-Serif', preview: 'Changa Arabic' },
  { name: 'Rajdhani', css: "'Rajdhani', sans-serif", category: 'Sans-Serif', preview: 'Rajdhani Indian' },
  { name: 'Teko', css: "'Teko', sans-serif", category: 'Sans-Serif', preview: 'TEKO NARROW' },
  { name: 'Exo 2', css: "'Exo 2', sans-serif", category: 'Sans-Serif', preview: 'Exo Future' },
  { name: 'Barlow Semi Condensed', css: "'Barlow Semi Condensed', sans-serif", category: 'Sans-Serif', preview: 'Barlow Semi' },
  { name: 'Questrial', css: "'Questrial', sans-serif", category: 'Sans-Serif', preview: 'Questrial Simple' },
  // Script / Handwritten
  { name: 'Dancing Script', css: "'Dancing Script', cursive", category: 'Script', preview: 'Dancing Script' },
  { name: 'Satisfy', css: "'Satisfy', cursive", category: 'Script', preview: 'Satisfy Cursive' },
  { name: 'Pacifico', css: "'Pacifico', cursive", category: 'Script', preview: 'Pacifico Bold' },
  { name: 'Lobster', css: "'Lobster', cursive", category: 'Script', preview: 'Lobster Retro' },
  { name: 'Sacramento', css: "'Sacramento', cursive", category: 'Script', preview: 'Sacramento' },
  { name: 'Great Vibes', css: "'Great Vibes', cursive", category: 'Script', preview: 'Great Vibes' },
  { name: 'Pinyon Script', css: "'Pinyon Script', cursive", category: 'Script', preview: 'Pinyon Formal' },
  { name: 'Alex Brush', css: "'Alex Brush', cursive", category: 'Script', preview: 'Alex Brush' },
  { name: 'Allura', css: "'Allura', cursive", category: 'Script', preview: 'Allura Script' },
  { name: 'Kaushan Script', css: "'Kaushan Script', cursive", category: 'Script', preview: 'Kaushan Bold' },
  { name: 'Courgette', css: "'Courgette', cursive", category: 'Script', preview: 'Courgette Italic' },
  { name: 'Yellowtail', css: "'Yellowtail', cursive", category: 'Script', preview: 'Yellowtail Fun' },
  { name: 'Niconne', css: "'Niconne', cursive", category: 'Script', preview: 'Niconne Casual' },
  { name: 'Permanent Marker', css: "'Permanent Marker', cursive", category: 'Script', preview: 'Marker Style' },
  { name: 'Rock Salt', css: "'Rock Salt', cursive", category: 'Script', preview: 'Rock Salt Rough' },
  { name: 'Caveat', css: "'Caveat', cursive", category: 'Script', preview: 'Caveat Hand' },
  { name: 'Shadows Into Light', css: "'Shadows Into Light', cursive", category: 'Script', preview: 'Shadows Light' },
  { name: 'Gloria Hallelujah', css: "'Gloria Hallelujah', cursive", category: 'Script', preview: 'Gloria Fun' },
  { name: 'Coming Soon', css: "'Coming Soon', cursive", category: 'Script', preview: 'Coming Soon' },
  { name: 'Patrick Hand', css: "'Patrick Hand', cursive", category: 'Script', preview: 'Patrick Hand' },
  { name: 'Reenie Beanie', css: "'Reenie Beanie', cursive", category: 'Script', preview: 'Reenie Thin' },
  { name: 'Amatic SC', css: "'Amatic SC', cursive", category: 'Script', preview: 'AMATIC SMALL' },
  { name: 'Indie Flower', css: "'Indie Flower', cursive", category: 'Script', preview: 'Indie Flower' },
  { name: 'Handlee', css: "'Handlee', cursive", category: 'Script', preview: 'Handlee Style' },
  // Monospace / Tech
  { name: 'Press Start 2P', css: "'Press Start 2P', monospace", category: 'Mono/Tech', preview: 'PIXEL 8BIT' },
  { name: 'VT323', css: "'VT323', monospace", category: 'Mono/Tech', preview: 'VT323 RETRO' },
  { name: 'Monoton', css: "'Monoton', cursive", category: 'Mono/Tech', preview: 'MONOTON LINE' },
  { name: 'Orbitron', css: "'Orbitron', sans-serif", category: 'Mono/Tech', preview: 'ORBITRON SCI-FI' },
  { name: 'Audiowide', css: "'Audiowide', cursive", category: 'Mono/Tech', preview: 'AUDIOWIDE' },
  { name: 'Syncopate', css: "'Syncopate', sans-serif", category: 'Mono/Tech', preview: 'SYNCOPATE' },
  { name: 'Share Tech', css: "'Share Tech', sans-serif", category: 'Mono/Tech', preview: 'SHARE TECH' },
  { name: 'Share Tech Mono', css: "'Share Tech Mono', monospace", category: 'Mono/Tech', preview: 'SHARE_MONO' },
  { name: 'Michroma', css: "'Michroma', sans-serif", category: 'Mono/Tech', preview: 'MICHROMA TECH' },
  { name: 'Electrolize', css: "'Electrolize', sans-serif", category: 'Mono/Tech', preview: 'ELECTROLIZE' },
  { name: 'Special Elite', css: "'Special Elite', cursive", category: 'Mono/Tech', preview: 'Typewriter Style' },
  // Additional fonts to complete 100
  { name: 'Spectral', css: "'Spectral', serif", category: 'Serif', preview: 'Spectral Elegant' },
  { name: 'Neuton', css: "'Neuton', serif", category: 'Serif', preview: 'Neuton Classic' },
  { name: 'Literata', css: "'Literata', serif", category: 'Serif', preview: 'Literata Book' },
  { name: 'Karla', css: "'Karla', sans-serif", category: 'Sans-Serif', preview: 'Karla Minimal' },
  { name: 'Manrope', css: "'Manrope', sans-serif", category: 'Sans-Serif', preview: 'Manrope Modern' },
  { name: 'Be Vietnam Pro', css: "'Be Vietnam Pro', sans-serif", category: 'Sans-Serif', preview: 'Be Vietnam Clean' },
  { name: 'Syne', css: "'Syne', sans-serif", category: 'Display', preview: 'SYNE FUTUR' },
  { name: 'Space Mono', css: "'Space Mono', monospace", category: 'Mono/Tech', preview: 'Space_Mono' },
  { name: 'Chakra Petch', css: "'Chakra Petch', sans-serif", category: 'Mono/Tech', preview: 'CHAKRA TECH' },
  { name: 'Lexend', css: "'Lexend', sans-serif", category: 'Sans-Serif', preview: 'Lexend Readable' },
  { name: 'Outfit', css: "'Outfit', sans-serif", category: 'Sans-Serif', preview: 'Outfit Fresh' },
  { name: 'Unbounded', css: "'Unbounded', cursive", category: 'Display', preview: 'UNBOUNDED WIDE' },
];

// ======================== QUICK TEMPLATES ========================
window.QUICK_TEMPLATES = [
  {
    name: 'Event Promo',
    tag: '📅 UPCOMING EVENT',
    heading: 'Annual Gala Night 2025',
    sub: 'An evening of celebration and excellence',
    body: 'Join us for an unforgettable night filled with music, networking, and awards. Black tie optional.',
    cta: 'GET YOUR TICKETS',
    hashtag: '#GalaNight2025 @templixevents',
    footer: 'Dec 31, 2025 · Victoria Island, Lagos',
    contact: '+234 800 000 0000 · tickets@galanight.com'
  },
  {
    name: 'Product Launch',
    tag: '🚀 JUST LAUNCHED',
    heading: 'New Collection Drops Now',
    sub: 'The future of fashion is here',
    body: 'Exclusive pieces designed for those who dare to be different. Limited stock available.',
    cta: 'SHOP NOW',
    hashtag: '#NewDrop #LimitedEdition',
    footer: 'Available online & in-store',
    contact: 'shop.brand.com · @brandinsta'
  },
  {
    name: 'Motivational',
    tag: '💡 DAILY INSPIRATION',
    heading: 'Success Is Not Given, It Is Earned',
    sub: 'Every champion was once a challenger',
    body: 'The road to greatness is paved with discipline, consistency, and unwavering belief in yourself.',
    cta: 'START TODAY',
    hashtag: '#Motivation #Hustle #Growth',
    footer: 'Follow for daily motivation',
    contact: '@templixstudio'
  },
  {
    name: 'Food & Drink',
    tag: '🍽️ SPECIAL MENU',
    heading: 'Taste The Difference',
    sub: 'Crafted with passion, served with love',
    body: 'Fresh ingredients, bold flavors, unforgettable experience. Come hungry, leave happy.',
    cta: 'RESERVE A TABLE',
    hashtag: '#FoodLovers #RestaurantLife',
    footer: 'Open Daily 10am – 10pm',
    contact: '+234 800 000 0001 · restaurant.com'
  },
  {
    name: 'Announcement',
    tag: '📢 ANNOUNCEMENT',
    heading: 'Big News Coming Your Way',
    sub: 'Something incredible is about to happen',
    body: 'We have been working hard behind the scenes to bring you something truly special. Stay tuned.',
    cta: 'STAY TUNED',
    hashtag: '#ComingSoon #BigAnnouncement',
    footer: 'Watch this space',
    contact: 'www.brand.com'
  },
  {
    name: 'Church / Ministry',
    tag: '⛪ SUNDAY SERVICE',
    heading: 'Join Us This Sunday',
    sub: 'Experience God\'s presence like never before',
    body: 'Come as you are. Bring your family, friends, and neighbors for a powerful time of worship and the Word.',
    cta: 'ALL ARE WELCOME',
    hashtag: '#SundayService #Jesus #Church',
    footer: '8:00 AM & 10:30 AM · Church Address',
    contact: 'info@church.com · @churchhandle'
  },
  {
    name: 'Sale Promo',
    tag: '🔥 LIMITED OFFER',
    heading: 'Up to 70% Off Everything',
    sub: 'Don\'t miss this once-in-a-season deal',
    body: 'Massive discounts across all categories. Use code TEMPLIX70 at checkout. Offer ends soon.',
    cta: 'CLAIM YOUR DISCOUNT',
    hashtag: '#SaleAlert #MegaSale',
    footer: 'Valid until Dec 25, 2025',
    contact: 'shop.brand.com'
  },
  {
    name: 'Music Release',
    tag: '🎵 NEW MUSIC',
    heading: 'Out Now On All Platforms',
    sub: 'The song that everyone\'s talking about',
    body: 'Stream, download, share. Available on Spotify, Apple Music, Audiomack and everywhere music lives.',
    cta: 'STREAM NOW',
    hashtag: '#NewMusic #NowPlaying',
    footer: 'Available everywhere',
    contact: '@artisthandle · artist.com'
  },
  {
    name: 'Wedding',
    tag: '💍 SAVE THE DATE',
    heading: 'We\'re Getting Married',
    sub: 'Join us as we celebrate our love',
    body: 'The union of two hearts, two families, one beautiful story. We would be honored by your presence.',
    cta: 'RSVP NOW',
    hashtag: '#ForeverTogether #Wedding2025',
    footer: 'June 14, 2025 · Grand Hall, Lagos',
    contact: 'rsvp@ourwedding.com'
  },
  {
    name: 'Job Vacancy',
    tag: '🎂 BIRTHDAY BASH',
    heading: 'You\'re Invited!',
    sub: 'Let\'s celebrate together',
    body: 'Come join us for a fun-filled birthday celebration with great food, music, and amazing company.',
    cta: 'CONFIRM ATTENDANCE',
    hashtag: '#HappyBirthday #BirthdayVibes',
    footer: 'Saturday, March 15 · 6PM onwards',
    contact: '+234 800 000 0002'
  },
  {
    name: 'Fitness / Gym',
    tag: '💪 TRANSFORMATION',
    heading: 'Your Journey Starts Today',
    sub: 'No excuses. Just results.',
    body: 'Join thousands who have transformed their bodies and lives. Professional trainers, modern equipment.',
    cta: 'JOIN THE GYM',
    hashtag: '#FitnessGoals #GymLife #Health',
    footer: 'Open 6am – 10pm daily',
    contact: '+234 800 000 0003 · gym.com'
  },
  {
    name: 'Seminar / Training',
    tag: '📚 LIVE TRAINING',
    heading: 'Master The Skills That Pay',
    sub: 'Invest in yourself — the best investment',
    body: 'Hands-on training by industry experts. Walk away with skills, certificate, and a network.',
    cta: 'REGISTER FREE',
    hashtag: '#Training #Skills #Growth',
    footer: 'Online & In-Person | Limited Slots',
    contact: 'training@academy.com'
  },
  {
    name: 'Real Estate',
    tag: '🏠 PROPERTY LISTING',
    heading: 'Your Dream Home Awaits',
    sub: 'Luxury living at an affordable price',
    body: '3 bedrooms, 2 baths, modern kitchen, 24/7 security. Prime location in a fast-growing estate.',
    cta: 'BOOK INSPECTION',
    hashtag: '#RealEstate #PropertyForSale',
    footer: 'Lekki, Lagos · Starting ₦45M',
    contact: '+234 800 000 0004 · realty.com'
  },
  {
    name: 'Podcast Launch',
    tag: '🎙️ NEW PODCAST',
    heading: 'Tune In Every Thursday',
    sub: 'Conversations that change perspectives',
    body: 'Raw, honest discussions on business, life, and culture. Available on Spotify and Apple Podcasts.',
    cta: 'SUBSCRIBE NOW',
    hashtag: '#Podcast #NewEpisode #Listen',
    footer: 'Every Thursday · 30 min episodes',
    contact: '@podcasthandle'
  },
  {
    name: 'Fashion Brand',
    tag: '👗 NEW COLLECTION',
    heading: 'Style Is Who You Are',
    sub: 'Wear your confidence',
    body: 'From runway to reality. Every piece is crafted to make you feel extraordinary every day.',
    cta: 'SHOP LOOKBOOK',
    hashtag: '#FashionWeek #StyleIcon #OOTD',
    footer: 'Available online & flagship store',
    contact: 'fashion.brand.com · @fashionbrand'
  },
  {
    name: 'Tech Product',
    tag: '⚡ TECH LAUNCH',
    heading: 'The Future In Your Hands',
    sub: 'Engineered for excellence',
    body: 'Cutting-edge technology meets sleek design. Faster processor, longer battery, stunning display.',
    cta: 'PRE-ORDER NOW',
    hashtag: '#TechLaunch #Innovation #Gadgets',
    footer: 'Ships globally from April 2026',
    contact: 'tech.brand.com'
  },
  {
    name: 'Photography',
    tag: '📸 PHOTOGRAPHY',
    heading: 'Every Moment Deserves To Be Remembered',
    sub: 'Professional photography services',
    body: 'Weddings, portraits, events, products. We capture emotions, not just images.',
    cta: 'BOOK A SESSION',
    hashtag: '#Photography #Portraits #Moments',
    footer: 'Lagos, Abuja & Port Harcourt',
    contact: '+234 800 000 0005 · photo.com'
  },
  {
    name: 'Book Release',
    tag: '📖 BOOK LAUNCH',
    heading: 'A Story Worth Reading',
    sub: 'The debut novel everyone is talking about',
    body: 'A gripping tale of love, ambition, and resilience set against the vibrant backdrop of modern Africa.',
    cta: 'ORDER YOUR COPY',
    hashtag: '#NewBook #BookLaunch #MustRead',
    footer: 'Available in all major bookstores',
    contact: 'author.com · @authorhandle'
  },
  {
    name: 'Charity / NGO',
    tag: '❤️ MAKE A DIFFERENCE',
    heading: 'Every Life Matters',
    sub: 'Help us change lives today',
    body: 'Your donation feeds families, educates children, and builds communities. Even ₦1000 makes a difference.',
    cta: 'DONATE NOW',
    hashtag: '#GiveBack #Charity #Change',
    footer: 'All donations are tax-deductible',
    contact: 'donate@ngo.org'
  },
  {
    name: 'Political Campaign',
    tag: '🗳️ VOTE FOR CHANGE',
    heading: 'A Leader For The People',
    sub: 'Experience. Integrity. Vision.',
    body: 'With over 20 years of public service, this is a candidate who understands your needs and will deliver.',
    cta: 'JOIN THE MOVEMENT',
    hashtag: '#Vote2026 #Change #Leadership',
    footer: 'Election Day: February 2026',
    contact: 'campaign@candidate.com'
  },
  {
    name: 'Award Show',
    tag: '🏆 AWARD CEREMONY',
    heading: 'Excellence Recognized',
    sub: 'The most prestigious night of the year',
    body: 'Celebrating outstanding achievements in business, entertainment, and community service. Join the celebration.',
    cta: 'NOMINATE NOW',
    hashtag: '#Awards2025 #Excellence',
    footer: 'December 20, 2025 · Eko Hotels',
    contact: 'awards@organization.com'
  },
  {
    name: 'Sports Event',
    tag: '⚽ MATCH DAY',
    heading: 'The Game Of The Season',
    sub: 'Who will claim victory?',
    body: 'Come out and support your team as they battle for glory. Family-friendly atmosphere guaranteed.',
    cta: 'BUY TICKETS',
    hashtag: '#MatchDay #Football #Sports',
    footer: 'Kickoff: 4:00 PM · National Stadium',
    contact: 'tickets.sports.com'
  },
  {
    name: 'Art Exhibition',
    tag: '🎨 ART SHOW',
    heading: 'Where Creativity Comes Alive',
    sub: 'An evening of art, culture & conversation',
    body: 'Featuring works from 30 emerging and established artists from across Africa. Free entry for all.',
    cta: 'VIEW GALLERY',
    hashtag: '#ArtExhibition #AfricanArt',
    footer: 'Nov 15–30 · Lagos Art Gallery',
    contact: 'gallery@artshow.com'
  },
  {
    name: 'Travel Package',
    tag: '✈️ TRAVEL DEAL',
    heading: 'Escape To Paradise',
    sub: 'All-inclusive deals you can\'t ignore',
    body: 'Flight + Hotel + Tour packages from only $299. Limited spots available. Book before they sell out!',
    cta: 'BOOK NOW',
    hashtag: '#TravelDeals #Vacation #Explore',
    footer: 'Packages valid Jan–March 2026',
    contact: 'travel@agency.com'
  },
  {
    name: 'Graduation',
    tag: '🎓 CONGRATULATIONS',
    heading: 'You Did It!',
    sub: 'The future is yours to conquer',
    body: 'From late nights to this moment — every struggle was worth it. Celebrate the achievement of a lifetime.',
    cta: 'CELEBRATE WITH US',
    hashtag: '#Graduation2025 #ClassOf2025',
    footer: 'Graduation Ceremony · May 2025',
    contact: 'alumni@university.edu'
  },
  {
    name: 'Restaurant Special',
    tag: '🍔 WEEKEND SPECIAL',
    heading: 'Friday Night Feast',
    sub: 'Special discounts every Friday',
    body: 'Get 30% off all meals every Friday. Bring your family, friends or date — we\'ve got the vibe covered.',
    cta: 'ORDER NOW',
    hashtag: '#FridaySpecial #FoodPorn #Eat',
    footer: 'Valid every Friday 6pm–11pm',
    contact: '+234 800 000 0006 · restaurant.com'
  },
  {
    name: 'Nightclub / Party',
    tag: '🔥 TONIGHT',
    heading: 'The Party Starts Now',
    sub: 'The biggest night of the year',
    body: 'Live DJ, open bar, VIP tables, and unforgettable memories. Dress code: All Black. 18+ only.',
    cta: 'GET VIP ACCESS',
    hashtag: '#PartyNight #Nightlife #Vibes',
    footer: 'Doors open 9PM · Club X, VI Lagos',
    contact: 'vip@clubx.com'
  },
  {
    name: 'Webinar / Online Event',
    tag: '💻 LIVE WEBINAR',
    heading: 'Join Us Online This Friday',
    sub: 'Free training for 500 lucky participants',
    body: 'Learn the exact system our students used to earn their first 6-figures online. Limited registration.',
    cta: 'REGISTER FREE',
    hashtag: '#Webinar #Online #Training',
    footer: 'Friday 7PM WAT · Zoom',
    contact: 'register@event.com'
  },
  {
    name: 'School Admission',
    tag: '🏫 ADMISSIONS OPEN',
    heading: 'Give Your Child The Best',
    sub: 'Quality education that shapes futures',
    body: 'Enroll your child in a top-rated school with experienced teachers, modern facilities, and values-based education.',
    cta: 'APPLY TODAY',
    hashtag: '#Education #SchoolAdmission',
    footer: 'Registration deadline: March 31',
    contact: 'admissions@school.edu'
  },
  {
    name: 'Financial Services',
    tag: '💰 INVEST SMART',
    heading: 'Grow Your Wealth With Confidence',
    sub: 'Expert financial guidance you can trust',
    body: 'From savings to investments, insurance to retirement plans — we have the right solutions for your goals.',
    cta: 'GET FREE CONSULTATION',
    hashtag: '#FinancialFreedom #Invest #Wealth',
    footer: 'Licensed & Regulated',
    contact: 'info@finance.com'
  },
  {
    name: 'Health & Wellness',
    tag: '🌿 WELLNESS TIP',
    heading: 'Your Health Is Your Wealth',
    sub: 'Small changes, big results',
    body: 'Discover evidence-based wellness habits that top performers use daily to maintain peak performance.',
    cta: 'START YOUR JOURNEY',
    hashtag: '#Wellness #Health #Selfcare',
    footer: 'www.wellness.com',
    contact: '@wellnesshandle'
  },
  {
    name: 'Black Friday',
    tag: '⚫ BLACK FRIDAY',
    heading: 'Biggest Sale Of The Year',
    sub: 'Up to 80% off everything',
    body: 'Once a year deals you cannot afford to miss. Shop early, save big. Free shipping on all orders above ₦20,000.',
    cta: 'SHOP THE DEALS',
    hashtag: '#BlackFriday #Sale #Deals',
    footer: 'Offer valid November 29 only',
    contact: 'blackfriday.store.com'
  },
  {
    name: 'New Year',
    tag: '🎆 NEW YEAR 2026',
    heading: 'Happy New Year!',
    sub: 'New Year, New Possibilities',
    body: 'Wishing you abundance, joy, good health, and unstoppable success in the new year. May all your dreams come true.',
    cta: 'CELEBRATE WITH US',
    hashtag: '#HappyNewYear #2026 #NewBeginnings',
    footer: 'December 31st · Live from Lagos',
    contact: '@brandhandle'
  },
  {
    name: 'Valentine\'s Day',
    tag: '🛒 NEW ARRIVALS',
    heading: 'Fresh Stock Just Dropped',
    sub: 'Be the first to grab the new collection',
    body: 'New arrivals every week. Quality products, fast delivery, and hassle-free returns. Shop with confidence.',
    cta: 'SHOP NOW',
    hashtag: '#NewArrivals #OnlineShopping',
    footer: 'Nationwide delivery available',
    contact: 'shop.brand.com · @shopbrand'
  },
  {
    name: 'Environmental / Green',
    tag: '🌍 SAVE OUR PLANET',
    heading: 'Go Green Today',
    sub: 'Small actions, massive impact',
    body: 'Join our community of eco-conscious individuals making daily choices that protect the planet for future generations.',
    cta: 'JOIN THE MOVEMENT',
    hashtag: '#GoGreen #ClimateAction #Eco',
    footer: 'Together, we can make a difference',
    contact: 'green@ecomovement.org'
  },
  {
    name: 'Conference',
    tag: '🎤 ANNUAL CONFERENCE',
    heading: 'Where Ideas Meet Action',
    sub: '500+ speakers. 3 days. 1 venue.',
    body: 'The biggest business and tech conference in West Africa. Network with leaders, learn from the best, launch your future.',
    cta: 'BUY YOUR PASS',
    hashtag: '#TechConference #Business #Summit',
    footer: 'April 10–12, 2026 · Eko Convention Centre',
    contact: 'conference@event.com'
  },
  {
    name: 'Social Proof',
    tag: '⭐ CUSTOMER REVIEW',
    heading: '4.9 Stars — Our Customers Love Us',
    sub: 'Don\'t take our word for it',
    body: '"This is honestly the best service I have ever experienced. Exceeded my expectations in every way." — Sarah O.',
    cta: 'READ ALL REVIEWS',
    hashtag: '#CustomerLove #5Star #Testimonial',
    footer: 'Join 10,000+ happy customers',
    contact: 'reviews@brand.com'
  },
  {
    name: 'Quote / Inspiration',
    tag: '💭 QUOTE OF THE DAY',
    heading: '"Great Things Never Came From Comfort Zones"',
    sub: '— Unknown',
    body: 'Push beyond your limits today. The life you dream of is on the other side of your biggest fear.',
    cta: 'SHARE THIS',
    hashtag: '#Motivation #Quote #Inspiration',
    footer: 'Follow for daily quotes',
    contact: '@quotepage'
  },
  {
    name: 'Ministry / Prayer',
    tag: '🙏 PRAYER MEETING',
    heading: 'Come To The Mountain',
    sub: 'A powerful night of prayer and worship',
    body: 'Bring your family, your burdens, your prayers. The Lord is ready to meet you at this sacred gathering.',
    cta: 'JOIN US',
    hashtag: '#PrayerMeeting #Revival #Faith',
    footer: 'Every Thursday 7PM · Church Hall',
    contact: 'info@ministry.org'
  },
  {
    name: 'Campus Life',
    tag: '🎓 CAMPUS EVENT',
    heading: 'Freshers\' Welcome Party',
    sub: 'Your university journey starts here',
    body: 'Meet new friends, discover clubs and societies, and kick off the best years of your life with a bang!',
    cta: 'REGISTER FREE',
    hashtag: '#FreshersWeek #University #Campus',
    footer: 'Friday 5PM · Campus Main Hall',
    contact: 'students@university.edu'
  },
  {
    name: 'News / Media',
    tag: '📰 BREAKING NEWS',
    heading: 'Developing Story — Stay With Us',
    sub: 'Live updates as events unfold',
    body: 'Our reporters are on the ground. Follow us for real-time updates, verified facts, and in-depth analysis.',
    cta: 'FOLLOW NOW',
    hashtag: '#BreakingNews #News #LiveUpdates',
    footer: 'Visit our website for full story',
    contact: 'news@media.com'
  },
  {
    name: 'Personal Brand',
    tag: '👤 PERSONAL BRAND',
    heading: 'Building Something Bigger Than Yourself',
    sub: 'Your story is your most powerful asset',
    body: 'I help entrepreneurs, creators, and professionals build powerful personal brands that attract opportunities.',
    cta: 'WORK WITH ME',
    hashtag: '#PersonalBrand #Entrepreneur #Creator',
    footer: 'Link in bio for collaborations',
    contact: '@yourhandle · yourbrand.com'
  },
];

// ======================== DESIGN STYLE DEFINITIONS ========================
window.DESIGN_STYLES = [
  {
    id: 'modern-clean',
    name: 'Modern Clean',
    class: 'ds-modern-clean',
    category: 'modern',
    overlayType: 'bottom-fade',
    defaultAccent: '#00f5d4',
  },
  {
    id: 'modern-split',
    name: 'Modern Split',
    class: 'ds-modern-clean',
    category: 'modern',
    overlayType: 'side-fade',
    defaultAccent: '#2b86c5',
    variant: 'split'
  },
  {
    id: 'modern-center',
    name: 'Modern Center',
    class: 'ds-modern-clean',
    category: 'modern',
    overlayType: 'full-dark',
    defaultAccent: '#ff3cac',
    variant: 'center'
  },
  {
    id: 'editorial',
    name: 'Editorial',
    class: 'ds-editorial',
    category: 'editorial',
    overlayType: 'side-fade',
    defaultAccent: '#f9c859',
  },
  {
    id: 'editorial-bold',
    name: 'Editorial Bold',
    class: 'ds-editorial',
    category: 'editorial',
    overlayType: 'full-dark',
    defaultAccent: '#ffffff',
    variant: 'bold'
  },
  {
    id: 'punk-raw',
    name: 'Punk Raw',
    class: 'ds-punk-raw',
    category: 'punk',
    overlayType: 'punk-overlay',
    defaultAccent: '#ff0044',
  },
  {
    id: 'neon-glow',
    name: 'Neon Glow',
    class: 'ds-neon-glow',
    category: 'neon',
    overlayType: 'bottom-fade',
    defaultAccent: '#00f5d4',
  },
  {
    id: 'neon-city',
    name: 'Neon City',
    class: 'ds-neon-glow',
    category: 'neon',
    overlayType: 'full-dark',
    defaultAccent: '#ff3cac',
    variant: 'city'
  },
  {
    id: 'minimal',
    name: 'Minimal',
    class: 'ds-minimal',
    category: 'minimal',
    overlayType: 'minimal-fade',
    defaultAccent: '#ffffff',
  },
  {
    id: 'bold-impact',
    name: 'Bold Impact',
    class: 'ds-bold-impact',
    category: 'bold',
    overlayType: 'radial-dark',
    defaultAccent: '#f9c859',
  },
  {
    id: 'elegant-script',
    name: 'Elegant Script',
    class: 'ds-elegant-script',
    category: 'elegant',
    overlayType: 'bottom-fade',
    defaultAccent: '#f9c859',
  },
  {
    id: 'retro-vintage',
    name: 'Retro Vintage',
    class: 'ds-retro-vintage',
    category: 'retro',
    overlayType: 'radial-dark',
    defaultAccent: '#f9c859',
  },
  {
    id: 'street-art',
    name: 'Street Art',
    class: 'ds-street-art',
    category: 'street',
    overlayType: 'side-fade',
    defaultAccent: '#4ade80',
  },
  {
    id: 'pixel-game',
    name: 'Pixel Game',
    class: 'ds-pixel-game',
    category: 'pixel',
    overlayType: 'full-dark',
    defaultAccent: '#a78bfa',
  },
  {
    id: 'cinema',
    name: 'Cinema',
    class: 'ds-cinema',
    category: 'cinema',
    overlayType: 'cinema-overlay',
    defaultAccent: '#f9c859',
  },
  {
    id: 'art-deco',
    name: 'Art Deco',
    class: 'ds-art-deco',
    category: 'artdeco',
    overlayType: 'full-dark',
    defaultAccent: '#d4a853',
  },
  {
    id: 'cyberpunk',
    name: 'Cyberpunk',
    class: 'ds-cyberpunk',
    category: 'cyberpunk',
    overlayType: 'cyber-overlay',
    defaultAccent: '#00f5d4',
  },
  {
    id: 'grunge',
    name: 'Grunge',
    class: 'ds-grunge',
    category: 'grunge',
    overlayType: 'side-fade',
    defaultAccent: '#fb923c',
  },
  // -------- NEW POSTER / FLYER STYLES --------
  {
    id: 'food-flyer',
    name: 'Food Flyer',
    class: 'ds-food-flyer',
    category: 'menu',
    overlayType: 'bottom-fade',
    defaultAccent: '#fb923c',
  },
  {
    id: 'food-flyer-v2',
    name: 'Food Flyer v2',
    class: 'ds-food-flyer',
    category: 'menu',
    overlayType: 'bottom-fade',
    defaultAccent: '#4ade80',
    variant: 'v2',
  },
  {
    id: 'product-specs',
    name: 'Product Specs',
    class: 'ds-product-specs',
    category: 'product',
    overlayType: 'bottom-fade',
    defaultAccent: '#2b86c5',
  },
  {
    id: 'product-specs-dark',
    name: 'Product Specs Dark',
    class: 'ds-product-specs',
    category: 'product',
    overlayType: 'full-dark',
    defaultAccent: '#f9c859',
    variant: 'dark',
  },
  {
    id: 'menu-card',
    name: 'Menu Card',
    class: 'ds-menu-card',
    category: 'menu',
    overlayType: 'bottom-fade',
    defaultAccent: '#fb923c',
  },
  {
    id: 'menu-card-dark',
    name: 'Menu Card Dark',
    class: 'ds-menu-card',
    category: 'menu',
    overlayType: 'full-dark',
    defaultAccent: '#4ade80',
    variant: 'dark',
  },
  {
    id: 'promo-banner',
    name: 'Promo Banner',
    class: 'ds-promo-banner',
    category: 'promo',
    overlayType: 'bottom-fade',
    defaultAccent: '#f87171',
  },
  {
    id: 'promo-banner-bold',
    name: 'Promo Banner Bold',
    class: 'ds-promo-banner',
    category: 'promo',
    overlayType: 'radial-dark',
    defaultAccent: '#fb923c',
    variant: 'bold',
  },
  {
    id: 'feature-split',
    name: 'Feature Split',
    class: 'ds-feature-split',
    category: 'poster',
    overlayType: 'side-fade',
    defaultAccent: '#2b86c5',
  },
  {
    id: 'feature-split-warm',
    name: 'Feature Split Warm',
    class: 'ds-feature-split',
    category: 'poster',
    overlayType: 'bottom-fade',
    defaultAccent: '#fb923c',
    variant: 'warm',
  },
  {
    id: 'infographic',
    name: 'Infographic',
    class: 'ds-infographic',
    category: 'infographic',
    overlayType: 'full-dark',
    defaultAccent: '#c084fc',
  },
  {
    id: 'infographic-dark',
    name: 'Infographic Dark',
    class: 'ds-infographic',
    category: 'infographic',
    overlayType: 'radial-dark',
    defaultAccent: '#00f5d4',
    variant: 'dark',
  },
];

// ======================== OVERLAY GENERATOR ========================
window.getOverlay = function(type, intensity, accent) {
  const op = (intensity / 100).toFixed(2);
  const halfOp = (intensity / 200).toFixed(2);
  const quarterOp = (intensity / 400).toFixed(2);

  const overlays = {
    'bottom-fade': `linear-gradient(0deg, rgba(0,0,0,${op}) 0%, rgba(0,0,0,${halfOp}) 50%, rgba(0,0,0,${quarterOp}) 100%)`,
    'top-fade': `linear-gradient(180deg, rgba(0,0,0,${op}) 0%, rgba(0,0,0,${halfOp}) 50%, transparent 100%)`,
    'side-fade': `linear-gradient(135deg, rgba(0,0,0,${op}) 0%, rgba(0,0,0,${halfOp}) 60%, rgba(0,0,0,${quarterOp}) 100%)`,
    'full-dark': `rgba(0,0,0,${op})`,
    'radial-dark': `radial-gradient(ellipse at center, rgba(0,0,0,${halfOp}) 0%, rgba(0,0,0,${op}) 70%)`,
    'minimal-fade': `linear-gradient(180deg, rgba(0,0,0,${quarterOp}) 0%, rgba(0,0,0,${op}) 100%)`,
    'punk-overlay': `linear-gradient(160deg, rgba(180,0,50,${halfOp}) 0%, rgba(0,0,0,${halfOp}) 60%, rgba(0,0,0,${op}) 100%)`,
    'cinema-overlay': `linear-gradient(180deg, rgba(0,0,0,0.7) 0%, transparent 30%, rgba(0,0,0,0.85) 70%)`,
    'cyber-overlay': `linear-gradient(135deg, rgba(0,5,20,${op}) 0%, rgba(0,20,40,${halfOp}) 100%)`,
  };
  return overlays[type] || overlays['bottom-fade'];
};

// ======================== VIGNETTE GENERATOR ========================
window.getVignette = function(strength) {
  if (strength <= 0) return 'none';
  const op = (strength / 100 * 0.9).toFixed(2);
  return `radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,${op}) 100%)`;
};

// ======================== NOISE CANVAS GENERATOR ========================
window.generateNoiseCSS = function(strength) {
  if (strength <= 0) return '';
  const op = strength / 100 * 0.15;
  return `
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n' x='0' y='0'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='${op}'/%3E%3C/svg%3E");
    background-repeat: repeat;
  `;
};

// ======================== BORDER FRAME GENERATOR ========================
window.getBorderFrame = function(borderStyle, accentColor) {
  const frames = {
    none: '',
    thin: `box-shadow: inset 0 0 0 2px rgba(255,255,255,0.15)`,
    thick: `box-shadow: inset 0 0 0 6px rgba(255,255,255,0.12)`,
    double: `box-shadow: inset 0 0 0 2px ${accentColor}40, inset 0 0 0 6px transparent, inset 0 0 0 8px ${accentColor}20`,
    glow: `box-shadow: inset 0 0 0 2px ${accentColor}80, inset 0 0 20px ${accentColor}20`,
    dash: `outline: 2px dashed ${accentColor}40; outline-offset: -8px`,
  };
  return frames[borderStyle] || '';
};

// ======================== GET SELECTED FONT CSS ========================
window.getSelectedFontCSS = function() {
  if (!window.APP_STATE?.selectedFont) return 'var(--font-main)';
  const font = window.ALL_FONTS.find(f => f.name === window.APP_STATE.selectedFont);
  return font ? font.css : 'var(--font-main)';
};

// ======================== HTML BUILDERS FOR EACH STYLE ========================
window.buildModernClean = function(content, accent, opts, variant) {
  const align = variant === 'center' ? 'center' : 'flex-start';
  const textAlign = variant === 'center' ? 'center' : 'left';
  return `
    <div class="dci-tag" style="color:${accent}">${content.tag || ''}</div>
    <div class="dci-head">${content.heading || 'YOUR HEADLINE HERE'}</div>
    ${content.sub ? `<div class="dci-sub">${content.sub}</div>` : ''}
    ${content.body ? `<div class="dci-body">${content.body}</div>` : ''}
    ${opts.showCTA && content.cta ? `<div class="dci-cta" style="background:${accent};color:#fff">${content.cta}</div>` : ''}
    ${opts.showHashtag && content.hashtag ? `<div class="dci-footer" style="margin-top:6px">${content.hashtag}</div>` : ''}
    ${opts.showFooter && content.footer ? `<div class="dci-footer">${content.footer}</div>` : ''}
  `;
};

window.buildEditorial = function(content, accent, opts, variant) {
  return `
    ${content.tag ? `<div class="dci-tag" style="color:${accent}">${content.tag}</div>` : ''}
    <div class="dci-divider" style="background:${accent}"></div>
    <div class="dci-head">${content.heading || 'Your Headline Here'}</div>
    ${content.sub ? `<div class="dci-sub">${content.sub}</div>` : ''}
    <div class="dci-divider" style="background:${accent}"></div>
    ${content.body ? `<div class="dci-body">${content.body}</div>` : ''}
    ${opts.showCTA && content.cta ? `<div class="dci-cta" style="background:${accent};color:#000;display:inline-block;padding:6px 16px;margin-top:10px;font-size:0.6em;font-weight:700;letter-spacing:2px">${content.cta}</div>` : ''}
    ${opts.showFooter && content.footer ? `<div class="dci-footer">${content.footer}</div>` : ''}
    ${opts.showHashtag && content.hashtag ? `<div class="dci-footer">${content.hashtag}</div>` : ''}
  `;
};

window.buildPunkRaw = function(content, accent, opts) {
  return `
    <div class="dci-noise-line"></div>
    ${content.tag ? `<div class="dci-tag">${content.tag}</div>` : ''}
    <div class="dci-head" style="color:${accent}">${content.heading || 'HEADLINE'}</div>
    ${content.sub ? `<div class="dci-sub">${content.sub}</div>` : ''}
    <div class="dci-noise-line"></div>
    ${content.body ? `<div class="dci-body">${content.body}</div>` : ''}
    ${opts.showFooter && content.footer ? `<div class="dci-footer">${content.footer}</div>` : ''}
    ${opts.showHashtag && content.hashtag ? `<div class="dci-footer">${content.hashtag}</div>` : ''}
  `;
};

window.buildNeonGlow = function(content, accent, opts, variant) {
  const neonShadow = `0 0 10px ${accent}, 0 0 20px ${accent}40`;
  return `
    ${content.tag ? `<div class="dci-tag" style="color:${accent};text-shadow:0 0 10px ${accent}">${content.tag}</div>` : ''}
    <div class="dci-neon-bar" style="background:${accent};box-shadow:${neonShadow}"></div>
    <div class="dci-head" style="text-shadow:${neonShadow}">${content.heading || 'NEON HEADLINE'}</div>
    ${content.sub ? `<div class="dci-sub" style="color:${accent};text-shadow:0 0 8px ${accent}40">${content.sub}</div>` : ''}
    ${content.body ? `<div class="dci-body">${content.body}</div>` : ''}
    ${opts.showCTA && content.cta ? `<div class="dci-cta" style="color:${accent};border-color:${accent};box-shadow:0 0 8px ${accent}40">${content.cta}</div>` : ''}
    ${opts.showFooter && content.footer ? `<div class="dci-footer">${content.footer}</div>` : ''}
    ${opts.showHashtag && content.hashtag ? `<div class="dci-footer" style="color:${accent}88">${content.hashtag}</div>` : ''}
  `;
};

window.buildMinimal = function(content, accent, opts) {
  return `
    <div class="dci-top">
      ${content.tag ? `<div class="dci-tag">${content.tag}</div>` : ''}
    </div>
    <div class="dci-bottom">
      <div class="dci-vertical-line" style="background:${accent}"></div>
      <div class="dci-head">${content.heading || 'Your Headline'}</div>
      ${content.sub ? `<div class="dci-sub">${content.sub}</div>` : ''}
      ${content.body ? `<div class="dci-body">${content.body}</div>` : ''}
      ${opts.showFooter && content.footer ? `<div class="dci-footer" style="margin-top:8px">${content.footer}</div>` : ''}
      ${opts.showHashtag && content.hashtag ? `<div class="dci-footer">${content.hashtag}</div>` : ''}
    </div>
  `;
};

window.buildBoldImpact = function(content, accent, opts) {
  return `
    ${content.tag ? `<div class="dci-tag" style="color:${accent}">${content.tag}</div>` : ''}
    <div class="dci-star-row">★ ★ ★</div>
    <div style="width:50px;height:3px;background:${accent};margin:0 auto 10px"></div>
    <div class="dci-head">${content.heading || 'BIG BOLD HEADLINE'}</div>
    ${content.sub ? `<div class="dci-sub" style="color:${accent}">${content.sub}</div>` : ''}
    ${content.body ? `<div class="dci-body">${content.body}</div>` : ''}
    ${opts.showCTA && content.cta ? `<div class="dci-cta" style="background:${accent};color:#000">${content.cta}</div>` : ''}
    ${opts.showFooter && content.footer ? `<div class="dci-footer">${content.footer}</div>` : ''}
    ${opts.showHashtag && content.hashtag ? `<div class="dci-footer" style="color:${accent}88">${content.hashtag}</div>` : ''}
  `;
};

window.buildElegantScript = function(content, accent, opts) {
  return `
    <div class="dci-ornament">✦ ✦ ✦</div>
    ${content.tag ? `<div class="dci-tag">${content.tag}</div>` : ''}
    <div class="dci-head">${content.heading || 'Elegant Headline'}</div>
    ${content.sub ? `<div class="dci-sub" style="color:${accent}">${content.sub}</div>` : ''}
    <div class="dci-ornament">— ◆ —</div>
    ${content.body ? `<div class="dci-body">${content.body}</div>` : ''}
    ${opts.showFooter && content.footer ? `<div class="dci-footer">${content.footer}</div>` : ''}
    ${opts.showHashtag && content.hashtag ? `<div class="dci-footer">${content.hashtag}</div>` : ''}
  `;
};

window.buildRetroVintage = function(content, accent, opts) {
  return `
    <div class="dci-badge" style="border-color:${accent}">
      ${content.tag ? `<div class="dci-tag" style="color:${accent}">${content.tag.slice(0,12)}</div>` : '<div class="dci-tag" style="color:${accent}">EST.</div>'}
    </div>
    <div class="dci-head" style="color:${accent}">${content.heading || 'YOUR HEADLINE'}</div>
    ${content.sub ? `<div class="dci-sub">${content.sub}</div>` : ''}
    <div class="dci-star-row" style="color:${accent}">★ ★ ★</div>
    ${content.body ? `<div class="dci-body">${content.body}</div>` : ''}
    ${opts.showFooter && content.footer ? `<div class="dci-footer">${content.footer}</div>` : ''}
    ${opts.showHashtag && content.hashtag ? `<div class="dci-footer">${content.hashtag}</div>` : ''}
  `;
};

window.buildStreetArt = function(content, accent, opts) {
  return `
    ${content.tag ? `<div class="dci-tag">${content.tag}</div>` : ''}
    <div class="dci-head" style="color:${accent}">${content.heading || 'STREET HEADLINE'}</div>
    ${content.sub ? `<div class="dci-sub">${content.sub}</div>` : ''}
    <div class="dci-tear" style="background:repeating-linear-gradient(90deg,${accent},${accent} 4px,transparent 4px,transparent 8px)"></div>
    ${content.body ? `<div class="dci-body">${content.body}</div>` : ''}
    ${opts.showFooter && content.footer ? `<div class="dci-footer">${content.footer}</div>` : ''}
    ${opts.showHashtag && content.hashtag ? `<div class="dci-footer">${content.hashtag}</div>` : ''}
  `;
};

window.buildPixelGame = function(content, accent, opts) {
  return `
    ${content.tag ? `<div class="dci-tag" style="color:${accent}">${content.tag}</div>` : ''}
    <div class="dci-head">${content.heading || 'GAME HEADLINE'}</div>
    ${content.sub ? `<div class="dci-sub" style="color:${accent}">${content.sub}</div>` : ''}
    ${content.body ? `<div class="dci-body">${content.body}</div>` : ''}
    ${opts.showCTA && content.cta ? `<div class="dci-cta" style="color:${accent};border-color:${accent}">${content.cta}</div>` : ''}
    ${opts.showFooter && content.footer ? `<div class="dci-footer">${content.footer}</div>` : ''}
  `;
};

window.buildCinema = function(content, accent, opts) {
  return `
    <div class="dci-film-header">
      <div class="dci-film-logo">TEMPLIX PICTURES</div>
      ${content.tag ? `<div class="dci-film-rating">${content.tag.slice(0,10)}</div>` : '<div class="dci-film-rating">PG</div>'}
    </div>
    <div class="dci-main-block">
      ${content.tag ? `<div class="dci-tag" style="color:${accent}">${content.tag}</div>` : ''}
      <div class="dci-head">${content.heading || 'CINEMATIC TITLE'}</div>
      ${content.sub ? `<div class="dci-sub">${content.sub}</div>` : ''}
      ${content.body ? `<div class="dci-body">${content.body}</div>` : ''}
      ${opts.showFooter && content.footer ? `<div class="dci-footer">${content.footer}</div>` : ''}
    </div>
  `;
};

window.buildArtDeco = function(content, accent, opts) {
  const lineStyle = `style="background:${accent}4D;flex:1;height:1px"`;
  const diamondStyle = `style="background:${accent};width:6px;height:6px;transform:rotate(45deg);flex-shrink:0"`;
  return `
    <div class="dci-frame-top">
      <div ${lineStyle}></div>
      <div ${diamondStyle}></div>
      <div ${lineStyle}></div>
    </div>
    ${content.tag ? `<div class="dci-tag" style="color:${accent}">${content.tag}</div>` : ''}
    <div class="dci-head">${content.heading || 'Art Deco Headline'}</div>
    ${content.sub ? `<div class="dci-sub" style="color:${accent}">${content.sub}</div>` : ''}
    ${content.body ? `<div class="dci-body">${content.body}</div>` : ''}
    <div class="dci-frame-bot">
      <div ${lineStyle}></div>
      <div ${diamondStyle}></div>
      <div ${lineStyle}></div>
    </div>
    ${opts.showFooter && content.footer ? `<div class="dci-footer">${content.footer}</div>` : ''}
  `;
};

window.buildCyberpunk = function(content, accent, opts) {
  const headText = content.heading || 'CYBER HEADLINE';
  return `
    <div class="dci-scan-line"></div>
    ${content.tag ? `<div class="dci-tag" style="color:${accent}">${content.tag}</div>` : ''}
    <div class="dci-head dci-glitch" data-text="${headText}">${headText}</div>
    ${content.sub ? `<div class="dci-sub" style="color:${accent}">${content.sub}</div>` : ''}
    ${content.body ? `<div class="dci-body">${content.body}</div>` : ''}
    ${opts.showCTA && content.cta ? `<div class="dci-cta" style="color:${accent};border-color:${accent}">${content.cta}</div>` : ''}
    ${opts.showFooter && content.footer ? `<div class="dci-footer">${content.footer}</div>` : ''}
    ${opts.showHashtag && content.hashtag ? `<div class="dci-footer">${content.hashtag}</div>` : ''}
  `;
};

window.buildGrunge = function(content, accent, opts) {
  return `
    ${content.tag ? `<div class="dci-tag">${content.tag}</div>` : ''}
    <div class="dci-head" style="color:${accent}">${content.heading || 'GRUNGE HEADLINE'}</div>
    ${content.sub ? `<div class="dci-sub">${content.sub}</div>` : ''}
    <div class="dci-tear" style="background:repeating-linear-gradient(90deg,${accent}80,${accent}80 3px,transparent 3px,transparent 7px)"></div>
    ${content.body ? `<div class="dci-body">${content.body}</div>` : ''}
    ${opts.showFooter && content.footer ? `<div class="dci-footer">${content.footer}</div>` : ''}
    ${opts.showHashtag && content.hashtag ? `<div class="dci-footer">${content.hashtag}</div>` : ''}
  `;
};

// ======================== NEW POSTER / FLYER BUILDERS ========================

window.buildFoodFlyer = function(content, accent, opts, variant) {
  const price = content.footer ? content.footer.split(' ')[0] : '';
  return `
    <div class="dci-flyer-top">
      <div class="dci-flyer-brand">${content.tag || 'RESTAURANT LOGO'}</div>
    </div>
    <div class="dci-flyer-bottom">
      ${content.tag ? `<div class="dci-tag" style="color:${accent}">${content.tag}</div>` : ''}
      <div class="dci-head">${content.heading || 'Delicious Food'}</div>
      ${content.sub ? `<div class="dci-sub">${content.sub}</div>` : ''}
      ${content.body ? `<div class="dci-sub" style="margin-top:2px">${content.body}</div>` : ''}
      <div class="dci-flyer-actions">
        ${opts.showCTA && content.cta ? `<div class="dci-cta" style="background:${accent};color:#fff">${content.cta}</div>` : ''}
        ${content.footer ? `<div class="dci-price-badge" style="background:${accent}22;color:${accent};border:1px solid ${accent}44">${content.footer}</div>` : ''}
      </div>
      ${opts.showFooter && content.contact ? `<div class="dci-footer">${content.contact}</div>` : ''}
      ${opts.showHashtag && content.hashtag ? `<div class="dci-footer">${content.hashtag}</div>` : ''}
    </div>
  `;
};

window.buildProductSpecs = function(content, accent, opts, variant) {
  // Parse spec data from content fields
  const specs = [];
  if (content.cta) specs.push({ label: 'POWER', value: content.cta.split(' ')[0] || '525', unit: 'HP' });
  if (content.sub) specs.push({ label: 'TOP SPEED', value: content.sub.split(' ')[0] || '296', unit: 'KM/H' });
  if (content.hashtag) specs.push({ label: '0-100 KM/H', value: content.hashtag.split(' ')[0] || '3.2', unit: 'S' });
  if (specs.length === 0) {
    specs.push({ label: 'POWER', value: '525', unit: 'HP' });
    specs.push({ label: 'SPEED', value: '296', unit: 'KM/H' });
    specs.push({ label: '0-100', value: '3.2', unit: 'S' });
  }
  return `
    <div class="dci-spec-header">
      <div class="dci-brand-name" style="color:${accent}">${content.tag || 'BRAND NAME'}</div>
      <div class="dci-brand-model">${content.footer || 'MODEL'}</div>
    </div>
    <div class="dci-spec-center">
      <div class="dci-head">${content.heading || 'PRODUCT NAME'}</div>
      ${content.sub ? `<div class="dci-sub">${content.sub}</div>` : ''}
    </div>
    <div class="dci-spec-bar">
      ${specs.map(s => `
        <div class="dci-spec-item">
          <div class="dci-spec-label">${s.label}</div>
          <div class="dci-spec-value" style="color:${accent}">${s.value} <span class="dci-spec-unit">${s.unit}</span></div>
        </div>
      `).join('')}
    </div>
    ${content.body ? `<div class="dci-spec-desc">${content.body}</div>` : ''}
  `;
};

window.buildMenuCard = function(content, accent, opts, variant) {
  // Build 2 menu items from content
  const item1Name = content.heading || 'MAIN DISH';
  const item1Desc = content.sub || 'A delicious signature dish';
  const item1Price = content.cta || '$25';
  const item2Name = content.body ? content.body.split(' ').slice(0,3).join(' ').toUpperCase() : 'FRIED RICE';
  const item2Price = content.footer || '$10';
  return `
    <div class="dci-menu-header" style="background:rgba(0,0,0,0.6)">
      ${content.tag ? `<div class="dci-tag" style="color:${accent}">${content.tag}</div>` : ''}
      <div class="dci-head">${item1Name}</div>
      <div class="dci-sub">${item1Desc}</div>
    </div>
    <div class="dci-items-list">
      <div class="dci-menu-item">
        <div class="dci-item-img"></div>
        <div class="dci-item-info">
          <div class="dci-item-name">${item1Name}</div>
          <div class="dci-item-desc">${item1Desc}</div>
          <div class="dci-item-price" style="color:${accent}">${item1Price}</div>
        </div>
      </div>
      <div class="dci-menu-item">
        <div class="dci-item-info" style="padding-left:12px">
          <div class="dci-item-name">${item2Name}</div>
          ${content.body ? `<div class="dci-item-desc">${content.body.slice(0, 60)}</div>` : ''}
          <div class="dci-item-price" style="color:${accent}">${item2Price}</div>
        </div>
        <div class="dci-item-img"></div>
      </div>
    </div>
    ${opts.showFooter && content.contact ? `<div class="dci-footer">${content.contact}</div>` : (opts.showHashtag && content.hashtag ? `<div class="dci-footer">${content.hashtag}</div>` : '')}
  `;
};

window.buildPromoBanner = function(content, accent, opts, variant) {
  // Extract discount from footer or use default
  const discount = content.hashtag ? content.hashtag.replace(/[^0-9%]/g, '').slice(0,5) || '35%' : '35%';
  return `
    <div class="dci-promo-top">
      <div class="dci-promo-content">
        ${content.tag ? `<div class="dci-tag" style="color:${accent}">${content.tag}</div>` : ''}
        <div class="dci-head">${content.heading || 'LIMITED OFFER'}</div>
        ${content.sub ? `<div class="dci-sub">${content.sub}</div>` : ''}
        ${content.body ? `<div class="dci-sub" style="margin-top:3px;opacity:0.6">${content.body}</div>` : ''}
      </div>
      <div class="dci-discount-badge" style="background:${accent}">
        <div class="dci-discount-pct">${discount}</div>
        <div class="dci-discount-label">OFF</div>
      </div>
    </div>
    <div class="dci-promo-bottom">
      ${opts.showCTA && content.cta ? `<div class="dci-cta" style="background:${accent};color:#fff">${content.cta}</div>` : ''}
      ${opts.showFooter && content.footer ? `<div class="dci-footer">${content.footer}</div>` : ''}
    </div>
  `;
};

window.buildFeatureSplit = function(content, accent, opts, variant) {
  return `
    <div class="dci-split-left">
      ${content.tag ? `<div class="dci-tag" style="color:${accent}">${content.tag}</div>` : ''}
      <div class="dci-head">${content.heading || 'HEADLINE'}</div>
      ${content.sub ? `<div class="dci-sub">${content.sub}</div>` : ''}
      ${content.body ? `<div class="dci-body">${content.body}</div>` : ''}
      ${opts.showCTA && content.cta ? `<div class="dci-cta" style="background:${accent};color:#fff">${content.cta}</div>` : ''}
      ${opts.showFooter && content.footer ? `<div class="dci-footer">${content.footer}</div>` : ''}
    </div>
    <div class="dci-split-right">
      ${opts.showHashtag && content.hashtag ? `<div class="dci-footer" style="text-align:right;color:${accent}88">${content.hashtag}</div>` : ''}
      ${content.contact ? `<div class="dci-footer" style="text-align:right">${content.contact}</div>` : ''}
    </div>
  `;
};

window.buildInfographic = function(content, accent, opts, variant) {
  // Parse stats from body text or use defaults
  const statLines = content.body ? content.body.split('\n').slice(0,4) : [];
  const defaultStats = [
    { num: '10K+', lbl: 'Customers' },
    { num: '98%', lbl: 'Satisfaction' },
    { num: '5★', lbl: 'Rating' },
    { num: '24/7', lbl: 'Support' },
  ];
  const stats = defaultStats.map((s, i) => {
    if (statLines[i]) {
      const parts = statLines[i].split(':');
      return { num: (parts[0] || s.num).trim(), lbl: (parts[1] || s.lbl).trim() };
    }
    return s;
  });
  return `
    ${content.tag ? `<div class="dci-tag" style="color:${accent}">${content.tag}</div>` : ''}
    <div class="dci-head">${content.heading || 'KEY STATS'}</div>
    ${content.sub ? `<div class="dci-sub">${content.sub}</div>` : ''}
    <div class="dci-stats-grid">
      ${stats.map(s => `
        <div class="dci-stat-card" style="color:${accent}">
          <div class="dci-stat-num" style="color:${accent}">${s.num}</div>
          <div class="dci-stat-lbl">${s.lbl}</div>
        </div>
      `).join('')}
    </div>
    ${opts.showCTA && content.cta ? `<div class="dci-cta" style="background:${accent};color:#fff;margin-top:6px">${content.cta}</div>` : ''}
    ${opts.showFooter && content.footer ? `<div class="dci-footer">${content.footer}</div>` : ''}
  `;
};

// ======================== MASTER HTML BUILDER ========================
window.buildDesignHTML = function(styleObj, content, accent, opts) {
  const builders = {
    'modern-clean': () => window.buildModernClean(content, accent, opts),
    'modern-split': () => window.buildModernClean(content, accent, opts, 'split'),
    'modern-center': () => window.buildModernClean(content, accent, opts, 'center'),
    'editorial': () => window.buildEditorial(content, accent, opts),
    'editorial-bold': () => window.buildEditorial(content, accent, opts, 'bold'),
    'punk-raw': () => window.buildPunkRaw(content, accent, opts),
    'neon-glow': () => window.buildNeonGlow(content, accent, opts),
    'neon-city': () => window.buildNeonGlow(content, accent, opts, 'city'),
    'minimal': () => window.buildMinimal(content, accent, opts),
    'bold-impact': () => window.buildBoldImpact(content, accent, opts),
    'elegant-script': () => window.buildElegantScript(content, accent, opts),
    'retro-vintage': () => window.buildRetroVintage(content, accent, opts),
    'street-art': () => window.buildStreetArt(content, accent, opts),
    'pixel-game': () => window.buildPixelGame(content, accent, opts),
    'cinema': () => window.buildCinema(content, accent, opts),
    'art-deco': () => window.buildArtDeco(content, accent, opts),
    'cyberpunk': () => window.buildCyberpunk(content, accent, opts),
    'grunge': () => window.buildGrunge(content, accent, opts),
    // New poster/flyer styles
    'food-flyer': () => window.buildFoodFlyer(content, accent, opts),
    'food-flyer-v2': () => window.buildFoodFlyer(content, accent, opts, 'v2'),
    'product-specs': () => window.buildProductSpecs(content, accent, opts),
    'product-specs-dark': () => window.buildProductSpecs(content, accent, opts, 'dark'),
    'menu-card': () => window.buildMenuCard(content, accent, opts),
    'menu-card-dark': () => window.buildMenuCard(content, accent, opts, 'dark'),
    'promo-banner': () => window.buildPromoBanner(content, accent, opts),
    'promo-banner-bold': () => window.buildPromoBanner(content, accent, opts, 'bold'),
    'feature-split': () => window.buildFeatureSplit(content, accent, opts),
    'feature-split-warm': () => window.buildFeatureSplit(content, accent, opts, 'warm'),
    'infographic': () => window.buildInfographic(content, accent, opts),
    'infographic-dark': () => window.buildInfographic(content, accent, opts, 'dark'),
  };
  const builder = builders[styleObj.id] || builders['modern-clean'];
  return builder();
};

