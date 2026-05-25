import { FileText, RefreshCcw, AlertCircle } from 'lucide-react'
import { promptsData } from './afraData'

export default function PromptsArafra({ theme }) {
  return (
    <article className={`max-w-4xl mx-auto p-7 border ring-1 shadow-2xl rounded-[1.75rem] transition-all duration-500 hover:-translate-y-1 motion-safe:animate-fadeIn ${
      theme === 'dark'
        ? 'bg-slate-900/95 border-slate-700/70 ring-slate-700/20 shadow-slate-950/20 hover:shadow-slate-950/40'
        : 'bg-slate-100 border-slate-300/70 ring-slate-300/20 shadow-slate-200/20 hover:shadow-slate-200/40'
    }`}>
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center mb-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-slate-400 to-slate-600 text-slate-950 shadow-lg shadow-slate-500/20">
          <FileText className="h-8 w-8" />
        </div>
        <div>
          <p className={`text-sm uppercase tracking-[0.35em] ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>Diseño de prompts</p>
          <h2 className={`text-3xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>{promptsData.title}</h2>
        </div>
      </header>

      <div className="space-y-6">
        {promptsData.sections.map((section) => (
          <div key={section.label} className={`rounded-3xl border p-6 ${
            theme === 'dark'
              ? 'border-slate-700/70 bg-slate-950/80'
              : 'border-slate-300/70 bg-slate-200/50'
          }`}>
            <div className={`flex items-center gap-3 ${theme === 'dark' ? 'text-slate-100' : 'text-slate-800'}`}>
              <div className={`rounded-2xl p-3 ${theme === 'dark' ? 'bg-slate-800/90 text-slate-200' : 'bg-slate-300/90 text-slate-700'}`}>
                <RefreshCcw className="h-5 w-5" />
              </div>
              <div>
                <p className={`text-sm uppercase tracking-[0.25em] ${theme === 'dark' ? 'text-slate-500' : 'text-slate-600'}`}>{section.label}</p>
                <h3 className={`mt-2 text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>Bloque de prompts</h3>
              </div>
            </div>
            <ul className={`mt-5 space-y-3 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
              {section.prompts.map((prompt) => (
                <li key={prompt} className={`rounded-2xl border p-4 text-sm leading-6 ${
                  theme === 'dark'
                    ? 'border-slate-800/70 bg-slate-900/90'
                    : 'border-slate-300/70 bg-slate-200/70'
                }`}>
                  {prompt}
                </li>
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
          <AlertCircle className="h-5 w-5" />
          <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>Correcciones importantes</h3>
        </div>
        <div className={`mt-5 space-y-4 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
          {promptsData.corrections.map((item) => (
            <div key={item.issue} className={`rounded-3xl border p-5 ${
              theme === 'dark'
                ? 'border-slate-800/70 bg-slate-900/90'
                : 'border-slate-300/70 bg-slate-200/70'
            }`}>
              <p className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>{item.issue}</p>
              <p className="mt-2 leading-7">{item.detail}</p>
              <p className={`mt-2 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{item.fix}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}
