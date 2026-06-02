/*!
 * RankTurboSeo.Apex v16 - skip-link.js
 * Skip-to-content link keyboard support
 * License: MIT
 */
(function() {
    'use strict';
    if (typeof window === 'undefined') return;

    function init() {
        const skip = document.querySelector('.skip-to-content, [data-skip-link]');
        if (!skip) return;
        skip.addEventListener('click', function(e) {
            const href = skip.getAttribute('href');
            if (!href || !href.startsWith('#')) return;
            const target = document.getElementById(href.slice(1));
            if (!target) return;
            e.preventDefault();
            target.setAttribute('tabindex', '-1');
            target.focus({ preventScroll: false });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
