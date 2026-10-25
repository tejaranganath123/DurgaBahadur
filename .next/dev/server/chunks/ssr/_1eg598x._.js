module.exports = [
"[project]/app/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata,
    "siteUrl",
    ()=>siteUrl,
    "viewport",
    ()=>viewport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$analytics$2f$dist$2f$next$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vercel/analytics/dist/next/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$academies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/academies.ts [app-rsc] (ecmascript)");
;
;
;
;
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000';
const description = 'Durga Bahadur — music director, composer and music teacher. Listen to Durga Bahadur film scores, compositions and live performances, and learn guitar, piano, production and voice at Artshala Music Academy in Dilsukhnagar and Attapur, Hyderabad — offline and online classes.';
const metadata = {
    metadataBase: new URL(siteUrl),
    title: 'Durga Bahadur — Music Director & Artshala Music Academy, Hyderabad',
    description,
    keywords: [
        'Durga Bahadur',
        'Durga Bahadur music',
        'Durga Bahadur musical',
        'Durga musical',
        'Durga music',
        'Durga Bahadur composer',
        'Durga Bahadur music director',
        'music director',
        'film music director',
        'composer',
        'Artshala Academy',
        'Artshala music academy',
        'music academy',
        'best music academy',
        'music school',
        'music classes',
        'guitar classes',
        'piano classes',
        'vocal classes',
        'music production course',
        'music academy in Hyderabad',
        'best music academy in Hyderabad',
        'music academy in Dilsukhnagar',
        'music classes in Dilsukhnagar',
        'music academy in Attapur',
        'music classes in Attapur',
        'online music classes'
    ],
    alternates: {
        canonical: '/'
    },
    verification: {
        google: 'NhOTuQCjhzckz5ipc9yv9HgACa6vc5M_jOnWf33qUB0'
    },
    openGraph: {
        title: 'Durga Bahadur — Music Director & Composer',
        description,
        url: '/',
        siteName: 'Durga Bahadur',
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Durga Bahadur — Music Director & Composer',
        description
    },
    icons: {
        icon: [
            {
                url: '/icon-light-32x32.png',
                media: '(prefers-color-scheme: light)'
            },
            {
                url: '/icon-dark-32x32.png',
                media: '(prefers-color-scheme: dark)'
            },
            {
                url: '/icon.svg',
                type: 'image/svg+xml'
            }
        ],
        apple: '/apple-icon.png'
    }
};
const viewport = {
    colorScheme: 'light dark',
    themeColor: [
        {
            media: '(prefers-color-scheme: light)',
            color: 'white'
        },
        {
            media: '(prefers-color-scheme: dark)',
            color: 'black'
        }
    ]
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            className: "antialiased",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                    type: "application/ld+json",
                    dangerouslySetInnerHTML: {
                        __html: JSON.stringify([
                            {
                                '@context': 'https://schema.org',
                                '@type': 'Person',
                                name: 'Durga Bahadur',
                                alternateName: [
                                    'Durga Musical',
                                    'Durga Bahadur Musical'
                                ],
                                jobTitle: [
                                    'Music Director',
                                    'Composer',
                                    'Music Teacher'
                                ],
                                url: siteUrl
                            },
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$academies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["academies"].map((a)=>({
                                    '@context': 'https://schema.org',
                                    '@type': 'MusicSchool',
                                    name: `Artshala Music Academy — ${a.area}`,
                                    founder: {
                                        '@type': 'Person',
                                        name: 'Durga Bahadur'
                                    },
                                    description: `Music academy in ${a.area}, Hyderabad by music director Durga Bahadur. Offline and online guitar, piano, music production and voice classes.`,
                                    url: `${siteUrl}/#academy`,
                                    hasMap: a.map,
                                    telephone: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$academies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["academyPhone"],
                                    address: {
                                        '@type': 'PostalAddress',
                                        streetAddress: a.street,
                                        addressLocality: 'Hyderabad',
                                        addressRegion: 'Telangana',
                                        postalCode: a.pin,
                                        addressCountry: 'IN'
                                    }
                                }))
                        ])
                    }
                }, void 0, false, {
                    fileName: "[project]/app/layout.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this),
                children,
                ("TURBOPACK compile-time value", "development") === 'production' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$analytics$2f$dist$2f$next$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Analytics"], {}, void 0, false, {
                    fileName: "[project]/app/layout.tsx",
                    lineNumber: 91,
                    columnNumber: 51
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/layout.tsx",
            lineNumber: 63,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/layout.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/lib/academies.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "academies",
    ()=>academies,
    "academyPhone",
    ()=>academyPhone
]);
const academyPhone = '+91 98660 50318';
const academies = [
    {
        area: 'Dilsukhnagar',
        street: 'Tirumala Hills, near Eurokids, Kalyan Nagar, Revenue Board Colony, Dilsukhnagar',
        pin: '500036',
        map: 'https://share.google/Uug9Ak1bXx87Zu77v'
    },
    {
        area: 'Attapur',
        street: 'Flat no 202, Samishti Enclave, near Edify International School, Krishna Nagar, Attapur, Upperpally',
        pin: '500048',
        map: 'https://share.google/EqZfSAcjhXOQOiIV9'
    }
];
}),
"[project]/node_modules/@vercel/analytics/dist/next/index.mjs [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Analytics",
    ()=>Analytics
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Analytics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Analytics() from the server but Analytics is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@vercel/analytics/dist/next/index.mjs", "Analytics");
}),
"[project]/node_modules/@vercel/analytics/dist/next/index.mjs [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Analytics",
    ()=>Analytics
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Analytics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Analytics() from the server but Analytics is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/@vercel/analytics/dist/next/index.mjs <module evaluation>", "Analytics");
}),
"[project]/node_modules/@vercel/analytics/dist/next/index.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$analytics$2f$dist$2f$next$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@vercel/analytics/dist/next/index.mjs [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$analytics$2f$dist$2f$next$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/node_modules/@vercel/analytics/dist/next/index.mjs [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$analytics$2f$dist$2f$next$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=_1eg598x._.js.map