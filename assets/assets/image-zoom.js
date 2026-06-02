/*!
 * RankTurboSeo.Apex v16 - image-zoom.js
 * Image lightbox
 * License: MIT
 */
(function() {
    'use strict';
    if (typeof window === 'undefined') return;

    function init() {
        document.querySelectorAll('.post-body img').forEach(function(img) {
            if (img.closest('a')) return;
            img.style.cursor = 'zoom-in';
            img.addEventListener('click', function() {
                openLightbox(img.src, img.alt);
            });
        });
    }

    function openLightbox(src, alt) {
        const overlay = document.createElement('div');
        overlay.className = 'rankturboseo-lightbox';
        overlay.setAttribute('role', 'dialog');
        overlay.setAttribute('aria-modal', 'true');
        overlay.innerHTML = [
            '<div class="rankturboseo-lightbox-content">',
            '  <button class="rankturboseo-lightbox-close" type="button" aria-label="Close">&times;</button>',
            '  <img src="' + src + '" alt="' + (alt || '') + '"/>',
            '</div>'
        ].join('');
        document.body.appendChild(overlay);
        requestAnimationFrame(function() { overlay.classList.add('open'); });
        document.body.classList.add('lightbox-open');
        const close = function() {
            overlay.classList.remove('open');
            setTimeout(function() { overlay.remove(); document.body.classList.remove('lightbox-open'); }, 200);
        };
        overlay.addEventListener('click', function(e) { if (e.target === overlay) close(); });
        overlay.querySelector('.rankturboseo-lightbox-close').addEventListener('click', close);
        document.addEventListener('keydown', function escHandler(e) {
            if (e.key === 'Escape') { close(); document.removeEventListener('keydown', escHandler); }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
