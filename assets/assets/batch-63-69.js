/*!
 * RankTurboSeo.Apex v16 - batch-63-69.js
 * Modules 63-69 utility pack
 * License: MIT
 */
(function() {
    'use strict';
    if (typeof window === 'undefined') return;

    function module63() {
        // QR code injector
        const target = document.querySelector('[data-module-63]');
        if (target) {
            const size = target.getAttribute('data-size') || '128';
            const url = encodeURIComponent(window.location.href);
            target.innerHTML = '<img src="https://api.qrserver.com/v1/create-qr-code/?size=' + size + 'x' + size + '&data=' + url + '" alt="QR" width="' + size + '" height="' + size + '" loading="lazy"/>';
        }
    }

    function module64() {
        // Organization schema updater
        const target = document.querySelector('[data-module-64]');
        if (target) {
            const name = target.getAttribute('data-org-name') || document.title;
            const url = target.getAttribute('data-org-url') || window.location.origin;
            const logo = target.getAttribute('data-org-logo') || '';
            const socials = (target.getAttribute('data-org-socials') || '').split(',').filter(Boolean);
            const schema = {
                '@context': 'https://schema.org',
                '@type': 'Organization',
                'name': name,
                'url': url,
                'logo': logo ? { '@type': 'ImageObject', 'url': logo } : undefined,
                'sameAs': socials
            };
            const s = document.createElement('script');
            s.type = 'application/ld+json';
            s.textContent = JSON.stringify(schema);
            document.head.appendChild(s);
        }
    }

    function module65() {
        // Homepage meta description manager
        if (window.location.pathname !== '/' && window.location.pathname !== '') return;
        const target = document.querySelector('[data-module-65]');
        if (target) {
            const text = target.getAttribute('data-desc') || '';
            if (!text) return;
            let m = document.querySelector('meta[name="description"]');
            if (!m) { m = document.createElement('meta'); m.setAttribute('name', 'description'); document.head.appendChild(m); }
            m.setAttribute('content', text);
            let og = document.querySelector('meta[property="og:description"]');
            if (!og) { og = document.createElement('meta'); og.setAttribute('property', 'og:description'); document.head.appendChild(og); }
            og.setAttribute('content', text);
        }
    }

    function module66() {
        // Waves SVG injector
        if (window.RankTurboSeoWaves) window.RankTurboSeoWaves.inject;
    }

    function module67() {
        // Read time estimator
        const article = document.querySelector('.post-body');
        if (!article) return;
        const text = (article.textContent || '').trim();
        const words = text ? text.split(/\s+/).length : 0;
        const minutes = Math.max(1, Math.ceil(words / 200));
        const t = document.querySelector('[data-read-time]');
        if (t) t.textContent = minutes + ' min';
    }

    function module68() {
        // Reading progress bar
        if (document.querySelector('.rankturboseo-read-progress')) return;
        const article = document.querySelector('.post-body');
        if (!article) return;
        const bar = document.createElement('div');
        bar.className = 'rankturboseo-read-progress';
        bar.innerHTML = '<div class="rankturboseo-read-progress-fill"></div>';
        document.body.appendChild(bar);
        const fill = bar.firstChild;
        function update() {
            const r = article.getBoundingClientRect();
            const total = article.offsetHeight - window.innerHeight;
            const scrolled = -r.top;
            const pct = total > 0 ? Math.min(100, Math.max(0, (scrolled / total) * 100)) : 0;
            fill.style.width = pct + '%';
        }
        let t = false;
        window.addEventListener('scroll', function() {
            if (!t) { requestAnimationFrame(function() { update(); t = false; }); t = true; }
        }, { passive: true });
        update();
    }

    function module69() {
        // TOC builder
        const article = document.querySelector('.post-body');
        if (!article) return;
        const heads = article.querySelectorAll('h2, h3');
        if (heads.length < 2) return;
        const nav = document.createElement('nav');
        nav.className = 'rankturboseo-toc';
        nav.setAttribute('aria-label', 'Table of contents');
        const list = document.createElement('ol');
        heads.forEach(function(h, i) {
            if (!h.id) h.id = 'toc-' + (i + 1);
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = '#' + h.id;
            a.textContent = h.textContent;
            li.appendChild(a);
            list.appendChild(li);
        });
        nav.appendChild(list);
        const first = article.querySelector('h2, h3');
        if (first) first.parentNode.insertBefore(nav, first);
    }

    function init() {
        const mod = document.body.getAttribute('data-st-module');
        if (!mod) return;
        const fn = {
            '63': module63, '64': module64, '65': module65,
            '66': module66, '67': module67, '68': module68, '69': module69
        };
        if (fn[mod]) fn[mod]();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
