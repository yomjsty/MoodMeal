"use client"

import { usePathname } from "next/navigation"
import { useBackground } from "@/app/contexts/BackgroundContext"

export default function PageBackground() {
    const pathname = usePathname()
    const { isTransitioning } = useBackground()

    return (
        <div
            className={`absolute inset-0 z-0 transition-all duration-1000 ease-in-out ${pathname === '/findyourfood'
                ? 'scale-125 opacity-90'
                : isTransitioning
                    ? 'scale-110 opacity-95'
                    : 'scale-100 opacity-100'
                }`}
            style={{
                backgroundImage: "url('/landingpage-photo.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-black/20" />
        </div>
    )
}