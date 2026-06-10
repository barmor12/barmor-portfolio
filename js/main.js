'use strict';
        const root = document.documentElement;

        function openSidebar(){ sidebar.classList.add('active'); overlay.classList.add('active'); }
        function closeSidebar(){ sidebar.classList.remove('active'); overlay.classList.remove('active'); }

        function applyThemeIcon(theme){
            document.getElementById('themeIcon').querySelector('use').setAttribute('href', theme==='dark' ? '#i-sun' : '#i-moon');
            document.querySelector('meta[name=theme-color]').setAttribute('content', theme==='dark' ? '#0a0a0f' : '#f5f6fb');
        }
        function toggleTheme(){
            const t = root.getAttribute('data-theme')==='dark' ? 'light' : 'dark';
            root.setAttribute('data-theme', t); localStorage.setItem('theme', t); applyThemeIcon(t);
        }

        function setLanguage(lang){
            root.lang = lang; document.dir = lang==='he' ? 'rtl' : 'ltr';
            localStorage.setItem('language', lang);
            document.querySelectorAll('[data-lang-code]').forEach(b => b.classList.toggle('active', b.dataset.langCode===lang));
            document.querySelectorAll('[data-lang]').forEach(el => { el.hidden = el.getAttribute('data-lang')!==lang; });
        }
        function toggleLanguageQuick(){ setLanguage(root.lang==='he' ? 'en' : 'he'); }

        function goTo(id){
            closeSidebar();
            const el = document.getElementById(id);
            if(el){ window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 84, behavior:'smooth' }); }
        }
        function scrollToTop(){ window.scrollTo({ top:0, behavior:'smooth' }); }

        // Init preferences
        (function(){
            const savedTheme = localStorage.getItem('theme') || 'dark';
            const savedLang = localStorage.getItem('language') || 'he';
            root.setAttribute('data-theme', savedTheme); applyThemeIcon(savedTheme);
            setLanguage(savedLang);
            const y = new Date().getFullYear();
            document.getElementById('year').textContent = y;
            document.querySelectorAll('.yr').forEach(e => e.textContent = y);
            // duplicate marquee for seamless loop
            const m = document.getElementById('marquee');
            if(m){ m.innerHTML += m.innerHTML; }
        })();

        // Scroll reveal + counters + bars
        const animateCount = (el) => {
            const target = +el.dataset.count, suffix = el.dataset.suffix || '';
            const dur = 1200, t0 = performance.now();
            const step = (t) => {
                const p = Math.min((t - t0)/dur, 1);
                el.textContent = Math.round(target * (1 - Math.pow(1-p,3))) + suffix;
                if(p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
        };
        const io = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if(!e.isIntersecting) return;
                e.target.classList.add('in');
                e.target.querySelectorAll('[data-count]').forEach(animateCount);
                e.target.querySelectorAll('[data-fill]').forEach(b => b.style.width = b.dataset.fill + '%');
                io.unobserve(e.target);
            });
        }, { threshold: .15 });
        document.querySelectorAll('.reveal').forEach(el => io.observe(el));

        // Navbar bg on scroll + to-top + scroll progress
        const progress = document.getElementById('scrollProgress');
        addEventListener('scroll', () => {
            document.getElementById('toTop').classList.toggle('show', scrollY > 400);
            const h = document.documentElement.scrollHeight - innerHeight;
            progress.style.width = (h > 0 ? (scrollY / h) * 100 : 0) + '%';
        }, { passive: true });
        addEventListener('keydown', e => { if(e.key==='Escape') closeSidebar(); });

        const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
        const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;

        /* ---- Typed rotating role ---- */
        (function(){
            const el = document.getElementById('typed'); if(!el) return;
            const words = { he: ['מהנדס תוכנה','מומחה אוטומציה','מפתח Full Stack','בונה פתרונות AI'],
                            en: ['Software Engineer','Automation Expert','Full Stack Developer','AI Solutions Builder'] };
            let wi = 0, ci = 0, deleting = false;
            function tick(){
                const lang = root.lang === 'en' ? 'en' : 'he';
                const list = words[lang]; const w = list[wi % list.length];
                ci += deleting ? -1 : 1;
                el.textContent = w.slice(0, ci);
                if(!deleting && ci === w.length){ deleting = true; return setTimeout(tick, 1500); }
                if(deleting && ci === 0){ deleting = false; wi++; return setTimeout(tick, 250); }
                setTimeout(tick, deleting ? 45 : 85);
            }
            tick();
        })();

        /* ---- Animated code terminal (syntax-highlighted typing) ---- */
        (function(){
            const body = document.getElementById('termBody'); if(!body) return;
            const lines = [
                '<span class="c-com">// build something that matters</span>',
                '<span class="c-key">const</span> <span class="c-fn">barMor</span> <span class="c-pun">=</span> <span class="c-pun">{</span>',
                '  role<span class="c-pun">:</span> <span class="c-str">"Software Engineer"</span><span class="c-pun">,</span>',
                '  stack<span class="c-pun">:</span> <span class="c-pun">[</span><span class="c-str">"React"</span><span class="c-pun">,</span> <span class="c-str">"Node"</span><span class="c-pun">,</span> <span class="c-str">"Python"</span><span class="c-pun">],</span>',
                '  automation<span class="c-pun">:</span> <span class="c-num">true</span><span class="c-pun">,</span>',
                '  shipped<span class="c-pun">:</span> <span class="c-num">50</span><span class="c-pun">,</span>',
                '  <span class="c-fn">solve</span><span class="c-pun">:</span> <span class="c-key">async</span> <span class="c-pun">(</span>problem<span class="c-pun">)</span> <span class="c-pun">=></span> <span class="c-str">"done ✓"</span>',
                '<span class="c-pun">};</span>'
            ];
            if(reduceMotion){ body.innerHTML = lines.map(l => '<div class="ln">'+l+'</div>').join(''); return; }
            let li = 0;
            function addLine(){
                if(li >= lines.length){ setTimeout(() => { body.innerHTML=''; li=0; addLine(); }, 4200); return; }
                const div = document.createElement('div'); div.className = 'ln'; div.innerHTML = lines[li];
                body.appendChild(div); li++;
                setTimeout(addLine, 380);
            }
            // start when visible
            const t = new IntersectionObserver((es) => { if(es[0].isIntersecting){ addLine(); t.disconnect(); } }, {threshold:.3});
            t.observe(body);
        })();

        /* ---- 3D tilt + glare ---- */
        if(finePointer && !reduceMotion){
            document.querySelectorAll('.card, .proj, .terminal, .quote, .contact-card').forEach(card => {
                card.classList.add('tilt');
                if(!card.querySelector('.glare')){ const g = document.createElement('span'); g.className='glare'; card.appendChild(g); }
                const glare = card.querySelector('.glare');
                const MAX = card.classList.contains('terminal') ? 9 : 6;
                card.addEventListener('pointermove', e => {
                    const r = card.getBoundingClientRect();
                    const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
                    card.style.transform = `rotateY(${(px-.5)*MAX*2}deg) rotateX(${(.5-py)*MAX*2}deg)`;
                    glare.style.setProperty('--gx', px*100+'%'); glare.style.setProperty('--gy', py*100+'%');
                    card.classList.add('tilting');
                });
                card.addEventListener('pointerleave', () => { card.style.transform=''; card.classList.remove('tilting'); });
            });
        }

        /* ---- Cursor spotlight + magnetic buttons ---- */
        if(finePointer && !reduceMotion){
            const sp = document.getElementById('spotlight');
            addEventListener('pointermove', e => {
                sp.classList.add('on'); sp.style.left = e.clientX+'px'; sp.style.top = e.clientY+'px';
            });
            addEventListener('pointerleave', () => sp.classList.remove('on'));
            document.querySelectorAll('.btn-primary').forEach(btn => {
                btn.classList.add('mag');
                btn.addEventListener('pointermove', e => {
                    const r = btn.getBoundingClientRect();
                    btn.style.transform = `translate(${(e.clientX-r.left-r.width/2)*.18}px, ${(e.clientY-r.top-r.height/2)*.28}px)`;
                });
                btn.addEventListener('pointerleave', () => btn.style.transform='');
            });
        }

        /* ---- Floating code tokens: reveal + mouse parallax ---- */
        (function(){
            const wrap = document.getElementById('codeFloat'); if(!wrap) return;
            const toks = [...wrap.querySelectorAll('.tok')];
            toks.forEach((t,i) => setTimeout(() => t.classList.add('show'), 500 + i*180));
            if(!finePointer || reduceMotion) return;
            const hero = wrap.closest('.hero');
            hero.addEventListener('pointermove', e => {
                const r = hero.getBoundingClientRect();
                const dx = (e.clientX - r.left)/r.width - .5, dy = (e.clientY - r.top)/r.height - .5;
                toks.forEach((t,i) => { const d = (i%3+1)*8; t.style.marginLeft = (dx*d)+'px'; t.style.marginTop = (dy*d)+'px'; });
            });
        })();

        /* ---- Particle network canvas ---- */
        (function(){
            const c = document.getElementById('fx-canvas'); if(!c || reduceMotion) return;
            const ctx = c.getContext('2d'); let w, h, pts, raf;
            const COLORS = ['124,58,237','217,70,239','6,182,212'];
            function size(){ w = c.width = innerWidth; h = c.height = innerHeight;
                const n = Math.min(80, Math.floor(w*h/22000));
                pts = Array.from({length:n}, () => ({ x:Math.random()*w, y:Math.random()*h, vx:(Math.random()-.5)*.4, vy:(Math.random()-.5)*.4, col:COLORS[Math.floor(Math.random()*3)] }));
            }
            const mouse = { x:-999, y:-999 };
            addEventListener('pointermove', e => { mouse.x=e.clientX; mouse.y=e.clientY; });
            function draw(){
                ctx.clearRect(0,0,w,h);
                for(const p of pts){
                    p.x+=p.vx; p.y+=p.vy;
                    if(p.x<0||p.x>w) p.vx*=-1; if(p.y<0||p.y>h) p.vy*=-1;
                    const dm = Math.hypot(p.x-mouse.x, p.y-mouse.y);
                    if(dm < 130){ p.x += (p.x-mouse.x)/dm*1.2; p.y += (p.y-mouse.y)/dm*1.2; }
                    ctx.beginPath(); ctx.arc(p.x,p.y,1.8,0,7); ctx.fillStyle='rgba('+p.col+',.9)'; ctx.fill();
                }
                for(let i=0;i<pts.length;i++) for(let j=i+1;j<pts.length;j++){
                    const a=pts[i], b=pts[j], d=Math.hypot(a.x-b.x,a.y-b.y);
                    if(d<128){ ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y);
                        ctx.strokeStyle='rgba('+a.col+','+(.18*(1-d/128))+')'; ctx.lineWidth=1; ctx.stroke(); }
                }
                raf = requestAnimationFrame(draw);
            }
            size(); draw();
            let to; addEventListener('resize', () => { clearTimeout(to); to=setTimeout(size,200); });
            document.addEventListener('visibilitychange', () => { if(document.hidden) cancelAnimationFrame(raf); else draw(); });
        })();
