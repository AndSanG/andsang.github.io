'use client'

import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { X, Download } from 'lucide-react'

const MD_URL  = 'https://github.com/AndSanG/andsang.github.io/releases/latest/download/cv.md'
const PDF_URL = 'https://github.com/AndSanG/andsang.github.io/releases/latest/download/cv.pdf'

export function CvDialog() {
    const [open, setOpen] = useState(false)
    const [content, setContent] = useState<string>('')
    const [mdAvailable, setMdAvailable] = useState<boolean | null>(null)
    const [pdfAvailable, setPdfAvailable] = useState<boolean | null>(null)

    useEffect(() => {
        fetch(MD_URL, { method: 'HEAD' })
            .then(res => setMdAvailable(res.ok))
            .catch(() => setMdAvailable(false))
        fetch(PDF_URL, { method: 'HEAD' })
            .then(res => setPdfAvailable(res.ok))
            .catch(() => setPdfAvailable(false))
    }, [])

    useEffect(() => {
        if (!open) return
        fetch(MD_URL)
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

    return (
        <>
            {mdAvailable && (
                <button
                    onClick={() => setOpen(true)}
                    className="px-8 py-3 rounded-xl border-2 border-transparent text-zinc-500 dark:text-gray-400 font-semibold hover:text-zinc-900 dark:hover:text-white transition-all duration-300 flex items-center gap-2"
                >
                    View CV
                </button>
            )}

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
                            <div className="prose prose-zinc dark:prose-invert max-w-none
                                prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-4
                                prose-h2:text-3xl prose-h2:font-semibold prose-h2:mb-3 prose-h2:mt-8
                                prose-h3:text-2xl prose-h3:font-semibold prose-h3:mb-2
                                prose-p:text-base prose-p:mb-4 prose-p:leading-relaxed
                                prose-li:text-base prose-li:mb-2
                                prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-4
                                prose-hr:border-black/10 dark:prose-hr:border-white/10 prose-hr:my-10
                                prose-strong:font-bold
                                prose-em:italic
                                prose-a:text-blue-500 hover:prose-a:underline">
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                    {content}
                                </ReactMarkdown>
                            </div>
                        </div>

                        {/* Footer */}
                        {pdfAvailable && (
                            <div className="shrink-0 px-8 py-5 border-t border-black/10 dark:border-white/10 flex justify-end">
                                <a
                                    href={PDF_URL}
                                    download="andres-sanchez-cv.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-accent text-black font-semibold text-sm hover:opacity-90 transition-opacity"
                                >
                                    <Download size={16} /> Download as PDF
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}
