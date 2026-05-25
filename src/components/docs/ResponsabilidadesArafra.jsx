import { Users, ShieldCheck, Briefcase } from 'lucide-react'
import { responsabilidadesData } from './afraData'

export default function ResponsabilidadesArafra() {
  return (
    <article className="max-w-4xl mx-auto p-7 bg-slate-900/95 border border-slate-700/70 ring-1 ring-slate-700/20 shadow-2xl shadow-slate-950/20 rounded-[1.75rem] transition-all duration-500 hover:-translate-y-1 hover:shadow-slate-950/40 motion-safe:animate-fadeIn">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center mb-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-rose-400 to-fuchsia-500 text-slate-950 shadow-lg shadow-rose-500/20">
          <Users className="h-8 w-8" />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-rose-300">Roles y responsabilidades</p>
          <h2 className="text-3xl font-semibold text-white">{responsabilidadesData.title}</h2>
        </div>
      </header>

      <div className="grid gap-5 md:grid-cols-2">
        {responsabilidadesData.actors.map((actor) => (
          <div key={actor.name} className="rounded-3xl border border-slate-700/70 bg-slate-950/80 p-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold text-white">{actor.name}</h3>
                <p className="mt-1 text-slate-400">{actor.role}</p>
              </div>
              <div className="rounded-2xl bg-slate-800/90 p-3 text-rose-300">
                <Briefcase className="h-5 w-5" />
              </div>
            </div>
            <ul className="mt-5 space-y-3 text-slate-300 list-disc list-inside">
              {actor.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-3xl border border-slate-700/70 bg-slate-950/80 p-6">
        <div className="flex items-center gap-3 text-rose-300">
          <ShieldCheck className="h-5 w-5" />
          <h3 className="text-xl font-semibold text-white">Principio de no delegación</h3>
        </div>
        <p className="mt-4 leading-7 text-slate-300">
          Aunque un proveedor externo sea el vector del ataque, la normativa chilena mantiene a la organización afectada en el centro de la obligación de control, reporte y mitigación.
        </p>
      </div>
    </article>
  )
}
