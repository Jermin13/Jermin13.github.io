import { motion } from 'framer-motion'
import { X, Instagram, Linkedin, Github, Mail, Phone, MapPin, Calendar, GraduationCap, Briefcase } from 'lucide-react'
import { useLanguage } from '@/i18n'
import profilePhoto from '@/assets/images/profile_photo.jpg'
import certEspoch from '@/assets/images/cert_espoch.png'

const socialLinks = [
    { icon: X, url: 'https://x.com/Jermin_Shadin', label: 'X' },
    { icon: Instagram, url: 'https://www.instagram.com/jermin.exe', label: 'Instagram' },
    { icon: Github, url: 'https://github.com/Jermin13', label: 'GitHub' },
    { icon: Linkedin, url: 'https://linkedin.com/in/jermin-vasquez-315509264', label: 'LinkedIn' },
]

const skillCategories = [
    {
        title: 'Lenguajes & Backend',
        skills: [
            { name: 'JavaScript', level: 75 },
            { name: 'Node.js', level: 80 },
            { name: 'Python', level: 65 },
            { name: 'C# / .NET', level: 55 },
        ]
    },
    {
        title: 'Bases de Datos & BI',
        skills: [
            { name: 'SQL / SQL Server', level: 88 },
            { name: 'PostgreSQL', level: 85 },
            { name: 'Power BI', level: 75 },
        ]
    },
    {
        title: 'Frontend',
        skills: [
            { name: 'React', level: 85 },
            { name: 'Vite', level: 80 },
            { name: 'Tailwind CSS', level: 90 },
            { name: 'HTML5 / Bootstrap', level: 85 },
        ]
    },
    {
        title: 'Herramientas',
        skills: [
            { name: 'Git / GitHub', level: 85 },
            { name: 'Docker', level: 70 },
            { name: 'JMeter', level: 70 },
        ]
    },
    {
        title: 'Especialidades',
        skills: [
            { name: 'Cybersecurity', level: 82 },
            { name: 'IoT / YOLOv11', level: 80 },
        ]
    }
]

const certifications = [
    {
        id: 1,
        title: 'Ingenieria de Software',
        titleEn: 'Software Engineering',
        institution: 'ESPOCH',
        image: certEspoch,
        year: '2020 - Presente',
        type: 'education',
    },
    {
        id: 2,
        title: 'Desarrollo Web: Introduccion a HTML y Plan de Diseno',
        titleEn: 'Web Development: Introduction to HTML and Design Plan',
        institution: 'ESPOCH',
        image: certEspoch,
        year: '2022',
        type: 'certification',
    },
    {
        id: 3,
        title: 'Desarrollo y Optimizacion de Scripts en SQL Server',
        titleEn: 'SQL Server Script Development and Optimization',
        institution: 'ESPOCH / ENCUBA S.C.',
        image: certEspoch,
        year: '2023',
        type: 'certification',
    },
    {
        id: 4,
        title: 'Proteccion contra amenazas avanzadas con Microsoft Defender for Identity',
        titleEn: 'Advanced Threat Protection with Microsoft Defender for Identity',
        institution: 'ESPOCH / ENCUBA S.C.',
        image: certEspoch,
        year: '2023',
        type: 'certification',
    },
    {
        id: 5,
        title: 'Hardening y Zero Trust desde Zero-T',
        titleEn: 'Hardening and Zero Trust from Zero-T',
        institution: 'ESPOCH / ENCUBA S.C.',
        image: certEspoch,
        year: '2023',
        type: 'certification',
    },
    {
        id: 6,
        title: 'Aplicacion de la Inteligencia Artificial en la Forense Digital',
        titleEn: 'AI Application in Digital Forensics',
        institution: 'ESPOCH / ENCUBA S.C.',
        image: certEspoch,
        year: '2023',
        type: 'certification',
    },
]


function About() {
    const { language, t } = useLanguage()

    return (
        <div className="pt-24">
            {/* Hero Section */}
            <section className="section">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <img
                                src={profilePhoto}
                                alt="Jermin Vasquez Torres"
                                className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
                            />
                            {/* Decorative elements */}
                            <div className="absolute -z-10 top-8 left-8 w-full h-full bg-primary/20 rounded-3xl" />
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-medium mb-6">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                {t.about.available}
                            </span>

                            <h1 className="heading-lg mb-4">
                                {t.aboutPage.greeting}<br />
                                <span className="text-primary">Jermin Vasquez</span>
                            </h1>

                            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                                {t.aboutPage.intro}
                            </p>

                            {/* Quick Info */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                                    <MapPin className="w-5 h-5 text-primary" />
                                    <span>{t.aboutPage.location}</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                                    <Calendar className="w-5 h-5 text-primary" />
                                    <span>{t.aboutPage.yearsLabel}</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                                    <GraduationCap className="w-5 h-5 text-primary" />
                                    <span>{t.aboutPage.degreeLabel}</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                                    <Briefcase className="w-5 h-5 text-primary" />
                                    <span>{t.aboutPage.projectsLabel}</span>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-4">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-full bg-gray-100 dark:bg-dark-100 hover:bg-primary hover:text-white transition-all duration-300"
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="section bg-gray-50 dark:bg-dark-100">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="heading-lg mb-4">{t.aboutPage.skillsTitle}</h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            {t.aboutPage.skillsDesc}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {skillCategories.map((category, catIndex) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: catIndex * 0.1 }}
                            >
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <span className="w-8 h-1 bg-primary rounded-full"></span>
                                    {category.title}
                                </h3>
                                <div className="space-y-6">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div key={skill.name}>
                                            <div className="flex justify-between mb-2">
                                                <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                                                <span className="text-primary font-semibold">{skill.level}%</span>
                                            </div>
                                            <div className="h-2 bg-gray-200 dark:bg-dark-200 rounded-full overflow-hidden text-xs flex">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, delay: (catIndex * 0.1) + (skillIndex * 0.05) }}
                                                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="section">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="heading-lg mb-4">{t.aboutPage.experienceTitle}</h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            {t.aboutPage.experienceDesc}
                        </p>
                    </motion.div>

                    <div className="max-w-3xl mx-auto space-y-8">
                        {t.aboutPage.experience.map((exp, index) => (
                            <motion.div
                                key={exp.title}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative pl-8 border-l-2 border-primary"
                            >
                                <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full -translate-x-[9px]" />
                                <span className="text-sm text-primary font-medium">{exp.period}</span>
                                <h3 className="text-xl font-bold mt-1">{exp.title}</h3>
                                <p className="text-gray-500 dark:text-gray-400">{exp.company}</p>
                                <p className="text-gray-600 dark:text-gray-400 mt-2">{exp.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications Section */}
            <section className="section bg-gray-50 dark:bg-dark-100">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="heading-lg mb-4">{t.aboutPage.certificationsTitle}</h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            {t.aboutPage.certificationsDesc}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={cert.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white dark:bg-dark rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                            >
                                <div className="h-48 bg-gray-100 dark:bg-dark-200 flex items-center justify-center p-8">
                                    <img
                                        src={cert.image}
                                        alt={cert.institution}
                                        className="max-h-full max-w-full object-contain"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-lg mb-1">
                                        {language === 'en' ? cert.titleEn : cert.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">{cert.institution}</p>
                                    <span className="text-primary text-sm font-medium">{cert.year}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="section">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-primary rounded-3xl p-8 md:p-16 text-center text-white"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.aboutPage.ctaTitle}</h2>
                        <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                            {t.aboutPage.ctaDesc}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="mailto:shadinjermin@gmail.com"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-medium hover:scale-105 transition-transform"
                            >
                                <Mail className="w-5 h-5" />
                                shadinjermin@gmail.com
                            </a>
                            <a
                                href="tel:+593997349143"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-primary transition-all"
                            >
                                <Phone className="w-5 h-5" />
                                +593 997 349 143
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default About
