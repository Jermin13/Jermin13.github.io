import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '@/i18n'

// Import project images
import kichwaImg from '@/assets/images/projects/kichwainterpreter.png'
import smartparkingImg from '@/assets/images/projects/smartparking.jpg'
import lahuecaImg from '@/assets/images/projects/lahuecadelsabor.jpg'
import fudempre from '@/assets/images/projects/fudempre.png'
import swissportImg from '@/assets/images/projects/swissport.png'

const projects = [
    {
        id: 1,
        title: 'KichwaInterpreter',
        image: kichwaImg,
        tags: ['Python', 'Parsing', 'AST'],
        link: 'https://github.com/Jermin13',
    },
    {
        id: 2,
        title: 'Smart Parking System',
        image: smartparkingImg,
        tags: ['Python', 'YOLOv11', 'OpenCV'],
        link: 'https://github.com/Jermin13',
    },
    {
        id: 4,
        title: 'La Hueca del Sabor',
        image: lahuecaImg,
        tags: ['React', 'Node.js', 'Docker'],
        link: 'https://github.com/Jermin13',
    },
    {
        id: 5,
        title: 'FUDEMPRE Website',
        image: fudempre,
        tags: ['HTML', 'CSS', 'JavaScript'],
        link: '#',
    },
    {
        id: 6,
        title: 'Sistemas de Información y Procesamiento de Datos',
        image: swissportImg,
        tags: ['React', 'Django', 'PostgreSQL', 'BI'],
        link: '#',
        whiteBg: true,
    },
]



function ProjectsSection() {
    const { language, t } = useLanguage()

    // Get translated description for a project
    const getProjectDescription = (projectId) => {
        const projectData = t.projectsPage.projects.find(p => p.id === projectId)
        return projectData ? projectData.description : ''
    }

    return (
        <section className="section bg-gray-50 dark:bg-dark-100" id="projects">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-4"
                >
                    <div>
                        <h2 className="heading-lg mb-2">{t.projects.title}</h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            {t.projects.description}
                        </p>
                    </div>
                    <Link
                        to="/projects"
                        className="btn btn-outline"
                    >
                        {t.projects.viewAll}
                        <ArrowUpRight className="w-4 h-4 ml-2" />
                    </Link>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-white dark:bg-dark rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                        >
                            <div className={`relative overflow-hidden ${project.whiteBg ? 'bg-gray-100 p-8 flex items-center justify-center' : ''}`}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className={`w-full transition-transform duration-500 group-hover:scale-110 ${project.whiteBg ? 'h-32 object-contain' : 'h-64 object-cover'}`}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.slice(0, 3).map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                    {getProjectDescription(project.id)}
                                </p>

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                                >
                                    {t.projects.viewProject}
                                    <ArrowUpRight className="w-4 h-4 ml-1" />
                                </a>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection
