import { CheckCircle, Zap, ShieldCheck, ClipboardList } from 'lucide-react'
import { conclusionesData } from './afraData'

export default function ConclusionesArafra({ theme }) {
  return (
    <article className={`max-w-4xl mx-auto p-7 border ring-1 shadow-2xl rounded-[1.75rem] transition-all duration-500 hover:-translate-y-1 motion-safe:animate-fadeIn ${
      theme === 'dark'
        ? 'bg-slate-900/95 border-slate-700/70 ring-slate-700/20 shadow-slate-950/20 hover:shadow-slate-950/40'
        : 'bg-slate-100 border-slate-300/70 ring-slate-300/20 shadow-slate-200/20 hover:shadow-slate-200/40'
    }`}>
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center mb-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-400 to-lime-500 text-slate-950 shadow-lg shadow-emerald-500/20">
          <CheckCircle className="h-8 w-8" />
        </div>
        <div>
          <p className={`text-sm uppercase tracking-[0.35em] ${theme === 'dark' ? 'text-emerald-300' : 'text-emerald-700'}`}>Cierre del análisis</p>
          <h2 className={`text-3xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>{conclusionesData.title}</h2>
        </div>
      </header>

      <div className="grid gap-5 md:grid-cols-3">
        {conclusionesData.recommendations.map((item) => (
          <div key={item.title} className={`rounded-3xl border p-6 ${
            theme === 'dark'
              ? 'border-slate-700/70 bg-slate-950/80'
              : 'border-slate-300/70 bg-slate-200/50'
          }`}>
            <div className={`flex items-center gap-3 ${theme === 'dark' ? 'text-emerald-300' : 'text-emerald-700'}`}>
              <div className={`rounded-2xl p-3 ${theme === 'dark' ? 'bg-slate-800/90' : 'bg-slate-300/90'}`}>
                {item.title === 'Zero Trust' ? (
                  <ShieldCheck className="h-5 w-5" />
                ) : item.title === 'Gestión de terceros' ? (
                  <ClipboardList className="h-5 w-5" />
                ) : (
                  <Zap className="h-5 w-5" />
                )}
              </div>
              <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>{item.title}</h3>
            </div>
            <p className={`mt-4 leading-7 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>{item.description}</p>
          </div>
        ))}
      </div>

      <div className={`mt-8 rounded-3xl border p-6 ${
        theme === 'dark'
          ? 'border-slate-700/70 bg-slate-950/80'
          : 'border-slate-300/70 bg-slate-200/50'
      }`}>
        <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>Reflexión estratégica</h3>
        <p className={`mt-4 leading-7 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>{conclusionesData.reflection}</p>
      </div>
    </article>
  )
}
