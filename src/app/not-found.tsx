import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Page not found",
    description: "The page you\'re looking for cannot be found",
};

export default function NotFound() {
    return (
        <div className="container">
            <div className="flex flex-col items-center justify-center text-center py-20 px-4">
                <h1 className="text-7xl mb-4">404</h1>
                <h2 className="text-2xl mb-4">Sidan kunde inte hittas</h2>
                <p className="mb-8 max-w-md">Tyvärr kunde vi inte hitta sidan du letade efter.</p>
                <Link href="/" className="btn-primary">
                    Tillbaka till startsidan
                </Link>
            </div>
        </div>
    );
}
