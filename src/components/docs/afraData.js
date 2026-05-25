export const resumenData = {
  title: 'Resumen — SUNBURST',
  summary:
    'SUNBURST fue un ataque de ciberespionaje dirigido contra la cadena de suministro de software de SolarWinds en 2020. Un backdoor oculto se integró en una actualización legítima de Orion, comprometiendo agencias gubernamentales, contratistas y grandes empresas dentro de una red global de clientes.',
  metrics: [
    {
      label: 'Clientes afectados',
      icon: 'users',
      value: '18.000+',
      detail: 'Instalaciones de Orion comprometidas',
    },
    {
      label: 'Sectores impactados',
      icon: 'globe',
      value: 'Gobierno + Corporativo',
      detail: 'Agencias públicas y Fortune 500',
    },
    {
      label: 'Objetivo principal',
      icon: 'target',
      value: 'Espionaje',
      detail: 'Robo de inteligencia y credenciales',
    },
  ],
  highlights: [
    'Se utilizó una actualización legítima como vector de ataque.',
    'El malware permaneció oculto durante semanas antes de la detección.',
    'El objetivo fue acceder a comunicaciones y herramientas de defensa.',
  ],
  points: [
    {
      title: 'Contexto',
      icon: 'globe',
      description:
        'SolarWinds desarrollaba Orion, una plataforma de monitoreo utilizada por gobiernos y grandes empresas. La confianza en su cadena de suministro fue el vector principal del ataque.',
    },
    {
      title: 'Método de ataque',
      icon: 'zap',
      description:
        'Los atacantes insertaron el backdoor SUNBURST en una actualización legítima y la firmaron para que pareciera confiable ante clientes y sistemas de seguridad.',
    },
    {
      title: 'Impacto',
      icon: 'alert-triangle',
      description:
        'Miles de organizaciones quedaron expuestas a espionaje, exfiltración de correos y acceso encubierto a redes internas.',
    },
  ],
};

export const marcoData = {
  title: 'Marco Legal',
  sections: [
    {
      category: 'Internacional',
      rules: [
        {
          name: 'Convenio de Budapest',
          bullets: [
            'Acceso ilícito: penaliza el ingreso no autorizado a sistemas.',
            'Interferencia de datos: protege la integridad de la información.',
            'Interferencia de sistemas: sanciona la alteración del funcionamiento normal.',
          ],
        },
      ],
    },
    {
      category: 'Nacional chileno',
      rules: [
        {
          name: 'Ley 21.459 (Delitos informáticos)',
          bullets: [
            'Artículo 1: Ataque a la integridad del sistema.',
            'Artículo 2: Acceso ilícito a sistemas informáticos.',
            'Artículo 3: Interceptación ilícita de datos.',
            'Artículo 4: Ataque a la integridad de los datos informáticos.',
            'Artículo 8: Abuso de dispositivos y software malicioso.',
            'Artículo 10: Agravantes por afectación al Estado y abuso de confianza.',
          ],
        },
        {
          name: 'Ley 21.663 (Ciberseguridad) e ANCI',
          bullets: [
            'Obliga a reportar incidentes de ciberseguridad a CSIRT nacional.',
            'Establece obligaciones de resiliencia y respuesta ante ataques.',
          ],
        },
        {
          name: 'Ley 19.628 (Protección de datos personales)',
          bullets: [
            'Exige consentimiento y custodia adecuada de datos personales.',
            'Sanciona el tratamiento y la divulgación no autorizada de información.',
          ],
        },
      ],
    },
  ],
};

export const delitosData = {
  title: 'Tipificación de Delitos',
  phases: [
    {
      step: 'Desarrollo del malware',
      action:
        'Los atacantes diseñaron el backdoor SUNBURST y lo integraron en la cadena de actualización de Orion para evitar detección.',
      article: 'Artículo 8° (Abuso de dispositivos)',
      analysis:
        'La creación y distribución de un programa informático con fines ilícitos se encuadra en el abuso de dispositivos y facilita los delitos de acceso e interceptación.',
    },
    {
      step: 'Infiltración en SolarWinds',
      action:
        'Accedieron sin autorización a los sistemas internos y al código fuente de la empresa proveedora.',
      article: 'Artículo 2° (Acceso ilícito)',
      analysis:
        'El ingreso forzado a sistemas ajenos protege el perímetro y el código de un proveedor de software, lo que agrava la responsabilidad.',
    },
    {
      step: 'Alteración del código',
      action:
        'Modificaron la actualización de Orion para inyectar el malware de manera oculta.',
      article: 'Artículo 4° (Ataque a la integridad de los datos)',
      analysis:
        'La manipulación de datos informáticos legítimos para introducir peligro abreviado es un ataque directo a la integridad del software.',
    },
    {
      step: 'Activación del troyano',
      action:
        'El malware activado alteró el funcionamiento de las redes y permitió conexiones ocultas a servidores externos.',
      article: 'Artículo 1° (Ataque a la integridad del sistema)',
      analysis:
        'Impide el correcto funcionamiento de sistemas y compromete su disponibilidad y confianza operativa.',
    },
    {
      step: 'Captura de comunicaciones',
      action:
        'SUNBURST interceptó y exfiltró correos electrónicos y otros datos en tránsito.',
      article: 'Artículo 3° (Interceptación ilícita)',
      analysis:
        'Intercepción de datos no públicos con fines de espionaje es una forma clásica de delito informático.',
    },
  ],
  aggravants: [
    'Afectación al Estado y sistemas de interés público.',
    'Abuso de confianza técnica al usar una actualización legítima.',
    'Compromiso de información estratégica de alto valor.',
  ],
};

export const comparacionData = {
  title: 'Comparación Regulatoria',
  sectors: [
    {
      name: 'Financiera y Bancaria',
      regulation: 'RAN Capítulo 20-10 (CMF)',
      applicability: 'Alta. Obliga a la gestión de riesgo operacional y continuidad del negocio.',
      sanction: 'Multas, amonestaciones y restricciones de operación.',
      insight:
        'La responsabilidad no se transfiere al proveedor: la entidad afectada debe auditar actualizaciones críticas.',
    },
    {
      name: 'Telecomunicaciones',
      regulation: 'Resolución SUBTEL N° 1.483',
      applicability: 'Media-alta. Exige estándares de seguridad y pruebas de integridad en redes.',
      sanction: 'Multas administrativas y posibles sanciones sobre concesiones.',
      insight:
        'La telco afectada habría fallado al no aislar y validar parches en infraestructura troncal.',
    },
    {
      name: 'Infraestructura crítica',
      regulation: 'Ley N° 21.663',
      applicability: 'Directa. Obliga notificar incidentes y mantener resiliencia.',
      sanction: 'Multas de ANCI y responsabilidad penal adicional.',
      insight:
        'La obligación de reporte inmediato al CSIRT es clave en ataques a la cadena de suministro.',
    },
  ],
  findings: [
    'La responsabilidad es no delegable, incluso cuando el ataque se origina en un tercero proveedor.',
    'Los plazos de notificación son estrictos y varían entre sectores, con efectos directos sobre la respuesta legal.',
    'Las organizaciones enfrentan sanciones regulatorias y penales simultáneamente.',
  ],
};

export const responsabilidadesData = {
  title: 'Responsabilidades Legales',
  actors: [
    {
      name: 'Grupo de Ciberespionaje',
      role: 'Autor del ataque y creador del malware.',
      responsibilities: [
        'Responsabilidad penal por acceso ilícito e interceptación ilícita.',
        'Culpa directa en la distribución de software malicioso.',
      ],
    },
    {
      name: 'SolarWinds',
      role: 'Proveedor de software afectado y vector del ataque.',
      responsibilities: [
        'Responsabilidad civil y administrativa por falta de controles internos.',
        'Obligación de reportar vulnerabilidades y cooperar con la investigación.',
      ],
    },
    {
      name: 'Clientes afectados',
      role: 'Organizaciones que instalaron la actualización comprometida.',
      responsibilities: [
        'Deber de diligencia en la gestión de terceros.',
        'Responsabilidad de reportar incidentes si operan como PSE/OIV.',
      ],
    },
  ],
};

export const datosData = {
  title: 'Tratamiento de Datos Personales',
  dataTypes: [
    { label: 'Correos electrónicos corporativos', category: 'Personales' },
    { label: 'Credenciales de acceso y tokens', category: 'Personales' },
    { label: 'Comunicaciones internas', category: 'Personales' },
  ],
  arco: [
    {
      name: 'Acceso',
      impact:
        'Los titulares perdieron visibilidad sobre qué información fue comprometida y quién la tenía.',
    },
    {
      name: 'Rectificación',
      impact:
        'Resulta difícil corregir o anular datos cuando el alcance del incidente y su destino son inciertos.',
    },
    {
      name: 'Oposición',
      impact:
        'Los titulares no pudieron oponerse al tratamiento indebido de sus datos, ya que se realizó sin su conocimiento.',
    },
  ],
  summary:
    'Este caso afecta directamente la Ley 19.628 porque la filtración y el acceso no autorizado vulneran los principios de consentimiento, seguridad y proporcionalidad en el tratamiento de datos.',
};

export const conclusionesData = {
  title: 'Conclusiones y Recomendaciones',
  recommendations: [
    {
      title: 'Zero Trust',
      description:
        'Adoptar una arquitectura de confianza cero reduce el riesgo de que una actualización comprometida se propague sin controles adicionales.',
    },
    {
      title: 'Gestión de terceros',
      description:
        'Verificar y auditar a proveedores críticos con mayor frecuencia y exigir controles de seguridad robustos.',
    },
    {
      title: 'Notificación temprana',
      description:
        'Establecer procesos de reporte inmediato a autoridades y CSIRT para cumplir plazos legales y limitar daños.',
    },
  ],
  reflection:
    'El caso SUNBURST demuestra que los ataques a la cadena de suministro no sólo son una falla técnica, sino también una vulnerabilidad legal y de gobernanza que exige medidas estructurales.',
};

export const promptsData = {
  title: 'Prompts y Notas',
  sections: [
    {
      label: 'Caso e Introducción',
      prompts: [
        'Dame un caso real e internacional de ciberataque a una empresa que afectara a muchos clientes. Explica cómo entraron los atacantes.',
        'Cuál era el objetivo de los hackers detrás de este ataque y qué daños provocó?',
      ],
    },
    {
      label: 'Marco normativo y tipificación penal',
      prompts: [
        'Qué leyes de Chile y qué acuerdos internacionales aplicarían a este caso si hubiera pasado aquí?',
        'Explica de forma muy simple por qué se rompe cada una de las leyes chilenas que mencionaste en este ataque.',
      ],
    },
    {
      label: 'Comparativa y responsabilidades',
      prompts: [
        'Haz una tabla comparativa de marcos regulatorios por industria.',
        'Agrega ejes a la tabla para ver el alcance, las sanciones y a quién aplica cada norma. También pon una columna que explique cómo se conecta cada ley con el caso de SolarWinds.',
        'Identifica a tres actores del caso y explica sus responsabilidades penales, civiles y administrativas con los artículos de las leyes chilenas.',
      ],
    },
    {
      label: 'Datos personales y recomendaciones',
      prompts: [
        'Explica cómo afecta este caso a la Ley 19.628 de datos personales en Chile. Nombra tres tipos de datos robados, sepáralos en personales o sensibles, y analiza tres derechos ARCO usando las citas textuales de la ley.',
        'Dame recomendaciones de seguridad para evitar estos ataques en los proveedores y redacta la conclusión final del informe.',
      ],
    },
  ],
  corrections: [
    {
      issue: 'Corrección de leyes chilenas',
      detail:
        'La IA confundió los números de los artículos en la Ley 21.459. Se corrigió con base en la fuente oficial de la Biblioteca del Congreso Nacional.',
      fix: 'Ahora se usa el mapeo correcto: Art. 1, 2, 3, 4 y 8 para los delitos informáticos relevantes.',
    },
  ],
};
