import { Database, ShieldCheck, Eye } from 'lucide-react'
import { datosData } from './afraData'

export default function DatosArafra() {
  return (
    <article className="max-w-4xl mx-auto p-7 bg-slate-900/95 border border-slate-700/70 ring-1 ring-slate-700/20 shadow-2xl shadow-slate-950/20 rounded-[1.75rem] transition-all duration-500 hover:-translate-y-1 hover:shadow-slate-950/40 motion-safe:animate-fadeIn">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center mb-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-amber-400 to-orange-500 text-slate-950 shadow-lg shadow-amber-500/20">
          <Database className="h-8 w-8" />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-amber-300">Datos Personales</p>
          <h2 className="text-3xl font-semibold text-white">{datosData.title}</h2>
        </div>
      </header>

      <p className="text-slate-300 leading-7">{datosData.summary}</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {datosData.dataTypes.map((data) => (
          <div key={data.label} className="rounded-3xl border border-slate-700/70 bg-slate-950/80 p-5">
            <div className="flex items-center gap-3 text-slate-100">
              <div className="rounded-2xl bg-slate-800/90 p-3 text-amber-300">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">{data.category}</p>
                <p className="mt-2 font-semibold text-white">{data.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-3xl border border-slate-700/70 bg-slate-950/80 p-6">
        <div className="flex items-center gap-3 text-amber-300">
          <Eye className="h-5 w-5" />
          <h3 className="text-xl font-semibold text-white">Derechos ARCO afectados</h3>
        </div>
        <div className="mt-5 space-y-4">
          {datosData.arco.map((item) => (
            <div key={item.name} className="rounded-3xl border border-slate-800/70 bg-slate-900/90 p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">{item.name}</p>
              <p className="mt-2 text-slate-300 leading-7">{item.impact}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}
