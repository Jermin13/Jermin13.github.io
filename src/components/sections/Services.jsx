import { motion, AnimatePresence } from 'framer-motion'
import { Globe, Server, Database, Cpu, BarChart3, X, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '@/i18n'
import { useState, useEffect, useRef } from 'react'

const serviceIcons = [Globe, Server, Database, Cpu, BarChart3]

function Services({ onServiceClick }) {
    const { t } = useLanguage()
    const [selectedService, setSelectedService] = useState(null)
    const [isPaused, setIsPaused] = useState(false)
    const scrollContainerRef = useRef(null)
    const pauseTimeoutRef = useRef(null)

    const scroll = (direction) => {
        // Clear any existing timeout
        if (pauseTimeoutRef.current) {
            clearTimeout(pauseTimeoutRef.current)
        }

        // Pause the animation
        setIsPaused(true)

        if (scrollContainerRef.current) {
            const scrollAmount = 350
            const container = scrollContainerRef.current
            const targetScroll = direction === 'left' 
                ? container.scrollLeft - scrollAmount 
                : container.scrollLeft + scrollAmount
            
            container.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
            })
        }

        // Resume animation after 15 seconds of inactivity
        pauseTimeoutRef.current = setTimeout(() => {
            setIsPaused(false)
        }, 15000)
    }

    // Cleanup timeout on unmount
    useEffect(() => {
        return () => {
            if (pauseTimeoutRef.current) {
                clearTimeout(pauseTimeoutRef.current)
            }
        }
    }, [])

    // Map translations to services with icons
    const services = t.services.items.map((item, index) => ({
        ...item,
        id: index + 1,
        icon: serviceIcons[index],
    }))

    // Duplicate services for seamless infinite scroll
    const duplicatedServices = [...services, ...services, ...services]

    const handleOpenModal = (service) => {
        setSelectedService(service)
        setIsPaused(true)
    }

    const handleCloseModal = () => {
        setSelectedService(null)
        setIsPaused(false)
    }

    return (
        <section className="section bg-gray-50 dark:bg-dark-100 overflow-hidden relative">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="heading-lg mb-4">{t.services.title}</h2>
                </motion.div>
            </div>

            {/* Marquee Container - Full viewport width */}
            <div className="relative w-screen -ml-[50vw] left-1/2 group/marquee">
                {/* Gradient overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-gray-50 dark:from-dark-100 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-gray-50 dark:from-dark-100 to-transparent z-10 pointer-events-none" />

                {/* Navigation Buttons */}
                <div className="absolute top-1/2 -translate-y-1/2 left-8 z-20 hidden md:block">
                    <button
                        onClick={() => scroll('left')}
                        className="p-4 rounded-full bg-white/80 dark:bg-dark/80 backdrop-blur-md shadow-lg text-primary hover:bg-primary hover:text-white transition-all duration-300 opacity-0 group-hover/marquee:opacity-100 -translate-x-4 group-hover/marquee:translate-x-0"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                </div>

                <div className="absolute top-1/2 -translate-y-1/2 right-8 z-20 hidden md:block">
                    <button
                        onClick={() => scroll('right')}
                        className="p-4 rounded-full bg-white/80 dark:bg-dark/80 backdrop-blur-md shadow-lg text-primary hover:bg-primary hover:text-white transition-all duration-300 opacity-0 group-hover/marquee:opacity-100 translate-x-4 group-hover/marquee:translate-x-0"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Marquee Track Container */}
                <div 
                    ref={scrollContainerRef}
                    className="overflow-x-auto scrollbar-hide"
                >
                <motion.div
                    className="flex gap-6 py-4"
                    animate={isPaused ? { x: undefined } : { x: ['0%', '-33.33%'] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: 'loop',
                            duration: 30,
                            ease: 'linear',
                        },
                    }}
                >
                    {duplicatedServices.map((service, index) => (
                        <div
                            key={`${service.id}-${index}`}
                            onClick={() => handleOpenModal(service)}
                            className="flex-shrink-0 w-80 bg-white dark:bg-dark rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.02] active:scale-95 group"
                        >
                            {/* Icon */}
                            <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4 group-hover:bg-primary transition-colors">
                                <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                            </div>

                            {/* Title */}
                            <h3 className="font-bold text-lg mb-4">{service.title}</h3>

                            {/* Skills List */}
                            <ul className="space-y-2 mb-6">
                                {service.skills.map((skill, skillIndex) => (
                                    <li
                                        key={skillIndex}
                                        className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2"
                                    >
                                        <span className="text-primary mt-1">•</span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>

                            <div className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                {t.services.moreInfo} →
                            </div>
                        </div>
                    ))}
                </motion.div>
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedService && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={handleCloseModal}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative bg-white dark:bg-dark w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="relative h-32 bg-primary flex items-end px-8 pb-4">
                                <div className="p-4 bg-white dark:bg-dark rounded-2xl shadow-xl translate-y-8">
                                    <selectedService.icon className="w-8 h-8 text-primary" />
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="px-8 pt-12 pb-8">
                                <h3 className="text-2xl font-bold mb-4">{selectedService.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                    {selectedService.detailedDescription}
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                    {selectedService.skills.map((skill, index) => (
                                        <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-dark-100 rounded-xl">
                                            <CheckCircle2 className="w-4 h-4 text-primary" />
                                            <span className="text-sm font-medium">{skill}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-end gap-3">
                                    <button
                                        onClick={handleCloseModal}
                                        className="px-6 py-3 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-dark-100 transition-colors font-medium"
                                    >
                                        {t.common.close}
                                    </button>
                                    <button
                                        onClick={() => {
                                            handleCloseModal()
                                            onServiceClick && onServiceClick(selectedService.title)
                                        }}
                                        className="px-8 py-3 bg-primary text-white rounded-full font-bold hover:scale-105 transition-transform"
                                    >
                                        {t.common.contact}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    )
}

export default Services
