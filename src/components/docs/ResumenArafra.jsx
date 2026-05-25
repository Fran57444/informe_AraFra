import { Globe, ShieldCheck, Sun, Target, Users, Zap, AlertTriangle } from 'lucide-react'
import { resumenData } from './afraData'

const iconMap = {
  users: Users,
  globe: Globe,
  target: Target,
  zap: Zap,
  'alert-triangle': AlertTriangle,
}

export default function ResumenArafra() {
  return (
    <article className="max-w-4xl mx-auto p-7 bg-slate-900/95 border border-slate-700/70 ring-1 ring-slate-700/20 shadow-2xl shadow-slate-950/20 rounded-[1.75rem] transition-all duration-500 hover:-translate-y-1 hover:shadow-slate-950/40 motion-safe:animate-fadeIn">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center mb-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-amber-400 to-sky-400 text-slate-950 shadow-lg shadow-amber-500/20">
          <Sun className="h-8 w-8" />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Resumen</p>
          <h2 className="text-3xl font-semibold text-white">{resumenData.title}</h2>
        </div>
      </header>

      <p className="text-slate-300 leading-7">{resumenData.summary}</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {resumenData.metrics.map((metric) => {
          const Icon = iconMap[metric.icon] || Sun
          return (
            <div key={metric.label} className="rounded-3xl border border-slate-700/70 bg-slate-950/80 p-5 shadow-lg shadow-slate-950/10">
              <div className="flex items-center gap-3 text-slate-100">
                <div className="rounded-2xl bg-slate-800/90 p-3 text-amber-300">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">{metric.label}</p>
                  <p className="mt-2 text-2xl font-semibold text-white">{metric.value}</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-slate-400">{metric.detail}</p>
            </div>
          )
        })}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {resumenData.points.map((point) => {
          const Icon = iconMap[point.icon] || ShieldCheck
          return (
            <div key={point.title} className="rounded-3xl border border-slate-700/80 bg-slate-900/90 p-6">
              <div className="flex items-center gap-3 text-sky-300">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-500/10">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">{point.title}</h3>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-300">{point.description}</p>
            </div>
          )
        })}
      </div>

      <div className="mt-8 rounded-3xl border border-slate-700/70 bg-slate-950/80 p-6">
        <h3 className="text-xl font-semibold text-white">Elementos clave</h3>
        <ul className="mt-4 space-y-3 text-slate-300">
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
