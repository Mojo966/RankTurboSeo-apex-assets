/*!
 * RankTurboSeo.Apex v16 - video-lazy.js
 * Lazy load embedded videos
 * License: MIT
 */
(function() {
    'use strict';
    if (typeof window === 'undefined') return;

    function init() {
        document.querySelectorAll('.rankturboseo-lazy-video').forEach(function(wrapper) {
            if (wrapper.dataset.loaded) return;
            const src = wrapper.getAttribute('data-src');
            if (!src) return;
            const btn = wrapper.querySelector('.rankturboseo-lazy-video-play');
            const placeholder = wrapper.querySelector('.rankturboseo-lazy-video-poster');
            function load() {
                wrapper.dataset.loaded = '1';
                if (placeholder) placeholder.style.display = 'none';
                const iframe = document.createElement('iframe');
                iframe.src = src;
                iframe.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');
                iframe.setAttribute('allowfullscreen', '');
                iframe.setAttribute('loading', 'lazy');
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.style.border = '0';
                wrapper.appendChild(iframe);
            }
            if (btn) btn.addEventListener('click', load);
            if (placeholder) placeholder.addEventListener('click', load);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
