/*!
 * RankTurboSeo.Apex v16 - share-buttons.js
 * Social share buttons logic
 * License: MIT
 */
(function() {
    'use strict';
    if (typeof window === 'undefined') return;

    const PLATFORMS = {
        facebook: function(url, title) { return 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url); },
        twitter: function(url, title) { return 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(title); },
        whatsapp: function(url, title) { return 'https://wa.me/?text=' + encodeURIComponent(title + ' ' + url); },
        telegram: function(url, title) { return 'https://t.me/share/url?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(title); },
        linkedin: function(url, title) { return 'https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(url); },
        pinterest: function(url, title, img) { return 'https://pinterest.com/pin/create/button/?url=' + encodeURIComponent(url) + '&media=' + encodeURIComponent(img || '') + '&description=' + encodeURIComponent(title); },
        reddit: function(url, title) { return 'https://reddit.com/submit?url=' + encodeURIComponent(url) + '&title=' + encodeURIComponent(title); }
    };

    function init() {
        document.querySelectorAll('[data-share]').forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const platform = btn.getAttribute('data-share');
                const url = btn.getAttribute('data-url') || window.location.href;
                const title = btn.getAttribute('data-title') || document.title;
                const img = btn.getAttribute('data-image') || '';
                if (PLATFORMS[platform]) {
                    window.open(PLATFORMS[platform](url, title, img), '_blank', 'width=600,height=500,noopener,noreferrer');
                }
            });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    window.RankTurboSeoShare = { platforms: PLATFORMS };
})();
