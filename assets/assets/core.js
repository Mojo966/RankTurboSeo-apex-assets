/*!
 * RankTurboSeo.Apex v16 - core.js
 * Core utilities used by all editions
 * License: MIT
 */
(function() {
    'use strict';
    if (typeof window === 'undefined') return;
    window.RankTurboSeo = window.RankTurboSeo || {};
    window.RankTurboSeo.version = '16.0.0';
    window.RankTurboSeo.cdn = 'https://cdn.jsdelivr.net/gh/Mojo966/RankTurboSeo-apex-assets@main/assets/';
    window.RankTurboSeo.utils = {
        debounce: function(fn, wait) {
            let t;
            return function() {
                const args = arguments;
                clearTimeout(t);
                t = setTimeout(function() { fn.apply(null, args); }, wait);
            };
        },
        throttle: function(fn, limit) {
            let inThrottle = false;
            return function() {
                const args = arguments;
                const ctx = this;
                if (!inThrottle) {
                    fn.apply(ctx, args);
                    inThrottle = true;
                    setTimeout(function() { inThrottle = false; }, limit);
                }
            };
        },
        ready: function(fn) {
            if (document.readyState !== 'loading') fn();
            else document.addEventListener('DOMContentLoaded', fn);
        },
        loadCSS: function(href) {
            const l = document.createElement('link');
            l.rel = 'stylesheet';
            l.href = href;
            document.head.appendChild(l);
        },
        loadScript: function(src, attrs) {
            return new Promise(function(resolve, reject) {
                const s = document.createElement('script');
                s.src = src;
                if (attrs && attrs.defer) s.defer = true;
                if (attrs && attrs.async) s.async = true;
                s.onload = resolve;
                s.onerror = reject;
                document.body.appendChild(s);
            });
        }
    };
})();
