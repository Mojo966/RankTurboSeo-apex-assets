/*!
 * RankTurboSeo.Apex v16 - table-responsive.js
 * Wrap tables in scroll container for mobile
 * License: MIT
 */
(function() {
    'use strict';
    if (typeof window === 'undefined') return;

    function init() {
        document.querySelectorAll('.post-body table, article table').forEach(function(table) {
            if (table.parentNode && table.parentNode.classList.contains('rankturboseo-table-wrap')) return;
            const wrapper = document.createElement('div');
            wrapper.className = 'rankturboseo-table-wrap';
            table.parentNode.insertBefore(wrapper, table);
            wrapper.appendChild(table);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
