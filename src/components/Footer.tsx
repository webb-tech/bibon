import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <nav className="flex items-center justify-center py-4 border-y">
                    <ul className="flex justify-center items-center divide-x">
                        <li className="px-8">
                            <Link href="/">Öppettider</Link>
                        </li>
                        <li className="px-8">
                            <Link href="/">Meny</Link>
                        </li>
                        <li className="px-8">
                            <Link href="/">Kontakt</Link>
                        </li>
                        <li className="px-8">
                            <Link href="/">Boka bord</Link>
                        </li>
                        <li className="px-8">
                            <Link href="/">Matkalender</Link>
                        </li>
                        <li className="px-8">
                            <Link href="/">Våra rum</Link>
                        </li>
                        <li className="px-8">
                            <Link href="/">Stora sällskap</Link>
                        </li>
                        <li className="px-8">
                            <Link href="/">Historia</Link>
                        </li>
                    </ul>
                </nav>
                <div className="flex justify-center items-center py-8">
                    <Image src="/logo-gray.png" alt="Logo" width={100} height={50} />
                </div>
            </div>
        </footer>
    );
}
