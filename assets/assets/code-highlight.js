/*!
 * RankTurboSeo.Apex v16 - code-highlight.js
 * Simple syntax highlighting (no external library)
 * License: MIT
 */
(function() {
    'use strict';
    if (typeof window === 'undefined') return;

    const LANG_PATTERNS = {
        javascript: { keywords: ['const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while', 'class', 'new', 'this', 'import', 'export', 'from', 'async', 'await'], types: ['string', 'number', 'boolean'] },
        python: { keywords: ['def', 'class', 'return', 'if', 'elif', 'else', 'for', 'while', 'import', 'from', 'as', 'try', 'except', 'with', 'lambda', 'yield'], types: ['str', 'int', 'float', 'bool', 'list', 'dict', 'tuple', 'set'] },
        css: { keywords: ['important', 'inherit', 'initial', 'unset'], types: ['px', 'em', 'rem', 'vh', 'vw', '%'] }
    };

    function escapeHtml(s) {
        return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    function highlight(code, lang) {
        const safe = escapeHtml(code);
        const patterns = LANG_PATTERNS[lang];
        if (!patterns) return safe;
        let html = safe;
        // Strings
        html = html.replace(/(['"`])(?:(?=(\\?))\2.)*?\1/g, '<span class="rankturboseo-hl-string">$&</span>');
        // Numbers
        html = html.replace(/\b(\d+\.?\d*)\b/g, '<span class="rankturboseo-hl-number">$1</span>');
        // Keywords
        patterns.keywords.forEach(function(kw) {
            const re = new RegExp('\\b(' + kw + ')\\b', 'g');
            html = html.replace(re, '<span class="rankturboseo-hl-keyword">$1</span>');
        });
        // Types
        patterns.types.forEach(function(t) {
            const re = new RegExp('\\b(' + t + ')\\b', 'g');
            html = html.replace(re, '<span class="rankturboseo-hl-type">$1</span>');
        });
        // Comments
        html = html.replace(/(\/\/[^\n]*|#[^\n]*)/g, '<span class="rankturboseo-hl-comment">$1</span>');
        return html;
    }

    function init() {
        document.querySelectorAll('pre code, .rankturboseo-code-block code').forEach(function(code) {
            const lang = (code.className.match(/lang-(\w+)/) || [])[1] || (code.parentNode && (code.parentNode.className.match(/lang-(\w+)/) || [])[1]) || 'javascript';
            if (code.dataset.highlighted) return;
            const original = code.textContent;
            code.innerHTML = highlight(original, lang);
            code.dataset.highlighted = '1';
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    window.RankTurboSeoHighlight = { highlight: highlight };
})();
