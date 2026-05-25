import { Globe, ShieldCheck, Sun, Target, Users, Zap, AlertTriangle } from 'lucide-react'
import { resumenData } from './afraData'

const iconMap = {
  users: Users,
  globe: Globe,
  target: Target,
  zap: Zap,
  'alert-triangle': AlertTriangle,
}

export default function ResumenArafra({ theme }) {
  return (
    <article className={`max-w-4xl mx-auto p-7 border ring-1 shadow-2xl rounded-[1.75rem] transition-all duration-500 hover:-translate-y-1 motion-safe:animate-fadeIn ${
      theme === 'dark'
        ? 'bg-slate-900/95 border-slate-700/70 ring-slate-700/20 shadow-slate-950/20 hover:shadow-slate-950/40'
        : 'bg-slate-100 border-slate-300/70 ring-slate-300/20 shadow-slate-200/20 hover:shadow-slate-200/40'
    }`}>
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center mb-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-amber-400 to-sky-400 text-slate-950 shadow-lg shadow-amber-500/20">
          <Sun className="h-8 w-8" />
        </div>
        <div>
          <p className={`text-sm uppercase tracking-[0.35em] ${theme === 'dark' ? 'text-sky-300' : 'text-sky-700'}`}>Resumen</p>
          <h2 className={`text-3xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>{resumenData.title}</h2>
        </div>
      </header>

      <p className={`leading-7 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>{resumenData.summary}</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {resumenData.metrics.map((metric) => {
          const Icon = iconMap[metric.icon] || Sun
          return (
            <div key={metric.label} className={`rounded-3xl border p-5 shadow-lg ${
              theme === 'dark'
                ? 'border-slate-700/70 bg-slate-950/80 shadow-slate-950/10'
                : 'border-slate-300/70 bg-slate-200/50 shadow-slate-200/10'
            }`}>
              <div className={`flex items-center gap-3 ${theme === 'dark' ? 'text-slate-100' : 'text-slate-800'}`}>
                <div className={`rounded-2xl p-3 ${theme === 'dark' ? 'text-amber-300' : 'text-amber-700'} ${theme === 'dark' ? 'bg-slate-800/90' : 'bg-slate-300/90'}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className={`text-xs uppercase tracking-[0.25em] ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{metric.label}</p>
                  <p className={`mt-2 text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>{metric.value}</p>
                </div>
              </div>
              <p className={`mt-3 text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{metric.detail}</p>
            </div>
          )
        })}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {resumenData.points.map((point) => {
          const Icon = iconMap[point.icon] || ShieldCheck
          return (
            <div key={point.title} className={`rounded-3xl border p-6 ${
              theme === 'dark'
                ? 'border-slate-700/80 bg-slate-900/90'
                : 'border-slate-300/80 bg-slate-200/70'
            }`}>
              <div className={`flex items-center gap-3 ${theme === 'dark' ? 'text-sky-300' : 'text-sky-600'}`}>
                <div className={`flex h-10 w-10 items-center justify-center rounded-2xl ${
                  theme === 'dark' ? 'bg-sky-500/10' : 'bg-sky-100'
                }`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>{point.title}</h3>
              </div>
              <p className={`mt-4 text-sm leading-7 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>{point.description}</p>
            </div>
          )
        })}
      </div>

      <div className={`mt-8 rounded-3xl border p-6 ${
        theme === 'dark'
          ? 'border-slate-700/70 bg-slate-950/80'
          : 'border-slate-300/70 bg-slate-200/50'
      }`}>
        <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>Elementos clave</h3>
        <ul className={`mt-4 space-y-3 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
          {resumenData.highlights.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
