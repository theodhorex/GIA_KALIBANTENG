import React from "react";

type NavLink = {
    label: string;
    href: string;
};


const Navbar: React.FC = () => {
    const links: NavLink[] = [
        { label: "Misi", href: "/" },
        { label: "Pelayanan", href: "/about" },
        { label: "Berita", href: "/contact" },
        { label: "Cerita", href: "/faq" },
        { label: "Menabur", href: "/faq" },
    ];


    return (
        <nav className="bg-gray-800 p-4 flex justify-between px-9">
            <h1 className="text-white text-2xl font-light"><b className="font-semibold">GIA</b> Kalibanteng</h1>
            <ul className="flex space-x-9 float-end">
                {links.map((link) => (
                    <li key={link.label}>
                        <a
                            href={link.href}
                            className="text-white text-base hover:text-gray-400"
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
};

export default Navbar;