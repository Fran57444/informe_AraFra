import { Globe, BookOpen, ShieldCheck } from 'lucide-react'
import { marcoData } from './afraData'

export default function MarcoArafra() {
  return (
    <article className="max-w-4xl mx-auto p-7 bg-slate-900/95 border border-slate-700/70 ring-1 ring-slate-700/20 shadow-2xl shadow-slate-950/20 rounded-[1.75rem] transition-all duration-500 hover:-translate-y-1 hover:shadow-slate-950/40 motion-safe:animate-fadeIn">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center mb-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-sky-500 to-cyan-500 text-slate-950 shadow-lg shadow-sky-500/20">
          <Globe className="h-8 w-8" />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Marco Legal</p>
          <h2 className="text-3xl font-semibold text-white">{marcoData.title}</h2>
        </div>
      </header>

      <div className="grid gap-6">
        {marcoData.sections.map((section) => (
          <div key={section.category} className="rounded-3xl border border-slate-700/70 bg-slate-950/80 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-800/90 text-sky-300">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">{section.category}</p>
                <h3 className="text-xl font-semibold text-white">Normas relevantes</h3>
              </div>
            </div>

            <div className="mt-5 space-y-5">
              {section.rules.map((rule) => (
                <div key={rule.name} className="rounded-3xl border border-slate-800/80 bg-slate-900/90 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h4 className="text-lg font-semibold text-white">{rule.name}</h4>
                    <span className="rounded-full bg-slate-800/90 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">Relevante</span>
                  </div>
                  <ul className="mt-4 space-y-3 text-slate-300 list-disc list-inside">
                    {rule.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-3xl border border-slate-700/70 bg-slate-950/80 p-6">
        <div className="flex items-center gap-3 text-cyan-300">
          <ShieldCheck className="h-5 w-5" />
          <h3 className="text-xl font-semibold text-white">Claves del contexto legal</h3>
        </div>
        <p className="mt-4 leading-7 text-slate-300">
          Estos marcos muestran cómo un ataque a la cadena de suministro se cruza con normas internacionales y chilenas que obligan a proteger datos, sistemas y obligaciones de reporte.
        </p>
      </div>
    </article>
  )
}
