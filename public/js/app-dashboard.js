(function(){
var REG=[{"id": "ai-copy", "name": "Quick Copy", "desc": "Fills headline, subhead and button with ready-made copy for your niche.", "cat": "AI", "icon": "assets/extensions/ai-copy.svg", "action": "copy"}, {"id": "palette-maker", "name": "Palette Maker", "desc": "Picks a fresh accent color for your designs in one click.", "cat": "Brand", "icon": "assets/extensions/palette-maker.svg", "action": "palette"}, {"id": "photo-studio", "name": "Photo Studio", "desc": "Open the built-in image editor to retouch and draw.", "cat": "Images", "icon": "assets/extensions/photo-studio.svg", "action": "photo"}, {"id": "font-finder", "name": "Font Finder", "desc": "Browse and pick fonts for your designs.", "cat": "Type", "icon": "assets/extensions/font-finder.svg", "action": "font"}, {"id": "bg-import", "name": "Background Import", "desc": "Add your own photos as design backgrounds.", "cat": "Images", "icon": "assets/extensions/bg-import.svg", "action": "bg"}, {"id": "remix-lab", "name": "Remix Lab", "desc": "Load a community layout with your own words in one click.", "cat": "Community", "icon": "assets/extensions/remix-lab.svg", "action": "remix"}, {"id": "stock-photos", "name": "Stock Photos", "desc": "Search free photos without leaving the canvas.", "cat": "Images", "icon": "assets/extensions/stock-photos.svg", "action": null}, {"id": "shop-sync", "name": "Shop Sync", "desc": "Pull products and prices from your online store.", "cat": "Commerce", "icon": "assets/extensions/shop-sync.svg", "action": null}, {"id": "brand-guard", "name": "Brand Guard", "desc": "Warns you when a design breaks your brand colors or fonts.", "cat": "Brand", "icon": "assets/extensions/brand-guard.svg", "action": null}, {"id": "auto-resize", "name": "Auto Resize", "desc": "Turns one design into every social media size.", "cat": "Layout", "icon": "assets/extensions/auto-resize.svg", "action": null}, {"id": "video-maker", "name": "Video Maker", "desc": "Animate your designs into short stories and reels.", "cat": "Motion", "icon": "assets/extensions/video-maker.svg", "action": null}, {"id": "dev-kit", "name": "Developer Kit", "desc": "Build and publish your own Templix extensions.", "cat": "Developer", "icon": "assets/extensions/dev-kit.svg", "action": null}];
var G={AI:'#ff6fd8,#9a6bff',Brand:'#5cf0a0,#4a7dff',Images:'#ffc42d,#ff9a2e',Type:'#ff7a5c,#ff4d6a',Community:'#5cf0a0,#2fb8c8',Commerce:'#5cf0a0,#2fb8c8',Layout:'#ff7a5c,#ff4d6a',Motion:'#ff6fd8,#9a6bff',Developer:'#5cf0a0,#4a7dff'};
var COPY=[{tag:'New',heading:'Weekend flash sale',sub:'Up to 40% off new arrivals',cta:'Shop now'},{tag:'Open house',heading:'Your next home is waiting',sub:'Saturday, 11am to 4pm',cta:'Book a visit'},{tag:'Enrol today',heading:'Learn something new this term',sub:'Small classes. Real results.',cta:'Join now'},{tag:'Now open',heading:'Fresh. Local. Yours.',sub:'Visit us this week',cta:'Get directions'}];
var PAL=['#ff6ad5','#5ef2b0','#ffc533','#4f7cff','#ff6b6b','#8a5cff','#2fe0a0','#ff8a3d'];
var LK='tx_ext_installed',inst={},cat='All',tab='ext',q=0;
try{inst=JSON.parse(localStorage.getItem(LK)||'{}')}catch(e){}
function save(){try{localStorage.setItem(LK,JSON.stringify(inst))}catch(e){}}
function toast(m,t){window.showToast&&showToast(m,t||'info')}
function $(i){return document.getElementById(i)}
function img(src,alt){return '<img src="'+src+'" alt="'+alt+'" onerror="this.onerror=null;this.src=\'assets/extensions/placeholder.svg\'">'}
var ACT={
copy:function(){var c=COPY[q++%COPY.length];['tag','heading','sub','cta'].forEach(function(k){var e=$('inp-'+k);if(e)e.value=c[k]});toast('Copy added to your content tab','success')},
palette:function(){var c=PAL[Math.floor(Math.random()*PAL.length)];setAccentColor(c);toast('Accent color changed','success')},
photo:function(){close();openImageEditor()},
font:function(){close();openFontPicker()},
bg:function(){close();var f=$('bg-file-input');f&&f.click()},
remix:function(){go('comm')}};
function el(h){var d=document.createElement('div');d.innerHTML=h;return d.firstChild}
var box=el('<div id="tx-hub" role="dialog" aria-modal="true" aria-label="Templix hub"><div class="txh-box"><div class="txh-head"><h2>Templix hub</h2><span id="txh-tabs"></span><button class="txh-pill" id="txh-x" aria-label="Close">Close</button></div><div class="txh-body" id="txh-body"></div></div></div>');
document.body.appendChild(box);
function open(t){tab=t||tab;box.classList.add('show');draw()}
function close(){box.classList.remove('show')}
function go(t){tab=t;draw()}
$('txh-x').onclick=close;box.addEventListener('click',function(e){if(e.target===box)close()});
document.addEventListener('keydown',function(e){if(e.key==='Escape')close()});
function draw(){
 $('txh-tabs').innerHTML=[['ext','Extensions'],['work','Workspace'],['comm','Community']].map(function(t){return '<button class="txh-pill'+(tab==t[0]?' on':'')+'" data-t="'+t[0]+'">'+t[1]+'</button>'}).join(' ');
 var b=$('txh-body'),h='';
 if(tab=='ext'){
  var cats=['All'].concat(REG.map(function(r){return r.cat}).filter(function(v,i,a){return a.indexOf(v)==i}));
  h+='<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px">'+cats.map(function(c){return '<button class="txh-pill'+(cat==c?' on':'')+'" data-c="'+c+'">'+c+'</button>'}).join('')+'</div><div class="txh-grid">';
  REG.filter(function(r){return cat=='All'||r.cat==cat}).forEach(function(r){
   var on=inst[r.id];
   h+='<div class="txh-card"><div class="txh-top">'+img(r.icon,r.name)+'<div><h4>'+r.name+'</h4><p>'+r.cat+'</p></div></div><p>'+r.desc+'</p><div class="txh-row">'+
   (r.action?('<button class="txh-btn'+(on?'':' in')+'" data-i="'+r.id+'">'+(on?'Installed':'Install')+'</button>'+(on?'<button class="txh-btn go" data-r="'+r.id+'">Run</button>':'')):'<button class="txh-btn" disabled>Coming soon</button>')+'</div></div>'});
  h+='</div><p class="txh-note">Extension icons load from <code>assets/extensions/&lt;id&gt;.svg</code>. Replace any file in that folder with your own icon and it shows up here. A missing file falls back to <code>placeholder.svg</code>.</p>';
 }else if(tab=='work'){
  var T=[['Design editor','Your main canvas','Images','close','assets/extensions/ai-copy.svg'],['Photo Studio','Retouch and draw on images','Images','photo','assets/extensions/photo-studio.svg'],['Saved designs','Open saved work and favorites','AI','saved','assets/extensions/remix-lab.svg'],['Guided tour','Learn the tools in a minute','Brand','tour','assets/extensions/palette-maker.svg'],['Whiteboard','Plan ideas together','Developer',null,'assets/extensions/video-maker.svg'],['Prototype','Link designs into a flow','Layout',null,'assets/extensions/auto-resize.svg']];
  h+='<div class="txh-grid">'+T.map(function(t,i){var g=G[t[2]].split(',');return '<button class="txh-tile" data-w="'+(t[3]||'')+'" style="background:linear-gradient(160deg,'+g[0]+','+g[1]+')">'+img(t[4],t[0])+'<div><b>'+t[0]+'</b><br><span>'+(t[3]?t[1]:'Coming soon')+'</span></div></button>'}).join('')+'</div>';
 }else{
  var TP=window.QUICK_TEMPLATES||[],ks=Object.keys(G);
  h+='<p class="txh-note" style="margin:0 0 14px">Pick a layout and press Remix. Its text loads into your content tab, ready for your own words.</p><div class="txh-grid">'+TP.map(function(t,i){var g=G[ks[i%ks.length]].split(',');return '<div class="txh-card" style="background:linear-gradient(160deg,'+g[0]+','+g[1]+');color:#fff"><h4 style="font-size:1rem;font-weight:500">'+(t.heading||t.name)+'</h4><p style="color:#ffffffcc">'+t.name+'</p><div class="txh-row"><button class="txh-btn" style="background:#000;color:#fff" data-m="'+i+'">Remix</button></div></div>'}).join('')+'</div>';
 }
 b.innerHTML=h;
}
box.addEventListener('click',function(e){var t=e.target.closest('button');if(!t)return;var d=t.dataset;
 if(d.t){tab=d.t;draw()}
 else if(d.c){cat=d.c;draw()}
 else if(d.i){inst[d.i]=!inst[d.i];save();draw();toast(inst[d.i]?'Extension installed':'Extension removed','success')}
 else if(d.r){var r=REG.filter(function(x){return x.id==d.r})[0];ACT[r.action]&&ACT[r.action]()}
 else if(d.m!==undefined){close();applyTemplate(window.QUICK_TEMPLATES[+d.m])}
 else if(d.w!==undefined){if(!d.w){toast('This tool is coming soon')}else if(d.w=='close')close();else if(d.w=='photo'){close();openImageEditor()}else if(d.w=='saved'){close();openSavedModal()}else if(d.w=='tour'){close();startTutorial()}}
});
var right=document.querySelector('#topbar .tb-right');
if(right){var b=document.createElement('button');b.className='tb-action-btn tx-hub';b.innerHTML='<i class="fas fa-puzzle-piece"></i> <span>Extensions</span>';b.onclick=function(){open('ext')};right.insertBefore(b,right.firstChild);
 var w=document.createElement('button');w.className='tb-icon-btn';w.title='Workspace and community';w.innerHTML='<i class="fas fa-th-large"></i>';w.onclick=function(){open('work')};right.insertBefore(w,b.nextSibling)}
window.txHub={open:open,REG:REG};
})();
(function(){
var H=window.txHub,REG=H.REG,$=function(i){return document.getElementById(i)};
var MAP={'E-commerce':['Product Launch','Sale Promo','Announcement'],'Real estate':['Event Promo','Announcement','Sale Promo'],'Education':['Announcement','Motivational','Event Promo'],'Local services':['Sale Promo','Food & Drink','Announcement'],'Content creation':['Music Release','Motivational','Event Promo']};
var COL=['#ff3cac','#784ba0','#2b86c5','#00f5d4','#f9c859','#fb923c','#4ade80','#f87171'];
var GR=[['#5cf0a0','#4a7dff'],['#ff7a5c','#ff4d6a'],['#ff6fd8','#9a6bff'],['#ffc42d','#ff9a2e']];
var BAR=['#4a7dff','#9a6bff','#ffc42d'],DOT=['#5cf0a0','#ffc42d','#ff6fd8','#4a7dff'];
var MAS=['assets/extensions/mascot-1.jpg','assets/extensions/mascot-2.jpg','assets/extensions/mascot-3.jpg','assets/extensions/mascot-4.jpg'];
function mas(i){return '<img class="mas" src="'+MAS[i%MAS.length]+'" alt="" onerror="this.onerror=null;this.src=\'assets/extensions/placeholder.svg\'">'}
var niche='E-commerce',name='';
try{niche=localStorage.getItem('tx_niche')||niche}catch(e){}
try{var u=JSON.parse(localStorage.getItem('userProfile')||'{}');name=u.name||''}catch(e){}
var root=document.createElement('div');root.id='tx-dash';root.setAttribute('role','dialog');root.setAttribute('aria-label','Templix dashboard');document.body.appendChild(root);
function LG(s){return '<svg width="'+s+'" height="'+s+'" viewBox="0 0 28 28" aria-hidden="true"><defs><linearGradient id="dg'+s+'" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff3cac"/><stop offset=".5" stop-color="#784ba0"/><stop offset="1" stop-color="#2b86c5"/></linearGradient></defs><polygon points="14,2 25,8 25,20 14,26 3,20 3,8" fill="url(#dg'+s+')" opacity=".18"/><polygon points="14,2 25,8 25,20 14,26 3,20 3,8" fill="none" stroke="url(#dg'+s+')" stroke-width="1.5"/><rect x="7" y="10" width="14" height="3" rx="1" fill="url(#dg'+s+')"/><rect x="12.5" y="10" width="3" height="10" rx="1" fill="url(#dg'+s+')"/></svg>'}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function img(r){return '<img src="'+r.icon+'" alt="" onerror="this.onerror=null;this.src=\'assets/extensions/placeholder.svg\'">'}
function gs(i){var g=GR[i%4];return '--a:'+g[0]+';--b:'+g[1]}
function tpls(){var all=window.QUICK_TEMPLATES||[],w=MAP[niche]||[];var p=all.map(function(t,i){return[t,i]}).filter(function(x){return w.indexOf(x[0].name)>-1});return(p.length?p:all.map(function(t,i){return[t,i]})).slice(0,3)}
function draw(){
 var T=tpls(),n=(window.QUICK_TEMPLATES||[]).length,ini=esc((name||'T').charAt(0).toUpperCase());
 var h='<div class="d-wrap"><header class="d-top"><div class="d-logo"><img src="assets/logo/templix-mark.png" alt="" style="height:34px;width:auto"><img src="assets/logo/templix-wordmark-light.png" alt="Templix" style="height:17px;width:auto"></div><nav class="d-nav" aria-label="Main">'+[['dash','Dashboard'],['tpl','Templates'],['ext','Extensions'],['comm','Community'],['edit','Editor']].map(function(x,i){return '<button data-n="'+x[0]+'"'+(i?'':' class="on"')+'>'+x[1]+'</button>'}).join('')+'</nav><div class="d-right"><button class="d-ic" data-n="tour" title="Guided tour" aria-label="Guided tour"><i class="fas fa-question"></i></button><button class="d-ic" data-n="saved" title="Saved designs" aria-label="Saved designs"><i class="fas fa-bookmark"></i></button><span class="d-av">'+ini+'</span></div></header>';
 h+='<div class="d-title"><h1>'+(name?'Hi '+esc(name.split(' ')[0])+', ready to design?':'Studio')+'</h1><select class="d-pill" id="d-niche" aria-label="Your business type">'+Object.keys(MAP).map(function(k){return '<option'+(k==niche?' selected':'')+'>'+k+'</option>'}).join('')+'</select></div>';
 h+='<section class="d-card" id="d-tpl"><div class="d-cardhead"><b>For you</b><span>'+esc(niche)+'</span></div><div class="d-tiles4"><button class="d-tile" style="'+gs(0)+'" data-n="edit">'+mas(0)+'<b>Blank design</b></button>'+T.map(function(x,i){return '<button class="d-tile" style="'+gs(i+1)+'" data-t="'+x[1]+'">'+mas(i+1)+'<b>'+esc(x[0].heading||x[0].name)+'</b></button>'}).join('')+'</div></section><div class="d-grid">';
 h+='<div class="d-col"><div class="d-card"><div class="d-prof"><span class="d-ring2">'+ini+'</span><div><b>'+esc(name||'Your brand')+'</b><small>'+esc(niche)+'</small></div></div><div class="d-stats"><span>Templates<b>'+n+'</b></span><span>Styles<b>30</b></span><span>Extensions<b>'+REG.length+'</b></span></div><div class="d-apps"><button class="d-app" style="'+gs(3)+'" data-n="ext" aria-label="Extensions"><i class="fas fa-puzzle-piece"></i></button><button class="d-app" style="'+gs(0)+'" data-n="comm" aria-label="Community"><i class="fas fa-clone"></i></button><button class="d-app" style="'+gs(2)+'" data-n="tour" aria-label="Tour"><i class="fas fa-graduation-cap"></i></button></div><div class="d-lab">Brand color</div><div class="d-sw">'+COL.map(function(c){return '<button style="--c:'+c+'" data-c="'+c+'" aria-label="Use color '+c+'"></button>'}).join('')+'</div><button class="d-btn" data-n="edit">Open editor</button><button class="d-btn k" data-n="tour">Take the tour</button></div></div>';
 h+='<div class="d-col"><div class="d-card"><div class="d-cardhead"><b>What&rsquo;s new</b></div><div class="d-list">'+[['puzzle-piece','Extensions hub','Install tools for your canvas','ext'],['clone','Remix layouts','Add your words to a layout','comm'],['magic','Quick Copy','Fill your text in one click','ext'],['palette','Palette Maker','Try a fresh accent color','ext']].map(function(x,i){return '<button class="d-row" data-n="'+x[3]+'"><span class="d-dot" style="--c:'+DOT[i]+'"></span><span class="d-ava" style="'+gs(i)+'"><i class="fas fa-'+x[0]+'"></i></span><span><b>'+x[1]+'</b><small>'+x[2]+'</small></span><span class="go">Open</span></button>'}).join('')+'</div></div></div>';
 h+='<div class="d-col"><div class="d-card"><div class="d-cardhead"><b>Popular extensions</b><span>'+REG.length+' available</span></div>'+REG.slice(0,4).map(function(r,i){return '<button class="d-row d-task" style="--c:'+BAR[i%3]+';border-top:0;border-left:3px solid '+BAR[i%3]+'" data-n="ext">'+img(r)+'<span><b>'+r.name+'</b><small>'+r.cat+'</small></span><em>View</em></button>'}).join('')+'</div><button class="d-sprint" data-n="comm"><span><b>Remix a layout</b><small>Pick one from the community</small></span><span class="faces">'+REG.slice(0,3).map(img).join('')+'</span></button></div></div></div>';
 root.innerHTML=h;
}
function show(){draw();root.classList.add('show')}
function hide(){root.classList.remove('show')}
root.addEventListener('change',function(e){if(e.target.id=='d-niche'){niche=e.target.value;try{localStorage.setItem('tx_niche',niche)}catch(x){}draw()}});
root.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;var d=b.dataset;
 if(d.t!==undefined){hide();applyTemplate(window.QUICK_TEMPLATES[+d.t]);return}
 if(d.c){setAccentColor(d.c);showToast('Brand color set','success');return}
 var n=d.n;
 if(n=='edit')hide();else if(n=='ext'||n=='comm')H.open(n);else if(n=='tour'){hide();startTutorial()}else if(n=='saved'){openSavedModal()}
 else if(n=='tpl'){var s=$('d-tpl');s&&s.scrollIntoView({behavior:'smooth'})}else if(n=='dash'){root.scrollTo(0,0)}
 if(n=='tpl'||n=='dash'){root.querySelectorAll('.d-nav button').forEach(function(x){x.classList.toggle('on',x==b)})}
});
var orig=window.goToApp;
if(typeof orig=='function'){window.goToApp=function(n){if(n)name=n;var r=orig.apply(this,arguments);setTimeout(show,50);return r}}
var left=document.querySelector('#topbar .tb-left');
if(left){var hb=document.createElement('button');hb.className='tb-icon-btn';hb.title='Dashboard';hb.setAttribute('aria-label','Dashboard');hb.innerHTML='<i class="fas fa-home"></i>';hb.onclick=show;left.appendChild(hb)}
})();

