import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Scale } from 'lucide-react'

const markdown = `# Comparación de Marcos Regulatorios por Industria

A continuación, se presenta la tabla comparativa de los marcos regulatorios aplicables ante un incidente de ciberseguridad de la naturaleza de SolarWinds (ataque a la cadena de suministro y espionaje masivo), analizado bajo cuatro ejes fundamentales y su nivel de aplicabilidad.

## Sector 1: Financiera y Bancaria

- Marco Regulación: RAN Capítulo 20-10 de la Comisión para el Mercado Financiero (CMF)
- Eje 1: Alcance y Jurisdicción: Nacional (Chile). Regula la gestión del riesgo operacional, la continuidad del negocio y la seguridad de la información en el ecosistema financiero.
- Eje 2: Sujeto Regulado (A quién aplica): Bancos e instituciones financieras que operan en territorio chileno.
- Eje 3: Sanciones por Incumplimiento: Multas financieras de carácter institucional, amonestaciones públicas o restricciones directas a la licencia para operar nuevos negocios.
- Eje 4: Aplicabilidad al Caso (Mapeo con SolarWinds): Directa. Si un banco chileno utilizara SolarWinds, la normativa le prohíbe delegar la culpa en el proveedor tecnológico. El banco sería responsable ante la CMF por no auditar los parches del tercero antes de instalarlos.

---

## Sector 2: Telecomunicaciones

- Marco Regulación: Resolución Exenta N° 1.483 de la Subsecretaría de Telecomunicaciones (SUBTEL)
- Eje 1: Alcance y Jurisdicción: Nacional (Chile). Establece condiciones técnicas y estándares mínimos de ciberseguridad para el almacenamiento, transmisión y resguardo de datos en redes públicas.
- Eje 2: Sujeto Regulado (A quién aplica): Concesionarias y empresas proveedoras de servicios de telecomunicaciones públicos e interconectados.
- Eje 3: Sanciones por Incumplimiento: Multas administrativas en UTM, cargos regulatorios y, en escenarios de negligencia extrema o reiterada, la caducidad de la concesión pública.
- Eje 4: Aplicabilidad al Caso (Mapeo con SolarWinds): Crítica. Los atacantes de SolarWinds interceptaron el tráfico de datos en tránsito. Bajo esta norma, una telco chilena afectada habría fallado en el deber de aislar y probar las actualizaciones críticas en su infraestructura troncal de red.

---

## Sector 3: Multisectorial / Infraestructura Crítica

- Marco Regulación: Ley N° 21.663 (Ley Marco de Ciberseguridad)
- Eje 1: Alcance y Jurisdicción: Nacional (Chile). Ecosistema de gobernanza general. Obliga a mantener la resiliencia ante ciberataques que pongan en jaque servicios esenciales del país.
- Eje 2: Sujeto Regulado (A quién aplica): Organismos del Estado, Servicios Esenciales (PSE) y Operadores de Importancia Vital (OIV) de cualquier rubro (Energía, Salud, Transportes, etc.).
- Eje 3: Sanciones por Incumplimiento: Multas administrativas y económicas millonarias aplicadas centralmente por la ANCI, además de exponer a la empresa a la Ley N° 20.393 (Responsabilidad Penal).
- Eje 4: Aplicabilidad al Caso (Mapeo con SolarWinds): Directa y de Reporte. Los ministerios y agencias gubernamentales que instalaron el software infectado en el caso real habrían infringido en Chile la obligación legal de notificar el incidente al CSIRT Nacional (ANCI) dentro de las primeras horas de sospecha.

---

# Análisis de Hallazgos Clave:

1. **Responsabilidad No Delegable (Eje de Terceros):** Los marcos analizados (especialmente el financiero) demuestran que, ante un ataque a la cadena de suministro, la responsabilidad legal frente al regulador permanece en la empresa principal afectada y no en el proveedor externo de software.
2. **Plazos de Notificación Asimétricos:** Existe una alta exigencia temporal en la fiscalización. Mientras el marco multisectorial de la ANCI otorga un rango de pocas horas, la regulación bancaria (CMF) obliga al reporte técnico en un máximo de 30 minutos desde la detección del incidente.
3. **Dualidad Punitiva:** Un incumplimiento normativo frente a un ataque como el analizado expone a las organizaciones tanto a multas administrativas institucionales por vía regulatoria sectorial, como a sanciones penales corporativas bajo la Ley N° 20.393.
`
export default function ComparacionArafra() {
  return (
    <article className="max-w-4xl mx-auto p-7 bg-slate-900/95 border border-slate-700/70 ring-1 ring-slate-700/20 shadow-2xl shadow-slate-950/20 rounded-[1.75rem] transition-all duration-500 hover:-translate-y-1 hover:shadow-slate-950/40 motion-safe:animate-fadeIn">
      <header className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-slate-800/80 text-cyan-300 rounded-3xl ring-1 ring-slate-700/70">
          <Scale className="text-cyan-300" />
        </div>
        <h2 className="text-2xl font-semibold">Comparación Regulatoria</h2>
      </header>
      <div className="prose prose-invert max-w-none text-slate-100">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </article>
  )
}
