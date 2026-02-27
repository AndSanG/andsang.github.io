async function getUserStats() {
    await new Promise(resolve => setTimeout(resolve, 1500))
    return { visitors: 1234, conversions: 56 }
}

async function getSystemStatus() {
    await new Promise(resolve => setTimeout(resolve, 1500)) // Same duration to prove parallelism
    return { status: 'Operational', uptime: '99.9%' }
}

export default async function OptimizationShowcase() {
    // eslint-disable-next-line react-hooks/purity
    const start = Date.now()

    // PARALLEL FETCHING (Eliminating Waterfalls)
    // Instead of awaiting them one by one, we start both and await all.
    const statsData = getUserStats()
    const statusData = getSystemStatus()

    const [stats, status] = await Promise.all([statsData, statusData])

    // eslint-disable-next-line react-hooks/purity
    const duration = Date.now() - start

    return (
        <div className="space-y-8">
            <section className="p-6 border rounded-xl shadow-sm">
                <h2 className="text-2xl font-bold mb-4">Waterfall Elimination Demo</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <h3 className="font-semibold text-blue-700 dark:text-blue-300">User Stats</h3>
                        <pre className="mt-2 text-sm">{JSON.stringify(stats, null, 2)}</pre>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <h3 className="font-semibold text-green-700 dark:text-green-300">System Status</h3>
                        <pre className="mt-2 text-sm">{JSON.stringify(status, null, 2)}</pre>
                    </div>
                </div>
                <p className="mt-4 text-sm text-gray-500">
                    Total fetch time: <strong>{duration}ms</strong> (Expected ~1500ms, not 3000ms!)
                </p>
            </section>

        </div>
    )
}
