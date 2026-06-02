/*!
 * RankTurboSeo.Apex v16 - lazy-images.js
 * Enhanced lazy loading for images
 * License: MIT
 */
(function() {
    'use strict';
    if (typeof window === 'undefined') return;

    if ('loading' in HTMLImageElement.prototype) {
        // Native lazy loading supported
        document.querySelectorAll('img[loading="lazy"]').forEach(function(img) {
            if (!img.src && img.dataset.src) {
                img.src = img.dataset.src;
            }
        });
        return;
    }

    // Fallback with IntersectionObserver
    if (!('IntersectionObserver' in window)) {
        document.querySelectorAll('img[data-src]').forEach(function(img) {
            img.src = img.dataset.src;
        });
        return;
    }

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) img.src = img.dataset.src;
                if (img.dataset.srcset) img.srcset = img.dataset.srcset;
                observer.unobserve(img);
            }
        });
    }, { rootMargin: '200px 0px' });

    document.querySelectorAll('img[data-src]').forEach(function(img) {
        observer.observe(img);
    });
})();
