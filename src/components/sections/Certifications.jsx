import { motion } from 'framer-motion'
import { GraduationCap, Award, Shield, Code, Brain } from 'lucide-react'
import { useLanguage } from '@/i18n'

function Certifications() {
    const { language, t } = useLanguage()

    const certifications = [
        {
            id: 1,
            title: language === 'en'
                ? 'Web Development: Introduction to HTML and Design Plan'
                : 'Desarrollo Web: Introducción a HTML y Plan de Diseño',
            institution: 'ESPOCH',
            year: '2022',
            icon: Code,
        },
        {
            id: 2,
            title: language === 'en'
                ? 'SQL Server Script Development and Optimization'
                : 'Desarrollo y Optimización de Scripts en SQL Server',
            institution: 'ESPOCH / ENCUBA S.C.',
            year: '2023',
            icon: Code,
        },
        {
            id: 3,
            title: language === 'en'
                ? 'Advanced Threat Protection with Microsoft Defender for Identity'
                : 'Protección contra amenazas avanzadas con Microsoft Defender for Identity',
            institution: 'ESPOCH / ENCUBA S.C.',
            year: '2023',
            icon: Shield,
        },
        {
            id: 4,
            title: language === 'en'
                ? 'Hardening and Zero Trust from Zero-T'
                : 'Hardening y Zero Trust desde Zero-T',
            institution: 'ESPOCH / ENCUBA S.C.',
            year: '2023',
            icon: Shield,
        },
        {
            id: 5,
            title: language === 'en'
                ? 'AI Application in Digital Forensics'
                : 'Aplicación de la Inteligencia Artificial en la Forense Digital',
            institution: 'ESPOCH / ENCUBA S.C.',
            year: '2023',
            icon: Brain,
        },
    ]

    const stats = [
        {
            id: 1,
            value: '95%',
            label: t.certifications.satisfaction,
            description: t.certifications.satisfactionDesc,
        },
        {
            id: 2,
            value: '200%',
            label: t.certifications.growth,
            description: t.certifications.growthDesc,
        },
    ]

    return (
        <section className="section bg-white dark:bg-dark" id="certifications">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="heading-lg mb-4">{t.certifications.title}</h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        {t.certifications.description}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Education Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-gray-50 dark:bg-dark-100 rounded-3xl p-8"
                    >
                        <div className="flex items-start gap-4 mb-6">
                            <div className="p-3 bg-primary/10 rounded-xl">
                                <GraduationCap className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">{t.certifications.education}</h3>
                                <p className="text-sm text-gray-500">{t.certifications.educationDesc}</p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-dark rounded-2xl p-6 shadow-sm">
                            <h4 className="font-semibold text-lg mb-1">Escuela Superior Politécnica de Chimborazo</h4>
                            <p className="text-primary font-medium mb-1">
                                {language === 'en' ? 'Software Engineering' : 'Ingeniería de Software'}
                            </p>
                            <p className="text-sm text-gray-500">
                                {language === 'en' ? '8th Semester (2020 - Present)' : 'Octavo Semestre (2020 - Presente)'}
                            </p>
                        </div>
                    </motion.div>

                    {/* Stats Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-gray-50 dark:bg-dark-100 rounded-3xl p-8"
                    >
                        <div className="flex items-start gap-4 mb-6">
                            <div className="p-3 bg-primary/10 rounded-xl">
                                <Award className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">{t.certifications.results}</h3>
                                <p className="text-sm text-gray-500">{t.certifications.resultsDesc}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat) => (
                                <motion.div
                                    key={stat.id}
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-white dark:bg-dark rounded-2xl p-6 text-center shadow-sm"
                                >
                                    <span className="text-4xl font-black text-primary block mb-2">
                                        {stat.value}
                                    </span>
                                    <p className="font-medium text-sm mb-1">{stat.label}</p>
                                    <p className="text-xs text-gray-500">{stat.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Certifications Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-xl font-bold mb-6 text-center">
                        {language === 'en' ? 'Professional Certifications' : 'Certificaciones Profesionales'}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={cert.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gray-50 dark:bg-dark-100 rounded-xl p-5 hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-primary/10 rounded-lg">
                                        <cert.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-sm mb-1 leading-tight">{cert.title}</h4>
                                        <p className="text-xs text-gray-500">{cert.institution}</p>
                                        <span className="text-xs text-primary font-medium">{cert.year}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Certifications
