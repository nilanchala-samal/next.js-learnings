"use client";
import Link from "next/link"
import { usePathname } from "next/navigation"
import './index.css'

const navLinks = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forgot Password", href: "/forgot-password" }
]

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()
    console.log(pathname);
    return (
        <div>
            {navLinks.map((link) => {
                const isActive = link.href.startsWith(pathname)
                return (
                    <Link
                        href={link.href}
                        key={link.name}
                        className={isActive ? "font-bold text-amber-600 mr-3" : "text-blue-600 mr-3"}
                    >
                        {link.name}
                    </Link>
                )
            })}
        </div>
    )
}