import { Code, AlertCircle, Layers, ShieldAlert } from 'lucide-react'
import { delitosData } from './afraData'

export default function DelitosArafra({ theme }) {
  return (
    <article className={`max-w-4xl mx-auto p-7 border ring-1 shadow-2xl rounded-[1.75rem] transition-all duration-500 hover:-translate-y-1 motion-safe:animate-fadeIn ${
      theme === 'dark'
        ? 'bg-slate-900/95 border-slate-700/70 ring-slate-700/20 shadow-slate-950/20 hover:shadow-slate-950/40'
        : 'bg-slate-100 border-slate-300/70 ring-slate-300/20 shadow-slate-200/20 hover:shadow-slate-200/40'
    }`}>
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center mb-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-400 to-cyan-500 text-slate-950 shadow-lg shadow-emerald-500/20">
          <Code className="h-8 w-8" />
        </div>
        <div>
          <p className={`text-sm uppercase tracking-[0.35em] ${theme === 'dark' ? 'text-emerald-300' : 'text-emerald-700'}`}>Análisis penal</p>
          <h2 className={`text-3xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>{delitosData.title}</h2>
        </div>
      </header>

      <div className="space-y-5">
        {delitosData.phases.map((phase, index) => (
          <div
            key={phase.step}
            className={`rounded-3xl border p-6 shadow-sm ${
              theme === 'dark'
                ? 'border-slate-700/70 bg-slate-950/80 shadow-slate-950/10'
                : 'border-slate-300/70 bg-slate-200/50 shadow-slate-200/10'
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className={`text-sm uppercase tracking-[0.35em] ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Fase {index + 1}</p>
                <h3 className={`mt-2 text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>{phase.step}</h3>
              </div>
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-3xl ${theme === 'dark' ? 'text-emerald-300' : 'text-emerald-700'} ${
                theme === 'dark' ? 'bg-emerald-500/10' : 'bg-emerald-100'
              }`}>
                <Layers className="h-6 w-6" />
              </div>
            </div>
            <p className={`mt-5 leading-7 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>{phase.action}</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className={`rounded-3xl p-4 border ${
                theme === 'dark'
                  ? 'bg-slate-900/90 border-slate-800/70'
                  : 'bg-slate-200/70 border-slate-300/70'
              }`}>
                <p className={`text-sm uppercase tracking-[0.35em] ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Artículo clave</p>
                <p className={`mt-2 text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>{phase.article}</p>
              </div>
              <div className={`rounded-3xl p-4 border ${
                theme === 'dark'
                  ? 'bg-slate-900/90 border-slate-800/70'
                  : 'bg-slate-200/70 border-slate-300/70'
              }`}>
                <p className={`text-sm uppercase tracking-[0.35em] ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Análisis de tipificación</p>
                <p className={`mt-2 text-sm leading-6 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>{phase.analysis}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={`mt-8 rounded-3xl border p-6 ${
        theme === 'dark'
          ? 'border-slate-700/70 bg-slate-950/80'
          : 'border-slate-300/70 bg-slate-200/50'
      }`}>
        <div className={`flex items-center gap-3 ${theme === 'dark' ? 'text-emerald-300' : 'text-emerald-700'}`}>
          <AlertCircle className="h-5 w-5" />
          <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>Agravantes relevantes</h3>
        </div>
        <ul className={`mt-4 space-y-3 list-disc list-inside ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
          {delitosData.aggravants.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}
