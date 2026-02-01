import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import NotFound from './pages/NotFound'

import Cursor from './components/ui/Cursor'

function App() {
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
                    <Route path="/" element={<Home darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}

export default App
