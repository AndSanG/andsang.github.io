'use client'

import { useState, useEffect, useRef } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { X, Download } from 'lucide-react'

export function CvDialog() {
    const [open, setOpen] = useState(false)
    const [content, setContent] = useState<string>('')
    const contentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!open) return
        fetch('/cv.md')
            .then(res => res.text())
            .then(setContent)
    }, [open])

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => { document.body.style.overflow = '' }
    }, [open])

    function handleDownload() {
        const printWindow = window.open('', '_blank')
        if (!printWindow || !contentRef.current) return
        const html = contentRef.current.innerHTML
        printWindow.document.head.innerHTML = `
  <meta charset="utf-8" />
  <title>CV</title>
  <style>
    body { font-family: system-ui, sans-serif; max-width: 700px; margin: 40px auto; padding: 0 24px; color: #111; font-size: 14px; line-height: 1.6; }
    h1 { font-size: 24px; font-weight: 700; margin-bottom: 4px; }
    h2 { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: #7c3aed; margin-top: 24px; margin-bottom: 8px; }
    h3 { font-size: 14px; font-weight: 600; margin-bottom: 0; }
    p { margin: 4px 0; color: #444; }
    ul { margin: 4px 0; padding-left: 20px; color: #444; }
    li { margin-bottom: 2px; }
    hr { border: none; border-top: 1px solid #ddd; margin: 16px 0; }
    em { font-style: normal; font-size: 12px; color: #666; }
    strong { color: #111; }
  </style>`
        printWindow.document.body.innerHTML = html
        printWindow.focus()
        printWindow.print()
    }

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="px-8 py-3 rounded-xl border-2 border-transparent text-zinc-500 dark:text-gray-400 font-semibold hover:text-zinc-900 dark:hover:text-white transition-all duration-300 flex items-center gap-2"
            >
                View CV
            </button>

            {open && (
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
                    <div className="relative z-10 w-full max-w-2xl max-h-[85vh] flex flex-col rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 shadow-2xl">

                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-black/10 dark:border-white/10 shrink-0">
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
                        <div className="overflow-y-auto px-8 py-6 flex-1 print:overflow-visible">
                            <div ref={contentRef} className="prose prose-zinc dark:prose-invert max-w-none
                                prose-h1:text-2xl prose-h1:font-bold prose-h1:mb-1
                                prose-h2:text-base prose-h2:font-semibold prose-h2:uppercase prose-h2:tracking-wider prose-h2:text-accent prose-h2:mt-6 prose-h2:mb-3
                                prose-h3:text-sm prose-h3:font-semibold prose-h3:mb-0
                                prose-p:text-sm prose-p:text-zinc-600 dark:prose-p:text-zinc-400 prose-p:my-1
                                prose-li:text-sm prose-li:text-zinc-600 dark:prose-li:text-zinc-400
                                prose-hr:border-black/10 dark:prose-hr:border-white/10 prose-hr:my-4
                                prose-strong:text-zinc-800 dark:prose-strong:text-zinc-200
                                prose-em:text-zinc-500 dark:prose-em:text-zinc-400 prose-em:text-xs prose-em:not-italic">
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                    {content}
                                </ReactMarkdown>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="shrink-0 px-6 py-4 border-t border-black/10 dark:border-white/10 flex justify-end">
                            <button
                                onClick={handleDownload}
                                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-accent text-black font-semibold text-sm hover:opacity-90 transition-opacity"
                            >
                                <Download size={16} />
                                Download as PDF
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
