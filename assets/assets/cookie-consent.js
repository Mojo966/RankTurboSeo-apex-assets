/*!
 * RankTurboSeo.Apex v16 - cookie-consent.js
 * Cookie consent banner
 * License: MIT
 */
(function() {
    'use strict';
    if (typeof window === 'undefined') return;

    const STORAGE_KEY = 'rankturboseo-cookie-consent';

    function getConsent() {
        try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
    }
    function setConsent(value) {
        try { localStorage.setItem(STORAGE_KEY, value); } catch (e) {}
    }
    function init() {
        if (getConsent()) return;
        const banner = document.createElement('div');
        banner.className = 'rankturboseo-cookie-banner';
        banner.setAttribute('role', 'dialog');
        banner.setAttribute('aria-label', 'Cookie consent');
        banner.innerHTML = [
            '<p>This site uses cookies to enhance your experience. By continuing, you agree to our use of cookies.</p>',
            '<div class="rankturboseo-cookie-actions">',
            '  <button type="button" class="rankturboseo-cookie-accept">Accept</button>',
            '  <button type="button" class="rankturboseo-cookie-reject">Reject</button>',
            '</div>'
        ].join('');
        document.body.appendChild(banner);
        requestAnimationFrame(function() { banner.classList.add('open'); });
        banner.querySelector('.rankturboseo-cookie-accept').addEventListener('click', function() {
            setConsent('accepted');
            banner.remove();
        });
        banner.querySelector('.rankturboseo-cookie-reject').addEventListener('click', function() {
            setConsent('rejected');
            banner.remove();
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
