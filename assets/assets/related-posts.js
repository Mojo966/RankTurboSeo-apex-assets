/*!
 * RankTurboSeo.Apex v16 - related-posts.js
 * Related posts engine
 * License: MIT
 */
(function() {
    'use strict';
    if (typeof window === 'undefined') return;

    function init() {
        const target = document.querySelector('[data-related-target]');
        if (!target) return;
        const current = target.getAttribute('data-related-target');
        const feedScript = document.querySelector('script[src*="/feeds/posts/default"]');
        if (!feedScript) return;
        const altScript = document.createElement('script');
        altScript.src = '/feeds/posts/default/-/' + encodeURIComponent(current) + '?alt=json-in-script&max-results=4&callback=rankturboseoRelated';
        document.body.appendChild(altScript);
    }

    window.rankturboseoRelated = function(data) {
        const target = document.querySelector('[data-related-target]');
        if (!target || !data.feed || !data.feed.entry) return;
        const html = data.feed.entry.map(function(entry) {
            const title = entry.title.$t;
            const url = entry.link.find(function(l) { return l.rel === 'alternate'; }).href;
            const thumb = entry.media$thumbnail ? entry.media$thumbnail.url : (entry.content ? extractFirstImg(entry.content.$t) : '');
            return [
                '<article class="rankturboseo-related-item">',
                '  <a href="' + url + '" rel="bookmark">',
                thumb ? '    <img src="' + thumb + '" alt="' + title + '" loading="lazy"/>' : '',
                '    <h3>' + title + '</h3>',
                '  </a>',
                '</article>'
            ].join('\n');
        }).join('\n');
        target.innerHTML = '<div class="rankturboseo-related-grid">' + html + '</div>';
    };

    function extractFirstImg(html) {
        const m = html && html.match(/<img[^>]+src=["']([^"']+)["']/);
        return m ? m[1] : '';
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
