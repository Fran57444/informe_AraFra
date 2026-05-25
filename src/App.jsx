import {
  ResumenArafra,
  MarcoArafra,
  DelitosArafra,
  ComparacionArafra,
  ResponsabilidadesArafra,
  DatosArafra,
  ConclusionesArafra,
  PromptsArafra,
} from './components/docs'

const sections = [
  { id: 'resumen', label: 'Resumen' },
  { id: 'marco', label: 'Marco Legal' },
  { id: 'delitos', label: 'Delitos' },
  { id: 'comparacion', label: 'Comparación' },
  { id: 'responsabilidades', label: 'Responsabilidades' },
  { id: 'datos', label: 'Datos' },
  { id: 'conclusiones', label: 'Conclusiones' },
  { id: 'prompts', label: 'Prompts' },
]

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="mb-10 overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-8 shadow-2xl shadow-slate-950/40 ring-1 ring-slate-700/70">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-4 text-center lg:text-left lg:max-w-2xl lg:mx-0 mx-auto">
              <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-sky-200 shadow-sm ring-1 ring-sky-400/20">
                Informe AraFra
              </p>
              <div className="space-y-4">
                <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  Análisis SUNBURST
                </h1>
                <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                  Caso SUNBURST: Análisis Jurídico y Técnico del Ciberataque a SolarWinds en el Contexto Chileno
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="rounded-3xl border border-slate-700/80 bg-slate-900/70 px-4 py-3 text-sm font-medium text-slate-200 transition hover:-translate-y-0.5 hover:bg-slate-800/90 focus:outline-none focus:ring-2 focus:ring-sky-500/60"
              >
                {section.label}
              </a>
            ))}
          </div>
        </header>

        <main className="grid gap-8">
          <section id="resumen" className="scroll-mt-28">
            <ResumenArafra />
          </section>
          <section id="marco" className="scroll-mt-28">
            <MarcoArafra />
          </section>
          <section id="delitos" className="scroll-mt-28">
            <DelitosArafra />
          </section>
          <section id="comparacion" className="scroll-mt-28">
            <ComparacionArafra />
          </section>
          <section id="responsabilidades" className="scroll-mt-28">
            <ResponsabilidadesArafra />
          </section>
          <section id="datos" className="scroll-mt-28">
            <DatosArafra />
          </section>
          <section id="conclusiones" className="scroll-mt-28">
            <ConclusionesArafra />
          </section>
          <section id="prompts" className="scroll-mt-28">
            <PromptsArafra />
          </section>
        </main>
      </div>
    </div>
  )
}
