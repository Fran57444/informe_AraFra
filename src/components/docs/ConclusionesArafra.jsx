import React from 'react'
import ReactMarkdown from 'react-markdown'
import { CheckCircle } from 'lucide-react'

const markdown = `## 1. Recomendaciones Técnicas y Organizacionales de Seguridad

Basado en las vulnerabilidades explotadas en el caso analizado, se proponen las siguientes medidas de mitigación para organizaciones públicas y privadas bajo el contexto regulatorio chileno:

- Implementación de Arquitectura Zero Trust (Confianza Cero)

- Gestión Rigurosa del Riesgo de Terceros (Third-Party Risk Management)

---

## 2. Reflexión Final del Análisis

El análisis del caso analizado demuestra un cambio de paradigma en las amenazas globales de ciberseguridad.`

export default function ConclusionesArafra() {
  return (
    <article className="max-w-4xl mx-auto p-7 bg-slate-900/95 border border-slate-700/70 ring-1 ring-slate-700/20 shadow-2xl shadow-slate-950/20 rounded-[1.75rem] transition-all duration-500 hover:-translate-y-1 hover:shadow-slate-950/40 motion-safe:animate-fadeIn">
      <header className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-slate-800/80 text-emerald-300 rounded-3xl ring-1 ring-slate-700/70">
          <CheckCircle className="text-emerald-300" />
        </div>
        <h2 className="text-2xl font-semibold">Conclusiones y Recomendaciones</h2>
      </header>
      <div className="prose prose-invert max-w-none text-slate-100">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </article>
  )
}
