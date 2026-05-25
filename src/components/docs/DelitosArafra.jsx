import { Code, AlertCircle, Layers, ShieldAlert } from 'lucide-react'
import { delitosData } from './afraData'

export default function DelitosArafra() {
  return (
    <article className="max-w-4xl mx-auto p-7 bg-slate-900/95 border border-slate-700/70 ring-1 ring-slate-700/20 shadow-2xl shadow-slate-950/20 rounded-[1.75rem] transition-all duration-500 hover:-translate-y-1 hover:shadow-slate-950/40 motion-safe:animate-fadeIn">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center mb-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-400 to-cyan-500 text-slate-950 shadow-lg shadow-emerald-500/20">
          <Code className="h-8 w-8" />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-emerald-300">Análisis penal</p>
          <h2 className="text-3xl font-semibold text-white">{delitosData.title}</h2>
        </div>
      </header>

      <div className="space-y-5">
        {delitosData.phases.map((phase, index) => (
          <div
            key={phase.step}
            className="rounded-3xl border border-slate-700/70 bg-slate-950/80 p-6 shadow-sm shadow-slate-950/10"
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Fase {index + 1}</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{phase.step}</h3>
              </div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-emerald-500/10 text-emerald-300">
                <Layers className="h-6 w-6" />
              </div>
            </div>
            <p className="mt-5 text-slate-300 leading-7">{phase.action}</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-900/90 p-4 border border-slate-800/70">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Artículo clave</p>
                <p className="mt-2 text-lg font-semibold text-white">{phase.article}</p>
              </div>
              <div className="rounded-3xl bg-slate-900/90 p-4 border border-slate-800/70">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Análisis de tipificación</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{phase.analysis}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-3xl border border-slate-700/70 bg-slate-950/80 p-6">
        <div className="flex items-center gap-3 text-emerald-300">
          <AlertCircle className="h-5 w-5" />
          <h3 className="text-xl font-semibold text-white">Agravantes relevantes</h3>
        </div>
        <ul className="mt-4 space-y-3 text-slate-300 list-disc list-inside">
          {delitosData.aggravants.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}
