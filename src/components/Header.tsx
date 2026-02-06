"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const topLinks = ["Maitres", "Presentkort", "Tennstopet Grill"];

const mainNavLinks = [
    { label: "Öppettider", href: "/" },
    { label: "Meny", href: "/" },
    { label: "Kontakt", href: "/" },
    { label: "Boka bord", href: "/" },
    { label: "Matkalender", href: "/" },
    { label: "Våra rum", href: "/" },
    { label: "Stora sällskap", href: "/" },
    { label: "Historia", href: "/" },
];

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header>
            {/* Mobile Header */}
            <div className="md:hidden flex items-center justify-between px-4 py-3 border-b">
                <Link href="/">
                    <Image src="/logo-gray.png" alt="Logo" width={120} height={45} />
                </Link>

                <button
                    className="text-2xl cursor-pointer"
                    aria-label="Menu"
                    aria-expanded={open}
                    onClick={() => setOpen(true)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile drawer + overlay */}
            <div
                className={`fixed inset-0 z-40 transition-opacity ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                aria-hidden={!open}
            >
                <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />

                <aside
                    className={`absolute top-0 right-0 h-full w-64 bg-(--background) shadow-lg transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="flex items-center justify-between p-4 border-b">
                        <button
                            aria-label="Close menu"
                            onClick={() => setOpen(false)}
                            className="text-2xl cursor-pointer"
                        >
                            x
                        </button>
                    </div>

                    <nav className="p-4">
                        <ul className="flex flex-col gap-4">
                            {mainNavLinks.map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} onClick={() => setOpen(false)}>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>
            </div>

            {/* Desktop Header */}
            <div className="hidden md:flex container flex-col divide-y">
                <div className="w-full flex justify-end items-center py-4 text-sm">
                    <ul className="flex items-center gap-4">
                        {topLinks.map((t) => (
                            <li key={t}>
                                <Link href="/">{t}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="grid grid-cols-3 items-center gap-4 py-4 text-center text-sm">
                    <div className="max-w-sm italic">
                        <p>“Där generationer möts, trivs, äter och dricker gott.”</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <Link href="/">
                            <Image src="/logo-gray.png" alt="Logo" width={220} height={75} />
                        </Link>
                    </div>
                    <div className="italic">
                        <p>
                            Stockholm,
                            <br />
                            Sverige
                        </p>
                    </div>
                </div>
                <nav className="flex items-center justify-center py-4">
                    <ul className="flex justify-center items-center divide-x">
                        {mainNavLinks.map((item) => (
                            <li key={item.label} className="px-8">
                                <Link href={item.href}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
