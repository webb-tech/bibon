import Link from "next/link";

export default function Hero() {
    return (
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
    );
}
