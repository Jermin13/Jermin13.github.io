import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Send, User, Mail, MessageSquare, Briefcase, Phone, X, Instagram, Linkedin, Github } from 'lucide-react'
import { useLanguage } from '@/i18n'

const socialLinks = [
    { name: 'X', icon: X, url: 'https://x.com/Jermin_Shadin' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/jermin.exe' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/jermin-vasquez-315509264' },
    { name: 'GitHub', icon: Github, url: 'https://github.com/Jermin13' },
]

function Contact({ initialService = '' }) {
    const { t } = useLanguage()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: initialService,
        message: '',
    })

    // Update form when initialService changes (from carousel click)
    useEffect(() => {
        if (initialService) {
            setFormData(prev => ({ ...prev, service: initialService }))
        }
    }, [initialService])
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500))

        setIsSubmitting(false)
        setSubmitted(true)
        setFormData({ name: '', email: '', service: '', message: '' })

        // Reset submitted state after 5 seconds
        setTimeout(() => setSubmitted(false), 5000)
    }

    return (
        <section className="section" id="contact">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left - Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-sm font-medium text-primary mb-4 tracking-wider uppercase">
                            {t.contact.label}
                        </h2>
                        <h3 className="heading-lg mb-6">
                            {t.contact.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                            {t.contact.description}
                        </p>

                        {/* Contact Methods */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-dark-100 rounded-xl">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <Mail className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">{t.contact.email}</p>
                                    <a
                                        href="mailto:shadinjermin@gmail.com"
                                        className="font-medium hover:text-primary transition-colors"
                                    >
                                        shadinjermin@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-dark-100 rounded-xl">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <Phone className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">{t.contact.phone}</p>
                                    <a
                                        href="tel:+593997349143"
                                        className="font-medium hover:text-primary transition-colors"
                                    >
                                        +593 997 349 143
                                    </a>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="pt-4">
                                <p className="text-sm text-gray-500 mb-3">{t.contact.social}</p>
                                <div className="flex gap-3">
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 rounded-full bg-gray-100 dark:bg-dark-100 hover:bg-primary hover:text-white transition-all duration-300"
                                            aria-label={social.name}
                                        >
                                            <social.icon className="w-5 h-5" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {submitted ? (
                            <div className="bg-green-50 dark:bg-green-900/20 rounded-3xl p-8 text-center">
                                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Send className="w-8 h-8 text-green-600" />
                                </div>
                                <h4 className="text-xl font-bold mb-2">{t.contact.sent}</h4>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {t.contact.sentDesc}
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-dark-100 rounded-3xl p-8">
                                <div className="space-y-6">
                                    {/* Name */}
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                                            {t.contact.name}
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-dark rounded-xl border border-gray-200 dark:border-dark-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                                placeholder={t.contact.namePlaceholder}
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                                            {t.contact.email}
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-dark rounded-xl border border-gray-200 dark:border-dark-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                                placeholder={t.contact.emailPlaceholder}
                                            />
                                        </div>
                                    </div>

                                    {/* Service */}
                                    <div>
                                        <label htmlFor="service" className="block text-sm font-medium mb-2">
                                            {t.contact.service}
                                        </label>
                                        <div className="relative">
                                            <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <select
                                                id="service"
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                                required
                                                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-dark rounded-xl border border-gray-200 dark:border-dark-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none cursor-pointer"
                                            >
                                                <option value="">{t.contact.servicePlaceholder}</option>
                                                {t.contact.serviceOptions.map((option) => (
                                                    <option key={option} value={option}>
                                                        {option}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                                            {t.contact.message}
                                        </label>
                                        <div className="relative">
                                            <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={4}
                                                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-dark rounded-xl border border-gray-200 dark:border-dark-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                                                placeholder={t.contact.messagePlaceholder}
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center justify-center gap-2">
                                                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                </svg>
                                                {t.contact.sending}
                                            </span>
                                        ) : (
                                            <span className="flex items-center justify-center gap-2">
                                                {t.contact.submit}
                                                <Send className="w-4 h-4" />
                                            </span>
                                        )}
                                    </button>
                                </div>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact
