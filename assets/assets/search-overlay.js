/*!
 * RankTurboSeo.Apex v16 - search-overlay.js
 * Full-screen search overlay
 * License: MIT
 */
(function() {
    'use strict';
    if (typeof window === 'undefined') return;

    function init() {
        document.querySelectorAll('[data-search-toggle]').forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                openSearch();
            });
        });
        document.addEventListener('keydown', function(e) {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                openSearch();
            }
            if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
                e.preventDefault();
                openSearch();
            }
            if (e.key === 'Escape') {
                closeSearch();
            }
        });
    }

    function openSearch() {
        let overlay = document.getElementById('rankturboseo-search-overlay');
        if (!overlay) {
            overlay = createOverlay();
        }
        overlay.classList.add('open');
        const input = overlay.querySelector('input');
        if (input) setTimeout(function() { input.focus(); }, 100);
        document.body.classList.add('search-open');
    }

    function closeSearch() {
        const overlay = document.getElementById('rankturboseo-search-overlay');
        if (overlay) {
            overlay.classList.remove('open');
            document.body.classList.remove('search-open');
        }
    }

    function createOverlay() {
        const overlay = document.createElement('div');
        overlay.id = 'rankturboseo-search-overlay';
        overlay.className = 'rankturboseo-search-overlay';
        overlay.setAttribute('role', 'dialog');
        overlay.setAttribute('aria-modal', 'true');
        overlay.setAttribute('aria-label', 'Search');
        overlay.innerHTML = [
            '<div class="rankturboseo-search-panel">',
            '  <button class="rankturboseo-search-close" type="button" aria-label="Close search">&times;</button>',
            '  <form class="rankturboseo-search-form" action="/search" method="get" role="search">',
            '    <input type="search" name="q" placeholder="Search..." aria-label="Search query" autocomplete="off"/>',
            '    <button type="submit" aria-label="Submit search">',
            '      <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>',
            '    </button>',
            '  </form>',
            '</div>'
        ].join('');
        document.body.appendChild(overlay);
        overlay.querySelector('.rankturboseo-search-close').addEventListener('click', closeSearch);
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) closeSearch();
        });
        return overlay;
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
