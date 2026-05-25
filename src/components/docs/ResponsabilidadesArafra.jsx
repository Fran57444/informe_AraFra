import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Users } from 'lucide-react'

const markdown = `# Responsabilidades Legales de los Actores

## Actor 1: Grupo de Ciberespionaje Ruso

### A. Responsabilidad Penal
- Descripción: Ejecución de conductas delictivas informáticas destinadas a vulnerar la confidencialidad, integridad y disponibilidad de sistemas y datos.
- Cita de Norma: Ley N° 21.459, Artículo 2°: Por acceso ilícito a sistemas informáticos ajenos superando barreras tecnológicas de seguridad.

---

## Actor 2: SolarWinds

### A. Responsabilidad Penal
- Descripción: Responsabilidad de la persona jurídica por delitos informáticos debido al incumplimiento de sus deberes de dirección y supervisión.`

export default function ResponsabilidadesArafra() {
  return (
    <article className="max-w-4xl mx-auto p-7 bg-slate-900/95 border border-slate-700/70 ring-1 ring-slate-700/20 shadow-2xl shadow-slate-950/20 rounded-[1.75rem] transition-all duration-500 hover:-translate-y-1 hover:shadow-slate-950/40 motion-safe:animate-fadeIn">
      <header className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-slate-800/80 text-rose-300 rounded-3xl ring-1 ring-slate-700/70">
          <Users className="text-rose-300" />
        </div>
        <h2 className="text-2xl font-semibold">Responsabilidades</h2>
      </header>
      <div className="prose prose-invert max-w-none text-slate-100">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </article>
  )
}
