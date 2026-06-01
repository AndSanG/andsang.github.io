import Image from 'next/image'

export function HeroImage() {
    return (
        <div className="flex items-center justify-center w-full hero-float">
            <Image
                src="/profile-cutout.webp"
                alt="Andres Sanchez"
                width={600}
                height={695}
                className="w-auto h-auto max-h-[350px] md:max-h-[500px] object-contain rounded-3xl"
                sizes="(max-width: 768px) 350px, 500px"
                priority
            />
        </div>
    )
}
