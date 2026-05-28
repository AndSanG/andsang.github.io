'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import dynamic from 'next/dynamic'
import { X, Download } from 'lucide-react'
import { TactileButton } from '@/components/ui/tactile-button'

const CvMarkdown = dynamic(
    () => import('./cv-markdown').then(m => ({ default: m.CvMarkdown })),
    { loading: () => <p className="text-zinc-400 text-sm">Loading…</p> }
)

const REPO = 'AndSanG/andsang.github.io'
const CV_PDF_URL = `https://github.com/${REPO}/releases/latest/download/cv.pdf`

export function CvDialog() {
    const [open, setOpen] = useState(false)
    const [content, setContent] = useState<string | null>(null)
    const [available, setAvailable] = useState<boolean | null>(null)

    // Fetch from own origin — cv.md is copied to public/ by the update-cv workflow
    useEffect(() => {
        fetch('/cv.md')
            .then(res => {
                if (!res.ok) throw new Error()
                return res.text()
            })
            .then(text => { setContent(text); setAvailable(true) })
            .catch(() => setAvailable(false))
    }, [])

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [open])

    useEffect(() => {
        if (!open) return
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
        document.addEventListener('keydown', onKey)
        return () => document.removeEventListener('keydown', onKey)
    }, [open])

    if (!available) return null

    return (
        <>
            <TactileButton
                onClick={() => setOpen(true)}
                className="px-8 py-3 rounded-xl border-2 border-transparent text-zinc-500 dark:text-gray-400 font-semibold hover:text-zinc-900 dark:hover:text-white transition-all duration-300"
            >
                View CV
            </TactileButton>

            {open && createPortal(
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Curriculum Vitae"
                >
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={() => setOpen(false)}
                    />

                    {/* Dialog */}
                    <div className="relative z-10 w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 shadow-2xl">

                        {/* Header */}
                        <div className="flex items-center justify-between px-8 py-5 border-b border-black/10 dark:border-white/10 shrink-0">
                            <span className="font-semibold text-base text-zinc-800 dark:text-white">Curriculum Vitae</span>
                            <button
                                onClick={() => setOpen(false)}
                                className="p-1 rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-white transition-colors"
                                aria-label="Close"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="overflow-y-auto px-10 py-8 flex-1">
                            {content === null ? (
                                <p className="text-zinc-400 text-sm">Loading…</p>
                            ) : content === '' ? (
                                <p className="text-zinc-400 text-sm">Could not load CV content.</p>
                            ) : (
                                <CvMarkdown content={content} />
                            )}
                        </div>

                        {/* Footer */}
                        <div className="shrink-0 px-8 py-5 border-t border-black/10 dark:border-white/10 flex justify-end">
                            <TactileButton
                                href={CV_PDF_URL}
                                className="px-6 py-2.5 rounded-xl bg-accent text-black font-semibold text-sm hover:opacity-90 transition-opacity"
                            >
                                <Download size={16} /> Download as PDF
                            </TactileButton>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>
    )
}
