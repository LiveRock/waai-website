import type { LocaleContent } from './types';

const es: LocaleContent = {
  features: {
    'auto-responder': {
      title: 'Respuesta Automática de WhatsApp',
      shortTitle: 'Respuesta Automática',
      headline: 'No dejes a ningún cliente esperando más',
      description:
        'Respuestas instantáneas con IA a cada mensaje de WhatsApp. La coincidencia basada en reglas gestiona las preguntas habituales en milisegundos, con un respaldo inteligente de LLM para todo lo demás.',
      metaDescription: 'Responde automáticamente a cada mensaje de WhatsApp con precisión potenciada por IA. Coincidencia basada en reglas más respaldo inteligente de LLM.',
      benefits: [
        { title: 'Respuestas inferiores a un segundo', description: 'La coincidencia difusa encuentra la respuesta correcta antes de que tu cliente termine de escribir el siguiente mensaje.' },
        { title: 'Respaldo inteligente', description: 'Cuando ninguna regla coincide, tu IA interviene con una respuesta contextual y útil, no un genérico "no entiendo".' },
        { title: 'Disponible 24/7', description: 'Tu agente de IA nunca duerme, nunca se toma un día libre y nunca tiene un mal día.' },
      ],
      howItWorks: [
        { title: 'Configura tus preguntas y respuestas', description: 'Añade preguntas y respuestas habituales: impórtalas desde CSV o escríbelas tú mismo.' },
        { title: 'Configura tu IA', description: 'Elige tu proveedor de IA y personaliza el prompt del sistema para que coincida con la voz de tu marca.' },
        { title: 'Ponlo en marcha', description: 'Cada mensaje entrante de WhatsApp recibe al instante una respuesta precisa y automática.' },
      ],
      useCases: [
        { title: 'Automatización de FAQ', description: 'Gestiona "¿Cuál es vuestro horario?" y "¿Dónde estáis ubicados?" sin mover un dedo.' },
        { title: 'Consultas de producto', description: 'Responde automáticamente a preguntas de precio, disponibilidad y especificaciones al instante.' },
        { title: 'Soporte fuera de horario', description: 'Sigue atendiendo a los clientes cuando tu equipo está desconectado.' },
      ],
    },
    'knowledge-base': {
      title: 'Base de Conocimiento',
      shortTitle: 'Base de Conocimiento',
      headline: 'La experiencia de tu negocio, siempre disponible',
      description:
        'Crea una base de conocimiento completa de preguntas y respuestas de la que tu agente de IA extrae información. Importa cientos de entradas mediante CSV, organízalas por prioridad y deja que la coincidencia difusa encuentre la respuesta perfecta cada vez.',
      metaDescription: 'Crea una base de conocimiento inteligente de preguntas y respuestas con importación CSV, coincidencia difusa y control de prioridades. Tu experiencia, siempre disponible.',
      benefits: [
        { title: 'Importación masiva', description: 'Sube cientos de pares de preguntas y respuestas mediante CSV o JSON. Tu base de conocimiento crece en minutos, no en semanas.' },
        { title: 'Coincidencia inteligente', description: 'La coincidencia difusa gestiona erratas, variaciones y coincidencias parciales: los clientes no necesitan redactar la frase exacta.' },
        { title: 'Sistema de prioridades', description: 'Controla qué respuestas tienen prioridad cuando se encuentran varias coincidencias.' },
      ],
      howItWorks: [
        { title: 'Añade tu conocimiento', description: 'Escribe pares de preguntas y respuestas individuales o impórtalos masivamente desde una hoja de cálculo.' },
        { title: 'Organiza y prioriza', description: 'Define categorías, prioridades y frases detonantes para cada entrada.' },
        { title: 'Prueba y despliega', description: 'Usa el chat de prueba integrado para verificar las respuestas y luego publícalas con confianza.' },
      ],
      useCases: [
        { title: 'Catálogo de productos', description: 'Permite que los clientes pregunten por cualquier producto y obtengan detalles precisos al instante.' },
        { title: 'FAQ de políticas', description: 'Envíos, devoluciones, garantías: responde preguntas de políticas sin intervención humana.' },
        { title: 'Guía de onboarding', description: 'Los nuevos clientes obtienen respuestas inmediatas a sus dudas de configuración y primeros pasos.' },
      ],
    },
    'logic-flows': {
      title: 'Flujos Lógicos',
      shortTitle: 'Flujos Lógicos',
      headline: 'Crea conversaciones que convierten',
      description:
        'Crea flujos de conversación de varios pasos con lógica de ramificación, condiciones y acciones. Guía a los clientes a través de reservas, cualificación y pedidos, todo sin escribir una sola línea de código.',
      metaDescription: 'Crea conversaciones de WhatsApp de varios pasos con lógica de ramificación, condiciones y variables. Sin código.',
      benefits: [
        { title: 'Editor visual de flujos', description: 'Diseña conversaciones complejas con un editor paso a paso e intuitivo. No se necesita programación.' },
        { title: 'Ramificación inteligente', description: 'Dirige a los clientes por caminos distintos según sus respuestas, la hora del día o cualquier variable.' },
        { title: 'Sistema de variables', description: 'Captura y reutiliza información a lo largo de la conversación: nombres, opciones, cálculos.' },
      ],
      howItWorks: [
        { title: 'Diseña tu flujo', description: 'Añade pasos de mensaje, pregunta y condición para construir tu conversación.' },
        { title: 'Define detonantes', description: 'Especifica palabras clave o frases que activen el flujo automáticamente.' },
        { title: 'Prueba y activa', description: 'Recorre el flujo en modo de prueba y luego despliégalo para gestionar conversaciones reales.' },
      ],
      useCases: [
        { title: 'Cualificación de leads', description: 'Formula preguntas de cualificación y deriva automáticamente los leads más prometedores a tu equipo de ventas.' },
        { title: 'Reserva de citas', description: 'Guía a los clientes por los huecos disponibles y confirma las reservas mediante Google Calendar.' },
        { title: 'Procesamiento de pedidos', description: 'Acompaña a los clientes en la selección de productos, personalización y realización del pedido.' },
      ],
    },
    'ai-chatbot': {
      title: 'Chatbot IA',
      shortTitle: 'Chatbot IA',
      headline: 'Tu marca, potenciada por cualquier IA',
      description:
        'Elige entre OpenAI, Anthropic, z.ai o trae tu propio modelo. Configura la personalidad, el tono y la experiencia para que encajen perfectamente con tu negocio. La compatibilidad con múltiples proveedores significa que nunca estás encerrado.',
      metaDescription: 'Chatbot de IA multiproveedor para WhatsApp. Elige OpenAI, Anthropic, z.ai o tu propio modelo. Tu marca, tu IA.',
      benefits: [
        { title: 'Multiproveedor', description: 'Cambia entre OpenAI, Anthropic, z.ai, llama.cpp y OpenRouter sin alterar tu configuración.' },
        { title: 'Voz de marca', description: 'Personaliza los prompts del sistema para que la IA hable con el tono y estilo de tu marca.' },
        { title: 'Consciente del contexto', description: 'La IA comprende el historial de la conversación y usa tu base de conocimiento para dar respuestas precisas.' },
      ],
      howItWorks: [
        { title: 'Elige tu proveedor', description: 'Selecciona OpenAI, Anthropic, z.ai o cualquier endpoint compatible con OpenAI.' },
        { title: 'Personaliza el prompt', description: 'Escribe un prompt del sistema que capture la voz y la experiencia de tu marca.' },
        { title: 'Define el modelo', description: 'Elige el modelo que se ajuste a tus necesidades y presupuesto: desde rápido y económico hasta potente y matizado.' },
      ],
      useCases: [
        { title: 'Soporte al cliente', description: 'Gestiona consultas de soporte complejas con una IA que entiende tus productos y políticas.' },
        { title: 'Asistente de ventas', description: 'Recomienda productos, responde preguntas técnicas y guía las decisiones de compra.' },
        { title: 'Bot de consultoría', description: 'Ofrece consultas y evaluaciones iniciales basadas en tu experiencia.' },
      ],
    },
    'team-inbox': {
      title: 'Bandeja de Equipo',
      shortTitle: 'Bandeja de Equipo',
      headline: 'La IA gestiona la rutina. Tú te encargas del resto.',
      description:
        'Supervisa todas las conversaciones de WhatsApp en tiempo real. Intervén con una respuesta humana cuando la IA no sea suficiente. Traspasa entre IA y agentes humanos sin que el cliente lo note.',
      metaDescription: 'Supervisa conversaciones de WhatsApp en tiempo real. Intervén con respuestas humanas cuando la IA no sea suficiente. Derivación fluida.',
      benefits: [
        { title: 'Supervisión en vivo', description: 'Observa cómo se desarrollan las conversaciones en tiempo real con listas de mensajes que se actualizan solas.' },
        { title: 'Derivación humana', description: 'Toma el control de cualquier conversación con una respuesta manual. La IA se retira hasta que termines.' },
        { title: 'Historial completo', description: 'Cada mensaje queda registrado: busca, filtra y revisa cualquier conversación en cualquier momento.' },
      ],
      howItWorks: [
        { title: 'La IA lo gestiona', description: 'Los mensajes entrantes reciben respuestas instantáneas de la IA según tu base de conocimiento y tus flujos.' },
        { title: 'Tú supervisas', description: 'Observa todas las conversaciones desde tu panel. Actualizaciones en tiempo real, sin necesidad de recargar.' },
        { title: 'Intervén cuando haga falta', description: 'Escribe una respuesta manual para tomar el control. La IA se pausa y se reanuda cuando terminas.' },
      ],
      useCases: [
        { title: 'Gestión de escalados', description: 'Los problemas complejos se escalan a humanos mientras la IA gestiona lo sencillo.' },
        { title: 'Atención VIP', description: 'Intervén en conversaciones de clientes de alto valor para dar un toque personal.' },
        { title: 'Control de calidad', description: 'Revisa las conversaciones de la IA y corrige las respuestas para mejorar la precisión con el tiempo.' },
      ],
    },
    campaigns: {
      title: 'Campañas de WhatsApp',
      shortTitle: 'Campañas',
      headline: 'Llega a los clientes donde realmente leen',
      description:
        'Los mensajes de WhatsApp tienen una tasa de apertura del 98%. Envía campañas, promociones y novedades segmentadas directamente al teléfono de tus clientes. Mensajería basada en plantillas que cumple las políticas de WhatsApp.',
      metaDescription: 'Envía campañas de WhatsApp con una tasa de apertura del 98%. Mensajería basada en plantillas, entrega segmentada y cumplimiento de políticas.',
      benefits: [
        { title: '98% de tasa de apertura', description: 'Los mensajes de WhatsApp se abren. El correo electrónico no puede competir con ese nivel de atención.' },
        { title: 'Basado en plantillas', description: 'Las plantillas de mensaje preaprobadas garantizan que tus campañas cumplan las políticas de WhatsApp.' },
        { title: 'Entrega segmentada', description: 'Segmenta tu audiencia y envía el mensaje adecuado a las personas adecuadas.' },
      ],
      howItWorks: [
        { title: 'Crea una plantilla', description: 'Diseña tu plantilla de mensaje con variables dinámicas para personalizar.' },
        { title: 'Consigue aprobación', description: 'Envía tu plantilla a WhatsApp para su aprobación, normalmente en menos de 24 horas.' },
        { title: 'Envía tu campaña', description: 'Difunde tu mensaje a los contactos seleccionados con un solo clic.' },
      ],
      useCases: [
        { title: 'Ofertas flash', description: 'Envía promociones de tiempo limitado que los clientes realmente ven y aprovechan.' },
        { title: 'Recordatorios de cita', description: 'Reduce las ausencias con recordatorios de cita automáticos por WhatsApp.' },
        { title: 'Lanzamientos de producto', description: 'Anuncia nuevos productos o servicios directamente a tu base de clientes.' },
      ],
    },
    analytics: {
      title: 'Panel de Analítica',
      shortTitle: 'Analítica',
      headline: 'Sabes lo que funciona. Arreglas lo que no.',
      description:
        'Controla los volúmenes de mensajes, las fuentes de respuesta, la popularidad de los detonantes y los patrones de conversación. Ve exactamente cómo rinde tu agente de IA y dónde mejorar.',
      metaDescription: 'Controla volúmenes de mensajes de WhatsApp, el rendimiento de la IA, los temas populares y los patrones de conversación. Optimización basada en datos.',
      benefits: [
        { title: 'Insights de mensajes', description: 'Controla los volúmenes de entrada y salida, los tiempos de respuesta y las tendencias de conversación a lo largo del tiempo.' },
        { title: 'Desglose por fuente', description: 'Ve cómo se reparten las respuestas entre reglas, IA, flujos y agentes humanos.' },
        { title: 'Temas populares', description: 'Descubre tus preguntas más frecuentes y los flujos más usados para optimizar tu configuración.' },
      ],
      howItWorks: [
        { title: 'Los mensajes fluyen', description: 'Cada interacción de WhatsApp se registra y categoriza automáticamente.' },
        { title: 'El panel se actualiza', description: 'Los gráficos y métricas se refrescan a diario con los últimos datos.' },
        { title: 'Actúa según los insights', description: 'Usa los datos para añadir preguntas y respuestas que faltan, mejorar los flujos y optimizar los prompts de IA.' },
      ],
      useCases: [
        { title: 'Seguimiento de rendimiento', description: 'Vigila cuántas conversaciones gestiona tu IA frente a los agentes humanos.' },
        { title: 'Análisis de carencias', description: 'Encuentra las preguntas que la IA no sabe responder y añádelas a tu base de conocimiento.' },
        { title: 'Medición del ROI', description: 'Controla los volúmenes de mensajes para cuantificar el ahorro de tiempo y costes.' },
      ],
    },
    'document-generation': {
      title: 'Generación de Documentos',
      shortTitle: 'Generación de Documentos',
      headline: 'De conversación a documento en segundos',
      description:
        'Genera hojas de cálculo Excel, documentos Word, PDF, Google Docs y Google Sheets directamente a partir de los datos del chat. Facturas, informes, presupuestos: creados y enviados automáticamente.',
      metaDescription: 'Genera Excel, Word, PDF, Google Docs y Sheets a partir de conversaciones de WhatsApp. Facturas, presupuestos e informes en piloto automático.',
      benefits: [
        { title: 'Múltiples formatos', description: 'Genera Excel, Word, PDF o Google Docs y Sheets nativos: lo que tu flujo de trabajo necesite.' },
        { title: 'Basado en datos', description: 'Usa variables de conversación y contexto para rellenar los documentos con datos reales del cliente.' },
        { title: 'Entrega automática', description: 'Los documentos se generan y se envían al cliente por WhatsApp automáticamente.' },
      ],
      howItWorks: [
        { title: 'Define el documento', description: 'Configura columnas, fuentes de datos y formato en el paso de generación de tu flujo.' },
        { title: 'Recoge los datos', description: 'Tu flujo lógico recopila la información a través de la conversación.' },
        { title: 'Genera y envía', description: 'El documento se crea y se entrega al cliente, sin pasos manuales.' },
      ],
      useCases: [
        { title: 'Generación de facturas', description: 'Recoge los detalles del pedido y genera una factura profesional automáticamente.' },
        { title: 'Creador de presupuestos', description: 'Recorre los requisitos y produce un documento de presupuesto con formato.' },
        { title: 'Elaboración de informes', description: 'Recoge datos a través del chat y compónlos en un informe estructurado.' },
      ],
    },
    'super-powers': {
      title: 'Súper Poderes',
      shortTitle: 'Súper Poderes',
      headline: 'Tu agente de IA tiene superpoderes',
      description:
        'Análisis de visión, búsqueda web, lectura web y acceso a la documentación de GitHub: todo disponible como capacidades que tu agente de IA puede usar durante las conversaciones.',
      metaDescription: 'Análisis de visión, búsqueda web, lectura web y acceso a la documentación de GitHub para tu agente de IA de WhatsApp. Superpoderes para tu negocio.',
      benefits: [
        { title: 'Análisis de visión', description: 'Los clientes envían fotos y tu IA las entiende: productos, documentos, capturas de pantalla, cualquier cosa.' },
        { title: 'Búsqueda web', description: 'Tu IA puede buscar en la web información en tiempo real para responder con precisión.' },
        { title: 'Lector web', description: 'Extrae y resume el contenido de cualquier URL que compartan tus clientes.' },
      ],
      howItWorks: [
        { title: 'Activa los Súper Poderes', description: 'Habilita Visión, Búsqueda Web, Lector Web o Zread en tu configuración.' },
        { title: 'Crea flujos', description: 'Añade pasos de visión para analizar imágenes o pasos de búsqueda web para obtener datos en tiempo real.' },
        { title: 'Ofrece respuestas', description: 'Tu IA usa estas capacidades durante las conversaciones para dar mejores respuestas.' },
      ],
      useCases: [
        { title: 'Identificación de productos', description: 'Los clientes envían una foto de un producto y obtienen identificación y precio al instante.' },
        { title: 'Procesamiento de documentos', description: 'Extrae texto de fotos de facturas, recibos o contratos.' },
        { title: 'Búsquedas en tiempo real', description: 'Busca en la web precios actuales, disponibilidad o noticias para responder a las preguntas.' },
      ],
    },
  },

  industries: {
    ecommerce: {
      title: 'E-commerce',
      headline: 'Convierte WhatsApp en tu principal canal de ventas',
      description: 'Automatiza consultas de producto, actualizaciones de pedido, solicitudes de devolución y recuperación de carritos abandonados. Tu agente de IA gestiona todo el recorrido del cliente en WhatsApp.',
      metaDescription: 'IA de WhatsApp para e-commerce. Automatiza consultas de producto, seguimiento de pedidos, devoluciones y soporte al cliente.',
      painPoints: [
        'Los clientes abandonan el carrito cuando no obtienen respuestas rápidas',
        'El equipo de soporte se satura con consultas de "¿dónde está mi pedido?"',
        'No hay forma de llegar a los clientes en su canal preferido',
      ],
      useCases: [
        { title: 'Asistente de catálogo', description: 'Los clientes describen lo que necesitan y tu IA recomienda el producto adecuado con precio y disponibilidad.' },
        { title: 'Seguimiento de pedidos', description: 'Actualizaciones del estado del pedido al instante cuando el cliente pregunta "¿dónde está mi pedido?".' },
        { title: 'Procesamiento de devoluciones', description: 'Guía a los clientes por el proceso de devolución con un flujo automático y generación de documentos.' },
      ],
    },
    healthcare: {
      title: 'Salud',
      headline: 'Mejor comunicación con el paciente, menos tareas administrativas',
      description: 'Automatiza la programación de citas, las consultas de recetas y el seguimiento de pacientes. Diseño conforme a HIPAA con comunicación segura y cifrada.',
      metaDescription: 'IA de WhatsApp para la salud. Automatiza la programación de citas, el seguimiento de pacientes y las consultas de recetas.',
      painPoints: [
        'Las líneas telefónicas se saturan con solicitudes de cita',
        'El personal dedica horas a llamadas repetitivas de programación',
        'A los pacientes les cuesta contactarte fuera del horario de atención',
      ],
      useCases: [
        { title: 'Programación de citas', description: 'Los pacientes reservan, reprograman o cancelan citas por WhatsApp con integración de Google Calendar.' },
        { title: 'Consultas de recetas', description: 'Respuestas automáticas sobre renovaciones de recetas, instrucciones de dosificación y horarios de farmacia.' },
        { title: 'Triaje de pacientes', description: 'Los flujos lógicos guían a los pacientes por una comprobación de síntomas y los dirigen al departamento adecuado.' },
      ],
    },
    education: {
      title: 'Educación',
      headline: 'Responde al instante a cada pregunta de alumnos y padres',
      description: 'Automatiza consultas de admisión, información de cursos, búsqueda de horarios y recordatorios de pago de matrícula. Tu IA gestiona a miles de alumnos sin esfuerzo.',
      metaDescription: 'IA de WhatsApp para educación. Automatiza consultas de admisión, información de cursos y comunicación con alumnos.',
      painPoints: [
        'El personal se satura con preguntas de admisión repetitivas',
        'Los padres no pueden contactar con admisiones en temporada alta',
        'Los alumnos necesitan respuestas fuera del horario de oficina',
      ],
      useCases: [
        { title: 'Asistente de admisiones', description: 'Responde automáticamente sobre detalles de programas, requisitos de acceso y estado de solicitudes.' },
        { title: 'Información de cursos', description: 'Los alumnos obtienen al instante detalles sobre horarios, temarios y datos del profesorado.' },
        { title: 'Recordatorios de matrícula', description: 'Recordatorios automáticos de pago e información sobre planes de pago a plazos por WhatsApp.' },
      ],
    },
    'real-estate': {
      title: 'Inmobiliaria',
      headline: 'Cualifica prospectos y programa visitas en piloto automático',
      description: 'Captura consultas inmobiliarias, cualifica compradores, programa visitas y envía documentación, todo automáticamente por WhatsApp.',
      metaDescription: 'IA de WhatsApp para inmobiliaria. Cualifica prospectos, programa visitas y envía documentación automáticamente.',
      painPoints: [
        'Cientos de consultas inmobiliarias, pero pocos prospectos cualificados',
        'Programar visitas es una y otra vez una pesadilla',
        'No puedes responder con la suficiente rapidez antes de que se vayan',
      ],
      useCases: [
        { title: 'Búsqueda de inmuebles', description: 'Los compradores describen la vivienda de sus sueños y tu IA sugiere propiedades que encajan, con fotos y detalles.' },
        { title: 'Programación de visitas', description: 'Reserva automática en el calendario para visitas de inmuebles con recordatorios y confirmaciones.' },
        { title: 'Entrega de documentos', description: 'Genera y envía automáticamente folletos inmobiliarios, planos y listas de precios como documentos PDF.' },
      ],
    },
    hospitality: {
      title: 'Hostelería',
      headline: 'Atiende a tus huéspedes antes de que lleguen',
      description: 'Automatiza confirmaciones de reserva, solicitudes de servicio de habitaciones, recomendaciones de conserjería y feedback de huéspedes. WhatsApp es tu nueva recepción.',
      metaDescription: 'IA de WhatsApp para hostelería. Automatiza reservas, servicio de conserjería y comunicación con huéspedes.',
      painPoints: [
        'Los huéspedes esperan respuestas inmediatas a cualquier hora',
        'Las solicitudes al conserje se pierden entre turnos',
        'La recogida de feedback tras la estancia es irregular',
      ],
      useCases: [
        { title: 'Asistente de reservas', description: 'Los huéspedes consultan disponibilidad, reservan habitación y obtienen confirmación inmediata por WhatsApp.' },
        { title: 'Servicio de conserjería', description: 'Recomendaciones con IA de restaurantes, actividades y transporte.' },
        { title: 'Feedback de huéspedes', description: 'Encuestas automáticas tras la estancia y solicitud de reseñas para mejorar tu reputación online.' },
      ],
    },
    restaurants: {
      title: 'Restaurantes',
      headline: 'Toma pedidos y reservas sin descolgar el teléfono',
      description: 'Pedidos por WhatsApp, gestión de reservas, consultas de carta y actualizaciones de entrega: todo gestionado automáticamente mientras tu personal se centra en la comida.',
      metaDescription: 'IA de WhatsApp para restaurantes. Toma pedidos, gestiona reservas y mantiene informados a los clientes automáticamente.',
      painPoints: [
        'El teléfono no para de sonar en horas punta',
        'El personal no puede gestionar pedidos y reservas a la vez',
        'Los clientes quieren ver la carta antes de pedir',
      ],
      useCases: [
        { title: 'Asistente de carta', description: 'Los clientes navegan por la carta, preguntan por ingredientes y obtienen información nutricional al instante.' },
        { title: 'Reserva de mesa', description: 'Reserva automática de mesa con fecha, hora, tamaño del grupo y peticiones especiales.' },
        { title: 'Actualizaciones de pedido', description: 'El estado de entrega y recogida en tiempo real se envía proactivamente por WhatsApp.' },
      ],
    },
    fitness: {
      title: 'Fitness',
      headline: 'Mantén a los miembros activos y reservando clases en todo momento',
      description: 'Automatiza la reserva de clases, consultas de membresía, búsqueda de horarios y consejos de entrenamiento. Tu entrenador personal de IA nunca descansa.',
      metaDescription: 'IA de WhatsApp para estudios de fitness. Automatiza la reserva de clases, consultas de membresía y la implicación de los miembros.',
      painPoints: [
        'Las solicitudes de reserva de clases saturan al personal de recepción',
        'Los miembros hacen siempre las mismas preguntas sobre horarios y precios',
        'Las ausencias merman los ingresos sin un sistema de recordatorios',
      ],
      useCases: [
        { title: 'Reserva de clases', description: 'Los miembros consultan el horario, comprueban la disponibilidad y reservan clases directamente en WhatsApp.' },
        { title: 'Información de membresía', description: 'Respuestas inmediatas sobre planes, precios, instalaciones y ventajas de la membresía.' },
        { title: 'Consejos de entrenamiento', description: 'Consejos de fitness con IA y recomendaciones de ejercicios según los objetivos del miembro.' },
      ],
    },
    'professional-services': {
      title: 'Servicios Profesionales',
      headline: 'Menos tiempo de administración, más tiempo para el cliente',
      description: 'Automatiza la captación de clientes, la programación de citas, la recogida de documentación y las actualizaciones de progreso. Servicios profesionales potenciados por la eficiencia de la IA.',
      metaDescription: 'IA de WhatsApp para servicios profesionales. Automatiza la captación de clientes, la programación y la comunicación.',
      painPoints: [
        'La captación de clientes requiere demasiado intercambio de mensajes',
        'Los conflictos de agenda hacen perder el tiempo a todos',
        'Los clientes esperan una comunicación más rápida de la que puedes ofrecer',
      ],
      useCases: [
        { title: 'Captación de clientes', description: 'Un flujo automático recopila la información del cliente, los detalles del caso y la documentación necesaria.' },
        { title: 'Gestión de citas', description: 'Programa, reprograma y envía recordatorios para las reuniones con clientes mediante Google Calendar.' },
        { title: 'Actualizaciones de estado', description: 'Mantén informados a los clientes con actualizaciones de progreso automáticas y notificaciones de hitos.' },
      ],
    },
    automotive: {
      title: 'Automoción',
      headline: 'De la prueba de conducción al recordatorio de servicio, todo en WhatsApp',
      description: 'Automatiza consultas de vehículos, reserva de pruebas de conducción, citas de servicio y recordatorios de mantenimiento. Tu concesionario nunca cierra.',
      metaDescription: 'IA de WhatsApp para automoción. Automatiza consultas de vehículos, reserva de pruebas de conducción y recordatorios de servicio.',
      painPoints: [
        'Cientos de consultas de vehículos pero sin tiempo para responder a todas',
        'La programación de citas de servicio es manual y propensa a errores',
        'Los clientes olvidan el calendario de mantenimiento y pierdes ingresos',
      ],
      useCases: [
        { title: 'Bot de consultas de vehículos', description: 'Los clientes preguntan por modelos, especificaciones, precios y disponibilidad, todo respondido al instante.' },
        { title: 'Reserva de prueba de conducción', description: 'Programación automática de pruebas de conducción con integración de calendario y recordatorios.' },
        { title: 'Recordatorios de servicio', description: 'Recordatorios proactivos de mantenimiento según el kilometraje y los intervalos de tiempo.' },
      ],
    },
  },

  solutions: {
    marketing: {
      title: 'Para Marketing',
      headline: 'Convierte WhatsApp en tu mejor canal de marketing',
      description:
        'Captura prospectos, cultiva a los leads e impulsa la conversión a través de WhatsApp, donde tus clientes realmente prestan atención. Automatiza campañas, mide resultados y haz crecer tu audiencia.',
      metaDescription: 'Convierte WhatsApp en tu canal de marketing más eficaz. Captura prospectos, automatiza campañas e impulsa conversiones.',
      painPoints: [
        { title: '¿Puedo llegar a clientes que realmente prestan atención?', description: 'El email marketing tiene una tasa de apertura media del 20%. WhatsApp ofrece el 98%: tus mensajes se ven de verdad.' },
        { title: '¿Puedo responder a los prospectos antes de que se enfríen?', description: 'Cada minuto de retraso reduce la conversión de leads en un 10%. Tu IA responde al instante, 24/7.' },
        { title: '¿Puedo personalizar cada mensaje sin contratar a más gente?', description: '¿Envías mensajes genéricos a todos por igual? La IA hace que cada interacción se sienta personal.' },
      ],
      features: [
        { title: 'Campañas de WhatsApp', description: 'Envía mensajes segmentados con campañas basadas en plantillas.' },
        { title: 'Flujo de captación de leads', description: 'Flujos automáticos que cualifican y capturan la información de los leads.' },
        { title: 'Base de Conocimiento de marketing', description: 'Recomendaciones de productos y respuestas promocionales en tus preguntas y respuestas.' },
        { title: 'Analítica', description: 'Mide el rendimiento de las campañas, los volúmenes de mensajes y las tasas de conversión.' },
      ],
      stats: [{ label: 'Tasa de apertura en WhatsApp' }, { label: 'Mayor interacción' }, { label: 'Mejor tasa de clics' }],
    },
    sales: {
      title: 'Para Ventas',
      headline: 'Cierra más rápido en WhatsApp',
      description:
        'Cualifica prospectos automáticamente, programa citas, envía presupuestos y propuestas, y cierra ventas, todo por WhatsApp. Tu agente de ventas con IA trabaja sin parar.',
      metaDescription: 'Cierra ventas más rápido en WhatsApp. Cualifica prospectos, reserva citas, genera presupuestos y convierte sin parar.',
      painPoints: [
        { title: '¿Puedo capturar leads fuera de horario?', description: 'Los leads llegan fuera de horario y se enfrían de noche. La IA los implica al instante, a cualquier hora.' },
        { title: '¿Puedo dejar de perder tiempo con leads no cualificados?', description: 'Se pierden horas con leads que no sirven. Los flujos lógicos cualifican automáticamente para que te centres en prospectos prometedores.' },
        { title: '¿Puedo enviar presupuestos y propuestas en segundos?', description: 'Genera y envía presupuestos, propuestas y facturas profesionales directamente desde la conversación.' },
      ],
      features: [
        { title: 'Flujo de cualificación de leads', description: 'Flujos automáticos de varios pasos que capturan y cualifican a los leads antes de que intervenga tu equipo.' },
        { title: 'Reserva de citas', description: 'La integración con Google Calendar permite a los clientes reservar reuniones directamente en el chat.' },
        { title: 'Generación de documentos', description: 'Genera automáticamente presupuestos, facturas y propuestas a partir de los datos de la conversación.' },
        { title: 'Derivación humana', description: 'Transición fluida a un comercial cuando el lead está listo para cerrar.' },
      ],
      stats: [{ label: 'Ciclo de ventas más corto' }, { label: 'Respuesta más rápida' }, { label: 'Captura de leads' }],
    },
    support: {
      title: 'Para Soporte',
      headline: 'Soporte con IA que nunca duerme',
      description:
        'Resuelve automáticamente el 80% de las consultas de soporte con una IA que conoce tu negocio al dedillo. Escala los problemas complejos a humanos sin fricción. Tus clientes reciben ayuda al instante, a cualquier hora.',
      metaDescription: 'Soporte de WhatsApp con IA que nunca duerme. Resuelve automáticamente el 80% de las consultas con respuestas inmediatas y precisas.',
      painPoints: [
        { title: '¿Puedo dejar de responder una y otra vez a las mismas preguntas?', description: 'Las preguntas repetitivas consumen el tiempo de los agentes. La IA gestiona la rutina para que los humanos gestionen lo complejo.' },
        { title: '¿Puedo ofrecer soporte las 24 horas?', description: 'Los clientes necesitan ayuda a las 11 de la noche. Tu agente de IA siempre está disponible con respuestas precisas.' },
        { title: '¿Puedo resolver problemas en segundos, no en horas?', description: 'Los clientes esperan horas a una respuesta por email. El soporte por WhatsApp da respuestas en segundos.' },
      ],
      features: [
        { title: 'Base de Conocimiento', description: 'Un sistema completo de preguntas y respuestas que gestiona las preguntas habituales al instante.' },
        { title: 'Escalado inteligente', description: 'La IA sabe cuándo derivar a un humano. Transición fluida, sin pérdida de contexto.' },
        { title: 'Bandeja de Equipo', description: 'Supervisa todas las conversaciones, interviene cuando haga falta y mide métricas de respuesta.' },
        { title: 'Súper Poderes', description: 'Análisis de visión para soporte basado en fotos y búsqueda web para respuestas en tiempo real.' },
      ],
      stats: [{ label: 'Consultas resueltas automáticamente' }, { label: 'Menos carga de agentes' }, { label: 'Tiempo de respuesta' }],
    },
  },

  testimonials: {
    'Sarah Chen': {
      role: 'Directora de Operaciones',
      company: 'TechStyle Retail',
      quote: 'Pasamos de responder manualmente a 200 consultas de clientes al día a gestionar más de 500 con IA. La base de conocimiento estuvo lista en menos de una hora y simplemente funciona.',
    },
    'Marcus Rodriguez': {
      role: 'Fundador',
      company: 'FitZone Studios',
      quote: 'Nuestra tasa de ausencias bajó un 60% tras configurar la reserva de clases y los recordatorios automáticos en WhatsApp. A los miembros les encanta lo cómodo que es.',
    },
    'Priya Sharma': {
      role: 'Responsable de Éxito del Cliente',
      company: 'CloudServe Solutions',
      quote: 'Los flujos lógicos son increíbles. Construimos un sistema completo de cualificación de leads en un día. Lo que antes le llevaba a nuestro equipo de ventas 30 minutos por lead ahora lleva 30 segundos.',
    },
  },

  videoTitles: {
    'FYWVnfP-EEo': 'Un par de manos extra',
    PWM3RanP8rQ: 'Tranquilidad',
    '--8IlCVWsNI': 'Oportunidades perdidas',
    '14lt0wRuMw4': '¿Lío con el idioma?',
  },
};

export default es;
