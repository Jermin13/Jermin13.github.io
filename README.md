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
   - Tu repositorio en GitHub debe llamarse `tu-usuario.github.io` (o cualquier nombre si es un repositorio de proyecto).

2. **Instalar la dependencia de despliegue** (ya incluida en este repo):
   ```bash
   npm install gh-pages --save-dev
   ```

3. **Configurar scripts en `package.json`** (ya configurados):
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

4. **Desplegar**:
   Ejecuta el siguiente comando para compilar y subir a la rama `gh-pages`:
   ```bash
   npm run deploy
   ```

5. **Configuración Final en GitHub**:
   - Ve a tu repositorio en GitHub.
   - Entra en **Settings** > **Pages**.
   - En **Build and deployment**, selecciona la rama `gh-pages` como fuente.
   - ¡Listo! Tu sitio estará disponible en `https://tu-usuario.github.io/`.

---

### Solución de Problemas (Pantalla en Blanco)

Si al entrar a tu URL ves una pantalla en blanco:
1. Asegúrate de que `vite.config.js` tenga la propiedad `base: './'`.
2. Verifica que en GitHub Settings > Pages la rama seleccionada sea `gh-pages`.
3. Revisa la consola del navegador (F12) para ver si hay errores de carga de archivos (404). Normalmente se soluciona ejecutando `npm run deploy` de nuevo.

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
