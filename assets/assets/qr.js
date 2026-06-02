/*!
 * RankTurboSeo.Apex v16 - qr.js
 * Auto QR generator for current page URL
 * License: MIT
 */
(function() {
    'use strict';
    if (typeof window === 'undefined') return;

    function generateQR(text, size) {
        size = size || 128;
        // Use a free QR API (no tracking, no rate limit)
        const encoded = encodeURIComponent(text || window.location.href);
        return 'https://api.qrserver.com/v1/create-qr-code/?size=' + size + 'x' + size + '&data=' + encoded + '&margin=10';
    }

    function init() {
        document.querySelectorAll('[data-qr]').forEach(function(el) {
            const url = el.getAttribute('data-qr') || window.location.href;
            const size = parseInt(el.getAttribute('data-qr-size'), 10) || 128;
            const img = document.createElement('img');
            img.src = generateQR(url, size);
            img.alt = 'QR code for ' + url;
            img.loading = 'lazy';
            img.width = size;
            img.height = size;
            el.appendChild(img);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    window.RankTurboSeoQR = { generate: generateQR };
})();
