import { Link } from 'react-router-dom'
import { Instagram, X, Linkedin, Github, Mail, Phone } from 'lucide-react'
import { useLanguage } from '@/i18n'

const socialLinks = [
    { name: 'X', icon: X, url: 'https://x.com/Jermin_Shadin' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/jermin.exe' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/jermin-vasquez-315509264' },
    { name: 'GitHub', icon: Github, url: 'https://github.com/Jermin13' },
]

function Footer() {
    const { t } = useLanguage()
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gray-50 dark:bg-dark-100 py-12 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Main Footer Content */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
                    {/* Left - Contact Info */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-gray-500" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">{t.footer.email} :</span>
                            <a
                                href="mailto:shadinjermin@gmail.com"
                                className="text-sm hover:text-primary transition-colors"
                            >
                                shadinjermin@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-gray-500" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">{t.footer.phone} :</span>
                            <a
                                href="tel:+593997349143"
                                className="text-sm hover:text-primary transition-colors"
                            >
                                +593 997 349 143
                            </a>
                        </div>
                    </div>

                    {/* Right - Social Links */}
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600 dark:text-gray-400 mr-2">{t.footer.social} :</span>
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full bg-gray-100 dark:bg-dark-200 hover:bg-primary hover:text-white transition-all duration-300"
                                    aria-label={social.name}
                                >
                                    <social.icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-200 dark:border-dark-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {t.footer.copyright.replace('{year}', currentYear)}
                    </p>

                    {/* Available for work badge */}
                    <Link
                        to="/#contact"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-sm font-medium text-primary">{t.footer.available}</span>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
