/*!
 * RankTurboSeo.Apex v16 - sticky-elements.js
 * Sticky bar behavior
 * License: MIT
 */
(function() {
    'use strict';
    if (typeof window === 'undefined') return;

    function init() {
        const sticky = document.querySelector('.rankturboseo-sticky-bar');
        if (!sticky) return;
        const sentinel = document.createElement('div');
        sentinel.style.height = '1px';
        sticky.parentNode.insertBefore(sentinel, sticky);
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    sticky.classList.remove('stuck');
                } else {
                    sticky.classList.add('stuck');
                }
            });
        }, { rootMargin: '-1px 0px 0px 0px', threshold: [1] });
        observer.observe(sentinel);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
