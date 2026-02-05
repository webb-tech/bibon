import Image from "next/image";

interface ImageGalleryProps {
    images: {
        url: string;
        alt: string;
    }[];
    className?: string;
}

export default function ImageGallery({ images, className }: ImageGalleryProps) {
    // Ensure we have at least 5 images, pad with empty strings if needed
    const imageList = [
        images[0] || { url: "", alt: "" },
        images[1] || { url: "", alt: "" },
        images[2] || { url: "", alt: "" },
        images[3] || { url: "", alt: "" },
        images[4] || { url: "", alt: "" },
    ];

    return (
        <section className={`py-16 ${className}`}>
            <div className="container flex justify-center">
                <div className="relative w-full max-w-6xl aspect-video">
                    {imageList[0].url && (
                        <div className="absolute left-0 top-1/2 w-[32%] h-[55%] -translate-y-1/2 overflow-hidden shadow-lg">
                            <Image
                                src={imageList[0].url}
                                alt={imageList[0].alt}
                                fill
                                className="object-cover rounded"
                            />
                        </div>
                    )}

                    {imageList[1].url && (
                        <div className="absolute left-1/2 top-1/2 w-[40%] h-[65%] -translate-x-1/2 -translate-y-1/2 overflow-hidden shadow-lg">
                            <Image
                                src={imageList[1].url}
                                alt={imageList[1].alt}
                                fill
                                className="object-cover rounded"
                            />
                        </div>
                    )}

                    {imageList[2].url && (
                        <div className="absolute right-0 top-1/2 w-[28%] h-[55%] -translate-y-1/2 overflow-hidden shadow-lg">
                            <Image
                                src={imageList[2].url}
                                alt={imageList[2].alt}
                                fill
                                className="object-cover rounded"
                            />
                        </div>
                    )}

                    {imageList[3].url && (
                        <div className="absolute right-[10%] top-[5%] w-[24%] h-[40%] overflow-hidden shadow-lg">
                            <Image
                                src={imageList[3].url}
                                alt={imageList[3].alt}
                                fill
                                className="object-cover rounded"
                            />
                        </div>
                    )}

                    {imageList[4].url && (
                        <div className="absolute left-[8%] bottom-[5%] w-[45%] h-[38%] overflow-hidden shadow-lg">
                            <Image
                                src={imageList[4].url}
                                alt={imageList[4].alt}
                                fill
                                className="object-cover rounded"
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
