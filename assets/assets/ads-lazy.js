/*!
 * RankTurboSeo.Apex v16 - ads-lazy.js
 * Lazy load AdSense units
 * License: MIT
 */
(function() {
    'use strict';
    if (typeof window === 'undefined') return;

    let adsbygoogleLoaded = false;
    function loadAdSense() {
        if (adsbygoogleLoaded) return;
        adsbygoogleLoaded = true;
        const s = document.createElement('script');
        s.async = true;
        s.crossOrigin = 'anonymous';
        s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX';
        document.head.appendChild(s);
    }

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const slot = el.querySelector('.adsbygoogle');
                    if (slot && !slot.dataset.adStatus) {
                        loadAdSense();
                        try { (window.adsbygoogle = window.adsbygoogle || []).push({}); }
                        catch (e) { /* ignore */ }
                        slot.dataset.adStatus = 'queued';
                    }
                    observer.unobserve(el);
                }
            });
        }, { rootMargin: '200px 0px' });
        document.querySelectorAll('.rankturboseo-ad-slot').forEach(function(el) { observer.observe(el); });
    }
})();
