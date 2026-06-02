/*!
 * RankTurboSeo.Apex v16 - reading-time.js
 * Read time estimator
 * License: MIT
 */
(function() {
    'use strict';
    if (typeof window === 'undefined') return;

    const WORDS_PER_MINUTE = 200;

    function init() {
        const article = document.querySelector('.post-body');
        if (!article) return;
        const text = article.textContent || '';
        const words = text.trim().split(/\s+/).length;
        const minutes = Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
        const target = document.querySelector('[data-read-time]');
        if (target) {
            target.textContent = minutes + ' min read';
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
