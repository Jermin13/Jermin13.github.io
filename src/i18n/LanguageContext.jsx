import { createContext, useContext, useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { translations } from './translations'

const LanguageContext = createContext()

// M7: la URL es la fuente de verdad del idioma. / → español, /en/... → inglés.
function langFromPath(pathname) {
  return pathname.startsWith('/en') ? 'en' : 'es'
}

export function LanguageProvider({ children }) {
  const location = useLocation()
  const navigate = useNavigate()
  const [language, setLanguage] = useState(() => langFromPath(window.location.pathname))

  // Mantiene el idioma sincronizado con la ruta (navegación directa / deep links).
  useEffect(() => {
    setLanguage(langFromPath(location.pathname))
  }, [location.pathname])

  // <html lang="..."> dinámico para que Google indexe cada idioma por separado.
  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  // Devuelve el path localizado al idioma dado (por defecto el actual).
  // es: '/'->'/', '/about'->'/about'  |  en: '/'->'/en', '/about'->'/en/about'
  const localize = (path, lang = language) =>
    (lang === 'en' ? '/en' : '') + (path === '/' ? '' : path)

  // Cambia de idioma reescribiendo la ruta actual bajo el otro prefijo (/en o sin él).
  const switchTo = (lang) => {
    const rest = location.pathname.replace(/^\/en/, '') || '/'
    navigate(localize(rest, lang), { replace: true })
  }

  const t = translations[language]

  return (
    <LanguageContext.Provider value={{ language, setLanguage, localize, switchTo, t }}>
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