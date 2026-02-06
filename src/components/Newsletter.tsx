export default function Newsletter() {
    return (
        <section className="py-16">
            <div className="container">
                <div className="bg-(--yellow) text-(--background) p-12 flex flex-col items-center justify-center gap-4">
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
    );
}
