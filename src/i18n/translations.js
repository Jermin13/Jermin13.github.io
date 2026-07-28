// Translations for the portfolio
export const translations = {
    es: {
        // Navigation
        nav: {
            home: 'Inicio',
            about: 'Sobre mi',
            projects: 'Proyectos',
            contact: 'Contacta',
        },
        common: {
            close: 'Cerrar',
            contact: 'Contáctame',
        },
        // Hero
        hero: {
            greeting: 'Hola, soy',
            subtitle: 'Software Engineer | Full Stack Developer',
            hi: 'Hola',
            viewProjects: 'Ver proyectos',
            downloadCV: 'Descargar CV',
            contactMe: 'Contáctame',
        },
        // Services
        services: {
            title: '¿En qué te puedo ayudar?',
            moreInfo: 'Más información',
            items: [
                {
                    title: '1. Desarrollo Full Stack',
                    skills: [
                        'Aplicaciones web con Node.js y .NET',
                        'Interfaces con HTML5 y Bootstrap',
                        'APIs RESTful escalables',
                        'JavaScript para proyectos dinámicos',
                    ],
                    detailedDescription: 'Desarrollo de aplicaciones web completas utilizando tecnologías modernas. Me encargo desde la arquitectura del servidor y la gestión de bases de datos hasta la creación de interfaces de usuario interactivas y responsivas. Mi enfoque se centra en la escalabilidad y el rendimiento óptimo.',
                },
                {
                    title: '2. Bases de Datos',
                    skills: [
                        'SQL Server y PostgreSQL',
                        'Optimización de consultas SQL',
                        'Diseño de esquemas relacionales',
                        'Análisis con Power BI',
                    ],
                    detailedDescription: 'Diseño y administración de bases de datos relacionales eficientes. Especializado en la optimización de consultas complejas para mejorar el tiempo de respuesta de las aplicaciones y en la creación de dashboards estratégicos para la toma de decisiones basada en datos.',
                },
                {
                    title: '3. Ciberseguridad',
                    skills: [
                        'Hardening de sistemas',
                        'Microsoft Defender for Identity',
                        'Implementación Zero Trust',
                        'Forense digital con IA',
                    ],
                    detailedDescription: 'Implementación de medidas de seguridad avanzadas para proteger activos digitales. Desde el endurecimiento de sistemas (hardening) hasta el análisis forense asistido por inteligencia artificial, garantizando la integridad y confidencialidad de la información bajo estándares modernos.',
                },
                {
                    title: '4. IoT y Visión Artificial',
                    skills: [
                        'Detección con YOLOv11',
                        'Procesamiento con OpenCV',
                        'Sistemas de Smart City',
                        'Integración hardware-software',
                    ],
                    detailedDescription: 'Creación de soluciones inteligentes que conectan el mundo físico con el digital. Desarrollo sistemas de visión artificial para monitoreo en tiempo real e integración con dispositivos IoT para crear entornos automatizados y eficientes.',
                },
                {
                    title: '5. Sistemas de Información y BI',
                    skills: [
                        'Dashboards interactivos y tiempo real',
                        'Arquitectura de Datos (Metodología Kimball)',
                        'ETL dinámico (Extracción, Limpieza, Carga)',
                        'Migración y optimización de datos',
                    ],
                    detailedDescription: 'Transformación de datos crudos en información accionable. Utilizo metodologías de arquitectura de datos como Kimball para construir almacenes de datos robustos, procesos ETL eficientes y visualizaciones dinámicas que impulsan el crecimiento del negocio.',
                },
            ],
        },
        // About
        about: {
            label: 'Sobre mí',
            description: 'Ingeniero de Software con experiencia en desarrollo Full Stack y automatización de procesos, con participación en proyectos corporativos de análisis de requerimientos, optimización operativa e integración de soluciones web. Python, Django, React, PostgreSQL, despliegue y testing.',
            yearsExp: 'Años de Experiencia',
            projects: 'Proyectos Completados',
            available: 'Disponible para trabajar',
        },
        // About Page
        aboutPage: {
            greeting: 'Hola, soy',
            intro: 'Ingeniero de Software con experiencia en desarrollo Full Stack y automatización de procesos, con participación en proyectos corporativos de análisis de requerimientos, optimización operativa e integración de soluciones web. Mi experiencia en logística y atención al cliente me brinda una visión integral del software orientado al negocio.',
            location: 'Quito, Ecuador',
            yearsLabel: '3+ años de experiencia',
            degreeLabel: 'Ing. de Software',
            projectsLabel: '6+ proyectos',
            languagesTitle: 'Idiomas',
            languages: [
                { name: 'Español', level: 'Nativo' },
                { name: 'Inglés', level: 'B1 (preparando B2)' },
            ],
            skillsTitle: 'Mis Habilidades',
            skillsDesc: 'Tecnologías y herramientas con las que trabajo día a día',
            experienceTitle: 'Experiencia',
            experienceDesc: 'Mi trayectoria profesional',
            certificationsTitle: 'Certificaciones',
            certificationsDesc: 'Formación académica y certificaciones profesionales',
            ctaTitle: '¿Listo para trabajar juntos?',
            ctaDesc: 'Estoy siempre abierto a nuevas oportunidades y proyectos interesantes. ¡No dudes en contactarme!',
            experience: [
                {
                    title: 'Software Engineer & Consultor Funcional & AI',
                    company: 'Swissport EMSA',
                    period: 'Dic 2024 - Jun 2026',
                    description: 'Diseño y desarrollo de soluciones Full Stack para el sector logístico y aeroportuario, incluyendo sistemas de información, automatización de procesos e integración de IA local.',
                    highlights: [
                        'Reduje el tiempo de generación de reportes en un 99.6% automatizando la reportería manual mediante análisis de procesos en Syncro Cargo.',
                        'Centralicé información operativa para 12 usuarios (analistas, jefaturas, auditoría, gerencia) con React, Django, PostgreSQL y Chart.js.',
                        'Implementé procesos ETL con modelado dimensional (Kimball) para migrar datos desde Google Sheets a PostgreSQL.',
                        'Optimicé la carga de indicadores en vivo con Celery y Redis, autoactualizando reportes cada 30 min.',
                        'Lideré el relevamiento de requisitos funcionales para RRHH Emsa Line, digitalizando procesos críticos para más de 2.000 empleados.',
                        'Implementé arquitectura multi-tenant con PostgreSQL y Django, con control granular de roles y permisos (RBAC) y auditoría integral.',
                        'Diseñé e implementé un servidor MCP (Model Context Protocol) con Node.js + Ollama para detección automatizada de clientes potenciales.',
                        'Formulé un proyecto de agente conversacional local basado en Qwen para garantizar la confidencialidad de datos sensibles.',
                    ],
                },
                {
                    title: 'Full Stack Developer',
                    company: 'Freelance',
                    period: 'Ene 2023 - Mar 2026',
                    description: 'Desarrollo de plataformas web y móviles para negocios, con enfoque en soluciones omnicanal y offline-first.',
                    highlights: [
                        'Desarrollé una plataforma unificada Web + Mobile + API (React Native/Expo, Django REST Framework, PostgreSQL) integrando ventas, inventario y facturación.',
                        'Implementé operación offline-first con WatermelonDB y sincronización automática, más impresión térmica por Bluetooth y WiFi.',
                        'Creé dashboards en tiempo real centralizando datos comerciales multi-sucursal para control de inventario y ventas.',
                        'Realicé relevamiento de requisitos con dueños de negocio, identificando oportunidades de mejora en procesos de inventario y facturación.',
                    ],
                },
            ],
        },
        // Projects
        projects: {
            title: 'PROYECTOS',
            description: 'Proyectos que reflejan mi pasión por combinar tecnología con impacto social.',
            viewAll: 'Ver todos',
            viewProject: 'Ver proyecto',
        },
        // Projects Page
        projectsPage: {
            title: 'Mis Proyectos',
            description: 'Una colección de proyectos desde aplicaciones web hasta sistemas IoT y soluciones con IA.',
            all: 'Todos',
            viewDetails: 'Ver detalles',
            featured: 'Destacado',
            viewProject: 'Ver proyecto',
            github: 'GitHub',
            privateRepo: 'Repositorio privado',
            projects: [
                {
                    id: 2,
                    title: 'Smart Parking System',
                    description: 'Sistema de parqueo inteligente basado en visión artificial que detecta espacios libres usando cámaras y YOLOv11, sin sensores físicos.',
                },
                {
                    id: 3,
                    title: 'MediAgenda',
                    description: 'Prototipo de aplicación móvil para adultos mayores enfocada en el registro y control de medicamentos para enfermedades crónicas comunes como diabetes, hipertensión y asma.',
                },
                {
                    id: 4,
                    title: 'La Hueca del Sabor',
                    description: 'Sistema integral de gestión para restaurantes con arquitectura de microservicios. Incluye módulos de pedidos en línea, inventario, análisis de ventas y chatbot integrado. Implementado con Node.js, Express, PostgreSQL, Redis y JWT para autenticación stateless. Despliegue contenerizado con Docker Compose.',
                },
                {
                    id: 5,
                    title: 'FUDEMPRE Website',
                    description: 'Desarrollo de la página web principal para la Fundación Emprender y No Depender (FUDEMPRE), organización sin fines de lucro en Riobamba enfocada en inclusión financiera y emprendimientos sostenibles.',
                },
                {
                    id: 6,
                    title: 'Sistemas de Información y Procesamiento de Datos',
                    description: 'Creación de un sistema web para visualización dinámica de datos en el área de carga de Swissport EMSA bajo la metodología Kimball. Incluye procesos ETL, dashboards interactivos en tiempo real con Chart.js, y optimización de indicadores en vivo con Celery y Redis. Reducción del tiempo de generación de reportes en un 99.6%. Migración de datos desde Google Sheets a PostgreSQL.',
                },
                {
                    id: 7,
                    title: 'BPJ Bazar - Plataforma Omnicanal',
                    description: 'Plataforma unificada Web + Mobile + API para gestión de ventas, inventario y facturación. Desarrollada con React Native/Expo POS, Django REST Framework y PostgreSQL. Operación offline-first con WatermelonDB, impresión térmica por Bluetooth y WiFi, y dashboards en tiempo real multi-sucursal.',
                },
            ],

        },
        // Certifications
        certifications: {
            title: 'Certificaciones',
            description: 'Mi historial de estudios y certificaciones profesionales.',
            education: 'Educación',
            educationDesc: 'Formación académica',
            results: 'Resultados',
            resultsDesc: 'Métricas de trabajo',
            satisfaction: 'Tasa de Satisfacción',
            satisfactionDesc: 'Clientes satisfechos con el trabajo realizado',
            growth: 'Crecimiento',
            growthDesc: 'Crecimiento en proyectos completados',
        },
        // Contact
        contact: {
            label: 'Contacto',
            title: '¿Tienes un proyecto en mente?',
            description: 'Estoy disponible para proyectos freelance y oportunidades de colaboración. Cuéntame sobre tu idea y trabajemos juntos para hacerla realidad.',
            email: 'Email',
            phone: 'Llamar Hoy',
            social: 'Social',
            name: 'Nombre',
            namePlaceholder: 'Tu nombre',
            emailPlaceholder: 'tu@email.com',
            service: 'Servicio',
            servicePlaceholder: 'Selecciona un servicio',
            message: 'Mensaje',
            messagePlaceholder: 'Cuéntame sobre tu proyecto...',
            submit: 'Enviar mensaje',
            sending: 'Enviando...',
            sent: '¡Mensaje enviado!',
            sentDesc: 'Gracias por contactarme. Te responderé lo antes posible.',
            serviceOptions: [
                'Desarrollo Full Stack',
                'Bases de Datos',
                'Ciberseguridad',
                'IoT y Visión Artificial',
                'Sistemas de Información y BI',
                'Consultoría Técnica',
                'Otro',
            ],
        },
        // Footer
        footer: {
            email: 'Email',
            phone: 'Llamar Hoy',
            social: 'Social',
            downloadCV: 'Descargar CV',
            copyright: '© Copyright {year}. Todos los derechos reservados por Jermin Vasquez.',
            available: 'Disponible para trabajar',
        },
    },
    en: {
        // Navigation
        nav: {
            home: 'Home',
            about: 'About',
            projects: 'Projects',
            contact: 'Contact',
        },
        common: {
            close: 'Close',
            contact: 'Contact me',
        },
        // Hero
        hero: {
            greeting: "Hi, I'm",
            subtitle: 'Software Engineer | Full Stack Developer',
            hi: 'Hi',
            viewProjects: 'View projects',
            downloadCV: 'Download CV',
            contactMe: 'Contact me',
        },
        // Services
        services: {
            title: 'How can I help you?',
            moreInfo: 'More information',
            items: [
                {
                    title: '1. Full Stack Development',
                    skills: [
                        'Web apps with Node.js and .NET',
                        'Interfaces with HTML5 and Bootstrap',
                        'Scalable RESTful APIs',
                        'JavaScript for dynamic projects',
                    ],
                    detailedDescription: 'Full-stack web application development using modern technologies. I handle everything from server architecture and database management to the creation of interactive and responsive user interfaces. My focus is on scalability and optimal performance.',
                },
                {
                    title: '2. Databases',
                    skills: [
                        'SQL Server and PostgreSQL',
                        'SQL query optimization',
                        'Relational schema design',
                        'Power BI analytics',
                    ],
                    detailedDescription: 'Design and administration of efficient relational databases. Specialized in optimizing complex queries to improve application response times and creating strategic dashboards for data-driven decision making.',
                },
                {
                    title: '3. Cybersecurity',
                    skills: [
                        'System hardening',
                        'Microsoft Defender for Identity',
                        'Zero Trust implementation',
                        'Digital forensics with AI',
                    ],
                    detailedDescription: 'Implementation of advanced security measures to protect digital assets. From system hardening to AI-assisted forensic analysis, ensuring information integrity and confidentiality under modern standards.',
                },
                {
                    title: '4. IoT & Computer Vision',
                    skills: [
                        'Detection with YOLOv11',
                        'OpenCV processing',
                        'Smart City systems',
                        'Hardware-software integration',
                    ],
                    detailedDescription: 'Creation of intelligent solutions connecting the physical and digital worlds. I develop computer vision systems for real-time monitoring and integration with IoT devices to create automated and efficient environments.',
                },
                {
                    title: '5. Information Systems & BI',
                    skills: [
                        'Interactive & real-time dashboards',
                        'Data Architecture (Kimball Methodology)',
                        'Dynamic ETL (Extract, Clean, Load)',
                        'Data migration and optimization',
                    ],
                    detailedDescription: 'Transforming raw data into actionable information. I use data architecture methodologies like Kimball to build robust data warehouses, efficient ETL processes, and dynamic visualizations that drive business growth.',
                },
            ],
        },
        // About
        about: {
            label: 'About me',
            description: "Software Engineer with experience in Full Stack development and process automation, involved in corporate projects for requirements analysis, operational optimization, and web solution integration. Python, Django, React, PostgreSQL, deployment and testing.",
            yearsExp: 'Years of Experience',
            projects: 'Completed Projects',
            available: 'Available for work',
        },
        // About Page
        aboutPage: {
            greeting: "Hi, I'm",
            intro: "Software Engineer with experience in Full Stack development and process automation, involved in corporate projects for requirements analysis, operational optimization, and web solution integration. My background in logistics and customer service gives me a strong business-oriented perspective on software development.",
            location: 'Quito, Ecuador',
            yearsLabel: '3+ years of experience',
            degreeLabel: 'Software Engineering',
            projectsLabel: '6+ projects',
            languagesTitle: 'Languages',
            languages: [
                { name: 'Spanish', level: 'Native' },
                { name: 'English', level: 'B1 (preparing B2)' },
            ],
            skillsTitle: 'My Skills',
            skillsDesc: 'Technologies and tools I work with every day',
            experienceTitle: 'Experience',
            experienceDesc: 'My professional journey',
            certificationsTitle: 'Certifications',
            certificationsDesc: 'Academic training and professional certifications',
            ctaTitle: 'Ready to work together?',
            ctaDesc: "I'm always open to new opportunities and interesting projects. Don't hesitate to contact me!",
            experience: [
                {
                    title: 'Software Engineer & Functional Consultant & AI',
                    company: 'Swissport EMSA',
                    period: 'Dec 2024 - Jun 2026',
                    description: 'Design and development of Full Stack solutions for the logistics and airport sector, including information systems, process automation, and local AI integration.',
                    highlights: [
                        'Reduced report generation time by 99.6% by automating manual reporting through process analysis in Syncro Cargo.',
                        'Centralized operational data for 12 users (analysts, management, audit, general management) with React, Django, PostgreSQL and Chart.js.',
                        'Implemented ETL processes with dimensional modeling (Kimball) to migrate data from Google Sheets to PostgreSQL.',
                        'Optimized live indicator loading with Celery and Redis, auto-refreshing reports every 30 min.',
                        'Led functional requirements gathering for RRHH Emsa Line, digitalizing critical processes for over 2,000 employees.',
                        'Implemented multi-tenant architecture with PostgreSQL and Django, with granular RBAC and full audit trail.',
                        'Designed and implemented an MCP (Model Context Protocol) server with Node.js + Ollama for automated lead detection.',
                        'Formulated a local conversational agent project based on Qwen to ensure sensitive data confidentiality.',
                    ],
                },
                {
                    title: 'Full Stack Developer',
                    company: 'Freelance',
                    period: 'Jan 2023 - Mar 2026',
                    description: 'Development of web and mobile platforms for businesses, focusing on omnichannel and offline-first solutions.',
                    highlights: [
                        'Developed a unified Web + Mobile + API platform (React Native/Expo, Django REST Framework, PostgreSQL) integrating sales, inventory, and invoicing.',
                        'Implemented offline-first operation with WatermelonDB and automatic sync, plus thermal printing via Bluetooth and WiFi.',
                        'Created real-time dashboards centralizing multi-branch commercial data for inventory and sales control.',
                        'Conducted requirements gathering with business owners, identifying improvement opportunities in inventory and invoicing processes.',
                    ],
                },
            ],
        },
        // Projects
        projects: {
            title: 'PROJECTS',
            description: 'Projects that reflect my passion for combining technology with social impact.',
            viewAll: 'View all',
            viewProject: 'View project',
        },
        // Projects Page
        projectsPage: {
            title: 'My Projects',
            description: 'A collection of projects from web applications to IoT systems and AI solutions.',
            all: 'All',
            viewDetails: 'View details',
            featured: 'Featured',
            viewProject: 'View project',
            github: 'GitHub',
            privateRepo: 'Private repository',
            projects: [
                {
                    id: 2,
                    title: 'Smart Parking System',
                    description: 'Smart parking system based on computer vision that detects free spaces using cameras and YOLOv11, without physical sensors.',
                },
                {
                    id: 3,
                    title: 'MediAgenda',
                    description: 'Mobile application prototype for older adults focused on tracking and managing medications for chronic diseases such as diabetes, hypertension, and asthma.',
                },
                {
                    id: 4,
                    title: 'La Hueca del Sabor',
                    description: 'Comprehensive restaurant management system with microservices architecture. Includes online ordering, inventory, sales analytics, and integrated chatbot. Built with Node.js, Express, PostgreSQL, Redis, and JWT for stateless authentication. Containerized deployment with Docker Compose.',
                },
                {
                    id: 5,
                    title: 'FUDEMPRE Website',
                    description: 'Development of the main website for Fundacion Emprender y No Depender (FUDEMPRE), a non-profit organization in Riobamba focused on financial inclusion and sustainable entrepreneurship.',
                },
                {
                    id: 6,
                    title: 'Information Systems and Data Processing',
                    description: 'Web system for dynamic data visualization in the Swissport EMSA cargo area under the Kimball methodology. Includes ETL processes, real-time interactive dashboards with Chart.js, and live indicator optimization with Celery and Redis. Reduced report generation time by 99.6%. Data migration from Google Sheets to PostgreSQL.',
                },
                {
                    id: 7,
                    title: 'BPJ Bazar - Omnichannel Platform',
                    description: 'Unified Web + Mobile + API platform for sales, inventory, and invoicing management. Built with React Native/Expo POS, Django REST Framework, and PostgreSQL. Offline-first operation with WatermelonDB, thermal printing via Bluetooth and WiFi, and real-time multi-branch dashboards.',
                },
            ],
        },

        // Certifications
        certifications: {
            title: 'Certifications',
            description: 'My education and professional certification history.',
            education: 'Education',
            educationDesc: 'Academic background',
            results: 'Results',
            resultsDesc: 'Work metrics',
            satisfaction: 'Satisfaction Rate',
            satisfactionDesc: 'Clients satisfied with the work done',
            growth: 'Growth',
            growthDesc: 'Growth in completed projects',
        },
        // Contact
        contact: {
            label: 'Contact',
            title: 'Have a project in mind?',
            description: "I'm available for freelance projects and collaboration opportunities. Tell me about your idea and let's work together to make it happen.",
            email: 'Email',
            phone: 'Call Today',
            social: 'Social',
            name: 'Name',
            namePlaceholder: 'Your name',
            emailPlaceholder: 'your@email.com',
            service: 'Service',
            servicePlaceholder: 'Select a service',
            message: 'Message',
            messagePlaceholder: 'Tell me about your project...',
            submit: 'Send message',
            sending: 'Sending...',
            sent: 'Message sent!',
            sentDesc: 'Thank you for contacting me. I will reply as soon as possible.',
            serviceOptions: [
                'Full Stack Development',
                'Databases',
                'Cybersecurity',
                'IoT & Computer Vision',
                'Information Systems & BI',
                'Technical Consulting',
                'Other',
            ],
        },
        // Footer
        footer: {
            email: 'Email',
            phone: 'Call Today',
            social: 'Social',
            downloadCV: 'Download CV',
            copyright: '© Copyright {year}. All Rights Reserved by Jermin Vasquez.',
            available: 'Available for work',
        },
    },
}
