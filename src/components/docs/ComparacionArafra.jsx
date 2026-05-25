import { Scale, TrendingUp, ShieldCheck } from 'lucide-react'
import { comparacionData } from './afraData'

export default function ComparacionArafra() {
  return (
    <article className="max-w-4xl mx-auto p-7 bg-slate-900/95 border border-slate-700/70 ring-1 ring-slate-700/20 shadow-2xl shadow-slate-950/20 rounded-[1.75rem] transition-all duration-500 hover:-translate-y-1 hover:shadow-slate-950/40 motion-safe:animate-fadeIn">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center mb-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-400 to-sky-500 text-slate-950 shadow-lg shadow-cyan-500/20">
          <Scale className="h-8 w-8" />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Comparativo por industria</p>
          <h2 className="text-3xl font-semibold text-white">{comparacionData.title}</h2>
        </div>
      </header>

      <div className="grid gap-5 md:grid-cols-2">
        {comparacionData.sectors.map((sector) => (
          <div key={sector.name} className="rounded-3xl border border-slate-700/70 bg-slate-950/80 p-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold text-white">{sector.name}</h3>
                <p className="mt-1 text-sm text-slate-400">{sector.regulation}</p>
              </div>
              <div className="rounded-2xl bg-slate-800/90 p-3 text-cyan-300">
                <TrendingUp className="h-5 w-5" />
              </div>
            </div>

            <div className="mt-5 space-y-4 text-slate-300">
              <div className="rounded-3xl bg-slate-900/90 p-4">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Aplicabilidad</p>
                <p className="mt-2 leading-6">{sector.applicability}</p>
              </div>
              <div className="rounded-3xl bg-slate-900/90 p-4">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Sanciones</p>
                <p className="mt-2 leading-6">{sector.sanction}</p>
              </div>
              <div className="rounded-3xl bg-slate-900/90 p-4">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Conexión con el caso</p>
                <p className="mt-2 leading-6">{sector.insight}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-3xl border border-slate-700/70 bg-slate-950/80 p-6">
        <div className="flex items-center gap-3 text-cyan-300">
          <ShieldCheck className="h-5 w-5" />
          <h3 className="text-xl font-semibold text-white">Hallazgos clave</h3>
        </div>
        <ul className="mt-5 space-y-3 text-slate-300 list-disc list-inside">
          {comparacionData.findings.map((finding) => (
            <li key={finding}>{finding}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}
