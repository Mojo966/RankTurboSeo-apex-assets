/*!
 * RankTurboSeo.Apex v16 - countdown.js
 * Countdown timer for events
 * License: MIT
 */
(function() {
    'use strict';
    if (typeof window === 'undefined') return;

    function pad(n) { return n < 10 ? '0' + n : String(n); }

    function init() {
        document.querySelectorAll('[data-countdown]').forEach(function(el) {
            const target = new Date(el.getAttribute('data-countdown')).getTime();
            if (isNaN(target)) return;
            function update() {
                const now = Date.now();
                const diff = target - now;
                if (diff <= 0) {
                    el.innerHTML = '<span class="rankturboseo-countdown-ended">Event started</span>';
                    return;
                }
                const d = Math.floor(diff / 86400000);
                const h = Math.floor((diff % 86400000) / 3600000);
                const m = Math.floor((diff % 3600000) / 60000);
                const s = Math.floor((diff % 60000) / 1000);
                el.innerHTML = [
                    '<span class="rankturboseo-countdown-d">' + d + '<small>days</small></span>',
                    '<span class="rankturboseo-countdown-h">' + pad(h) + '<small>hrs</small></span>',
                    '<span class="rankturboseo-countdown-m">' + pad(m) + '<small>min</small></span>',
                    '<span class="rankturboseo-countdown-s">' + pad(s) + '<small>sec</small></span>'
                ].join(' ');
            }
            update();
            setInterval(update, 1000);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
