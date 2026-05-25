import { CheckCircle, Zap, ShieldCheck, ClipboardList } from 'lucide-react'
import { conclusionesData } from './afraData'

export default function ConclusionesArafra() {
  return (
    <article className="max-w-4xl mx-auto p-7 bg-slate-900/95 border border-slate-700/70 ring-1 ring-slate-700/20 shadow-2xl shadow-slate-950/20 rounded-[1.75rem] transition-all duration-500 hover:-translate-y-1 hover:shadow-slate-950/40 motion-safe:animate-fadeIn">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center mb-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-400 to-lime-500 text-slate-950 shadow-lg shadow-emerald-500/20">
          <CheckCircle className="h-8 w-8" />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-emerald-300">Cierre del análisis</p>
          <h2 className="text-3xl font-semibold text-white">{conclusionesData.title}</h2>
        </div>
      </header>

      <div className="grid gap-5 md:grid-cols-3">
        {conclusionesData.recommendations.map((item) => (
          <div key={item.title} className="rounded-3xl border border-slate-700/70 bg-slate-950/80 p-6">
            <div className="flex items-center gap-3 text-emerald-300">
              <div className="rounded-2xl bg-slate-800/90 p-3">
                {item.title === 'Zero Trust' ? (
                  <ShieldCheck className="h-5 w-5" />
                ) : item.title === 'Gestión de terceros' ? (
                  <ClipboardList className="h-5 w-5" />
                ) : (
                  <Zap className="h-5 w-5" />
                )}
              </div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            </div>
            <p className="mt-4 text-slate-300 leading-7">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-3xl border border-slate-700/70 bg-slate-950/80 p-6">
        <h3 className="text-xl font-semibold text-white">Reflexión estratégica</h3>
        <p className="mt-4 leading-7 text-slate-300">{conclusionesData.reflection}</p>
      </div>
    </article>
  )
}
