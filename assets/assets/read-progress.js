/*!
 * RankTurboSeo.Apex v16 - read-progress.js
 * Reading progress bar
 * License: MIT
 */
(function() {
    'use strict';
    if (typeof window === 'undefined') return;

    function init() {
        const article = document.querySelector('.post-body, article');
        if (!article) return;
        const bar = document.createElement('div');
        bar.className = 'rankturboseo-read-progress';
        bar.setAttribute('role', 'progressbar');
        bar.setAttribute('aria-label', 'Reading progress');
        bar.setAttribute('aria-valuemin', '0');
        bar.setAttribute('aria-valuemax', '100');
        bar.setAttribute('aria-valuenow', '0');
        document.body.appendChild(bar);
        const fill = document.createElement('div');
        fill.className = 'rankturboseo-read-progress-fill';
        bar.appendChild(fill);
        function update() {
            const rect = article.getBoundingClientRect();
            const total = article.offsetHeight - window.innerHeight;
            const scrolled = -rect.top;
            const pct = total > 0 ? Math.min(100, Math.max(0, (scrolled / total) * 100)) : 0;
            fill.style.width = pct + '%';
            bar.setAttribute('aria-valuenow', Math.round(pct));
        }
        let ticking = false;
        window.addEventListener('scroll', function() {
            if (!ticking) {
                requestAnimationFrame(function() {
                    update();
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
        update();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
