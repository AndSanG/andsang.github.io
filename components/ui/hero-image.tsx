import Image from 'next/image'

export function HeroImage() {
    return (
        <div className="flex items-center justify-center w-full hero-float">
            <Image
                src="/profile-cutout.webp"
                alt="Andres Sanchez"
                width={800}
                height={926}
                className="w-auto h-auto max-h-[350px] md:max-h-[500px] object-contain rounded-3xl"
                priority
            />
        </div>
    )
}
