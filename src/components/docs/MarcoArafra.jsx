import { Globe, BookOpen, ShieldCheck } from 'lucide-react'
import { marcoData } from './afraData'

export default function MarcoArafra({ theme }) {
  return (
    <article className={`max-w-4xl mx-auto p-7 border ring-1 shadow-2xl rounded-[1.75rem] transition-all duration-500 hover:-translate-y-1 motion-safe:animate-fadeIn ${
      theme === 'dark'
        ? 'bg-slate-900/95 border-slate-700/70 ring-slate-700/20 shadow-slate-950/20 hover:shadow-slate-950/40'
        : 'bg-slate-100 border-slate-300/70 ring-slate-300/20 shadow-slate-200/20 hover:shadow-slate-200/40'
    }`}>
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center mb-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-sky-500 to-cyan-500 text-slate-950 shadow-lg shadow-sky-500/20">
          <Globe className="h-8 w-8" />
        </div>
        <div>
          <p className={`text-sm uppercase tracking-[0.35em] ${theme === 'dark' ? 'text-cyan-300' : 'text-cyan-700'}`}>Marco Legal</p>
          <h2 className={`text-3xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>{marcoData.title}</h2>
        </div>
      </header>

      <div className="grid gap-6">
        {marcoData.sections.map((section) => (
          <div key={section.category} className={`rounded-3xl border p-6 ${
            theme === 'dark'
              ? 'border-slate-700/70 bg-slate-950/80'
              : 'border-slate-300/70 bg-slate-200/50'
          }`}>
            <div className="flex items-center gap-3">
              <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
                theme === 'dark' ? 'bg-slate-800/90 text-sky-300' : 'bg-slate-300/90 text-sky-700'
              }`}>
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <p className={`text-sm uppercase tracking-[0.35em] ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{section.category}</p>
                <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>Normas relevantes</h3>
              </div>
            </div>

            <div className="mt-5 space-y-5">
              {section.rules.map((rule) => (
                <div key={rule.name} className={`rounded-3xl border p-5 ${
                  theme === 'dark'
                    ? 'border-slate-800/80 bg-slate-900/90'
                    : 'border-slate-300/80 bg-slate-200/70'
                }`}>
                  <div className="flex items-center justify-between gap-3">
                    <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>{rule.name}</h4>
                    <span className={`rounded-full px-3 py-1 text-xs uppercase tracking-[0.2em] ${
                      theme === 'dark'
                        ? 'bg-slate-800/90 text-slate-300'
                        : 'bg-slate-300/90 text-slate-700'
                    }`}>Relevante</span>
                  </div>
                  <ul className={`mt-4 space-y-3 list-disc list-inside ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
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

      <div className={`mt-8 rounded-3xl border p-6 ${
        theme === 'dark'
          ? 'border-slate-700/70 bg-slate-950/80'
          : 'border-slate-300/70 bg-slate-200/50'
      }`}>
        <div className={`flex items-center gap-3 ${theme === 'dark' ? 'text-cyan-300' : 'text-cyan-700'}`}>
          <ShieldCheck className="h-5 w-5" />
          <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>Claves del contexto legal</h3>
        </div>
        <p className={`mt-4 leading-7 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
          Estos marcos muestran cómo un ataque a la cadena de suministro se cruza con normas internacionales y chilenas que obligan a proteger datos, sistemas y obligaciones de reporte.
        </p>
      </div>
    </article>
  )
}
