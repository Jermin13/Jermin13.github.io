import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, X } from 'lucide-react'
import { useLanguage } from '@/i18n'

// Import project images
import kichwaImg from '@/assets/images/projects/kichwainterpreter.png'
import smartparkingImg from '@/assets/images/projects/smartparking.jpg'
import mediagendaImg from '@/assets/images/projects/mediagenda.jpg'
import lahuecaImg from '@/assets/images/projects/lahuecadelsabor.jpg'
import fudempre from '@/assets/images/projects/fudempre.png'
import swissportImg from '@/assets/images/projects/swissport.png'

const allProjects = [
    {
        id: 1,
        title: 'KichwaInterpreter',
        image: kichwaImg,
        tags: ['Python', 'Parsing', 'AST', 'Compilers'],
        category: 'Software',
        link: '#',
        github: 'https://github.com/Jermin13',
        featured: true,
    },
    {
        id: 2,
        title: 'Smart Parking System',
        image: smartparkingImg,
        tags: ['Python', 'YOLOv11', 'OpenCV', 'Computer Vision'],
        category: 'IoT',
        link: '#',
        github: 'https://github.com/Jermin13',
        featured: true,
    },
    {
        id: 3,
        title: 'CedulaEc',
        image: mediagendaImg,
        tags: ['Python', 'Validation', 'Library'],
        category: 'Backend',
        link: '#',
        github: 'https://github.com/Jermin13',
        featured: true,
    },
    {
        id: 4,
        title: 'La Hueca del Sabor',
        image: lahuecaImg,
        tags: ['Microservicios', 'Docker', 'React', 'Node.js', 'Dialogflow'],
        category: 'Full Stack',
        link: '#',
        github: 'https://github.com/Jermin13',
        featured: true,
    },
    {
        id: 5,
        title: 'FUDEMPRE Website',
        image: fudempre,
        tags: ['HTML', 'CSS', 'JavaScript', 'Web Design'],
        category: 'Web',
        link: '#',
        github: '#',
        featured: true,
    },
    {
        id: 6,
        title: 'Information Systems and Data Processing',
        image: swissportImg,
        tags: ['React', 'Django', 'PostgreSQL', 'Python', 'ETL', 'BI'],
        category: 'Full Stack',
        link: '#',
        github: '#',
        featured: true,
        whiteBg: true,
    },
]


function Projects() {
    const { language, t } = useLanguage()
    const [activeCategory, setActiveCategory] = useState('all')
    const [selectedProject, setSelectedProject] = useState(null)

    const categories = [
        { key: 'all', label: t.projectsPage.all },
        { key: 'Software', label: 'Software' },
        { key: 'IoT', label: 'IoT' },
        { key: 'Backend', label: 'Backend' },
        { key: 'Full Stack', label: 'Full Stack' },
        { key: 'Web', label: 'Web' },
    ]

    const filteredProjects = activeCategory === 'all'
        ? allProjects
        : allProjects.filter(p => p.category === activeCategory)


    // Get translated description for a project
    const getProjectDescription = (projectId) => {
        const projectData = t.projectsPage.projects.find(p => p.id === projectId)
        return projectData ? projectData.description : ''
    }

    return (
        <div className="pt-24">
            {/* Header Section */}
            <section className="section pb-8">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-8"
                    >
                        <h1 className="heading-lg mb-4">{t.projectsPage.title}</h1>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            {t.projectsPage.description}
                        </p>
                    </motion.div>

                    {/* Filter Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-3"
                    >
                        {categories.map((category) => (
                            <button
                                key={category.key}
                                onClick={() => setActiveCategory(category.key)}
                                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeCategory === category.key
                                    ? 'bg-primary text-white'
                                    : 'bg-gray-100 dark:bg-dark-100 hover:bg-gray-200 dark:hover:bg-dark-200'
                                    }`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="section pt-8">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {filteredProjects.map((project, index) => (
                            <motion.article
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 30 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group bg-white dark:bg-dark-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className={`relative overflow-hidden ${project.whiteBg ? 'bg-gray-100 p-12 flex items-center justify-center' : ''}`}>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className={`w-full transition-transform duration-500 group-hover:scale-110 ${project.whiteBg ? 'h-48 object-contain' : 'h-72 object-cover'}`}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <span className="text-white font-medium">{t.projectsPage.viewDetails}</span>
                                    </div>
                                    {project.featured && (
                                        <span className="absolute top-4 right-4 px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
                                            {t.projectsPage.featured}
                                        </span>
                                    )}
                                </div>

                                <div className="p-6">
                                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                                        {project.category}
                                    </span>
                                    <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                                        {getProjectDescription(project.id)}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.slice(0, 4).map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-xs font-medium px-3 py-1 bg-gray-100 dark:bg-dark-200 rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Modal */}
            {selectedProject && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                    onClick={() => setSelectedProject(null)}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="bg-white dark:bg-dark-100 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className={`relative ${selectedProject.whiteBg ? 'bg-gray-100 p-12 flex items-center justify-center' : ''}`}>
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className={`w-full ${selectedProject.whiteBg ? 'h-40 object-contain' : 'h-64 object-cover'}`}
                            />
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-dark/90 rounded-full hover:bg-white dark:hover:bg-dark transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="p-8">
                            <span className="text-sm font-medium text-primary uppercase tracking-wider">
                                {selectedProject.category}
                            </span>
                            <h2 className="text-2xl font-bold mt-2 mb-4">{selectedProject.title}</h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                {getProjectDescription(selectedProject.id)}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {selectedProject.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-sm font-medium px-4 py-2 bg-gray-100 dark:bg-dark-200 rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                {selectedProject.link !== '#' && (
                                    <a
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary flex-1"
                                    >
                                        {t.projectsPage.viewProject}
                                        <ArrowUpRight className="w-4 h-4 ml-2" />
                                    </a>
                                )}
                                <a
                                    href={selectedProject.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline flex-1"
                                >
                                    {t.projectsPage.github}
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </div>
    )
}

export default Projects
