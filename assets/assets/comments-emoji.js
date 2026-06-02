/*!
 * RankTurboSeo.Apex v16 - comments-emoji.js
 * Comment emoji picker
 * License: MIT
 */
(function() {
    'use strict';
    if (typeof window === 'undefined') return;

    const EMOJIS = [
        '😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊',
        '😋', '😎', '😍', '😘', '😗', '😙', '😚', '🙂', '🤗', '🤩',
        '🤔', '🤨', '😐', '😑', '😶', '🙄', '😏', '😣', '😥', '😮',
        '🤐', '😯', '😪', '😫', '🥱', '😴', '😌', '😛', '😜', '😝',
        '🤤', '😒', '😓', '😔', '😕', '🙃', '🤑', '😲', '☹️', '🙁',
        '😖', '😞', '😟', '😤', '😢', '😭', '😦', '😧', '😨', '😩',
        '🤯', '😬', '😰', '😱', '🥵', '🥶', '😳', '🤪', '😵', '🥴'
    ];

    function init() {
        const form = document.querySelector('#comment-form, .comment-form');
        if (!form) return;
        const textarea = form.querySelector('textarea[name="comment"], textarea');
        if (!textarea) return;
        const picker = document.createElement('div');
        picker.className = 'rankturboseo-emoji-picker';
        picker.setAttribute('aria-label', 'Emoji picker');
        const toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.className = 'rankturboseo-emoji-toggle';
        toggle.setAttribute('aria-label', 'Toggle emoji picker');
        toggle.textContent = '😊';
        const panel = document.createElement('div');
        panel.className = 'rankturboseo-emoji-panel';
        panel.setAttribute('role', 'grid');
        panel.style.display = 'none';
        EMOJIS.forEach(function(em) {
            const b = document.createElement('button');
            b.type = 'button';
            b.className = 'rankturboseo-emoji-item';
            b.textContent = em;
            b.setAttribute('aria-label', em);
            b.addEventListener('click', function(e) {
                e.preventDefault();
                const start = textarea.selectionStart;
                const end = textarea.selectionEnd;
                const v = textarea.value;
                textarea.value = v.slice(0, start) + em + v.slice(end);
                textarea.focus();
                textarea.selectionStart = textarea.selectionEnd = start + em.length;
            });
            panel.appendChild(b);
        });
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            panel.style.display = panel.style.display === 'none' ? 'grid' : 'none';
        });
        picker.appendChild(toggle);
        picker.appendChild(panel);
        textarea.parentNode.insertBefore(picker, textarea);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
