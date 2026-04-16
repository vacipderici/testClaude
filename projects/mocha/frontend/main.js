/* ══════════════════════════════════════════
   Mocha — main.js
   ══════════════════════════════════════════ */

/* ── Particle canvas (hero background) ── */
(function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  // Palette inspired by Google Antigravity (blue + red/pink dashes)
  const COLORS = [
    '#4f8ef7', '#6ba4f8', '#3d7ef6',   // blues
    '#f05252', '#f87171', '#e53e3e',   // reds
    '#a78bfa', '#c4b5fd',              // purples
    '#34d399', '#6ee7b7',              // greens (accent)
  ];

  const PARTICLE_COUNT = 90;
  let particles = [];
  let W, H, dpr;

  function resize() {
    dpr = window.devicePixelRatio || 1;
    W = canvas.offsetWidth;
    H = canvas.offsetHeight;
    canvas.width  = W * dpr;
    canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function createParticle() {
    const angle = Math.random() * Math.PI * 2;
    return {
      x:     Math.random() * W,
      y:     Math.random() * H,
      len:   6 + Math.random() * 12,   // dash length
      width: 1.5 + Math.random() * 2,
      angle: angle,
      vx:    Math.cos(angle) * (0.15 + Math.random() * 0.25),
      vy:    Math.sin(angle) * (0.15 + Math.random() * 0.25),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: 0.25 + Math.random() * 0.55,
    };
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    particles.forEach(p => {
      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.strokeStyle = p.color;
      ctx.lineWidth   = p.width;
      ctx.lineCap     = 'round';

      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.beginPath();
      ctx.moveTo(-p.len / 2, 0);
      ctx.lineTo( p.len / 2, 0);
      ctx.stroke();
      ctx.restore();

      // Move
      p.x += p.vx;
      p.y += p.vy;

      // Wrap around edges
      if (p.x < -20) p.x = W + 20;
      if (p.x > W + 20) p.x = -20;
      if (p.y < -20) p.y = H + 20;
      if (p.y > H + 20) p.y = -20;
    });

    requestAnimationFrame(draw);
  }

  resize();
  particles = Array.from({ length: PARTICLE_COUNT }, createParticle);
  draw();

  window.addEventListener('resize', () => {
    resize();
  });
})();


/* ── Icon orbs (floating feature icons) ── */
(function initIconOrbs() {
  const container = document.getElementById('icon-orbs');
  if (!container) return;

  const icons = [
    // Drag handle / grid
    `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 10h16M4 14h16M4 18h16"/></svg>`,
    // Grid add
    `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/></svg>`,
    // Enter / return
    `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 9l-6 6 6 6M3 15h11a4 4 0 000-8h-1"/></svg>`,
    // Curly braces / code
    `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 8c-1 0-2 .9-2 2v1c0 .6-.4 1-1 1s-.9.4-1 1 .4 1 1 1 1 .4 1 1v1c0 1.1 1 2 2 2M17 8c1 0 2 .9 2 2v1c0 .6.4 1 1 1s.9.4 1 1-.4 1-1 1-1 .4-1 1v1c0 1.1-1 2-2 2"/></svg>`,
    // Code brackets
    `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>`,
    // Sparkle / AI
    `<svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z"/></svg>`,
    // Terminal
    `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>`,
    // Monitor / deploy
    `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
    // Branch / agent
    `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 3v12M18 9a3 3 0 100-6 3 3 0 000 6zm-12 12a3 3 0 100-6 3 3 0 000 6zm0-12a9 9 0 009 9"/></svg>`,
    // Search / inspect
    `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>`,
    // Refresh / iterate
    `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>`,
    // Cube / 3D / package
    `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>`,
    // Check / done
    `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
  ];

  icons.forEach((svgStr, i) => {
    const orb = document.createElement('div');
    orb.className = 'icon-orb';
    orb.style.setProperty('--float-duration', `${3.5 + (i % 5) * 0.7}s`);
    orb.style.setProperty('--float-delay',    `${(i % 7) * -0.6}s`);
    orb.innerHTML = svgStr;
    container.appendChild(orb);
  });
})();


/* ── Send button reactive state ── */
(function initChat() {
  const input   = document.getElementById('chat-input');
  const sendBtn = document.getElementById('send-btn');
  if (!input || !sendBtn) return;

  function updateSendBtn() {
    if (input.value.trim()) {
      sendBtn.classList.add('active');
    } else {
      sendBtn.classList.remove('active');
    }
  }

  input.addEventListener('input', updateSendBtn);

  sendBtn.addEventListener('click', () => {
    if (input.value.trim()) {
      input.value = '';
      updateSendBtn();
      input.focus();
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendBtn.click();
    }
  });
})();


/* ── Navbar scroll effect ── */
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
})();


/* ── Mobile menu (simple toggle) ── */
(function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  if (!btn) return;
  // Basic: scroll to section on click since there's no full mobile menu built yet
  btn.addEventListener('click', () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  });
})();
