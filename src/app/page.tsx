import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <section id="hero">
                <div
                    className="container flex flex-col justify-center items-center gap-8 py-40 text-center"
                    style={{
                        backgroundImage:
                            "url(https://images.unsplash.com/photo-1481833761820-0509d3217039)",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        backgroundBlendMode: "multiply",
                    }}
                >
                    <h1 className="text-5xl">
                        Där generationer möts,
                        <br /> trivs, äter och dricker gott.
                    </h1>

                    <div className="flex gap-8">
                        <Link href="/" className="btn-primary">
                            Boka bord
                        </Link>
                        <Link href="/" className="btn-primary">
                            Boka vårkråka
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container flex justify-center">
                    <div className="max-w-4xl w-full grid grid-cols-3 gap-4">
                        <Link href="#">
                            <div className="flex flex-col gap-2 w-full">
                                <div className="relative aspect-4/5 w-full">
                                    <Image
                                        src="https://images.unsplash.com/photo-1481833761820-0509d3217039"
                                        alt="Image"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex flex-col justify-center items-center text-center px-4">
                                    <h2 className="text-xl">
                                        Platser till vårkråka - 30 mars
                                    </h2>
                                    <p>Boka här</p>
                                </div>
                            </div>
                        </Link>

                        <Link href="#">
                            <div className="flex flex-col gap-2 w-full">
                                <div className="relative aspect-4/5 w-full">
                                    <Image
                                        src="https://images.unsplash.com/photo-1481833761820-0509d3217039"
                                        alt="Image"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex flex-col justify-center items-center text-center px-4">
                                    <h2 className="text-xl">
                                        Skreitorsk på Tennstopet
                                    </h2>
                                    <p>
                                        Finns på a la cartemenyn fr.o.m 19/1,
                                        serveras efter tillgång.
                                    </p>
                                </div>
                            </div>
                        </Link>

                        <Link href="#">
                            <div className="flex flex-col gap-2 w-full">
                                <div className="relative aspect-4/5 w-full">
                                    <Image
                                        src="https://images.unsplash.com/photo-1481833761820-0509d3217039"
                                        alt="Image"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex flex-col justify-center items-center text-center px-4">
                                    <h2 className="text-xl">Vår meny</h2>
                                    <p>
                                        Vår klassiska a la carte meny med
                                        traditionell, svensk husmanskost
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 text-black">
                <div className="container grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-4 p-8 min-h-112.5 bg-(--pink)">
                        <h2 className="text-center text-2xl">Öppettider</h2>
                    </div>
                    <div className="flex flex-col gap-4 p-8 min-h-112.5 bg-(--yellow)">
                        <h2 className="text-center text-2xl">Vår meny</h2>
                    </div>
                </div>
            </section>
        </>
    );
}
