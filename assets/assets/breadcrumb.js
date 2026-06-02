/*!
 * RankTurboSeo.Apex v16 - breadcrumb.js
 * Breadcrumb generator
 * License: MIT
 */
(function() {
    'use strict';
    if (typeof window === 'undefined') return;

    function init() {
        const target = document.querySelector('[data-breadcrumb]');
        if (!target) return;
        const path = window.location.pathname;
        const parts = path.split('/').filter(function(p) { return p.length > 0; });
        const items = [{ name: 'Home', url: '/' }];
        let acc = '';
        parts.forEach(function(p, idx) {
            acc += '/' + p;
            if (idx === parts.length - 1 && p.includes('.html')) return;
            const isLast = idx === parts.length - 1;
            const name = decodeURIComponent(p).replace(/[-_]/g, ' ').replace(/\b\w/g, function(c) { return c.toUpperCase(); });
            items.push({ name: name, url: acc, last: isLast });
        });
        const nav = document.createElement('nav');
        nav.className = 'rankturboseo-breadcrumb';
        nav.setAttribute('aria-label', 'Breadcrumb');
        const ol = document.createElement('ol');
        items.forEach(function(item, idx) {
            const li = document.createElement('li');
            if (item.last) {
                li.setAttribute('aria-current', 'page');
                li.textContent = item.name;
            } else {
                const a = document.createElement('a');
                a.href = item.url;
                a.textContent = item.name;
                li.appendChild(a);
            }
            ol.appendChild(li);
        });
        nav.appendChild(ol);
        target.appendChild(nav);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
