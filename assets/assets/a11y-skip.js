/*!
 * RankTurboSeo.Apex v16 - a11y-skip.js
 * Accessibility skip links
 * License: MIT
 */
(function() {
    'use strict';
    if (typeof window === 'undefined') return;

    function init() {
        if (document.querySelector('.skip-to-content')) return;
        const link = document.createElement('a');
        link.className = 'skip-to-content';
        link.href = '#main';
        link.textContent = 'Skip to main content';
        document.body.insertBefore(link, document.body.firstChild);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
