module.exports = [
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
];

//# sourceMappingURL=src_lib_friend-request-service_ts_43674a58._.js.map