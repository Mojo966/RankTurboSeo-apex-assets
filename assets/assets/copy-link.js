/*!
 * RankTurboSeo.Apex v16 - copy-link.js
 * Copy current page URL to clipboard
 * License: MIT
 */
(function() {
    'use strict';
    if (typeof window === 'undefined') return;

    function copy(text) {
        if (navigator.clipboard && window.isSecureContext) {
            return navigator.clipboard.writeText(text);
        }
        return new Promise(function(resolve, reject) {
            try {
                const ta = document.createElement('textarea');
                ta.value = text;
                ta.setAttribute('readonly', '');
                ta.style.position = 'absolute';
                ta.style.left = '-9999px';
                document.body.appendChild(ta);
                ta.select();
                document.execCommand('copy');
                ta.remove();
                resolve();
            } catch (e) { reject(e); }
        });
    }

    function init() {
        document.querySelectorAll('[data-copy-link]').forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const url = btn.getAttribute('data-copy-link') || window.location.href;
                copy(url).then(function() {
                    const original = btn.textContent;
                    btn.textContent = 'Copied!';
                    setTimeout(function() { btn.textContent = original; }, 2000);
                });
            });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
