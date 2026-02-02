import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header>
            <div className="container flex flex-col divide-y">
                <div className="w-full flex justify-end items-center py-4 text-sm">
                    <ul className="flex items-center gap-4">
                        <li>Maitres</li>
                        <li>Presentkort</li>
                        <li>Tennstopet Grill</li>
                    </ul>
                </div>
                <div className="grid grid-cols-3 items-center gap-4 py-8 text-center text-sm">
                    <div className="max-w-sm italic">
                        <p>
                            “Där generationer möts, trivs, äter och dricker
                            gott.”
                        </p>
                    </div>
                    <div className="flex justify-center items-center">
                        <Link href="/">
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                width={200}
                                height={75}
                            />
                        </Link>
                    </div>
                    <div className="italic">
                        <p>Stockholm, Sverige</p>
                    </div>
                </div>
                <nav className="flex items-center justify-center py-4">
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
            </div>
        </header>
    );
}
