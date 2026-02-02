import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";

export default function Home() {
    return (
        <>
            <Hero />

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
                        <h2 className="text-center text-2xl mb-8">
                            Öppettider
                        </h2>
                        <div className="flex justify-between items-center border-b border-dotted">
                            <span>Måndag & Tisdag</span>
                            <span>11:30 - 23:00</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-dotted">
                            <span>Onsdag & Torsdag</span>
                            <span>11:30 - 00:00</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-dotted">
                            <span>Fredag</span>
                            <span>11:30 - 01:00</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-dotted">
                            <span>Lördag</span>
                            <span>12:00 - 01:00</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-dotted">
                            <span>Söndag</span>
                            <span>12:00 - 23:00</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-4 p-8 min-h-112.5 bg-(--yellow)">
                        <h2 className="text-center text-2xl mb-8">Vår meny</h2>
                        <p className="text-sm max-w-md text-center mb-4">
                            På Tennstopet hyllar vi svenska mattraditioner med
                            tidlösa klassiker. Vår á la carte serveras från
                            öppning, och fortgår hela dagen
                        </p>
                        <Link href="#" className="btn-secondary">
                            Dagens lunch
                        </Link>
                        <Link href="#" className="btn-secondary">
                            A la carte
                        </Link>
                        <Link href="#" className="btn-secondary">
                            Stora sällskap
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container">
                    <div className="bg-(--yellow) text-black p-8 flex flex-col items-center justify-center gap-4">
                        <h2 className="text-2xl">Nyhetsbrev</h2>
                        <p>Nyheter från Tennstopet & Stockholm Krogbolag</p>
                        <form className="flex flex-col justify-center items-center gap-4 w-full max-w-md">
                            <input
                                type="email"
                                placeholder="Din e-mailadress"
                                className="bg-white p-3 text-center text-sm w-full"
                            />
                            <button type="submit" className="btn-secondary">
                                Skicka in
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
