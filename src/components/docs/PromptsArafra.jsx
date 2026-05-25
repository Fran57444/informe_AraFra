import React from 'react'
import ReactMarkdown from 'react-markdown'
import { FileText } from 'lucide-react'

const markdown = `# Prompts y Uso de Inteligencia Artificial

## 1. Registro de Prompts por Sección

### Sección: Selección del Caso e Introducción
- Prompt 1: Dame un caso real e internacional de ciberataque a una empresa que afectara a muchos clientes. Explica cómo entraron los atacantes.
- Prompt 2: Cuál era el objetivo de los hackers detrás de este ataque y qué daños provocó?

### Sección: Marco Normativo y Tipificación Penal
- Prompt 3: Qué leyes de Chile y qué acuerdos internacionales aplicarían a este caso si hubiera pasado aquí?
- Prompt 4: Explica de forma muy simple por qué se rompe cada una de las leyes chilenas que mencionaste en este ataque.

### Sección: Tabla comparativa y responsabilidades
- Prompt 5: Haz una tabla comparativa de marcos regulatorios por industria.
- Prompt 6: Agrega ejes a la tabla para ver el alcance, las sanciones y a quién aplica cada norma. También pon una columna que explique cómo se conecta cada ley con el caso de SolarWinds.
- Prompt 7: Identifica a tres actores del caso y explica sus responsabilidades penales, civiles y administrativas con los artículos de las leyes chilenas.

### Sección: Tratamiento de Datos Personales y Recomendaciones
- Prompt 8: Explica cómo afecta este caso a la Ley 19.628 de datos personales en Chile. Nombra tres tipos de datos robados, sepáralos en personales o sensibles, y analiza tres derechos ARCO usando las citas textuales de la ley.
- Prompt 9: Dame recomendaciones de seguridad para evitar estos ataques en los proveedores y redacta la conclusión final del informe.

---

## 2. Registro de Correcciones Realizadas a la IA

Durante el trabajo con la Inteligencia Artificial, se detectó un error importante en las leyes de Chile que tuvo que ser corregido para que el informe fuera exacto:

### Corrección 1: Error en los artículos de la Ley N° 21.459 (Delitos Informáticos)
- Error de la IA: El modelo de IA confundió los números de los artículos de la ley chilena de delitos informáticos. Dijo que la interceptación de correos estaba en el artículo 2 y el abuso de dispositivos en el artículo 5.
- Prompt de corrección del usuario: Entra a esta página de la Biblioteca del Congreso Nacional (https://www.bcn.cl/leychile/navegar?idNorma=1177743), revisa el texto real y corrige lo que me dijiste sobre la ley 21459.
- Justificación del cambio: La IA estaba entregando información falsa sobre la ley chilena. Al enviarle el enlace oficial, se obligó al modelo a corregir los datos. El resultado correcto quedó así: Artículo 1 (Ataque al sistema), Artículo 2 (Acceso ilícito), Artículo 3 (Interceptación ilícita), Artículo 4 (Ataque a los datos) y Artículo 8 (Abuso de dispositivos).
`
export default function PromptsArafra() {
  return (
    <article className="max-w-4xl mx-auto p-7 bg-slate-900/95 border border-slate-700/70 ring-1 ring-slate-700/20 shadow-2xl shadow-slate-950/20 rounded-[1.75rem] transition-all duration-500 hover:-translate-y-1 hover:shadow-slate-950/40 motion-safe:animate-fadeIn">
      <header className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-slate-800/80 text-slate-200 rounded-3xl ring-1 ring-slate-700/70">
          <FileText className="text-slate-200" />
        </div>
        <h2 className="text-2xl font-semibold">Prompts y Notas</h2>
      </header>
      <div className="prose prose-invert max-w-none text-slate-100">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </article>
  )
}
