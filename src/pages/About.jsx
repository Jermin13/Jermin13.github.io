import { motion } from 'framer-motion'
import { X, Instagram, Linkedin, Github, Mail, Phone, MapPin, Calendar, GraduationCap, Briefcase } from 'lucide-react'
import { useLanguage } from '@/i18n'
import profilePhoto from '@/assets/images/profile_photo.jpg'
import certEspoch from '@/assets/images/certificates/cert_espoch.png'
import certEncuba from '@/assets/images/certificates/certificate_incuba.jpg'
import certAnthropic from '@/assets/images/certificates/anthropoic.jpg'
import certSaylor from '@/assets/images/certificates/saylor.png'
import certEURACE from '@/assets/images/certificates/eur-ace.jpg'

const socialLinks = [
    { icon: X, url: 'https://x.com/Jermin_Shadin', label: 'X' },
    { icon: Instagram, url: 'https://www.instagram.com/jermin.exe', label: 'Instagram' },
    { icon: Github, url: 'https://github.com/Jermin13', label: 'GitHub' },
    { icon: Linkedin, url: 'https://linkedin.com/in/jermin-vasquez-315509264', label: 'LinkedIn' },
]

const skillCategories = [
    {
        title: 'Full Stack',
        titleEn: 'Full Stack',
        skills: [
            { name: 'Python / Django', level: 80 },
            { name: 'React / Node.js', level: 85 },
            { name: 'PostgreSQL', level: 85 },
            { name: 'REST APIs / JWT', level: 80 },
        ]
    },
    {
        title: 'Datos / BI',
        titleEn: 'Data / BI',
        skills: [
            { name: 'ETL / Kimball', level: 85 },
            { name: 'Chart.js / KPIs', level: 80 },
            { name: 'Celery / Redis', level: 75 },
        ]
    },
    {
        title: 'DevOps',
        titleEn: 'DevOps',
        skills: [
            { name: 'Docker', level: 75 },
            { name: 'Git / CI/CD', level: 85 },
            { name: 'pytest / JMeter', level: 70 },
            { name: 'DigitalOcean / SonarCloud', level: 65 },
        ]
    },
    {
        title: 'Arquitectura',
        titleEn: 'Architecture',
        skills: [
            { name: 'Microservicios', level: 75 },
            { name: 'Clean Architecture', level: 70 },
            { name: 'RBAC / Multi-Tenant', level: 75 },
        ]
    },
    {
        title: 'LLMs',
        titleEn: 'LLMs',
        skills: [
            { name: 'Claude (Opus, Flash)', level: 75 },
            { name: 'DeepSeek / Qwen', level: 70 },
            { name: 'Ollama', level: 80 },
        ]
    },
    {
        title: 'MCP & Agentes',
        titleEn: 'MCP & Agents',
        skills: [
            { name: 'Node.js MCP SDK', level: 75 },
            { name: 'Agentes Conversacionales', level: 70 },
        ]
    },
    {
        title: 'Consultoría',
        titleEn: 'Consulting',
        skills: [
            { name: 'Análisis de Procesos', level: 80 },
            { name: 'Relevamiento Reqs.', level: 80 },
            { name: 'Casos de Uso IA', level: 75 },
        ]
    },
    {
        title: 'Metodología Ágil',
        titleEn: 'Agile Methodology',
        skills: [
            { name: 'Scrum / Scrumban', level: 80 },
            { name: 'Sprints / HU', level: 80 },
        ]
    },
]

const certifications = [
    {
        id: 1,
        title: 'Ingenieria de Software',
        titleEn: 'Software Engineering',
        institution: 'ESPOCH',
        image: certEspoch,
        year: 'Oct 2020 - Abr 2026',
        type: 'education',
        description: 'Carrera acreditada internacionalmente bajo estándar EUR-ACE. Proyecto de titulación enfocado en arquitectura de microservicios.',
        descriptionEn: 'Internationally accredited program under EUR-ACE standard. Thesis project focused on microservices architecture.',
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
        image: certEncuba,
        year: '2023',
        type: 'certification',
    },
    {
        id: 4,
        title: 'Proteccion contra amenazas avanzadas con Microsoft Defender for Identity',
        titleEn: 'Advanced Threat Protection with Microsoft Defender for Identity',
        institution: 'ESPOCH / ENCUBA S.C.',
        image: certEncuba,
        year: '2023',
        type: 'certification',
    },
    {
        id: 5,
        title: 'Hardening y Zero Trust desde Zero-T',
        titleEn: 'Hardening and Zero Trust from Zero-T',
        institution: 'ESPOCH / ENCUBA S.C.',
        image: certEncuba,
        year: '2023',
        type: 'certification',
    },
    {
        id: 6,
        title: 'Aplicacion de la Inteligencia Artificial en la Forense Digital',
        titleEn: 'AI Application in Digital Forensics',
        institution: 'ESPOCH / ENCUBA S.C.',
        image: certEncuba,
        year: '2023',
        type: 'certification',
    },
    {
        id: 7,
        title: 'Claude Platform 101 & Claude Code 101',
        titleEn: 'Claude Platform 101 & Claude Code 101',
        institution: 'Anthropic',
        image: certAnthropic,
        year: '2025',
        type: 'certification',
    },
    {
        id: 8,
        title: 'CS302: Software Engineering',
        titleEn: 'CS302: Software Engineering',
        institution: 'Saylor University',
        image: certSaylor,
        year: 'Jul 2026',
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
                                    {language === 'en' && category.titleEn ? category.titleEn : category.title}
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

            {/* Languages Section */}
            <section className="section">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="heading-lg mb-4">{t.aboutPage.languagesTitle}</h2>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-6 max-w-2xl mx-auto">
                        {t.aboutPage.languages.map((lang, index) => (
                            <motion.div
                                key={lang.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gray-50 dark:bg-dark-100 rounded-2xl p-6 text-center flex-1 min-w-[200px]"
                            >
                                <h3 className="text-xl font-bold mb-1">{lang.name}</h3>
                                <p className="text-primary font-medium">{lang.level}</p>
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
                                {exp.highlights && exp.highlights.length > 0 && (
                                    <ul className="list-disc pl-5 mt-3 space-y-1.5">
                                        {exp.highlights.map((item, i) => (
                                            <li key={i} className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}
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
                                href="mailto:jerminvasquez13@gmail.com"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-medium hover:scale-105 transition-transform"
                            >
                                <Mail className="w-5 h-5" />
                                jerminvasquez13@gmail.com
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
