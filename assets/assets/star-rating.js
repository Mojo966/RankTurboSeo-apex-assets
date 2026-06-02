/*!
 * RankTurboSeo.Apex v16 - star-rating.js
 * 5-star rating widget
 * License: MIT
 */
(function() {
    'use strict';
    if (typeof window === 'undefined') return;

    function init() {
        document.querySelectorAll('[data-star-rating]').forEach(function(el) {
            const value = parseFloat(el.getAttribute('data-star-rating')) || 0;
            const max = parseInt(el.getAttribute('data-star-max'), 10) || 5;
            const pct = Math.max(0, Math.min(100, (value / max) * 100));
            el.innerHTML = [
                '<span class="rankturboseo-star-rating-stars" aria-hidden="true">',
                '  <span class="rankturboseo-star-rating-bg">★★★★★</span>',
                '  <span class="rankturboseo-star-rating-fg" style="width:' + pct + '%">★★★★★</span>',
                '</span>',
                '<span class="rankturboseo-sr-only">' + value + ' out of ' + max + ' stars</span>'
            ].join('');
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
