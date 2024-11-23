"use client"

import { useBackground } from "@/app/contexts/BackgroundContext"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Navbar() {
    const router = useRouter()
    const { setIsTransitioning } = useBackground()
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10
            setScrolled(isScrolled)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavigation = (path: string) => {
        setIsTransitioning(true)
        setTimeout(() => {
            router.push(path)
            setTimeout(() => {
                setIsTransitioning(false)
            }, 500)
        }, 300)
    }

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/30 backdrop-blur-md' : ''
            }`}>
            <div className="relative z-10 px-6 py-4 text-white max-w-screen-xl mx-auto flex items-center justify-between h-20">
                <button onClick={() => handleNavigation('/')} className="text-2xl font-bold tracking-tight">
                    MoodMeal
                </button>
                <div className="flex items-center gap-8">
                    <button
                        onClick={() => handleNavigation('/findyourfood')}
                        className="font-medium hover:underline decoration-[#799122] underline-offset-8"
                    >
                        Tentukan Makananmu
                    </button>
                </div>
            </div>
        </nav>
    )
}
