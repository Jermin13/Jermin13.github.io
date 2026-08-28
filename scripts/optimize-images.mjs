// Optimización de imágenes (M5): convierte los assets pesados a WebP y re-encoda
// la imagen social OG como JPG re-dimensionada (1200x630) para máxima compatibilidad.
//
// Uso:   npm run optimize            (ejecutar dentro del contenedor Docker, o con sharp instalado)
import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

const QUALITY = 80

// Origen → { destino (relativo a raíz), width, height?, formato }
const TARGETS = [
  // Avatar en uno formato WebP cubriendo hero + avatar del header (~se reescala en CSS)
  { from: 'src/assets/images/profile_photo.jpg', to: 'src/assets/images/profile_photo.webp', width: 800, fmt: 'webp' },
  // Miniaturas de proyectos (cards; sobreescalado por CSS con object-cover)
  { from: 'src/assets/images/projects/mediagenda.jpg', to: 'src/assets/images/projects/mediagenda.webp', width: 900, fmt: 'webp' },
  { from: 'src/assets/images/projects/smartparking.jpg', to: 'src/assets/images/projects/smartparking.webp', width: 900, fmt: 'webp' },
  { from: 'src/assets/images/projects/bpj.png', to: 'src/assets/images/projects/bpj.webp', width: 900, fmt: 'webp' },
  { from: 'src/assets/images/projects/swissport.png', to: 'src/assets/images/projects/swissport.webp', width: 900, fmt: 'webp' },
  // Certificado pesado
  { from: 'src/assets/images/certificates/certificate_incuba.jpg', to: 'src/assets/images/certificates/certificate_incuba.webp', width: 500, fmt: 'webp' },
  // Imagen social: mantiene JPG (más compatible en previsualizadores sociales) y se re-dimensiona a 1200x630
  { from: 'public/og-image.jpg', to: 'public/og-image.jpg', width: 1200, height: 630, fmt: 'jpeg', fit: 'cover' },
]

async function run() {
  for (const t of TARGETS) {
    const before = fs.statSync(t.from).size
    const img = sharp(t.from).resize({
      width: t.width,
      ...(t.height ? { height: t.height, fit: t.fit || 'cover' } : { withoutEnlargement: true }),
    })
    const meta = await img.metadata()
    const out =
      t.fmt === 'webp'
        ? await img.webp({ quality: QUALITY }).toBuffer()
        : await img.jpeg({ quality: QUALITY, mozjpeg: true }).toBuffer()
    await fs.promises.mkdir(path.dirname(t.to), { recursive: true })
    await fs.promises.writeFile(t.to, out)
    const after = out.length
    console.log(
      `${t.from} (${meta.width}x${meta.height}) → ${t.to}: ${(before / 1024).toFixed(1)}KB → ${(after / 1024).toFixed(1)}KB  (${Math.round((1 - after / before) * 100)}% menos)`
    )
  }
}

run().catch((e) => {
  console.error(e)
  process.exit(1)
})