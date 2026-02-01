import { motion } from 'framer-motion'
import { Globe, Server, Database, Cpu, BarChart3 } from 'lucide-react'
import { useLanguage } from '@/i18n'

const serviceIcons = [Globe, Server, Database, Cpu, BarChart3]

function Services({ onServiceClick }) {
    const { t } = useLanguage()

    // Map translations to services with icons
    const services = t.services.items.map((item, index) => ({
        ...item,
        id: index + 1,
        icon: serviceIcons[index],
    }))

    // Duplicate services for seamless infinite scroll
    const duplicatedServices = [...services, ...services, ...services]

    return (
        <section className="section bg-gray-50 dark:bg-dark-100 overflow-hidden">
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
            <div className="relative w-screen -ml-[50vw] left-1/2">
                {/* Gradient overlays for smooth fade effect - extend to screen edges */}
                <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-gray-50 dark:from-dark-100 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-gray-50 dark:from-dark-100 to-transparent z-10 pointer-events-none" />


                {/* Marquee Track */}
                <motion.div
                    className="flex gap-6 py-4"
                    animate={{
                        x: ['0%', '-33.33%'],
                    }}
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
                            onClick={() => onServiceClick && onServiceClick(service.title)}
                            className="flex-shrink-0 w-80 bg-white dark:bg-dark rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.02] active:scale-95 group"
                        >
                            {/* Icon */}
                            <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4 group-hover:bg-primary transition-colors">
                                <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                            </div>

                            {/* Title */}
                            <h3 className="font-bold text-lg mb-4">{service.title}</h3>

                            {/* Skills List */}
                            <ul className="space-y-2">
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
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Services
