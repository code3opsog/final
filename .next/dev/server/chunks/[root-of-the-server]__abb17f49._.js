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
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[project]/src/lib/rate-limiter.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Advanced Rate Limiter Utility
// Implements: Throttling, Exponential Backoff, Jitter, Batch Processing
/**
 * Sleep for a given number of milliseconds
 */ __turbopack_context__.s([
    "addJitter",
    ()=>addJitter,
    "createThrottledQueue",
    ()=>createThrottledQueue,
    "exponentialBackoff",
    ()=>exponentialBackoff,
    "processBatch",
    ()=>processBatch,
    "processSequentially",
    ()=>processSequentially,
    "sleep",
    ()=>sleep,
    "withRetry",
    ()=>withRetry
]);
function sleep(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms));
}
function addJitter(baseDelay, jitterPercent = 0.3) {
    const jitter = baseDelay * jitterPercent * (Math.random() * 2 - 1);
    return Math.max(0, baseDelay + jitter);
}
function exponentialBackoff(attempt, baseDelay = 1000, maxDelay = 30000) {
    const delay = Math.min(baseDelay * Math.pow(2, attempt), maxDelay);
    return addJitter(delay);
}
async function withRetry(fn, options = {}) {
    const { maxRetries = 3, baseDelay = 1000, maxDelay = 30000, onRetry } = options;
    let lastError = null;
    for(let attempt = 0; attempt <= maxRetries; attempt++){
        try {
            return await fn();
        } catch (error) {
            lastError = error;
            // Check if it's a rate limit error (429)
            const isRateLimit = error instanceof Error && (error.message.includes('429') || error.message.includes('rate limit'));
            if (attempt < maxRetries) {
                const delay = isRateLimit ? exponentialBackoff(attempt, baseDelay * 2, maxDelay) // Longer delay for rate limits
                 : exponentialBackoff(attempt, baseDelay, maxDelay);
                if (onRetry) {
                    onRetry(attempt + 1, lastError, delay);
                }
                console.log(`Retry ${attempt + 1}/${maxRetries} after ${delay}ms...`);
                await sleep(delay);
            }
        }
    }
    throw lastError;
}
function createThrottledQueue(options = {}) {
    const { minDelay = 100, maxDelay = 5000, requestsPerSecond = 5 } = options;
    const delayPerRequest = 1000 / requestsPerSecond;
    let lastRequestTime = 0;
    let consecutiveErrors = 0;
    let currentDelay = Math.max(minDelay, delayPerRequest);
    return {
        /**
         * Execute a request with throttling
         */ async execute (fn) {
            // Calculate time since last request
            const now = Date.now();
            const timeSinceLastRequest = now - lastRequestTime;
            // Wait if needed
            if (timeSinceLastRequest < currentDelay) {
                await sleep(currentDelay - timeSinceLastRequest + addJitter(50));
            }
            lastRequestTime = Date.now();
            try {
                const result = await fn();
                // Success - gradually reduce delay
                consecutiveErrors = 0;
                currentDelay = Math.max(minDelay, currentDelay * 0.9);
                return result;
            } catch (error) {
                consecutiveErrors++;
                // Increase delay on errors
                currentDelay = Math.min(maxDelay, currentDelay * 2);
                throw error;
            }
        },
        /**
         * Get current delay for monitoring
         */ getCurrentDelay () {
            return currentDelay;
        },
        /**
         * Reset the queue state
         */ reset () {
            consecutiveErrors = 0;
            currentDelay = Math.max(minDelay, delayPerRequest);
            lastRequestTime = 0;
        }
    };
}
async function processBatch(options) {
    const { items, batchSize = 10, delayBetweenBatches = 2000, onProgress, processor } = options;
    const results = [];
    const total = items.length;
    let completed = 0;
    // Split into batches
    for(let i = 0; i < items.length; i += batchSize){
        const batch = items.slice(i, i + batchSize);
        // Process batch concurrently
        const batchResults = await Promise.all(batch.map(async (item)=>{
            try {
                const result = await processor(item);
                completed++;
                if (onProgress) {
                    onProgress(completed, total);
                }
                return result;
            } catch (error) {
                completed++;
                console.error('Batch item failed:', error);
                return null;
            }
        }));
        results.push(...batchResults);
        // Delay between batches (except for the last one)
        if (i + batchSize < items.length) {
            console.log(`Batch ${Math.floor(i / batchSize) + 1} complete. Waiting ${delayBetweenBatches}ms...`);
            await sleep(addJitter(delayBetweenBatches));
        }
    }
    return results;
}
async function processSequentially(items, processor, delayBetweenItems = 200, onProgress) {
    const results = [];
    const total = items.length;
    for(let i = 0; i < items.length; i++){
        try {
            const result = await processor(items[i]);
            results.push(result);
        } catch (error) {
            console.error(`Item ${i} failed:`, error);
            results.push(null);
        }
        if (onProgress) {
            onProgress(i + 1, total);
        }
        // Delay between items (except for the last one)
        if (i < items.length - 1) {
            await sleep(addJitter(delayBetweenItems));
        }
    }
    return results;
}
}),
"[project]/src/lib/fingerprint.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateBrowserTrackerId",
    ()=>generateBrowserTrackerId,
    "generateRandomHeaders",
    ()=>generateRandomHeaders,
    "generateRequestId",
    ()=>generateRequestId,
    "generateRobloxHeaders",
    ()=>generateRobloxHeaders,
    "getHumanLikeDelay",
    ()=>getHumanLikeDelay,
    "getRandomizedTimestamp",
    ()=>getRandomizedTimestamp
]);
// Request Fingerprint Spoofing
// Makes each request look like it's from a different person/device
// Realistic User-Agent strings from different devices/browsers
const USER_AGENTS = [
    // Chrome Windows
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
    // Firefox Windows
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:121.0) Gecko/20100101 Firefox/121.0',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:120.0) Gecko/20100101 Firefox/120.0',
    // Chrome Mac
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
    // Safari Mac
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1 Safari/605.1.15',
    // Edge Windows
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0',
    // Chrome Linux
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    // Mobile Chrome Android
    'Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.144 Mobile Safari/537.36',
    'Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.144 Mobile Safari/537.36',
    // Mobile Safari iPhone
    'Mozilla/5.0 (iPhone; CPU iPhone OS 17_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Mobile/15E148 Safari/604.1',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 17_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1 Mobile/15E148 Safari/604.1',
    // iPad
    'Mozilla/5.0 (iPad; CPU OS 17_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Mobile/15E148 Safari/604.1'
];
// Accept-Language headers from different countries
const ACCEPT_LANGUAGES = [
    'en-US,en;q=0.9',
    'en-GB,en;q=0.9',
    'en-US,en;q=0.9,es;q=0.8',
    'en-US,en;q=0.9,fr;q=0.8',
    'tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7',
    'de-DE,de;q=0.9,en-US;q=0.8,en;q=0.7',
    'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
    'es-ES,es;q=0.9,en-US;q=0.8,en;q=0.7',
    'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
    'ja-JP,ja;q=0.9,en-US;q=0.8,en;q=0.7',
    'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
    'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
    'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
    'pl-PL,pl;q=0.9,en-US;q=0.8,en;q=0.7',
    'nl-NL,nl;q=0.9,en-US;q=0.8,en;q=0.7',
    'it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7'
];
// Accept header variations
const ACCEPT_HEADERS = [
    'application/json, text/plain, */*',
    'application/json',
    '*/*',
    'application/json, text/javascript, */*; q=0.01'
];
// Sec-Fetch headers (modern browsers)
const SEC_FETCH_MODES = [
    'cors',
    'no-cors',
    'navigate'
];
const SEC_FETCH_SITES = [
    'cross-site',
    'same-origin',
    'same-site',
    'none'
];
const SEC_FETCH_DESTS = [
    'document',
    'empty',
    'script'
];
// Cache-Control variations
const CACHE_CONTROLS = [
    'no-cache',
    'max-age=0',
    'no-store',
    undefined
];
// Connection header variations
const CONNECTIONS = [
    'keep-alive',
    undefined
];
// Referer URLs (Roblox-related)
const REFERERS = [
    'https://www.roblox.com/',
    'https://www.roblox.com/users/profile',
    'https://www.roblox.com/games',
    'https://www.roblox.com/discover',
    'https://www.roblox.com/home',
    undefined
];
/**
 * Get a random element from an array
 */ function randomFrom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
function generateRandomHeaders() {
    const headers = {};
    // Core headers - always include
    headers['User-Agent'] = randomFrom(USER_AGENTS);
    headers['Accept-Language'] = randomFrom(ACCEPT_LANGUAGES);
    headers['Accept'] = randomFrom(ACCEPT_HEADERS);
    // Optional headers - include randomly
    const cacheControl = randomFrom(CACHE_CONTROLS);
    if (cacheControl) {
        headers['Cache-Control'] = cacheControl;
    }
    const connection = randomFrom(CONNECTIONS);
    if (connection) {
        headers['Connection'] = connection;
    }
    const referer = randomFrom(REFERERS);
    if (referer) {
        headers['Referer'] = referer;
    }
    // Sec-Fetch headers (50% chance to include - not all browsers send these)
    if (Math.random() > 0.5) {
        headers['Sec-Fetch-Mode'] = randomFrom(SEC_FETCH_MODES);
        headers['Sec-Fetch-Site'] = randomFrom(SEC_FETCH_SITES);
        headers['Sec-Fetch-Dest'] = randomFrom(SEC_FETCH_DESTS);
    }
    // DNT (Do Not Track) - random
    if (Math.random() > 0.7) {
        headers['DNT'] = '1';
    }
    // Upgrade-Insecure-Requests - random (usually for navigation)
    if (Math.random() > 0.8) {
        headers['Upgrade-Insecure-Requests'] = '1';
    }
    return headers;
}
function getHumanLikeDelay(baseDelay = 500) {
    // Add random jitter: 70-130% of base delay
    const jitterMultiplier = 0.7 + Math.random() * 0.6;
    const delay = Math.round(baseDelay * jitterMultiplier);
    // Occasionally add longer pause (like a human reading)
    if (Math.random() > 0.9) {
        return delay + Math.round(Math.random() * 2000); // Extra 0-2 seconds
    }
    return delay;
}
function generateRequestId() {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for(let i = 0; i < 32; i++){
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
}
function getRandomizedTimestamp() {
    return Date.now() + Math.floor(Math.random() * 1000) - 500;
}
function generateBrowserTrackerId() {
    // Generate a large random number (10-12 digits like real Roblox tracker IDs)
    const min = 10000000000; // 10 billion
    const max = 99999999999; // ~100 billion
    return String(Math.floor(Math.random() * (max - min) + min));
}
function generateRobloxHeaders() {
    const browserTrackerId = generateBrowserTrackerId();
    const acceptLanguage = randomFrom(ACCEPT_LANGUAGES);
    return {
        'Accept': 'application/json, text/plain, */*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': acceptLanguage,
        'Origin': 'https://www.roblox.com',
        'Referer': 'https://www.roblox.com/',
        'Priority': 'u=1, i',
        'Sec-Ch-Ua': '"Chromium";v="143", "Not A(Brand";v="24"',
        'Sec-Ch-Ua-Mobile': '?0',
        'Sec-Ch-Ua-Platform': '"Windows"',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36',
        'x-browser-tracker-id': browserTrackerId
    };
}
}),
"[project]/src/lib/roblox.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "acceptFriendRequest",
    ()=>acceptFriendRequest,
    "blockUser",
    ()=>blockUser,
    "declineAllFriendRequests",
    ()=>declineAllFriendRequests,
    "declineFriendRequest",
    ()=>declineFriendRequest,
    "getAccountAgeInDays",
    ()=>getAccountAgeInDays,
    "getAuthenticatedUser",
    ()=>getAuthenticatedUser,
    "getAvatarUrl",
    ()=>getAvatarUrl,
    "getCSRFToken",
    ()=>getCSRFToken,
    "getFollowers",
    ()=>getFollowers,
    "getFriendRequests",
    ()=>getFriendRequests,
    "getFriends",
    ()=>getFriends,
    "getUserInfo",
    ()=>getUserInfo,
    "sendFriendRequest",
    ()=>sendFriendRequest,
    "unfriendUser",
    ()=>unfriendUser
]);
// Roblox API client for friend request operations
// With fingerprint spoofing for undetected requests and HBA token generation
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$https$2d$proxy$2d$agent$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/https-proxy-agent/dist/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$roblox$2d$bat$2f$esm$2f$mod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/roblox-bat/esm/mod.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$roblox$2d$bat$2f$esm$2f$src$2f$hbaClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/roblox-bat/esm/src/hbaClient.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rate$2d$limiter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/rate-limiter.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fingerprint$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/fingerprint.ts [app-route] (ecmascript)");
;
;
;
;
// Helper to create fetch options with optional HTTP proxy and fingerprint spoofing
function getFetchOptions(customHeaders, httpProxy, spoof = false) {
    // Start with random fingerprint headers if spoofing is enabled
    const headers = spoof ? {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fingerprint$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateRandomHeaders"])()
    } : {};
    // Add custom headers (these override fingerprint headers if needed)
    Object.assign(headers, customHeaders);
    const options = {
        headers
    };
    if (httpProxy) {
        // @ts-ignore - agent is valid for node-fetch
        options.agent = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$https$2d$proxy$2d$agent$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpsProxyAgent"](httpProxy);
    }
    return options;
}
// Use direct Roblox API instead of roproxy when using HTTP proxy
// This is more "undetected" because roproxy itself might be flagged
function getApiUrl(service, path, useDirectApi = false) {
    if (useDirectApi) {
        // Direct Roblox API
        return `https://${service}.roblox.com${path}`;
    }
    // roproxy (fallback for when no HTTP proxy is provided)
    return `https://${service}.roproxy.com${path}`;
}
// Delay between paginated requests
const PAGE_DELAY_MS = 500;
async function getFriendRequests(cookie, httpProxy) {
    const allRequests = [];
    let cursor = null;
    let pageCount = 0;
    const maxPages = 10; // Safety limit: 10 pages * 100 = 1000 max requests
    const useDirectApi = !!httpProxy; // Use direct API if proxy is available
    do {
        const url = cursor ? `${getApiUrl('friends', '/v1/my/friends/requests', useDirectApi)}?limit=100&sortOrder=Desc&cursor=${cursor}` : `${getApiUrl('friends', '/v1/my/friends/requests', useDirectApi)}?limit=100&sortOrder=Desc`;
        console.log(`Fetching friend requests page ${pageCount + 1}... (${useDirectApi ? 'DIRECT API' : 'roproxy'})`);
        const options = getFetchOptions({
            'Cookie': `.ROBLOSECURITY=${cookie}`
        }, httpProxy, true); // Enable spoofing
        // Use retry logic for each page
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rate$2d$limiter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withRetry"])(async ()=>{
            const response = await fetch(url, options);
            if (response.status === 429) {
                throw new Error('Rate limited (429)');
            }
            if (!response.ok) {
                throw new Error(`Failed to fetch friend requests: ${response.status}`);
            }
            return response.json();
        }, {
            maxRetries: 3,
            baseDelay: 2000,
            onRetry: (attempt, error, delay)=>{
                console.log(`Page ${pageCount + 1} retry ${attempt}: ${error.message}, waiting ${delay}ms`);
            }
        });
        const requests = data.data || [];
        allRequests.push(...requests);
        cursor = data.nextPageCursor || null;
        pageCount++;
        console.log(`Page ${pageCount}: Got ${requests.length} requests, total: ${allRequests.length}`);
        // Add human-like delay between pages
        if (cursor) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rate$2d$limiter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sleep"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fingerprint$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getHumanLikeDelay"])(PAGE_DELAY_MS));
        }
    }while (cursor && pageCount < maxPages)
    console.log(`Fetched ${allRequests.length} total friend requests`);
    return allRequests;
}
// Delay between getUserInfo calls - minimal with fingerprint spoofing
const USER_INFO_DELAY_MS = 100;
let lastUserInfoCall = 0;
async function getUserInfo(userId, httpProxy) {
    // Throttle getUserInfo calls with human-like timing
    const now = Date.now();
    const timeSinceLastCall = now - lastUserInfoCall;
    const requiredDelay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fingerprint$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getHumanLikeDelay"])(USER_INFO_DELAY_MS);
    if (timeSinceLastCall < requiredDelay) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rate$2d$limiter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sleep"])(requiredDelay - timeSinceLastCall);
    }
    lastUserInfoCall = Date.now();
    const useDirectApi = !!httpProxy;
    try {
        const options = getFetchOptions({}, httpProxy, true); // Enable spoofing
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rate$2d$limiter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withRetry"])(async ()=>{
            const response = await fetch(getApiUrl('users', `/v1/users/${userId}`, useDirectApi), options);
            if (response.status === 429) {
                throw new Error('Rate limited (429)');
            }
            if (!response.ok) {
                console.log('getUserInfo failed for userId:', userId, 'status:', response.status);
                return null;
            }
            return response.json();
        }, {
            maxRetries: 2,
            baseDelay: 1000,
            onRetry: (attempt, error, delay)=>{
                console.log(`getUserInfo(${userId}) retry ${attempt}: ${error.message}, waiting ${delay}ms`);
            }
        });
        return result;
    } catch (error) {
        console.error('Error fetching user info:', error);
        return null;
    }
}
async function getCSRFToken(cookie, httpProxy) {
    const useDirectApi = !!httpProxy;
    try {
        const options = getFetchOptions({
            'Cookie': `.ROBLOSECURITY=${cookie}`
        }, httpProxy, true); // Enable spoofing
        const response = await fetch(getApiUrl('auth', '/v2/logout', useDirectApi), {
            ...options,
            method: 'POST'
        });
        return response.headers.get('x-csrf-token');
    } catch (error) {
        console.error('Error getting CSRF token:', error);
        return null;
    }
}
async function acceptFriendRequest(userId, cookie, csrfToken, httpProxy) {
    const useDirectApi = !!httpProxy;
    const url = getApiUrl('friends', `/v1/users/${userId}/accept-friend-request`, useDirectApi);
    console.log(`Accepting friend request for user ${userId}... (${useDirectApi ? 'DIRECT' : 'roproxy'})`);
    const options = getFetchOptions({
        'Cookie': `.ROBLOSECURITY=${cookie}`,
        'X-CSRF-TOKEN': csrfToken,
        'Content-Type': 'application/json'
    }, httpProxy, true); // Enable spoofing
    try {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rate$2d$limiter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withRetry"])(async ()=>{
            const response = await fetch(url, {
                ...options,
                method: 'POST'
            });
            if (response.status === 429) {
                throw new Error('Rate limited (429)');
            }
            if (!response.ok) {
                const errorText = await response.text();
                console.error(`Accept failed for ${userId}: ${response.status} - ${errorText}`);
                return {
                    success: false,
                    error: `HTTP ${response.status}: ${errorText}`
                };
            }
            console.log(`Successfully accepted friend request from ${userId}`);
            return {
                success: true
            };
        }, {
            maxRetries: 3,
            baseDelay: 1500,
            onRetry: (attempt, error, delay)=>{
                console.log(`Accept(${userId}) retry ${attempt}: ${error.message}, waiting ${delay}ms`);
            }
        });
        return result;
    } catch (error) {
        console.error('Error accepting friend request:', error);
        return {
            success: false,
            error: String(error)
        };
    }
}
async function declineFriendRequest(userId, cookie, csrfToken, httpProxy) {
    const useDirectApi = !!httpProxy;
    const url = getApiUrl('friends', `/v1/users/${userId}/decline-friend-request`, useDirectApi);
    console.log(`Declining friend request for user ${userId}... (${useDirectApi ? 'DIRECT' : 'roproxy'})`);
    const options = getFetchOptions({
        'Cookie': `.ROBLOSECURITY=${cookie}`,
        'X-CSRF-TOKEN': csrfToken,
        'Content-Type': 'application/json'
    }, httpProxy, true); // Enable spoofing
    try {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rate$2d$limiter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withRetry"])(async ()=>{
            const response = await fetch(url, {
                ...options,
                method: 'POST'
            });
            if (response.status === 429) {
                throw new Error('Rate limited (429)');
            }
            if (!response.ok) {
                const errorText = await response.text();
                console.error(`Decline failed for ${userId}: ${response.status} - ${errorText}`);
                return {
                    success: false,
                    error: `HTTP ${response.status}: ${errorText}`
                };
            }
            console.log(`Successfully declined friend request from ${userId}`);
            return {
                success: true
            };
        }, {
            maxRetries: 3,
            baseDelay: 1500,
            onRetry: (attempt, error, delay)=>{
                console.log(`Decline(${userId}) retry ${attempt}: ${error.message}, waiting ${delay}ms`);
            }
        });
        return result;
    } catch (error) {
        console.error('Error declining friend request:', error);
        return {
            success: false,
            error: String(error)
        };
    }
}
async function declineAllFriendRequests(cookie, csrfToken, httpProxy) {
    const useDirectApi = !!httpProxy;
    const url = getApiUrl('friends', '/v1/user/friend-requests/decline-all', useDirectApi);
    console.log(`Declining ALL friend requests... (${useDirectApi ? 'DIRECT' : 'roproxy'})`);
    const options = getFetchOptions({
        'Cookie': `.ROBLOSECURITY=${cookie}`,
        'X-CSRF-TOKEN': csrfToken,
        'Content-Type': 'application/json'
    }, httpProxy, true);
    try {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rate$2d$limiter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withRetry"])(async ()=>{
            const response = await fetch(url, {
                ...options,
                method: 'POST'
            });
            if (response.status === 429) {
                throw new Error('Rate limited (429)');
            }
            if (!response.ok) {
                const errorText = await response.text();
                console.error(`Decline-all failed: ${response.status} - ${errorText}`);
                return {
                    success: false,
                    error: `HTTP ${response.status}: ${errorText}`
                };
            }
            console.log('Successfully declined ALL friend requests');
            return {
                success: true
            };
        }, {
            maxRetries: 3,
            baseDelay: 2000,
            onRetry: (attempt, error, delay)=>{
                console.log(`Decline-all retry ${attempt}: ${error.message}, waiting ${delay}ms`);
            }
        });
        return result;
    } catch (error) {
        console.error('Error declining all friend requests:', error);
        return {
            success: false,
            error: String(error)
        };
    }
}
async function blockUser(userId, cookie, csrfToken, httpProxy) {
    // Use direct Roblox API when proxy is available, otherwise fall back to roproxy
    const useDirectApi = !!httpProxy;
    const baseHost = useDirectApi ? 'apis.roblox.com' : 'apis.roproxy.com';
    const url = `https://${baseHost}/user-blocking-api/v1/users/${userId}/block-user`;
    console.log(`Blocking user ${userId}... (${useDirectApi ? 'DIRECT API via proxy' : 'roproxy'})`);
    // Generate Roblox-specific headers
    const robloxHeaders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fingerprint$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateRobloxHeaders"])();
    const acceptLanguage = robloxHeaders['Accept-Language'];
    const userAgent = robloxHeaders['User-Agent'];
    try {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rate$2d$limiter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withRetry"])(async ()=>{
            // Step 1: Generate HBA token using roblox-bat library
            // This creates proper ECDSA P-256 signed tokens
            let hbaHeaders = {};
            try {
                // Generate a fresh key pair for this session
                const keys = await crypto.subtle.generateKey({
                    name: 'ECDSA',
                    namedCurve: 'P-256'
                }, false, [
                    'sign'
                ]);
                const hbaClient = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$roblox$2d$bat$2f$esm$2f$src$2f$hbaClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HBAClient"]({
                    keys,
                    cookie: `.ROBLOSECURITY=${cookie}`
                });
                // Generate the x-bound-auth-token for this request
                // The blocking API uses POST with empty body
                hbaHeaders = await hbaClient.generateBaseHeaders(`https://apis.roblox.com/user-blocking-api/v1/users/${userId}/block-user`, 'POST', true, '' // empty body
                );
                console.log(`HBA token generated for user ${userId}`);
            } catch (hbaError) {
                console.warn(`HBA token generation failed: ${hbaError}, continuing without it`);
            }
            // Step 2: Send POST request with all headers
            // Generate a browser tracker ID for the request
            const browserTrackerId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fingerprint$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateBrowserTrackerId"])();
            // Build full cookie string with tracking cookies
            // The browserid in RBXEventTrackerV2 must match x-browser-tracker-id
            const now = new Date();
            const createDate = `${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getDate().toString().padStart(2, '0')}/${now.getFullYear()} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
            const sessionId = crypto.randomUUID();
            const rbxId = Math.floor(Math.random() * 9000000000) + 1000000000; // Random 10-digit number
            const fullCookie = [
                `RBXSessionTracker=sessionid=${sessionId}`,
                `RBXEventTrackerV2=CreateDate=${encodeURIComponent(createDate)}&rbxid=${rbxId}&browserid=${browserTrackerId}`,
                `.ROBLOSECURITY=${cookie}`
            ].join('; ');
            const postOptions = getFetchOptions({
                'Content-Length': '0',
                'Sec-Ch-Ua-Platform': '"Windows"',
                'X-CSRF-TOKEN': csrfToken,
                'Accept-Language': acceptLanguage,
                'Sec-Ch-Ua': '"Chromium";v="143", "Not A(Brand";v="24"',
                'Sec-Ch-Ua-Mobile': '?0',
                'x-browser-tracker-id': browserTrackerId,
                ...hbaHeaders,
                'Accept': 'application/json, text/plain, */*',
                'User-Agent': userAgent,
                'Origin': 'https://www.roblox.com',
                'Sec-Fetch-Site': 'same-site',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Dest': 'empty',
                'Referer': 'https://www.roblox.com/',
                'Accept-Encoding': 'gzip, deflate, br',
                'Priority': 'u=1, i',
                'Cookie': fullCookie
            }, httpProxy, false);
            const response = await fetch(url, {
                ...postOptions,
                method: 'POST',
                body: ''
            });
            console.log(`Block response for ${userId}: status=${response.status} (proxy: ${httpProxy ? 'yes' : 'no'})`);
            if (response.status === 429) {
                throw new Error('Rate limited (429)');
            }
            let responseBody = null;
            try {
                responseBody = await response.text();
            } catch  {
                responseBody = null;
            }
            if (!response.ok) {
                console.error(`Block failed for ${userId}: HTTP ${response.status}`);
                console.error(`Response body: ${responseBody || '(empty)'}`);
                if (responseBody) {
                    try {
                        const errorData = JSON.parse(responseBody);
                        if (errorData.errors?.[0]?.message) {
                            return {
                                success: false,
                                error: errorData.errors[0].message
                            };
                        }
                    } catch  {
                    // Not JSON
                    }
                }
                return {
                    success: false,
                    error: `HTTP ${response.status}: ${responseBody || 'Unknown error'}`
                };
            }
            console.log(`Successfully blocked user ${userId}`);
            return {
                success: true
            };
        }, {
            maxRetries: 2,
            baseDelay: 3000,
            onRetry: (attempt, error, delay)=>{
                console.log(`Block(${userId}) retry ${attempt}: ${error.message}, waiting ${delay}ms`);
            }
        });
        return result;
    } catch (error) {
        console.error('Error blocking user:', error);
        return {
            success: false,
            error: String(error)
        };
    }
}
async function unfriendUser(userId, cookie, csrfToken, httpProxy) {
    const useDirectApi = !!httpProxy;
    const url = getApiUrl('friends', `/v1/users/${userId}/unfriend`, useDirectApi);
    console.log(`Unfriending user ${userId}... (${useDirectApi ? 'DIRECT' : 'roproxy'})`);
    const options = getFetchOptions({
        'Cookie': `.ROBLOSECURITY=${cookie}`,
        'X-CSRF-TOKEN': csrfToken,
        'Content-Type': 'application/json'
    }, httpProxy, true);
    try {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rate$2d$limiter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withRetry"])(async ()=>{
            const response = await fetch(url, {
                ...options,
                method: 'POST'
            });
            if (response.status === 429) {
                throw new Error('Rate limited (429)');
            }
            if (!response.ok) {
                const errorText = await response.text();
                console.error(`Unfriend failed for ${userId}: ${response.status} - ${errorText}`);
                return {
                    success: false,
                    error: `HTTP ${response.status}: ${errorText}`
                };
            }
            console.log(`Successfully unfriended user ${userId}`);
            return {
                success: true
            };
        }, {
            maxRetries: 3,
            baseDelay: 1500,
            onRetry: (attempt, error, delay)=>{
                console.log(`Unfriend(${userId}) retry ${attempt}: ${error.message}, waiting ${delay}ms`);
            }
        });
        return result;
    } catch (error) {
        console.error('Error unfriending user:', error);
        return {
            success: false,
            error: String(error)
        };
    }
}
async function getFriends(cookie, httpProxy) {
    const allFriends = [];
    let cursor = null;
    let pageCount = 0;
    const maxPages = 20; // Safety limit: 20 pages * 100 = 2000 max friends
    const useDirectApi = !!httpProxy;
    do {
        const url = cursor ? `${getApiUrl('friends', '/v1/my/friends', useDirectApi)}?limit=100&cursor=${cursor}` : `${getApiUrl('friends', '/v1/my/friends', useDirectApi)}?limit=100`;
        console.log(`Fetching friends page ${pageCount + 1}... (${useDirectApi ? 'DIRECT API' : 'roproxy'})`);
        const options = getFetchOptions({
            'Cookie': `.ROBLOSECURITY=${cookie}`
        }, httpProxy, true);
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rate$2d$limiter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withRetry"])(async ()=>{
            const response = await fetch(url, options);
            if (response.status === 429) {
                throw new Error('Rate limited (429)');
            }
            if (!response.ok) {
                throw new Error(`Failed to fetch friends: ${response.status}`);
            }
            return response.json();
        }, {
            maxRetries: 3,
            baseDelay: 2000,
            onRetry: (attempt, error, delay)=>{
                console.log(`Friends page ${pageCount + 1} retry ${attempt}: ${error.message}, waiting ${delay}ms`);
            }
        });
        const friends = data.data || [];
        allFriends.push(...friends);
        cursor = data.nextPageCursor || null;
        pageCount++;
        console.log(`Page ${pageCount}: Got ${friends.length} friends, total: ${allFriends.length}`);
        if (cursor) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rate$2d$limiter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sleep"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fingerprint$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getHumanLikeDelay"])(PAGE_DELAY_MS));
        }
    }while (cursor && pageCount < maxPages)
    console.log(`Fetched ${allFriends.length} total friends`);
    return allFriends;
}
function getAccountAgeInDays(created) {
    const createdDate = new Date(created);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - createdDate.getTime());
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}
async function getAuthenticatedUser(cookie, httpProxy) {
    const useDirectApi = !!httpProxy;
    try {
        const options = getFetchOptions({
            'Cookie': `.ROBLOSECURITY=${cookie}`
        }, httpProxy, true); // Enable spoofing
        const response = await fetch(getApiUrl('users', '/v1/users/authenticated', useDirectApi), options);
        if (!response.ok) {
            return null;
        }
        const data = await response.json();
        return {
            id: data.id,
            name: data.name
        };
    } catch (error) {
        console.error('Error getting authenticated user:', error);
        return null;
    }
}
function getAvatarUrl(userId) {
    return `https://thumbnails.roproxy.com/v1/users/avatar-headshot?userIds=${userId}&size=48x48&format=Png&isCircular=false`;
}
async function getFollowers(userId, cookie, httpProxy) {
    const allFollowers = [];
    let cursor = null;
    let pageCount = 0;
    const maxPages = 50; // Safety limit: 50 pages * 100 = 5000 max followers
    const useDirectApi = !!httpProxy;
    do {
        const url = cursor ? `${getApiUrl('friends', `/v1/users/${userId}/followers`, useDirectApi)}?limit=100&cursor=${cursor}` : `${getApiUrl('friends', `/v1/users/${userId}/followers`, useDirectApi)}?limit=100`;
        console.log(`Fetching followers page ${pageCount + 1}... (${useDirectApi ? 'DIRECT API' : 'roproxy'})`);
        const options = getFetchOptions({
            'Cookie': `.ROBLOSECURITY=${cookie}`
        }, httpProxy, true);
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rate$2d$limiter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withRetry"])(async ()=>{
            const response = await fetch(url, options);
            if (response.status === 429) {
                throw new Error('Rate limited (429)');
            }
            if (!response.ok) {
                throw new Error(`Failed to fetch followers: ${response.status}`);
            }
            return response.json();
        }, {
            maxRetries: 3,
            baseDelay: 2000,
            onRetry: (attempt, error, delay)=>{
                console.log(`Followers page ${pageCount + 1} retry ${attempt}: ${error.message}, waiting ${delay}ms`);
            }
        });
        const followers = data.data || [];
        allFollowers.push(...followers);
        cursor = data.nextPageCursor || null;
        pageCount++;
        console.log(`Page ${pageCount}: Got ${followers.length} followers, total: ${allFollowers.length}`);
        if (cursor) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rate$2d$limiter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sleep"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fingerprint$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getHumanLikeDelay"])(PAGE_DELAY_MS));
        }
    }while (cursor && pageCount < maxPages)
    console.log(`Fetched ${allFollowers.length} total followers`);
    return allFollowers;
}
async function sendFriendRequest(targetUserId, cookie, csrfToken, httpProxy) {
    const useDirectApi = !!httpProxy;
    const url = getApiUrl('friends', `/v1/users/${targetUserId}/request-friendship`, useDirectApi);
    console.log(`Sending friend request to user ${targetUserId}... (${useDirectApi ? 'DIRECT' : 'roproxy'})`);
    const options = getFetchOptions({
        'Cookie': `.ROBLOSECURITY=${cookie}`,
        'X-CSRF-TOKEN': csrfToken,
        'Content-Type': 'application/json'
    }, httpProxy, true);
    try {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rate$2d$limiter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withRetry"])(async ()=>{
            const response = await fetch(url, {
                ...options,
                method: 'POST'
            });
            if (response.status === 429) {
                throw new Error('Rate limited (429)');
            }
            if (!response.ok) {
                const errorText = await response.text();
                // Check for "already friends" or "pending" errors
                if (errorText.includes('AlreadyFriends') || errorText.includes('PendingFriendRequest')) {
                    console.log(`Already friends or pending with ${targetUserId}`);
                    return {
                        success: true,
                        skipped: true
                    };
                }
                console.error(`Friend request failed for ${targetUserId}: ${response.status} - ${errorText}`);
                return {
                    success: false,
                    error: `HTTP ${response.status}: ${errorText}`
                };
            }
            console.log(`Successfully sent friend request to ${targetUserId}`);
            return {
                success: true
            };
        }, {
            maxRetries: 3,
            baseDelay: 1500,
            onRetry: (attempt, error, delay)=>{
                console.log(`FriendRequest(${targetUserId}) retry ${attempt}: ${error.message}, waiting ${delay}ms`);
            }
        });
        return result;
    } catch (error) {
        console.error('Error sending friend request:', error);
        return {
            success: false,
            error: String(error)
        };
    }
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
"[project]/src/lib/friend-request-service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bulkUpdateStatus",
    ()=>bulkUpdateStatus,
    "clearCache",
    ()=>clearCache,
    "getCachedRequests",
    ()=>getCachedRequests,
    "getRequestStats",
    ()=>getRequestStats,
    "removeFromCache",
    ()=>removeFromCache,
    "saveFriendRequests",
    ()=>saveFriendRequests,
    "updateRequestStatus",
    ()=>updateRequestStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-route] (ecmascript)");
;
async function saveFriendRequests(accountId, requests) {
    // First, get existing cache to preserve already processed requests
    const { data: existingData } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('roblox_accounts').select('cached_friend_requests').eq('id', accountId).single();
    const existingRequests = existingData?.cached_friend_requests || [];
    // Create a set of existing request IDs for quick lookup
    const existingIds = new Set(existingRequests.map((r)=>r.id));
    // Find truly new requests (not already in cache)
    const newRequests = requests.filter((r)=>!existingIds.has(r.id));
    // If no new requests, skip the update entirely
    if (newRequests.length === 0) {
        console.log(`[Friend Request Service] No new requests for account ${accountId}, skipping update`);
        return true;
    }
    console.log(`[Friend Request Service] Found ${newRequests.length} new requests out of ${requests.length} total`);
    // Add pending status to new requests only
    const newRequestsWithStatus = newRequests.map((r)=>({
            ...r,
            status: 'pending'
        }));
    // Merge: keep existing pending requests + add new ones
    // Remove requests that are no longer in the friend request list (already removed by Roblox)
    const currentIds = new Set(requests.map((r)=>r.id));
    const stillPendingExisting = existingRequests.filter((r)=>r.status === 'pending' && currentIds.has(r.id));
    const mergedRequests = [
        ...stillPendingExisting,
        ...newRequestsWithStatus
    ];
    // Compute stats from merged data
    const pendingRequests = mergedRequests.filter((r)=>r.status === 'pending');
    const botsCount = pendingRequests.filter((r)=>r.isBot).length;
    const safeCount = pendingRequests.filter((r)=>!r.isBot).length;
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('roblox_accounts').update({
        cached_friend_requests: mergedRequests,
        cached_at: new Date().toISOString(),
        cached_total: pendingRequests.length,
        cached_bots: botsCount,
        cached_safe: safeCount
    }).eq('id', accountId);
    if (error) {
        console.error('Failed to save friend requests:', error);
        return false;
    }
    return true;
}
async function getCachedRequests(accountId, filter = 'all') {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('roblox_accounts').select('cached_friend_requests, cached_at, cached_total, cached_bots, cached_safe').eq('id', accountId).single();
    if (error || !data) {
        console.error('Failed to get cached requests:', error);
        return null;
    }
    let requests = data.cached_friend_requests || [];
    // Filter to only pending requests
    requests = requests.filter((r)=>r.status === 'pending');
    // Apply filter
    if (filter === 'bots') {
        requests = requests.filter((r)=>r.isBot);
    } else if (filter === 'safe') {
        requests = requests.filter((r)=>!r.isBot);
    }
    return {
        requests,
        cachedAt: data.cached_at,
        total: data.cached_total || 0,
        bots: data.cached_bots || 0,
        safe: data.cached_safe || 0
    };
}
async function getRequestStats(accountId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('roblox_accounts').select('cached_total, cached_bots, cached_safe, cached_at').eq('id', accountId).single();
    if (error || !data) {
        return null;
    }
    return {
        total: data.cached_total || 0,
        bots: data.cached_bots || 0,
        safe: data.cached_safe || 0,
        cachedAt: data.cached_at
    };
}
async function updateRequestStatus(accountId, robloxUserId, status) {
    // Get current cache
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('roblox_accounts').select('cached_friend_requests').eq('id', accountId).single();
    if (!data) return false;
    const requests = data.cached_friend_requests || [];
    // Update status and remove from pending
    const updated = requests.filter((r)=>r.id !== parseInt(robloxUserId));
    // Recompute counts
    const pending = updated.filter((r)=>r.status === 'pending');
    const botsCount = pending.filter((r)=>r.isBot).length;
    const safeCount = pending.filter((r)=>!r.isBot).length;
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('roblox_accounts').update({
        cached_friend_requests: updated,
        cached_total: pending.length,
        cached_bots: botsCount,
        cached_safe: safeCount
    }).eq('id', accountId);
    return !error;
}
async function bulkUpdateStatus(accountId, robloxUserIds, status) {
    if (robloxUserIds.length === 0) return true;
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('roblox_accounts').select('cached_friend_requests').eq('id', accountId).single();
    if (!data) return false;
    const requests = data.cached_friend_requests || [];
    const idsToRemove = new Set(robloxUserIds.map((id)=>parseInt(id)));
    // Remove processed requests
    const updated = requests.filter((r)=>!idsToRemove.has(r.id));
    // Recompute counts
    const pending = updated.filter((r)=>r.status === 'pending');
    const botsCount = pending.filter((r)=>r.isBot).length;
    const safeCount = pending.filter((r)=>!r.isBot).length;
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('roblox_accounts').update({
        cached_friend_requests: updated,
        cached_total: pending.length,
        cached_bots: botsCount,
        cached_safe: safeCount
    }).eq('id', accountId);
    return !error;
}
async function clearCache(accountId) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('roblox_accounts').update({
        cached_friend_requests: [],
        cached_at: null,
        cached_total: 0,
        cached_bots: 0,
        cached_safe: 0
    }).eq('id', accountId);
    return !error;
}
async function removeFromCache(accountId, robloxUserId) {
    return updateRequestStatus(accountId, String(robloxUserId), 'declined');
}
}),
"[project]/src/app/api/filter/decline-all-requests/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$roblox$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/roblox.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$global$2d$proxy$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/global-proxy.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$friend$2d$request$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/friend-request-service.ts [app-route] (ecmascript)");
;
;
;
;
;
;
async function POST(request) {
    try {
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCurrentUser"])();
        if (!user) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Not authenticated'
            }, {
                status: 401
            });
        }
        const body = await request.json().catch(()=>({}));
        const accountId = body.accountId;
        let cookie = null;
        if (accountId) {
            const { data: account } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('roblox_accounts').select('cookie, account_name').eq('id', accountId).eq('user_id', user.id).single();
            if (!account) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Account not found'
                }, {
                    status: 404
                });
            }
            cookie = account.cookie;
        } else {
            cookie = user.roblox_cookie;
        }
        if (!cookie) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'No Roblox account configured'
            }, {
                status: 400
            });
        }
        const proxy = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$global$2d$proxy$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getGlobalProxy"])();
        const csrfToken = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$roblox$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCSRFToken"])(cookie, proxy);
        if (!csrfToken) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Failed to get CSRF token'
            }, {
                status: 500
            });
        }
        // Use Roblox's native decline-all endpoint
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$roblox$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["declineAllFriendRequests"])(cookie, csrfToken, proxy);
        if (!result.success) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: result.error || 'Failed to decline requests'
            }, {
                status: 500
            });
        }
        // Clear the cache since all requests are declined
        if (accountId) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$friend$2d$request$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["clearCache"])(accountId);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            message: 'All friend requests declined successfully'
        });
    } catch (error) {
        console.error('Error in decline-all-requests:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Internal server error'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__abb17f49._.js.map