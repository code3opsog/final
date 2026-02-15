module.exports = [
"[project]/src/lib/auto-filter-worker.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "initAutoFilterWorker",
    ()=>initAutoFilterWorker,
    "runAutoFilterNow",
    ()=>runAutoFilterNow
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$2d$cron__$5b$external$5d$__$28$node$2d$cron$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$node$2d$cron$29$__ = __turbopack_context__.i("[externals]/node-cron [external] (node-cron, esm_import, [project]/node_modules/node-cron)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$node$2d$cron__$5b$external$5d$__$28$node$2d$cron$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$node$2d$cron$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$node$2d$cron__$5b$external$5d$__$28$node$2d$cron$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$node$2d$cron$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
/**
 * Background Auto-Filter Worker
 * Runs every 5 minutes to fetch friend requests and auto-decline bots
 * This initializes when the Next.js server starts
 */ let isInitialized = false;
function initAutoFilterWorker() {
    if (isInitialized) {
        console.log('[Auto-Filter Worker] Already initialized, skipping...');
        return;
    }
    console.log('[Auto-Filter Worker] Initializing background job scheduler...');
    // Run every 5 minutes
    __TURBOPACK__imported__module__$5b$externals$5d2f$node$2d$cron__$5b$external$5d$__$28$node$2d$cron$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$node$2d$cron$29$__["default"].schedule('*/5 * * * *', async ()=>{
        console.log(`[Auto-Filter Worker] Running at ${new Date().toISOString()}`);
        try {
            // Call the auto-fetch endpoint internally
            const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
            const cronSecret = process.env.CRON_SECRET || '';
            const response = await fetch(`${baseUrl}/api/cron/auto-fetch`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${cronSecret}`
                }
            });
            const data = await response.json();
            if (response.ok) {
                console.log(`[Auto-Filter Worker] Success! Processed ${data.processed} accounts`);
                if (data.results) {
                    for (const result of data.results){
                        console.log(`  - ${result.accountName}: fetched ${result.fetched}, declined ${result.declined}`);
                    }
                }
            } else {
                console.error('[Auto-Filter Worker] Error:', data.error);
            }
        } catch (error) {
            console.error('[Auto-Filter Worker] Failed to run auto-fetch:', error);
        }
    });
    isInitialized = true;
    console.log('[Auto-Filter Worker] Scheduled to run every 5 minutes');
}
async function runAutoFilterNow() {
    console.log('[Auto-Filter Worker] Manual trigger...');
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const cronSecret = process.env.CRON_SECRET || '';
    try {
        const response = await fetch(`${baseUrl}/api/cron/auto-fetch`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${cronSecret}`
            }
        });
        return await response.json();
    } catch (error) {
        console.error('[Auto-Filter Worker] Manual trigger failed:', error);
        throw error;
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/node-cron [external] (node-cron, esm_import, [project]/node_modules/node-cron)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("node-cron-850d997d12dc4759");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b0aaa6ed._.js.map