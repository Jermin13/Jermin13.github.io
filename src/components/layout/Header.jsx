import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, Languages } from 'lucide-react'
import { useLanguage } from '@/i18n'
import profilePhoto from '@/assets/images/profile_photo.jpg'

function Header({ darkMode, toggleDarkMode }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    const { language, toggleLanguage, t } = useLanguage()

    const navLinks = [
        { name: t.nav.home, path: '/' },
        { name: t.nav.about, path: '/about' },
        { name: t.nav.projects, path: '/projects' },
    ]

    const isActive = (path) => location.pathname === path

    // Handle scroll to contact section
    const handleContactClick = (e) => {
        e.preventDefault()
        setIsMenuOpen(false)

        if (location.pathname === '/') {
            // Already on home page, just scroll
            const contactSection = document.getElementById('contact')
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' })
            }
        } else {
            // Navigate to home first, then scroll
            navigate('/')
            // Use setTimeout to wait for navigation
            setTimeout(() => {
                const contactSection = document.getElementById('contact')
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' })
                }
            }, 100)
        }
    }

    // Handle hash on initial load
    useEffect(() => {
        if (location.hash === '#contact') {
            setTimeout(() => {
                const contactSection = document.getElementById('contact')
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' })
                }
            }, 100)
        }
    }, [location])

    // Scroll detection for compact header
    const [isCompact, setIsCompact] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            // Compact when NOT at top (> 50px)
            // Expand ONLY when at top (< 50px)
            if (currentScrollY > 50) {
                setIsCompact(true)
            } else {
                setIsCompact(false)
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const springConfig = {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 1
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
            <motion.nav
                layout
                transition={springConfig}
                className={`mx-auto py-4 ${isCompact ? 'w-fit' : 'w-full px-4 md:px-8'
                    }`}
            >
                <motion.div
                    layout
                    transition={springConfig}
                    className={`glass rounded-full shadow-lg pointer-events-auto items-center ${isCompact ? 'flex px-3 py-2 gap-4' : 'grid grid-cols-[1fr_auto_1fr] px-8 py-3'
                        }`}
                >
                    {/* Logo - Centered in compact, Left aligned in full */}
                    <motion.div layout className={`flex items-center ${isCompact ? '' : 'justify-start'}`}>
                        <Link to="/" className="flex items-center gap-2">
                            <motion.img
                                layout
                                src={profilePhoto}
                                alt="Jermin Vasquez"
                                className={`rounded-full object-cover border-2 border-primary ${isCompact ? 'w-8 h-8' : 'w-10 h-10'
                                    }`}
                            />
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation - Centered */}
                    <div className="hidden md:flex items-center justify-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-sm font-medium transition-all duration-300 hover:text-primary relative group ${isActive(link.path) ? 'text-primary' : ''
                                    }`}
                            >
                                <span className="relative">
                                    {link.name}
                                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                                </span>
                            </Link>
                        ))}
                    </div>

                    {/* Right Section - Right aligned */}
                    <motion.div layout className={`flex items-center ${isCompact ? 'gap-2' : 'gap-3 justify-end'}`}>
                        {/* Language Toggle */}
                        <button
                            onClick={toggleLanguage}
                            className={`flex items-center gap-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-dark-100 transition-all duration-300 hover:scale-105 ${isCompact ? 'px-2 py-1' : 'px-3 py-1.5'
                                }`}
                            aria-label="Toggle language"
                        >
                            <Languages className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase">{language}</span>
                        </button>

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleDarkMode}
                            className={`rounded-full hover:bg-gray-100 dark:hover:bg-dark-100 transition-all duration-300 hover:scale-110 ${isCompact ? 'p-1.5' : 'p-2'
                                }`}
                            aria-label="Toggle theme"
                        >
                            {darkMode ? (
                                <Sun className="w-5 h-5" />
                            ) : (
                                <Moon className="w-5 h-5" />
                            )}
                        </button>

                        {/* Contact Button */}
                        <button
                            onClick={handleContactClick}
                            className={`hidden md:inline-flex btn btn-primary text-sm hover:shadow-lg hover:shadow-primary/25 ${isCompact ? 'px-4 py-1.5' : 'px-5 py-2.5'
                                }`}
                        >
                            {t.nav.contact}
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-100 transition-all duration-300 hover:scale-110"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </motion.div>
                </motion.div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="md:hidden mt-2 glass rounded-2xl p-4 shadow-lg pointer-events-auto mx-4"
                        >
                            <div className="flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`text-lg font-medium transition-all duration-300 hover:text-primary ${isActive(link.path) ? 'text-primary' : ''
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <button
                                    onClick={handleContactClick}
                                    className="btn btn-primary text-center"
                                >
                                    {t.nav.contact}
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </header>
    )
}

export default Header
