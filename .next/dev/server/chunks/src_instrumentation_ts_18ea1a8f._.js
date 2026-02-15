module.exports = [
"[project]/src/instrumentation.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Next.js Instrumentation
 * This file is automatically loaded by Next.js on server startup
 * Used to initialize background workers and monitoring
 */ __turbopack_context__.s([
    "register",
    ()=>register
]);
async function register() {
    // Only run on server side
    if ("TURBOPACK compile-time truthy", 1) {
        console.log('[Instrumentation] Registering server-side hooks...');
        // Dynamically import to avoid issues with Edge runtime
        const { initAutoFilterWorker } = await __turbopack_context__.A("[project]/src/lib/auto-filter-worker.ts [instrumentation] (ecmascript, async loader)");
        // Initialize the auto-filter background worker
        initAutoFilterWorker();
        console.log('[Instrumentation] Server-side initialization complete');
    }
}
}),
];

//# sourceMappingURL=src_instrumentation_ts_18ea1a8f._.js.map