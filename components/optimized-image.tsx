import Image from 'next/image'

export function OptimizedImage() {
    return (
        <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-lg">Image Optimization</h3>
            <div className="relative w-full max-w-lg aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                <Image
                    src="https://picsum.photos/800/400"
                    alt="Random placeholder"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                />
            </div>
            <p className="text-xs text-gray-500">
                This image uses <code>next/image</code> with <code>fill</code> to prevent layout shift (CLS) and <code>priority</code> for LCP optimization.
            </p>
        </div>
    )
}
