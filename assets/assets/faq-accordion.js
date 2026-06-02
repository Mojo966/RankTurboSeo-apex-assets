/*!
 * RankTurboSeo.Apex v16 - faq-accordion.js
 * FAQ toggles
 * License: MIT
 */
(function() {
    'use strict';
    if (typeof window === 'undefined') return;

    function init() {
        document.querySelectorAll('.rankturboseo-faq-trigger').forEach(function(trigger) {
            trigger.setAttribute('aria-expanded', 'false');
            trigger.addEventListener('click', function() {
                const expanded = trigger.getAttribute('aria-expanded') === 'true';
                trigger.setAttribute('aria-expanded', expanded ? 'false' : 'true');
                const parent = trigger.closest('.rankturboseo-faq-item');
                if (parent) parent.classList.toggle('open');
            });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
