import { Users, ShieldCheck, Briefcase } from 'lucide-react'
import { responsabilidadesData } from './afraData'

export default function ResponsabilidadesArafra({ theme }) {
  return (
    <article className={`max-w-4xl mx-auto p-7 border ring-1 shadow-2xl rounded-[1.75rem] transition-all duration-500 hover:-translate-y-1 motion-safe:animate-fadeIn ${
      theme === 'dark'
        ? 'bg-slate-900/95 border-slate-700/70 ring-slate-700/20 shadow-slate-950/20 hover:shadow-slate-950/40'
        : 'bg-slate-100 border-slate-300/70 ring-slate-300/20 shadow-slate-200/20 hover:shadow-slate-200/40'
    }`}>
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center mb-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-rose-400 to-fuchsia-500 text-slate-950 shadow-lg shadow-rose-500/20">
          <Users className="h-8 w-8" />
        </div>
        <div>
          <p className={`text-sm uppercase tracking-[0.35em] ${theme === 'dark' ? 'text-rose-300' : 'text-rose-700'}`}>Roles y responsabilidades</p>
          <h2 className={`text-3xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>{responsabilidadesData.title}</h2>
        </div>
      </header>

      <div className="grid gap-5 md:grid-cols-2">
        {responsabilidadesData.actors.map((actor) => (
          <div key={actor.name} className={`rounded-3xl border p-6 ${
            theme === 'dark'
              ? 'border-slate-700/70 bg-slate-950/80'
              : 'border-slate-300/70 bg-slate-200/50'
          }`}>
            <div className="flex items-center justify-between gap-3">
              <div>
                <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>{actor.name}</h3>
                <p className={`mt-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{actor.role}</p>
              </div>
              <div className={`rounded-2xl p-3 ${theme === 'dark' ? 'text-rose-300' : 'text-rose-700'} ${theme === 'dark' ? 'bg-slate-800/90' : 'bg-slate-300/90'}`}>
                <Briefcase className="h-5 w-5" />
              </div>
            </div>
            <ul className={`mt-5 space-y-3 list-disc list-inside ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
              {actor.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={`mt-8 rounded-3xl border p-6 ${
        theme === 'dark'
          ? 'border-slate-700/70 bg-slate-950/80'
          : 'border-slate-300/70 bg-slate-200/50'
      }`}>
        <div className={`flex items-center gap-3 ${theme === 'dark' ? 'text-rose-300' : 'text-rose-700'}`}>
          <ShieldCheck className="h-5 w-5" />
          <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>Principio de no delegación</h3>
        </div>
        <p className={`mt-4 leading-7 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
          Aunque un proveedor externo sea el vector del ataque, la normativa chilena mantiene a la organización afectada en el centro de la obligación de control, reporte y mitigación.
        </p>
      </div>
    </article>
  )
}
