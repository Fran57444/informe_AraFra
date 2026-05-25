import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Database } from 'lucide-react'

const markdown = `# Tratamiento de Datos Personales (Ley 19.628)

## 1. Tipos de Datos Comprometidos en el Caso y su Clasificación

- Tipo de dato 1: Correos electrónicos corporativos y mensajes internos
Clasificación: Datos Personales.

- Tipo de dato 2: Credenciales de acceso, contraseñas y tokens de autenticación

Clasificación: Datos Personales.

---

## 2. Análisis de Derechos ARCO Afectados con Cita Textual de la Ley 19.628

### A. Derecho de Acceso
- Análisis del impacto: Al estar la información en manos de atacantes externos e imprecisos, los titulares de los datos (funcionarios o usuarios finales) pierden la capacidad de saber con certeza qué datos suyos específicos fueron comprometidos.`

export default function DatosArafra() {
  return (
    <article className="max-w-4xl mx-auto p-7 bg-slate-900/95 border border-slate-700/70 ring-1 ring-slate-700/20 shadow-2xl shadow-slate-950/20 rounded-[1.75rem] transition-all duration-500 hover:-translate-y-1 hover:shadow-slate-950/40 motion-safe:animate-fadeIn">
      <header className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-slate-800/80 text-amber-300 rounded-3xl ring-1 ring-slate-700/70">
          <Database className="text-amber-300" />
        </div>
        <h2 className="text-2xl font-semibold">Datos Personales</h2>
      </header>
      <div className="prose prose-invert max-w-none text-slate-100">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </article>
  )
}
