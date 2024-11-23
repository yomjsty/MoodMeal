"use client"

import { createContext, useContext, useState } from 'react'

type BackgroundContextType = {
    isTransitioning: boolean
    setIsTransitioning: (value: boolean) => void
}

const BackgroundContext = createContext<BackgroundContextType | undefined>(undefined)

export function BackgroundProvider({ children }: { children: React.ReactNode }) {
    const [isTransitioning, setIsTransitioning] = useState(false)

    return (
        <BackgroundContext.Provider value={{ isTransitioning, setIsTransitioning }}>
            {children}
        </BackgroundContext.Provider>
    )
}

export function useBackground() {
    const context = useContext(BackgroundContext)
    if (!context) throw new Error('useBackground must be used within BackgroundProvider')
    return context
} 