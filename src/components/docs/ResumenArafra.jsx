import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Sun } from 'lucide-react'

const markdown = `# SUNBURST

SUNBURST fue un hackeo que ocurrio en 2020 a la empresa SolarWinds. Esta empresa desarrolla Orion, el cual es utilizado para monitorear y administrar redes y servidores.
Entre sus clientes estaban agencias del gobierno de EE.UU., el ejercito y el 80% de las empresas de la lista Fortune 500 (Las 500 empresas mas grandes de EE.UU. por ingresos).

---

# ATACANTES

Los atacantes (grupo de espionaje estatal ruso) lograron entrar a los sistemas internos de SolarWinds meses antes del ataque, despues modificaron una actualizacion legitima de Orion para crear una puerta trasera que llevaba el nombre "SUNBURST".
Este troyano logro infiltrarse en 18.000 empresas incluyendo el Pentagono, el Departamento de Seguridad Nacional de EE.UU. y empresas como Microsoft.

---

# OBJETIVO

El objetivo de este hackeo no era el dinero, si no que buscaban informacion estrategica a nivel geopolitico, quedarse dentro del sistema el mayor tiempo posible, acceso a correos electronicos de alto nivel, robar herramientas de defensa y saltar a otros objetivos para robar informacion de millones de usuarios.`

export default function ResumenArafra() {
  return (
    <article className="max-w-4xl mx-auto p-7 bg-slate-900/95 border border-slate-700/70 ring-1 ring-slate-700/20 shadow-2xl shadow-slate-950/20 rounded-[1.75rem] transition-all duration-500 hover:-translate-y-1 hover:shadow-slate-950/40 motion-safe:animate-fadeIn">
      <header className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-slate-800/80 text-amber-300 rounded-3xl ring-1 ring-slate-700/70">
          <Sun className="text-amber-300" />
        </div>
        <h2 className="text-2xl font-semibold">Resumen — SUNBURST</h2>
      </header>
      <div className="prose prose-invert max-w-none text-slate-100">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </article>
  )
}
