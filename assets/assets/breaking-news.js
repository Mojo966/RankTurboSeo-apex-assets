/*!
 * RankTurboSeo.Apex v16 - breaking-news.js
 * News ticker engine (News Portal edition)
 * License: MIT
 */
(function() {
    'use strict';
    if (typeof window === 'undefined') return;

    function init() {
        document.querySelectorAll('[data-breaking-ticker]').forEach(function(ticker) {
            const items = (ticker.getAttribute('data-breaking-ticker') || '').split('|').filter(Boolean);
            if (!items.length) return;
            ticker.classList.add('rankturboseo-breaking-ticker');
            const inner = document.createElement('div');
            inner.className = 'rankturboseo-breaking-ticker-inner';
            const label = document.createElement('span');
            label.className = 'rankturboseo-breaking-ticker-label';
            label.textContent = 'Breaking';
            inner.appendChild(label);
            const list = document.createElement('div');
            list.className = 'rankturboseo-breaking-ticker-list';
            items.forEach(function(item) {
                const span = document.createElement('span');
                span.className = 'rankturboseo-breaking-ticker-item';
                span.textContent = item;
                list.appendChild(span);
            });
            inner.appendChild(list);
            ticker.innerHTML = '';
            ticker.appendChild(inner);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
