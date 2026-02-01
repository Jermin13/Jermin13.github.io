# Plantilla de Portafolio Profesional

Plantilla de portafolio profesional y moderna construida con React y Vite. Este proyecto está diseñado para ser fácilmente personalizable y compartido con la comunidad de desarrolladores.

## Propósito

El objetivo principal de este repositorio es proporcionar una base sólida, de alto rendimiento y visualmente impactante para los desarrolladores que deseen mostrar su trabajo y habilidades de manera profesional. Incluye características como soporte multi-idioma (i18n), modo oscuro, animaciones fluidas y diseño responsivo.

## Características

- **Stack Tecnológico Moderno**: Construido con React 18 y Vite para un desarrollo rápido y builds optimizados.
- **Estilos**: Tailwind CSS para un sistema de estilos moderno, responsivo y fácil de mantener.
- **Animaciones**: Framer Motion para transiciones de alta calidad y micro-interacciones.
- **Soporte Multi-idioma**: Sistema i18n integrado para español e inglés.
- **Modo Oscuro**: Soporte nativo de modo oscuro con un conmutador de tema limpio.
- **Exhibición de Proyectos**: Sistema de filtrado para proyectos y modales detallados.
- **Diseño Responsivo**: Totalmente optimizado para vistas de móvil, tablet y escritorio.
- **Optimizado para SEO**: Construido siguiendo los estándares web y las mejores prácticas de SEO.

## Secciones

- **Hero**: Introducción profesional con animaciones dinámicas.
- **Servicios**: Carrusel de servicios especializados con enlaces directos a contacto.
- **Sobre mí**: Perfil detallado del desarrollador que incluye habilidades categorizadas y experiencia.
- **Proyectos**: Cuadrícula filtrable que muestra trabajos seleccionados con información detallada.
- **Certificaciones**: Exhibición de logros académicos y profesionales.
- **Contacto**: Formulario de contacto funcional con preselección de servicios.

## Primeros Pasos

### Requisitos Previos

- Node.js (v16.x o superior)
- npm o yarn

### Instalación

1. Clona el repositorio:
   ```bash
   git clone [url-de-tu-repositorio]
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

### Despliegue en GitHub Pages

Para desplegar este portafolio en GitHub Pages, sigue estos pasos:

1. **Configurar el Repositorio**:
   - Tu repositorio en GitHub debe llamarse `tu-usuario.github.io`.

2. **Instalar la dependencia de despliegue**:
   ```bash
   npm install gh-pages --save-dev
   ```

3. **Configurar scripts en `package.json`**:
   Añade estas líneas a la sección `"scripts"`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

4. **Desplegar**:
   Ejecuta el siguiente comando:
   ```bash
   npm run deploy
   ```

5. **Configuración en GitHub**:
   En tu repositorio de GitHub, ve a **Settings > Pages** y asegúrate de que la fuente esté configurada para la rama `gh-pages`.

### Personalización

Para personalizar este portafolio, sigue estos pasos:

- **Idioma y Contenido**: Edita `src/i18n/translations.js` para actualizar todos los textos, descripciones de proyectos y entradas de experiencia.
- **Imágenes**: Reemplaza las imágenes en `src/assets/images/` con tu propia foto de perfil y capturas de pantalla de tus proyectos.
- **Tema**: Modifica `tailwind.config.js` o `src/index.css` para ajustar la paleta de colores y la tipografía.

## Arquitectura

El proyecto sigue una estructura modular:
- `/src/components`: Componentes de UI organizados por sección y diseño.
- `/src/pages`: Componentes de vista principales.
- `/src/i18n`: Lógica de internacionalización y archivos de traducción.
- `/src/assets`: Recursos estáticos que incluyen imágenes y estilos.

## Licencia

Este proyecto es de código abierto y está disponible bajo la Licencia MIT.

## Uso Profesional

Creado por Jermin Vasquez. Siéntete libre de usar esta plantilla para tu propio portafolio. Si te resulta útil, se agradece dar crédito o una estrella al repositorio.
