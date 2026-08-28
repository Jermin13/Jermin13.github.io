import { Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import NotFound from './pages/NotFound'

import { useLanguage } from '@/i18n'
import { usePageMeta } from '@/hooks/usePageMeta'

import Cursor from './components/ui/Cursor'

// SEO on-page: title + description únicos por ruta y por idioma (M6)
const PAGE_META = {
    home: {
        es: { title: 'Jermin Vasquez | Desarrollador de Software en Quito', description: 'Desarrollador de Software Full Stack en Quito, Ecuador. Python, Django, React, Node.js, MCP, IA local, automatización de procesos corporativos y BI. Portafolio, proyectos y contacto.' },
        en: { title: 'Jermin Vasquez | Software Engineer in Quito', description: 'Software Engineer and Full Stack Developer in Quito, Ecuador. Python, Django, React, Node.js, MCP, local AI, corporate automation and BI. Portfolio, projects and contact.' },
    },
    about: {
        es: { title: 'Jermin Vasquez | Sobre mí', description: 'Ingeniero de Software en Quito, Ecuador. Experiencia en desarrollo Full Stack, automatización de procesos, React, Django y PostgreSQL.' },
        en: { title: 'Jermin Vasquez | About', description: 'Software Engineer in Quito, Ecuador. Experience in Full Stack development, process automation, React, Django and PostgreSQL.' },
    },
    projects: {
        es: { title: 'Jermin Vasquez | Proyectos', description: 'Proyectos de Jermin Vasquez: aplicaciones web, visión artificial con YOLOv11, IoT, BI con metodología Kimball y plataformas omnicanal.' },
        en: { title: 'Jermin Vasquez | Projects', description: "Jermin Vasquez's projects: web apps, computer vision with YOLOv11, IoT, BI with Kimball methodology and omnichannel platforms." },
    },
}

function App() {
    // SPA pageview tracking (GA4) - fires on every route change, not just initial load
    const location = useLocation()
    useEffect(() => {
        window.gtag?.('event', 'page_view', {
            page_path: location.pathname + location.search,
        })
    }, [location])

    // SEO on-page: title/description por ruta y por idioma (M6/M7)
    // Ignora el prefijo /en para resolver la clave de página (rutas en/es comparten componente)
    const { language } = useLanguage()
    const basePath = location.pathname.replace(/^\/en/, '') || '/'
    const pageKey = basePath === '/about' ? 'about' : basePath === '/projects' ? 'projects' : 'home'
    const meta = PAGE_META[pageKey][language] || PAGE_META[pageKey].es
    usePageMeta({ title: meta.title, description: meta.description })

    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem('darkMode')
        return saved !== null ? JSON.parse(saved) : true
    })

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode))
        if (darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])

    const toggleDarkMode = () => setDarkMode(!darkMode)

    return (
        <div className={`min-h-screen ${darkMode ? 'dark bg-dark text-white' : 'bg-white text-black'}`}>
            <Cursor />
            <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <main>
                <Routes>
                    {/* Español en / */}
                    <Route path="/" element={<Home darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    {/* Inglés indexable en /en (M7): mismos componentes, URL real */}
                    <Route path="/en" element={<Home darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
                    <Route path="/en/about" element={<About />} />
                    <Route path="/en/projects" element={<Projects />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}

export default App
