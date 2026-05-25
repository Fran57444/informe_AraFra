import { Scale, TrendingUp, ShieldCheck } from 'lucide-react'
import { comparacionData } from './afraData'

export default function ComparacionArafra({ theme }) {
  return (
    <article className={`max-w-4xl mx-auto p-7 border ring-1 shadow-2xl rounded-[1.75rem] transition-all duration-500 hover:-translate-y-1 motion-safe:animate-fadeIn ${
      theme === 'dark'
        ? 'bg-slate-900/95 border-slate-700/70 ring-slate-700/20 shadow-slate-950/20 hover:shadow-slate-950/40'
        : 'bg-slate-100 border-slate-300/70 ring-slate-300/20 shadow-slate-200/20 hover:shadow-slate-200/40'
    }`}>
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center mb-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-400 to-sky-500 text-slate-950 shadow-lg shadow-cyan-500/20">
          <Scale className="h-8 w-8" />
        </div>
        <div>
          <p className={`text-sm uppercase tracking-[0.35em] ${theme === 'dark' ? 'text-cyan-300' : 'text-cyan-700'}`}>Comparativo por industria</p>
          <h2 className={`text-3xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>{comparacionData.title}</h2>
        </div>
      </header>

      <div className="grid gap-5 md:grid-cols-2 justify-items-center">
        {comparacionData.sectors.map((sector, index) => (
          <div key={sector.name} className={`rounded-3xl border p-6 w-full ${
            index === 2 ? 'md:col-span-2 md:max-w-md' : ''
          } ${
            theme === 'dark'
              ? 'border-slate-700/70 bg-slate-950/80'
              : 'border-slate-300/70 bg-slate-200/50'
          }`}>
            <div className="flex items-center justify-between gap-3">
              <div>
                <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>{sector.name}</h3>
                <p className={`mt-1 text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{sector.regulation}</p>
              </div>
              <div className={`rounded-2xl p-3 ${theme === 'dark' ? 'text-cyan-300' : 'text-cyan-700'} ${theme === 'dark' ? 'bg-slate-800/90' : 'bg-slate-300/90'}`}>
                <TrendingUp className="h-5 w-5" />
              </div>
            </div>

            <div className={`mt-5 space-y-4 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
              <div className={`rounded-3xl p-4 ${theme === 'dark' ? 'bg-slate-900/90' : 'bg-slate-200/70'}`}>
                <p className={`text-sm uppercase tracking-[0.25em] ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Aplicabilidad</p>
                <p className="mt-2 leading-6">{sector.applicability}</p>
              </div>
              <div className={`rounded-3xl p-4 ${theme === 'dark' ? 'bg-slate-900/90' : 'bg-slate-200/70'}`}>
                <p className={`text-sm uppercase tracking-[0.25em] ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Sanciones</p>
                <p className="mt-2 leading-6">{sector.sanction}</p>
              </div>
              <div className={`rounded-3xl p-4 ${theme === 'dark' ? 'bg-slate-900/90' : 'bg-slate-200/70'}`}>
                <p className={`text-sm uppercase tracking-[0.25em] ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Conexión con el caso</p>
                <p className="mt-2 leading-6">{sector.insight}</p>
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
        <div className={`flex items-center gap-3 ${theme === 'dark' ? 'text-cyan-300' : 'text-cyan-700'}`}>
          <ShieldCheck className="h-5 w-5" />
          <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>Hallazgos clave</h3>
        </div>
        <ul className={`mt-5 space-y-3 list-disc list-inside ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
          {comparacionData.findings.map((finding) => (
            <li key={finding}>{finding}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}
