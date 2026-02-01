import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import AboutSection from '@/components/sections/AboutSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import Certifications from '@/components/sections/Certifications'
import Contact from '@/components/sections/Contact'

import { useState } from 'react'

function Home({ darkMode, toggleDarkMode }) {
    const [selectedService, setSelectedService] = useState('')

    const handleServiceSelect = (serviceTitle) => {
        // Remove the leading number and dot (e.g., "1. ")
        const cleanTitle = serviceTitle.replace(/^\d+\.\s*/, '')
        setSelectedService(cleanTitle)

        const contactSection = document.getElementById('contact')
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <>
            <Hero darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Services onServiceClick={handleServiceSelect} />
            <AboutSection />
            <ProjectsSection />
            <Certifications />
            <Contact initialService={selectedService} />
        </>
    )
}

export default Home


