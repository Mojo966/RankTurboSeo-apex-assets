/*!
 * RankTurboSeo.Apex v16 - dark-mode.js
 * Theme switcher (light/dark/system)
 * License: MIT
 */
(function() {
    'use strict';
    if (typeof window === 'undefined') return;

    const STORAGE_KEY = 'rankturboseo-theme';
    const VALID_MODES = ['light', 'dark', 'system'];

    function getStored() {
        try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
    }
    function setStored(mode) {
        try { localStorage.setItem(STORAGE_KEY, mode); } catch (e) {}
    }
    function getSystemMode() {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    function effectiveMode(mode) {
        if (mode === 'system') return getSystemMode();
        return mode;
    }
    function apply(mode) {
        const eff = effectiveMode(mode);
        document.documentElement.setAttribute('data-theme', eff);
        document.body.classList.toggle('dark-mode', eff === 'dark');
    }
    function toggle() {
        const current = getStored() || 'system';
        const next = current === 'dark' ? 'light' : 'dark';
        setStored(next);
        apply(next);
        document.dispatchEvent(new CustomEvent('rankturboseo:theme', { detail: { mode: next } }));
    }
    function init() {
        const mode = getStored() || 'system';
        apply(mode);
        document.querySelectorAll('[data-theme-toggle]').forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                toggle();
            });
        });
        if (window.matchMedia) {
            const mql = window.matchMedia('(prefers-color-scheme: dark)');
            if (mql.addEventListener) {
                mql.addEventListener('change', function() {
                    if ((getStored() || 'system') === 'system') apply('system');
                });
            }
        }
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    window.RankTurboSeoTheme = { toggle: toggle, apply: apply, getStored: getStored, setStored: setStored };
})();
