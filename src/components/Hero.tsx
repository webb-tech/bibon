import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section id="hero">
            <div
                className="container flex flex-col justify-center items-center gap-12 py-24 text-center"
                style={{
                    backgroundImage:
                        "url(https://images.unsplash.com/photo-1481833761820-0509d3217039)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    backgroundBlendMode: "multiply",
                }}
            >
                <Image src="/logo-gray.png" alt="Logo" width={350} height={100} />

                <p className="text-xl">
                    &quot;Där generationer möts,
                    <br /> trivs, äter och dricker gott.&quot;
                </p>

                <div className="flex flex-col gap-4">
                    <Link href="/" className="btn-primary">
                        Boka bord
                    </Link>
                    <Link href="/" className="btn-primary">
                        Boka vårkråka
                    </Link>
                </div>
            </div>
        </section>
    );
}
