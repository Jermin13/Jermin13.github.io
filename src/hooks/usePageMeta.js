import { useEffect } from 'react'

// Aplica title + meta description + Open Graph + Twitter Card en el <head>
// del documento para cada ruta (SEO on-page en SPA). Tecnica sin dependencias:
// actualiza los meta en el DOM en cada render, visible para el renderizador de Google
// y para el usuario final sin recargar.

function upsertMeta(attr, key, content) {
    if (!content) return
    const el = document.head.querySelector(`meta[${attr}="${key}"]`)
    if (el) {
        el.setAttribute('content', content)
    } else {
        const m = document.createElement('meta')
        m.setAttribute(attr, key)
        m.setAttribute('content', content)
        document.head.appendChild(m)
    }
}

export function usePageMeta({ title, description }) {
    useEffect(() => {
        if (title) document.title = title
        upsertMeta('name', 'description', description)
        upsertMeta('property', 'og:title', title)
        upsertMeta('property', 'og:description', description)
        upsertMeta('property', 'og:url', window.location.href)
        upsertMeta('name', 'twitter:title', title)
        upsertMeta('name', 'twitter:description', description)
    }, [title, description])
}