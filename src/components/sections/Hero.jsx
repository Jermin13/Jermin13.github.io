import { motion } from 'framer-motion'
import { Hand } from 'lucide-react'
import { useLanguage } from '@/i18n'
import profilePhoto from '@/assets/images/profile_photo.jpg'

function Hero({ darkMode, toggleDarkMode }) {
    const { t } = useLanguage()

    return (
        <section className="min-h-screen flex flex-col items-center justify-center pt-24 pb-8 px-4 md:px-8 relative overflow-hidden">
            {/* Background - clean white/dark */}
            <div className="absolute inset-0 -z-10 bg-white dark:bg-dark transition-colors duration-300" />

            <div className="w-full max-w-7xl mx-auto flex-1 flex flex-col justify-center">
                {/* Hero Content - 3 Column Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-8 items-center">

                    {/* Left Column - JERMIN VASQUEZ */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-center lg:text-right order-2 lg:order-1"
                    >
                        <p className="text-xs md:text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2 tracking-[0.2em] uppercase">
                            {t.hero.greeting}
                        </p>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black tracking-[-0.02em] leading-[0.9]">
                            JERMIN
                            <br />
                            VASQUEZ
                        </h1>
                    </motion.div>

                    {/* Center Column - Photo with Hi badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center relative order-1 lg:order-2"
                    >
                        <div className="relative">
                            {/* Profile Photo */}
                            <img
                                src={profilePhoto}
                                alt="Jermin Vasquez"
                                className="w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-56 lg:h-72 xl:w-64 xl:h-80 object-cover rounded-2xl shadow-xl"
                            />

                            {/* Hi Badge - Purple circle with wave hand icon */}
                            <motion.div
                                animate={{
                                    y: [0, -6, 0],
                                    rotate: [0, 15, -15, 0]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute -left-6 -bottom-6 md:-left-8 md:-bottom-8 w-14 h-14 md:w-16 md:h-16 bg-[#7C5CFF] rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:scale-110 transition-transform"
                            >
                                <Hand className="w-7 h-7 md:w-8 md:h-8 text-white" strokeWidth={1.5} />
                            </motion.div>

                        </div>
                    </motion.div>

                    {/* Right Column - SOFTWARE ENGINEER + subtitle */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-center lg:text-left order-3"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black tracking-[-0.02em] leading-[0.9]">
                            SOFTWARE
                            <br />
                            ENGINEER
                        </h1>
                        <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mt-4">
                            {t.hero.subtitle}
                        </p>
                    </motion.div>
                </div>

                {/* Theme Toggle Switch - Bottom center */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="flex justify-center mt-12 lg:mt-16"
                >
                    <button
                        onClick={toggleDarkMode}
                        className={`
                            relative w-14 h-7 rounded-full transition-colors duration-300
                            ${darkMode ? 'bg-gray-600' : 'bg-gray-300'}
                        `}
                        aria-label="Toggle dark mode"
                    >
                        <motion.div
                            layout
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            className={`
                                absolute top-1 w-5 h-5 rounded-full bg-white shadow-md
                                ${darkMode ? 'left-8' : 'left-1'}
                            `}
                        />
                    </button>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
