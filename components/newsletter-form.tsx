'use client'

import { useActionState } from 'react'
import { subscribe } from '@/app/actions'

const initialState = {
    message: '',
    timestamp: ''
}

export function NewsletterForm() {
    const [state, formAction, isPending] = useActionState(subscribe, initialState)

    return (
        <div className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-800">
            <h3 className="text-lg font-semibold mb-2">Server Action Demo</h3>
            <form action={formAction} className="flex gap-2 flex-col sm:flex-row">
                <input
                    type="email"
                    name="email"
                    placeholder="Enter email..."
                    required
                    className="px-3 py-2 border rounded text-black"
                />
                <button
                    type="submit"
                    disabled={isPending}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
                >
                    {isPending ? 'Subscribing...' : 'Subscribe'}
                </button>
            </form>
            {state?.message && (
                <p className="mt-2 text-green-600 text-sm">
                    {state.message} (Server time: {state.timestamp})
                </p>
            )}
        </div>
    )
}
