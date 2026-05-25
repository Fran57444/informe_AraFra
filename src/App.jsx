import { useEffect, useState } from 'react'
import { ChevronUp, Moon, Sun } from 'lucide-react'
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
  { id: 'resumen', label: 'Resumen', buttonClasses: 'bg-slate-800 text-slate-100 hover:bg-slate-700' },
  { id: 'marco', label: 'Marco Legal', buttonClasses: 'bg-slate-800 text-slate-100 hover:bg-slate-700' },
  { id: 'delitos', label: 'Delitos', buttonClasses: 'bg-slate-800 text-slate-100 hover:bg-slate-700' },
  { id: 'comparacion', label: 'Comparación', buttonClasses: 'bg-slate-800 text-slate-100 hover:bg-slate-700' },
  { id: 'responsabilidades', label: 'Responsabilidades', buttonClasses: 'bg-slate-800 text-slate-100 hover:bg-slate-700' },
  { id: 'datos', label: 'Datos', buttonClasses: 'bg-slate-800 text-slate-100 hover:bg-slate-700' },
  { id: 'conclusiones', label: 'Conclusiones', buttonClasses: 'bg-slate-800 text-slate-100 hover:bg-slate-700' },
  { id: 'prompts', label: 'Prompts', buttonClasses: 'bg-slate-800 text-slate-100 hover:bg-slate-700' },
]

export default function App() {
  const [theme, setTheme] = useState('dark')
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('light-mode', theme === 'light')
    document.documentElement.classList.toggle('dark-mode', theme === 'dark')
  }, [theme])

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-950'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <header
          className={`mb-10 overflow-hidden rounded-[2.5rem] p-8 shadow-2xl ring-1 ring-slate-700/70 transition-colors duration-500 ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 shadow-slate-950/40'
              : 'bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 shadow-slate-400/10'
          }`}
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-4 text-center lg:text-left lg:max-w-2xl lg:mx-0 mx-auto">
              <p
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] shadow-sm ring-1 ${
                  theme === 'dark'
                    ? 'bg-sky-500/15 text-sky-200 ring-sky-400/20'
                    : 'bg-slate-200 text-slate-700 ring-slate-300/70'
                }`}
              >
                Informe AraFra
              </p>
              <div className="space-y-4">
                <h1 className={`text-4xl font-semibold tracking-tight sm:text-5xl ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>
                  Análisis SUNBURST
                </h1>
                <p className={`max-w-3xl text-base leading-8 sm:text-lg ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                  Caso SUNBURST: Análisis Jurídico y Técnico del Ciberataque a SolarWinds en el Contexto Chileno
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`relative inline-flex h-11 w-24 items-center rounded-full border border-slate-600/70 px-1 transition ${
                theme === 'dark' ? 'bg-slate-800 text-slate-100' : 'bg-slate-200 text-slate-950'
              }`}
              aria-label="Cambiar tema"
            >
              <span
                className={`absolute left-1 top-1 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-950 shadow-sm transition-all ${
                  theme === 'light' ? 'translate-x-12' : 'translate-x-0'
                }`}
              >
                {theme === 'dark' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </span>
            </button>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`rounded-3xl px-4 py-3 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-sky-500/60 ${section.buttonClasses}`}
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

        <footer className="mt-12 text-center text-slate-500 opacity-70 text-xs leading-6 tracking-[0.16em]">
          <p className="font-semibold uppercase">Diseñado por: Franco Aranguiz</p>
          <p className="mt-1">INACAP</p>
          <p>Fundamentos de Seguridad de la Información</p>
        </footer>

        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-600/80 bg-slate-900/95 text-slate-100 shadow-lg shadow-slate-950/40 transition-opacity duration-300 ${
            showScrollTop ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
          aria-label="Subir al inicio"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}
