import { createContext, useContext, useState, useEffect } from 'react'
import { translations } from './translations'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(() => {
        const saved = localStorage.getItem('language')
        return saved || 'es'
    })

    useEffect(() => {
        localStorage.setItem('language', language)
    }, [language])

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'es' ? 'en' : 'es')
    }

    const t = translations[language]

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}
