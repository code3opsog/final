module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/lib/supabase.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-route] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://nnufoxmwvxzzbgizylvn.supabase.co");
const supabaseKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5udWZveG13dnh6emJnaXp5bHZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzMDM4ODQsImV4cCI6MjA4NTg3OTg4NH0.md0PdjXwhMwgkOb6g9baxGkKn8Nn5XSnEKZOUm8AWM0");
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseKey);
}),
"[project]/src/lib/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSession",
    ()=>createSession,
    "exchangeCodeForToken",
    ()=>exchangeCodeForToken,
    "getCurrentUser",
    ()=>getCurrentUser,
    "getDiscordOAuthUrl",
    ()=>getDiscordOAuthUrl,
    "getDiscordUser",
    ()=>getDiscordUser,
    "isUserAuthorized",
    ()=>isUserAuthorized,
    "verifySession",
    ()=>verifySession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/jwt/sign.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/jwt/verify.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-route] (ecmascript)");
;
;
;
const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'fallback-secret');
async function createSession(userId, discordId, isAdmin, ip, userAgent) {
    const token = await new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SignJWT"]({
        userId,
        discordId,
        isAdmin
    }).setProtectedHeader({
        alg: 'HS256'
    }).setExpirationTime('7d').sign(JWT_SECRET);
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('sessions').insert({
        user_id: userId,
        token,
        ip,
        user_agent: userAgent,
        expires_at: expiresAt
    });
    return token;
}
async function verifySession(token) {
    try {
        const { payload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jwtVerify"])(token, JWT_SECRET);
        console.log('verifySession - JWT payload:', payload);
        // Simple query without join
        const { data: session, error: sessionError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('sessions').select('*').eq('token', token).single();
        if (sessionError) {
            console.error('verifySession - Session query error:', sessionError);
            return null;
        }
        if (!session || new Date(session.expires_at) < new Date()) {
            console.log('verifySession - Session expired or not found');
            return null;
        }
        // Get user separately
        const { data: user, error: userError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('users').select('*').eq('id', session.user_id).single();
        if (userError || !user) {
            console.error('verifySession - User query error:', userError);
            return null;
        }
        console.log('verifySession - Success, user:', user.username);
        return {
            userId: session.user_id,
            discordId: user.discord_id,
            isAdmin: user.is_admin
        };
    } catch (error) {
        console.error('verifySession - JWT or other error:', error);
        return null;
    }
}
async function getCurrentUser() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    const token = cookieStore.get('session')?.value;
    if (!token) return null;
    const payload = await verifySession(token);
    if (!payload) return null;
    const { data: user } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('users').select('*').eq('id', payload.userId).single();
    return user;
}
async function isUserAuthorized(userId) {
    const { data: user } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('users').select('*').eq('id', userId).single();
    if (!user) return false;
    if (user.is_admin) return true;
    if (!user.is_authorized) return false;
    if (user.auth_expiry && new Date(user.auth_expiry) < new Date()) return false;
    return true;
}
function getDiscordOAuthUrl() {
    const params = new URLSearchParams({
        client_id: process.env.DISCORD_CLIENT_ID,
        redirect_uri: process.env.DISCORD_REDIRECT_URI,
        response_type: 'code',
        scope: 'identify email'
    });
    return `https://discord.com/api/oauth2/authorize?${params.toString()}`;
}
async function exchangeCodeForToken(code) {
    const response = await fetch('https://discord.com/api/oauth2/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            client_id: process.env.DISCORD_CLIENT_ID,
            client_secret: process.env.DISCORD_CLIENT_SECRET,
            grant_type: 'authorization_code',
            code,
            redirect_uri: process.env.DISCORD_REDIRECT_URI
        })
    });
    return response.json();
}
async function getDiscordUser(accessToken) {
    const response = await fetch('https://discord.com/api/users/@me', {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
    return response.json();
}
}),
"[project]/src/lib/proxy-pool.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Proxy Pool - Manages multiple proxies with rotation
__turbopack_context__.s([
    "createProxyPool",
    ()=>createProxyPool,
    "getNextProxy",
    ()=>getNextProxy,
    "getProxyOrPool",
    ()=>getProxyOrPool,
    "parseProxyList",
    ()=>parseProxyList
]);
function parseProxyList(input) {
    if (!input || typeof input !== 'string') {
        return [];
    }
    const trimmed = input.trim();
    // Try JSON array first
    if (trimmed.startsWith('[')) {
        try {
            const parsed = JSON.parse(trimmed);
            if (Array.isArray(parsed)) {
                return parsed.filter((p)=>typeof p === 'string' && p.trim()).map((p)=>p.trim());
            }
        } catch  {
        // Not valid JSON, continue
        }
    }
    // Split by newlines or commas
    const proxies = trimmed.split(/[\n,]+/).map((p)=>p.trim()).filter((p)=>p.length > 0 && (p.startsWith('http://') || p.startsWith('https://') || p.includes('@')));
    return proxies;
}
function createProxyPool(proxies) {
    const stats = new Map();
    let currentIndex = 0;
    // Initialize stats for all proxies
    proxies.forEach((proxy)=>{
        stats.set(proxy, {
            failures: 0,
            successes: 0,
            lastUsed: 0
        });
    });
    // Get active proxies (not too many failures)
    const getActiveProxies = ()=>{
        return proxies.filter((p)=>{
            const s = stats.get(p);
            // Filter out proxies with 5+ consecutive failures
            return !s || s.failures < 5;
        });
    };
    return {
        /**
         * Get next proxy in rotation (round-robin)
         */ getNext () {
            const active = getActiveProxies();
            if (active.length === 0) return undefined;
            currentIndex = (currentIndex + 1) % active.length;
            const proxy = active[currentIndex];
            const s = stats.get(proxy);
            if (s) s.lastUsed = Date.now();
            return proxy;
        },
        /**
         * Get a random proxy (good for avoiding patterns)
         */ getRandom () {
            const active = getActiveProxies();
            if (active.length === 0) return undefined;
            const proxy = active[Math.floor(Math.random() * active.length)];
            const s = stats.get(proxy);
            if (s) s.lastUsed = Date.now();
            return proxy;
        },
        /**
         * Get all proxies
         */ getAll () {
            return [
                ...proxies
            ];
        },
        /**
         * Get number of active proxies
         */ size () {
            return getActiveProxies().length;
        },
        /**
         * Mark a proxy as failed
         */ markFailed (proxy) {
            const s = stats.get(proxy);
            if (s) {
                s.failures++;
                s.successes = 0; // Reset success count on failure
                console.log(`Proxy marked failed (${s.failures}x): ${proxy.replace(/:.*@/, ':***@')}`);
            }
        },
        /**
         * Mark a proxy as successful
         */ markSuccess (proxy) {
            const s = stats.get(proxy);
            if (s) {
                s.successes++;
                s.failures = 0; // Reset failure count on success
            }
        }
    };
}
function getProxyOrPool(httpProxy) {
    if (!httpProxy) return undefined;
    const proxies = parseProxyList(httpProxy);
    if (proxies.length === 0) {
        return undefined;
    } else if (proxies.length === 1) {
        return proxies[0];
    } else {
        return createProxyPool(proxies);
    }
}
function getNextProxy(proxyOrPool) {
    if (!proxyOrPool) return undefined;
    if (typeof proxyOrPool === 'string') {
        return proxyOrPool;
    }
    return proxyOrPool.getRandom(); // Use random for better distribution
}
}),
"[project]/src/lib/global-proxy.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getGlobalProxy",
    ()=>getGlobalProxy,
    "getGlobalProxyCount",
    ()=>getGlobalProxyCount,
    "getGlobalProxyList",
    ()=>getGlobalProxyList,
    "refreshGlobalProxies",
    ()=>refreshGlobalProxies,
    "saveGlobalProxies",
    ()=>saveGlobalProxies
]);
// Global Proxy Pool - managed via admin panel, stored in database
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proxy$2d$pool$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/proxy-pool.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-route] (ecmascript)");
;
;
let globalProxyPool = null;
let proxyList = [];
let lastFetch = 0;
const CACHE_TTL = 60000; // Refresh every 60 seconds
// Fetch proxies from database
async function fetchProxiesFromDB() {
    try {
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('app_settings').select('value').eq('key', 'proxy_list').single();
        if (data?.value) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proxy$2d$pool$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseProxyList"])(data.value);
        }
    } catch (error) {
        console.error('[Global Proxy] Error fetching from DB:', error);
    }
    return [];
}
// Initialize/refresh proxies
async function initGlobalProxies(force = false) {
    const now = Date.now();
    // Use cache if not expired
    if (!force && now - lastFetch < CACHE_TTL && proxyList.length > 0) {
        return;
    }
    proxyList = await fetchProxiesFromDB();
    lastFetch = now;
    if (proxyList.length > 1) {
        globalProxyPool = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proxy$2d$pool$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createProxyPool"])(proxyList);
        console.log(`[Global Proxy] Pool initialized with ${proxyList.length} proxies`);
    } else if (proxyList.length === 1) {
        globalProxyPool = null;
        console.log(`[Global Proxy] Using single proxy`);
    } else {
        globalProxyPool = null;
        console.log(`[Global Proxy] No proxies configured`);
    }
}
async function getGlobalProxy() {
    await initGlobalProxies();
    if (globalProxyPool) {
        return globalProxyPool.getNext();
    }
    return proxyList[0] || undefined;
}
async function getGlobalProxyCount() {
    await initGlobalProxies();
    return proxyList.length;
}
async function refreshGlobalProxies() {
    await initGlobalProxies(true);
}
async function saveGlobalProxies(proxies) {
    try {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('app_settings').upsert({
            key: 'proxy_list',
            value: proxies,
            updated_at: new Date().toISOString()
        }, {
            onConflict: 'key'
        });
        if (error) {
            console.error('[Global Proxy] Error saving:', error);
            return false;
        }
        // Refresh cache
        await refreshGlobalProxies();
        return true;
    } catch (error) {
        console.error('[Global Proxy] Error saving:', error);
        return false;
    }
}
async function getGlobalProxyList() {
    try {
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('app_settings').select('value').eq('key', 'proxy_list').single();
        return data?.value || '';
    } catch  {
        return '';
    }
}
}),
"[project]/src/app/api/admin/settings/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$global$2d$proxy$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/global-proxy.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proxy$2d$pool$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/proxy-pool.ts [app-route] (ecmascript)");
;
;
;
;
async function GET() {
    try {
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCurrentUser"])();
        if (!user || !user.is_admin) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Unauthorized'
            }, {
                status: 403
            });
        }
        const proxyList = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$global$2d$proxy$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getGlobalProxyList"])();
        const proxyCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proxy$2d$pool$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseProxyList"])(proxyList).length;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            proxies: proxyList,
            proxyCount
        });
    } catch (error) {
        console.error('Error getting settings:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to get settings'
        }, {
            status: 500
        });
    }
}
async function POST(request) {
    try {
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCurrentUser"])();
        if (!user || !user.is_admin) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Unauthorized'
            }, {
                status: 403
            });
        }
        const body = await request.json();
        if (body.proxies !== undefined) {
            const success = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$global$2d$proxy$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["saveGlobalProxies"])(body.proxies);
            if (!success) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Failed to save proxies'
                }, {
                    status: 500
                });
            }
        }
        const proxyList = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$global$2d$proxy$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getGlobalProxyList"])();
        const proxyCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$proxy$2d$pool$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseProxyList"])(proxyList).length;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            proxies: proxyList,
            proxyCount
        });
    } catch (error) {
        console.error('Error updating settings:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to update settings'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c630d93e._.js.map