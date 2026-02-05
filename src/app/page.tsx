import Link from "next/link";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import ImageGallery from "@/components/ImageGallery";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <Hero />

            <section className="py-16">
                <div className="container flex justify-center px-4">
                    <div className="max-w-4xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <Link href="#">
                            <div className="flex flex-col gap-2 w-full">
                                <div className="relative aspect-4/5 w-full">
                                    <Image
                                        src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80"
                                        alt="Restaurant interior"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex flex-col justify-center items-center text-center px-4">
                                    <h2 className="text-lg md:text-xl">
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
                                        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
                                        alt="Fish dish"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex flex-col justify-center items-center text-center px-4">
                                    <h2 className="text-lg md:text-xl">Skreitorsk på Tennstopet</h2>
                                    <p>
                                        Finns på a la cartemenyn fr.o.m 19/1, serveras efter
                                        tillgång.
                                    </p>
                                </div>
                            </div>
                        </Link>

                        <Link href="#">
                            <div className="flex flex-col gap-2 w-full">
                                <div className="relative aspect-4/5 w-full">
                                    <Image
                                        src="https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&w=800&q=80"
                                        alt="Menu on table"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex flex-col justify-center items-center text-center px-4">
                                    <h2 className="text-lg md:text-xl">Vår meny</h2>
                                    <p>
                                        Vår klassiska a la carte meny med traditionell, svensk
                                        husmanskost
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 text-black">
                <div className="container px-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-4 p-6 md:p-8 min-h-112.5 bg-(--pink)">
                        <h2 className="text-center text-xl md:text-2xl mb-8">Öppettider</h2>
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
                    <div className="flex flex-col items-center gap-4 p-6 md:p-8 min-h-112.5 bg-(--yellow)">
                        <h2 className="text-center text-xl md:text-2xl mb-8">Vår meny</h2>
                        <p className="text-sm md:text-base max-w-md text-center mb-4">
                            På Tennstopet hyllar vi svenska mattraditioner med tidlösa klassiker.
                            Vår á la carte serveras från öppning, och fortgår hela dagen
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

            <ImageGallery
                images={[
                    {
                        url: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80",
                        alt: "Dining room",
                    },
                    {
                        url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
                        alt: " plated dish",
                    },
                    {
                        url: "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&w=1200&q=80",
                        alt: "Table setting",
                    },
                    {
                        url: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=1200&q=80",
                        alt: "Chef preparing food",
                    },
                    {
                        url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
                        alt: "Dessert",
                    },
                ]}
            />

            <section className="py-16">
                <div className="container px-4 grid gap-16 text-center text-sm md:text-base grid-cols-1 md:grid-cols-4">
                    <div className="flex flex-col gap-3 items-center px-4 md:px-0">
                        <h2 className="text-xl">Dagsaktuella bokningar</h2>
                        <p>Telefon: 08 32 25 18</p>
                        <p>
                            Vi nås på telefonen fr.o.m 10:00 på vardagar, och 11:00 på helger samt
                            övriga helgdagar.
                        </p>
                        <p>
                            <a href="mailto:bokning@tennstopet.se" className="underline">
                                bokning@tennstopet.se
                            </a>{" "}
                            eller{" "}
                            <Link href="#" className="underline">
                                boka direkt här
                            </Link>
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 items-center px-4 md:px-0">
                        <h2 className="text-xl">
                            Framtida bokningar och bokningar för större sällskap
                        </h2>
                        <p>
                            Framtida bokningar och bokningar för fler än 9 personer:{" "}
                            <a href="mailto:bokning@tennstopet.se" className="underline">
                                bokning@tennstopet.se
                            </a>
                        </p>
                        <p>Se meny våra Sällskapsmenyer under &quot;MENY&quot;</p>
                        <p>Vi reserverar inte bord på vår uteservering.</p>
                    </div>

                    <div className="flex flex-col gap-3 items-center px-4 md:px-0">
                        <h2 className="text-xl">Övriga frågor</h2>
                        <p>
                            <a href="mailto:info@tennstopet.se" className="underline">
                                info@tennstopet.se
                            </a>
                        </p>
                        <p>
                            Dessvärre inga barnvagnar eller fyrbenta vänner hos oss på Tennstopet.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 items-center px-4 md:px-0">
                        <h2 className="text-xl">Adress</h2>
                        <div>
                            <p className="font-semibold">Besöksadress:</p>
                            <p>Dalagatan 50</p>
                            <p>113 24 Stockholm</p>
                        </div>
                        <div className="mt-4">
                            <p className="font-semibold">Postadress:</p>
                            <p>Dalagatan 50</p>
                            <p>Box 6119</p>
                            <p>102 32 Stockholm</p>
                        </div>
                    </div>
                </div>
            </section>

            <Newsletter />
        </>
    );
}
