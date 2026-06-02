/*!
 * RankTurboSeo.Apex v16 - author-box.js
 * Author card builder from data attributes
 * License: MIT
 */
(function() {
    'use strict';
    if (typeof window === 'undefined') return;

    function init() {
        const target = document.querySelector('[data-author-box]');
        if (!target) return;
        const name = target.getAttribute('data-author-name') || 'Author';
        const bio = target.getAttribute('data-author-bio') || '';
        const avatar = target.getAttribute('data-author-avatar') || '';
        const url = target.getAttribute('data-author-url') || '#';
        const card = document.createElement('div');
        card.className = 'rankturboseo-author-box';
        card.innerHTML = [
            avatar ? '<img class="rankturboseo-author-avatar" src="' + avatar + '" alt="' + name + '" loading="lazy"/>' : '',
            '<div class="rankturboseo-author-info">',
            '  <h3 class="rankturboseo-author-name"><a href="' + url + '">' + name + '</a></h3>',
            bio ? '  <p class="rankturboseo-author-bio">' + bio + '</p>' : '',
            '</div>'
        ].join('');
        target.appendChild(card);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
