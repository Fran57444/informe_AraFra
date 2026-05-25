import { Database, ShieldCheck, Eye } from 'lucide-react'
import { datosData } from './afraData'

export default function DatosArafra({ theme }) {
  return (
    <article className={`max-w-4xl mx-auto p-7 border ring-1 shadow-2xl rounded-[1.75rem] transition-all duration-500 hover:-translate-y-1 motion-safe:animate-fadeIn ${
      theme === 'dark'
        ? 'bg-slate-900/95 border-slate-700/70 ring-slate-700/20 shadow-slate-950/20 hover:shadow-slate-950/40'
        : 'bg-slate-100 border-slate-300/70 ring-slate-300/20 shadow-slate-200/20 hover:shadow-slate-200/40'
    }`}>
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center mb-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-amber-400 to-orange-500 text-slate-950 shadow-lg shadow-amber-500/20">
          <Database className="h-8 w-8" />
        </div>
        <div>
          <p className={`text-sm uppercase tracking-[0.35em] ${theme === 'dark' ? 'text-amber-300' : 'text-amber-700'}`}>Datos Personales</p>
          <h2 className={`text-3xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>{datosData.title}</h2>
        </div>
      </header>

      <p className={`leading-7 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>{datosData.summary}</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {datosData.dataTypes.map((data) => (
          <div key={data.label} className={`rounded-3xl border p-5 ${
            theme === 'dark'
              ? 'border-slate-700/70 bg-slate-950/80'
              : 'border-slate-300/70 bg-slate-200/50'
          }`}>
            <div className={`flex items-center gap-3 ${theme === 'dark' ? 'text-slate-100' : 'text-slate-800'}`}>
              <div className={`rounded-2xl p-3 ${theme === 'dark' ? 'text-amber-300' : 'text-amber-700'} ${theme === 'dark' ? 'bg-slate-800/90' : 'bg-slate-300/90'}`}>
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className={`text-xs uppercase tracking-[0.25em] ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{data.category}</p>
                <p className={`mt-2 font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>{data.label}</p>
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
        <div className={`flex items-center gap-3 ${theme === 'dark' ? 'text-amber-300' : 'text-amber-700'}`}>
          <Eye className="h-5 w-5" />
          <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>Derechos ARCO afectados</h3>
        </div>
        <div className="mt-5 space-y-4">
          {datosData.arco.map((item) => (
            <div key={item.name} className={`rounded-3xl border p-5 ${
              theme === 'dark'
                ? 'border-slate-800/70 bg-slate-900/90'
                : 'border-slate-300/70 bg-slate-200/70'
            }`}>
              <p className={`text-sm uppercase tracking-[0.2em] ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{item.name}</p>
              <p className={`mt-2 leading-7 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>{item.impact}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}
