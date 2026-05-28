import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export function CvMarkdown({ content }: { content: string }) {
    return (
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
    )
}
