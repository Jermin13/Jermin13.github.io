import { motion } from 'framer-motion'
import { X, Instagram, Linkedin, Github, Mail, Phone } from 'lucide-react'
import { useLanguage } from '@/i18n'
import profilePhoto from '@/assets/images/profile_photo.jpg'

const socialLinks = [
    { icon: X, url: 'https://x.com/Jermin_Shadin', label: 'X' },
    { icon: Instagram, url: 'https://www.instagram.com/jermin.exe', label: 'Instagram' },
    { icon: Linkedin, url: 'https://linkedin.com/in/jermin-vasquez-315509264', label: 'LinkedIn' },
    { icon: Github, url: 'https://github.com/Jermin13', label: 'GitHub' },
]

function AboutSection() {
    const { t } = useLanguage()

    return (
        <section className="section" id="about">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <img
                            src={profilePhoto}
                            alt="Jermin Vasquez Torres"
                            className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
                        />

                        {/* Available Badge */}
                        <div className="absolute top-4 left-4 md:left-auto md:-left-4 bg-white dark:bg-dark-100 rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            <span className="text-sm font-medium">{t.about.available}</span>
                        </div>
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-sm font-medium text-primary mb-4 tracking-wider uppercase">
                            {t.about.label}
                        </h2>
                        <h3 className="heading-lg mb-6">
                            JERMIN SHADIN<br />VASQUEZ TORRES
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                            {t.about.description}
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-6 mb-8">
                            <div className="bg-gray-50 dark:bg-dark-100 rounded-2xl p-6">
                                <span className="text-4xl font-bold text-primary">3+</span>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                    {t.about.yearsExp}
                                </p>
                            </div>
                            <div className="bg-gray-50 dark:bg-dark-100 rounded-2xl p-6">
                                <span className="text-4xl font-bold text-primary">6+</span>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                    {t.about.projects}
                                </p>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-3 mb-8">
                            <a
                                href="mailto:shadinjermin@gmail.com"
                                className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                            >
                                <Mail className="w-5 h-5" />
                                shadinjermin@gmail.com
                            </a>
                            <a
                                href="tel:+593997349143"
                                className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                            >
                                <Phone className="w-5 h-5" />
                                +593 997 349 143
                            </a>
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
    )
}

export default AboutSection
