/*!
 * RankTurboSeo.Apex v16 - schema-org.js
 * Dynamic JSON-LD schema updater (WebSite + Organization + Breadcrumb)
 * License: MIT
 */
(function() {
    'use strict';
    if (typeof window === 'undefined') return;

    function updateSchema(schemaObj, position) {
        position = position || 'head';
        const existing = document.querySelectorAll('script[type="application/ld+json"]');
        let updated = false;
        existing.forEach(function(s) {
            try {
                const data = JSON.parse(s.textContent);
                if (data['@type'] === schemaObj['@type']) {
                    s.textContent = JSON.stringify(schemaObj, null, 0);
                    updated = true;
                }
            } catch (e) { /* ignore */ }
        });
        if (!updated) {
            const s = document.createElement('script');
            s.type = 'application/ld+json';
            s.textContent = JSON.stringify(schemaObj, null, 0);
            if (position === 'head') {
                document.head.appendChild(s);
            } else {
                document.body.appendChild(s);
            }
        }
    }

    function buildBreadcrumb(items) {
        return {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            'itemListElement': items.map(function(item, idx) {
                return {
                    '@type': 'ListItem',
                    'position': idx + 1,
                    'name': item.name,
                    'item': item.url
                };
            })
        };
    }

    window.RankTurboSeoSchema = {
        update: updateSchema,
        breadcrumb: buildBreadcrumb
    };
})();
