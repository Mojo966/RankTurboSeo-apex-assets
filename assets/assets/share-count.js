/*!
 * RankTurboSeo.Apex v16 - share-count.js
 * Share counter via Blogger feed
 * License: MIT
 */
(function() {
    'use strict';
    if (typeof window === 'undefined') return;

    function formatNumber(n) {
        if (n >= 1e6) return (n / 1e6).toFixed(1) + 'M';
        if (n >= 1e3) return (n / 1e3).toFixed(1) + 'K';
        return String(n);
    }

    function init() {
        document.querySelectorAll('[data-share-count]').forEach(function(el) {
            const url = el.getAttribute('data-share-count') || window.location.href;
            // Use Blogger's natural comment count as a proxy for engagement
            const path = window.location.pathname;
            const alt = document.createElement('script');
            alt.src = '/feeds/comments/default?alt=json-in-script&callback=rankturboseoShareCount&path=' + encodeURIComponent(path);
            el.setAttribute('data-share-url', url);
            document.body.appendChild(alt);
        });
    }

    window.rankturboseoShareCount = function(data) {
        const total = (data.feed && data.feed.openSearch$totalResults && data.feed.openSearch$totalResults.$t) || 0;
        const num = parseInt(total, 10);
        document.querySelectorAll('[data-share-count]').forEach(function(el) {
            el.textContent = formatNumber(num);
        });
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
