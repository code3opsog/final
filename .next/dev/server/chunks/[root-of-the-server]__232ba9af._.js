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
    // Fetch cached requests and blacklist in parallel
    const [accountResult, blacklistResult] = await Promise.all([
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('roblox_accounts').select('cached_friend_requests, cached_at, cached_total, cached_bots, cached_safe').eq('id', accountId).single(),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('roblox_blacklist').select('username, roblox_user_id')
    ]);
    if (accountResult.error || !accountResult.data) {
        console.error('Failed to get cached requests:', accountResult.error);
        return null;
    }
    const data = accountResult.data;
    let requests = data.cached_friend_requests || [];
    // Create sets for both blacklisted usernames and user IDs for efficient lookup
    const blacklistedUsernames = new Set();
    const blacklistedUserIds = new Set();
    (blacklistResult.data || []).forEach((b)=>{
        blacklistedUsernames.add(b.username.toLowerCase());
        if (b.roblox_user_id) {
            blacklistedUserIds.add(parseInt(b.roblox_user_id, 10));
        }
    });
    // Helper to check if a user is blacklisted (by username OR user ID)
    const isBlacklisted = (r)=>blacklistedUsernames.has(r.username.toLowerCase()) || blacklistedUserIds.has(r.id);
    // Filter to only pending requests AND exclude blacklisted users
    requests = requests.filter((r)=>r.status === 'pending' && !isBlacklisted(r));
    // Apply additional filter
    if (filter === 'bots') {
        requests = requests.filter((r)=>r.isBot);
    } else if (filter === 'safe') {
        requests = requests.filter((r)=>!r.isBot);
    }
    // Recalculate totals after filtering out blacklisted users
    const allPendingNonBlacklisted = (data.cached_friend_requests || []).filter((r)=>r.status === 'pending' && !isBlacklisted(r));
    const total = allPendingNonBlacklisted.length;
    const bots = allPendingNonBlacklisted.filter((r)=>r.isBot).length;
    const safe = allPendingNonBlacklisted.filter((r)=>!r.isBot).length;
    return {
        requests,
        cachedAt: data.cached_at,
        total,
        bots,
        safe
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
"[project]/src/app/api/filter/cached/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$friend$2d$request$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/friend-request-service.ts [app-route] (ecmascript)");
;
;
;
;
async function GET(request) {
    try {
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCurrentUser"])();
        if (!user) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Not authenticated'
            }, {
                status: 401
            });
        }
        const { searchParams } = new URL(request.url);
        const accountId = searchParams.get('accountId');
        const filter = searchParams.get('filter') || 'all';
        if (!accountId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Account ID required'
            }, {
                status: 400
            });
        }
        // Validate filter param
        if (![
            'all',
            'bots',
            'safe'
        ].includes(filter)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Invalid filter. Use: all, bots, safe'
            }, {
                status: 400
            });
        }
        // Verify account belongs to user
        const { data: account } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('roblox_accounts').select('id, account_name, cached_at').eq('id', accountId).eq('user_id', user.id).single();
        if (!account) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Account not found'
            }, {
                status: 404
            });
        }
        // Get cached requests from friend_requests table with filter
        const cached = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$friend$2d$request$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCachedRequests"])(accountId, filter);
        if (!cached) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                requests: [],
                cachedAt: null,
                accountName: account.account_name,
                total: 0,
                bots: 0,
                safe: 0,
                filter
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            requests: cached.requests,
            cachedAt: cached.cachedAt,
            accountName: account.account_name,
            total: cached.total,
            bots: cached.bots,
            safe: cached.safe,
            filter,
            filteredCount: cached.requests.length
        });
    } catch (error) {
        console.error('Error getting cached requests:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to get cached requests'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__232ba9af._.js.map