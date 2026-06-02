/*!
 * RankTurboSeo.Apex v16 - table-of-contents.js
 * Auto TOC builder from post headings
 * License: MIT
 */
(function() {
    'use strict';
    if (typeof window === 'undefined') return;

    function init() {
        const article = document.querySelector('.post-body');
        if (!article) return;
        const headings = article.querySelectorAll('h2, h3');
        if (headings.length < 2) return;
        const toc = document.createElement('nav');
        toc.className = 'rankturboseo-toc';
        toc.setAttribute('aria-label', 'Table of contents');
        const title = document.createElement('h2');
        title.className = 'rankturboseo-toc-title';
        title.textContent = 'Table of contents';
        toc.appendChild(title);
        const list = document.createElement('ol');
        headings.forEach(function(h, idx) {
            if (!h.id) h.id = 'toc-' + (idx + 1);
            const li = document.createElement('li');
            li.className = 'rankturboseo-toc-' + h.tagName.toLowerCase();
            const a = document.createElement('a');
            a.href = '#' + h.id;
            a.textContent = h.textContent;
            li.appendChild(a);
            list.appendChild(li);
        });
        toc.appendChild(list);
        const firstH2 = article.querySelector('h2, h3');
        if (firstH2 && firstH2.parentNode) {
            firstH2.parentNode.insertBefore(toc, firstH2);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
