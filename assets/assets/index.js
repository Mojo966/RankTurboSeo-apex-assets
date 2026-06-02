/*!
 * RankTurboSeo.Apex v16 - index.js
 * Master loader (loads all modules based on data attributes)
 * License: MIT
 */
(function() {
    'use strict';
    if (typeof window === 'undefined') return;
    const CDN = 'https://cdn.jsdelivr.net/gh/Mojo966/RankTurboSeo-apex-assets@main/assets/';
    const MODULES = {
        'module-waves': 'waves.js',
        'module-qr': 'qr.js',
        'module-schema': 'schema-org.js',
        'module-meta': 'meta-desc.js',
        'module-read-progress': 'read-progress.js',
        'module-dark-mode': 'dark-mode.js',
        'module-back-top': 'back-to-top.js',
        'module-mobile-menu': 'mobile-menu.js',
        'module-search': 'search-overlay.js',
        'module-faq': 'faq-accordion.js',
        'module-zoom': 'image-zoom.js',
        'module-toc': 'table-of-contents.js',
        'module-read-time': 'reading-time.js',
        'module-breadcrumb': 'breadcrumb.js',
        'module-share': 'share-buttons.js',
        'module-cookie': 'cookie-consent.js',
        'module-lazy': 'lazy-images.js',
        'module-sticky': 'sticky-elements.js',
        'module-related': 'related-posts.js',
        'module-copy': 'copy-link.js',
        'module-scroll': 'smooth-scroll.js',
        'module-print': 'print-clean.js',
        'module-sharecount': 'share-count.js',
        'module-skip': 'skip-link.js',
        'module-table': 'table-responsive.js',
        'module-author': 'author-box.js',
        'module-countdown': 'countdown.js',
        'module-stars': 'star-rating.js',
        'module-a11y': 'a11y-skip.js',
        'module-breaking': 'breaking-news.js',
        'module-highlight': 'code-highlight.js',
        'module-emoji': 'comments-emoji.js',
        'module-video': 'video-lazy.js',
        'module-ads': 'ads-lazy.js',
        'module-batch': 'batch-63-69.js'
    };
    function loadScript(src) {
        return new Promise(function(resolve, reject) {
            const s = document.createElement('script');
            s.src = src;
            s.defer = true;
            s.onload = resolve;
            s.onerror = reject;
            document.body.appendChild(s);
        });
    }
    function init() {
        const needed = new Set();
        Object.keys(MODULES).forEach(function(key) {
            if (document.querySelector('[' + key + '], [data-' + key + ']')) {
                needed.add(MODULES[key]);
            }
        });
        if (document.body.dataset.stModule) needed.add('batch-63-69.js');
        needed.forEach(function(name) { loadScript(CDN + name); });
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
