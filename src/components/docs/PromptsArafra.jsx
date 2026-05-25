import { FileText, RefreshCcw, AlertCircle } from 'lucide-react'
import { promptsData } from './afraData'

export default function PromptsArafra() {
  return (
    <article className="max-w-4xl mx-auto p-7 bg-slate-900/95 border border-slate-700/70 ring-1 ring-slate-700/20 shadow-2xl shadow-slate-950/20 rounded-[1.75rem] transition-all duration-500 hover:-translate-y-1 hover:shadow-slate-950/40 motion-safe:animate-fadeIn">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center mb-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-slate-400 to-slate-600 text-slate-950 shadow-lg shadow-slate-500/20">
          <FileText className="h-8 w-8" />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-slate-300">Diseño de prompts</p>
          <h2 className="text-3xl font-semibold text-white">{promptsData.title}</h2>
        </div>
      </header>

      <div className="space-y-6">
        {promptsData.sections.map((section) => (
          <div key={section.label} className="rounded-3xl border border-slate-700/70 bg-slate-950/80 p-6">
            <div className="flex items-center gap-3 text-slate-100">
              <div className="rounded-2xl bg-slate-800/90 p-3 text-slate-200">
                <RefreshCcw className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-slate-500">{section.label}</p>
                <h3 className="mt-2 text-lg font-semibold text-white">Bloque de prompts</h3>
              </div>
            </div>
            <ul className="mt-5 space-y-3 text-slate-300">
              {section.prompts.map((prompt) => (
                <li key={prompt} className="rounded-2xl border border-slate-800/70 bg-slate-900/90 p-4 text-sm leading-6">
                  {prompt}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-3xl border border-slate-700/70 bg-slate-950/80 p-6">
        <div className="flex items-center gap-3 text-rose-300">
          <AlertCircle className="h-5 w-5" />
          <h3 className="text-xl font-semibold text-white">Correcciones importantes</h3>
        </div>
        <div className="mt-5 space-y-4 text-slate-300">
          {promptsData.corrections.map((item) => (
            <div key={item.issue} className="rounded-3xl border border-slate-800/70 bg-slate-900/90 p-5">
              <p className="font-semibold text-white">{item.issue}</p>
              <p className="mt-2 leading-7">{item.detail}</p>
              <p className="mt-2 text-slate-400">{item.fix}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}
