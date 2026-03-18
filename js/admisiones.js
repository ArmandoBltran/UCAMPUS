const admissionsByLevel = {
    bachillerato: {
        title: "Admisiones a Bachillerato en Universidad Carolina",
        description1: "En la Universidad Carolina, nuestro programa de Bachillerato está diseñado para brindar a los estudiantes una educación integral que los prepare para los desafíos académicos y profesionales del futuro. Nuestro enfoque se centra en el desarrollo de habilidades críticas, el pensamiento analítico y la formación ética, todo dentro de un ambiente de aprendizaje estimulante y colaborativo.",
        description2: "Si estás interesado en formar parte de nuestra comunidad estudiantil, te invitamos a explorar los requisitos de admisión, el proceso de solicitud y las fechas importantes. Nuestro equipo de admisiones está disponible para ayudarte en cada paso del camino. Únete a nosotros y comienza tu viaje hacia un futuro brillante con la Universidad Carolina!",
        leftTitle: "Programas de Bachillerato",
        programs: [
            "Preparatoria General",
            "Administración Bilingüe",
            "Contabilidad",
            "Mantenimiento Industrial",
            "Programación",
            "Ciencias y Artes Digitales",
            "Ventas",
            "Relaciones Públicas y Organización de Eventos"
        ],
        meta: "Plan semestral | Duración 3 años | Horario matutino",
        prices: ["Inscripción $1,040", "Inversión mensual $3,291", "Sin examen de admisión"],
        rightTitle: "Bachillerato Especializado",
        rightBody: "Prepa Creativa con enfoque académico y desarrollo de habilidades para la universidad.",
        details: [
            { label: "Modalidad", value: "Presencial" },
            { label: "Duración", value: "3 años" },
            { label: "Horario", value: "Matutino" }
        ],
        selectablePrograms: {
            general: {
                label: "Preparatoria General",
                modalidad: "Presencial",
                duracion: "3 años",
                horario: "Matutino",
                perfil: "Aprenderá a desarrollar competencias y hábitos que lo prepararán para su futuro profesional, combinando una sólida formación académica con un enfoque en ciudadanía y desarrollo comunitario. A través de este bachillerato, adquirirá una visión crítica y global, fortaleciendo su capacidad de discernimiento para comprender y actuar en un mundo interconectado. Bajo el modelo educativo de la Nueva Escuela Mexicana (NEM), potenciará habilidades como el pensamiento crítico, la resolución de problemas, la colaboración y la comunicación efectiva, promoviendo la inclusión, la equidad y el bienestar social. Su formación lo preparará para contribuir activamente en su comunidad, desempeñándose con liderazgo y compromiso en diversos ámbitos sociales, académicos y Profesionales.",
                planHref: "https://ucarolina.edu.mx/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb3dEIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--dfc41f3d5c3b7d35b8b20f63e5363e2989f75f57/Bach-General-2025.pdf,",
                pdfHref: "https://ucarolina.edu.mx/rvoes/RVOE-0527257109.pdf"
            },
            administracionBilingue: {
                label: "Administración Bilingüe",
                modalidad: "Presencial",
                duracion: "3 años",
                horario: "Matutino",
                perfil: "Aprenderá a desempeñarse en entornos empresariales con un enfoque bilingüe, desarrollando habilidades en redacción empresarial, comunicación efectiva y negociación en inglés de negocios. Dominará procesos administrativos y gerenciales, aplicando estrategias para la organización y optimización de recursos en empresas nacionales e internacionales. Su formación incluirá el uso de herramientas digitales y metodologías de gestión empresarial, preparándolo para adaptarse a las dinámicas del mercado global. Con una visión estratégica e innovadora, estará capacitado para integrarse en diversas áreas administrativas o emprender con una sólida base en gestión y comunicación corporativa.",
                planHref: "https://ucarolina.edu.mx/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBazBEIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c9bb2ee297d9c866b8d75b1a7437e25dfce9e520/Bach-Bilingue-2025.pdf,",
                pdfHref: "https://ucarolina.edu.mx/rvoes/RVOE-0527257110.pdf"
            },
            contabilidad: {
                label: "Contabilidad",
                modalidad: "Presencial",
                duracion: "3 años",
                horario: "Matutino",
                perfil: "Aprenderá a gestionar y registrar operaciones contables de empresas comerciales, de servicios y manufactureras, utilizando sistemas electrónicos para optimizar procesos financieros con precisión y eficiencia. Desarrollará habilidades para la determinación de contribuciones, el cumplimiento de obligaciones fiscales y la asistencia en auditorías, asegurando la transparencia y correcta administración de los recursos. Con un enfoque en innovación y adaptabilidad, dominará el uso de herramientas digitales y software contable, alineándose con las tendencias de automatización financiera y normativas actuales. Su formación lo preparará para integrarse en el sector empresarial con una visión estratégica, ética y analítica, o para emprender con bases sólidas en contabilidad y gestión financiera.",
                planHref: "https://ucarolina.edu.mx/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbndEIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--cd87e6cb92662d3f92f81dbba8531f19e8431c5c/Bach-Te%CC%81cnico%20en%20contabilidad-2025.pdf,",
                pdfHref: "https://ucarolina.edu.mx/rvoes/RVOE-0527257112.pdf"
            },
            mantenimientoIndustrial: {
                label: "Mantenimiento Industrial",
                modalidad: "Presencial",
                duracion: "3 años",
                horario: "Matutino",
                perfil: "En el Bachillerato Técnico en Mantenimiento Industrial los alumnos aprenderán a realizar el mantenimiento a instalaciones eléctricas, fabricar pequeñas estructuras metálicas, realizar actividades de ajuste de banco haciendo uso de herramientas básicas, interpretar planos de piezas mecánicas, utilizar máquinas herramientas convencionales y de control numérico para reparación, manejar máquinas de soldar de arco eléctrico, manipular sistemas de control y automatización, sistemas de neumática e hidráulica, mantener equipos de refrigeración y aire acondicionado e implementara los programas de administración del mantenimiento en los sistemas.",
                planHref: "https://ucarolina.edu.mx/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbEFEIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--79378010e99608fe3a15711f1faceb3d8bcd74cc/Bach-Te%CC%81cnico%20en%20Mantenimiento-2025.pdf,",
                pdfHref: "https://ucarolina.edu.mx/rvoes/RVOE-0527257113.pdf"
            },
            programacion: {
                label: "Programación",
                modalidad: "Presencial",
                duracion: "3 años",
                horario: "Matutino",
                perfil: "Aprenderá a analizar, diseñar, desarrollar, instalar y mantener software de aplicación, convirtiendo ideas y necesidades en soluciones tecnológicas eficientes. Desarrollará habilidades en programación, bases de datos y arquitectura de software, utilizando lenguajes y metodologías actualizadas para crear aplicaciones innovadoras y funcionales. Su formación incluirá el uso de herramientas de desarrollo ágil, ciberseguridad y computación en la nube, preparándolo para responder a las demandas de la transformación digital. Con un enfoque práctico y orientado a la resolución de problemas, estará listo para integrarse a la industria tecnológica o emprender proyectos propios con una visión estratégica e innovadora.",
                planHref: "https://ucarolina.edu.mx/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbUFEIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ddd5fbf6dce74fc318f927dfe813eb152e38498c/Bach-Programacio%CC%81n-2025.pdf,",
                pdfHref: "https://ucarolina.edu.mx/rvoes/RVOE-0527257114.pdf"
            },
            cienciasArtesDigitales: {
                label: "Ciencias y Artes Digitales",
                modalidad: "Presencial",
                duracion: "3 años",
                horario: "Matutino",
                perfil: "Aprenderá a integrar creatividad, técnica y visión estratégica para desarrollar contenidos digitales innovadores que respondan a las demandas del mundo visual y tecnológico actual. A través del dominio de procesos creativos, diseño gráfico, técnicas fotográficas, retoque digital, diseño editorial, ilustración, edición de video y animación, el egresado podrá participar activamente en medios de comunicación, agencias creativas, estudios audiovisuales o emprender sus propios proyectos visuales. Será capaz de operar cámaras de video, crear efectos especiales y gráficos en movimiento, colaborar en campañas de marketing digital y utilizar herramientas de análisis y métricas para mejorar el impacto de los contenidos. Su formación le permitirá continuar estudios superiores en áreas como diseño, comunicación visual, producción digital o publicidad, consolidando un perfil artístico-tecnológico que lo posiciona en entornos creativos con visión crítica, estética e innovadora.",
                planHref: "https://ucarolina.edu.mx/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBazREIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--bba17054efbe1dd5633205d3bf084430f4fe7d2a/Bach-Te%CC%81cnico%20en%20Artes-2025.pdf,",
                pdfHref: "https://ucarolina.edu.mx/rvoes/RVOE-0527257111.pdf"
            },
            ventas: {
                label: "Ventas",
                modalidad: "Presencial",
                duracion: "3 años",
                horario: "Matutino",
                perfil: "Aprenderá a posicionar productos y servicios en el mercado mediante estrategias de venta innovadoras, aplicando habilidades clave en la administración del área comercial, la elaboración de estudios de mercado y la optimización de procesos de comercialización. Dominará técnicas efectivas de comunicación y persuasión para asesorar a clientes, impulsando la fidelización y el crecimiento empresarial. Su formación le permitirá adaptarse a las tendencias del marketing digital, el comercio electrónico y la experiencia del consumidor, utilizando herramientas tecnológicas para la gestión de ventas. Con un enfoque estratégico y orientado a resultados, estará preparado para integrarse a empresas de distintos sectores o emprender con una visión innovadora y competitiva en el mercado Actual.",
                planHref: "https://ucarolina.edu.mx/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbkVEIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--87684609bfaf8388384961bc17257cda2566f31a/Bach-Te%CC%81cnico%20en%20ventas-2025.pdf,",
                pdfHref: "https://ucarolina.edu.mx/rvoes/RVOE-0527257115.pdf"
            },
            relacionesPublicas: {
                label: "Relaciones Públicas y Organización de Eventos",
                modalidad: "Presencial",
                duracion: "3 años",
                horario: "Matutino",
                perfil: "Este programa busca desarrollar en los estudiantes competencias que les permitan comunicar mensajes con impacto, coordinar equipos de trabajo, atender públicos diversos y aplicar criterios de inclusión, sustentabilidad y responsabilidad social, preparándolos tanto para su inserción temprana en el campo laboral como para la continuación de estudios profesionales en áreas afines como comunicación, marketing, producción audiovisual, diseño y administración de eventos.",
                planHref: "https://ucarolina.edu.mx/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBazBFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d61db4a294773ec271a66d48db120b77306f0589/Bach-Eventos-2026.pdf,",
                pdfHref: "https://ucarolina.edu.mx/rvoes/RVOE-0527257162.pdf"
            }
        },
        linkText: "Ver sitio oficial",
        linkHref: "https://ucarolina.edu.mx/"
    },
    ingenierias: {
        title: "Admisiones a Ingeniería en Universidad Carolina",
        description1: "En la Universidad Carolina, nuestro programa de Ingeniería está diseñado para formar profesionales altamente capacitados que puedan enfrentar los desafíos tecnológicos y sociales del mundo actual.",
        description2: "Nuestro enfoque se centra en la innovación, el pensamiento crítico y la aplicación práctica de conocimientos. Nuestro equipo de admisiones está listo para ayudarte en cada etapa.",
        leftTitle: "Áreas de Ingeniería",
        programs: ["Ingeniería Industrial y de Sistemas", "Ingeniería en Mecatrónica", "Ingeniería en Programación", "Ingeniería en Energía y Sustentabilidad"],
        selectablePrograms: {
            sistemas: {
                label: "Ingeniería Industrial y de Sistemas",
                modalidad: "Presencial",
                duracion: "3 años y 4 meses",
                horario: "Matutino inicial",
                perfil: "El alumno egresado de la Ingeniería Industrial y de Sistemas desarrolla procesos productivos para mejorar la eficiencia en el uso de recursos y generar bienes o servicios según los requerimientos del cliente. También administra procesos del sistema de gestión de calidad, planea, diseña, analiza y mejora operaciones mediante estrategias de cambio y mejora continua, coordina esfuerzos de trabajo optimizando recursos financieros y administra con una perspectiva integradora, estratégica y respetuosa del medio ambiente. Además, desarrolla investigación en producción y sistemas, evalúa procesos industriales y resuelve problemas vinculados con la industria y los sistemas operacionales de las organizaciones.",
                ingreso: "En sintonía con sus valores y su vocación social como, organización, la Universidad Carolina ha decidido enfocar principalmente la provisión de sus servicios educativos a personas con el siguiente perfil. Que hayan completado su bachillerato y cuenten con el certificado correspondiente. Tener interés en la creación y el desarrollo tecnológico. Tener capacidad de análisis, alta responsabilidad social, ser creativo y tener imaginación, seguridad en la toma de decisiones, interés y respeto hacia otras culturas; capacidad para soportar jornadas completas frente al computador, disposición para el trabajo en equipo, actitud emprendedora y adaptación a los cambios de trabajo, compromiso en lo profesional y personal. Con nociones de computación básica. Con capacidad de redacción y creatividad.",
                planHref: "https://ucarolina.edu.mx/",
                pdfHref: "https://ucarolina.edu.mx/"
            },
            mecatronica: {
                label: "Ingeniería en Mecatrónica",
                modalidad: "Presencial",
                duracion: "3 años y 4 meses",
                horario: "Matutino inicial",
                perfil: "Ejercer su profesión, dentro de un marco legal, teniendo un sentido de responsabilidad social, con apego a las normas nacionales e internacionales. Analizar, sintetizar, diseñar, simular, construir e innovar productos, equipos y sistemas mecatrónicos, con una actitud investigadora, de acuerdo a las necesidades tecnológicas, y sociales actuales y emergentes impactando positivamente en el entorno global. Integrar, instalar, construir, optimizar, operar, controlar, mantener, administrar y/o automatizar sistemas mecánicos utilizando tecnologías eléctricas, electrónicas u herramientas computacionales. Evaluar y generar proyectos industriales de carácter social. Coordinar y dirigir grupos multidisciplinarios fomentando el trabajo en equipo para la implementación de trabajos mecatrónicos, asegurando su calidad, eficiencia, productividad y rentabilidad con sentido de responsabilidad de su entorno social y cultural para un desarrollo sustentable. Desarrollar capacidades de liderazgo, comunicación e interrelaciones personales para transmitir ideas, facilitar conocimientos, trabajar en equipos multidisciplinarios y multiculturales con responsabilidad colectiva para la solución de problemas y desarrollo de proyectos con un sentido crítico y autocritico. Ser creativo, emprendedor y comprometido con su actualización profesional continua y autónoma para estar a la vanguardia en los cambios científicos y tecnológicos que se dan en el ejercicio de su profesión. Interpretar información técnica de las áreas que componen a la ingeniería Mecatrónica para la transferencia, adaptación, asimilación e innovación de tecnologías de vanguardia.",
                ingreso: "El alumno deberá haber culminado su preparación correspondiente de nivel bachillerato y contar con los siguientes conocimientos, habilidades y actitudes: Poseer conocimientos básicos de matemáticas, álgebra, geometría analítica y calculo diferencial e integral de funciones de una variable. Contar con conocimientos de física particularmente en los que respecta a temas relacionados con mecánica clásica, la electricidad, el magnetismo, así como conocimientos generales de química y computación. Tener conocimientos de inglés, por lo menos al nivel de comprensión de textos. Tener disposición para el trabajo en equipo, capacidad de análisis y síntesis, y adaptación a situaciones nuevas, así como espíritu creativo. Procurar su bienestar integral y muestren un claro deseo y compromiso por superarse y aportar valor a su propio desarrollo, al de sus familias y al de sus comunidades, a pesar de las adversidades que hayan tenido que afrontar en sus vidas.",
                planHref: "https://ucarolina.edu.mx/",
                pdfHref: "https://ucarolina.edu.mx/"
            },
            programacion: {
                label: "Ingeniería en Programación",
                modalidad: "Presencial",
                duracion: "3 años y 4 meses",
                horario: "Matutino inicial",
                perfil: "El egresado de la Ingeniería en Programación podrá: Comprender conceptos y fundamentos del lenguaje de programación. Emprender, ejecutar y liderar proyectos de diseño y desarrollo de páginas web, softwares y aplicaciones. Analizar y proponer soluciones a problemáticas de creación de empresas especializadas en la programación informática. Intervenir en la elaboración de proyectos de programación informática. Vincular la programación en la cotidianidad organizacional. Ser asesor en áreas de tecnología, innovación y de sistemas. Tener interés por incrementar sus conocimientos sobre diseño de páginas web y automatizaciones. Tener la disponibilidad de horario para cumplir con los requerimientos presenciales de la ingeniería.",
                ingreso: "En sintonía con sus valores y con su vocación social como organización, la Universidad Carolina ha decidido enfocar principalmente la provisión de sus servicios educativos de esta ingeniería a personas con el siguiente perfil: Que hayan completado sus estudios de nivel bachillerato satisfactoriamente. Que procuren su bienestar integral y muestran un deseo claro por superarse y aportar valor a su propio desarrollo, de sus familias y de sus comunidades, a pesar de las adversidades. Tengan las competencias de comunicación oral y escrita en español suficientes para la comprensión y producción de softwares y aplicaciones. Que sea crítico y creativo, correspondiente a desarrollar habilidades para el desarrollo de proyectos de programación informática.",
                planHref: "https://ucarolina.edu.mx/",
                pdfHref: "https://ucarolina.edu.mx/"
            },
            energiaSustentabilidad: {
                label: "Ingeniería en Energía y Sustentabilidad",
                modalidad: "Presencial",
                duracion: "3 años y 4 meses",
                horario: "Matutino inicial",
                perfil: "El egresado de la Ingeniería en Energía y Sostenibilidad podrá: Planear, construir, operar y mejorar tecnologías relacionadas con la optimización energética de forma sostenible. Gestionar y planear proyectos de energía y sostenibilidad, preservando el medio ambiente. Colaborar en plantas de generación y conversión de energía en diversas industrias. Contribuir a la formación de nuevas empresas energéticas. Colaborar en el diseño y la supervisión de proyectos y auditorías energéticas.Emitir diagnósticos sobre el potencial energético en la industria y en las ciudades. Implementar sistemas de fuentes de energía renovable, así como conocer los procedimientos y la normativa legal aplicable.",
                ingreso: "En sintonía con sus valores y con su vocación social, la Universidad Carolina orienta principalmente la provisión de sus servicios educativos de nivel superior a personas que cuenten con el siguiente perfil: Haber concluido satisfactoriamente los estudios de nivel Bachillerato. Procurar su bienestar integral y mostrar un claro deseo de superación personal, así como de aportar valor a su propio desarrollo y al de sus familias y comunidades, aun frente a las adversidades. Contar con competencias de comunicación oral y escrita en español que permitan la comprensión y producción de información académica. Mostrar pensamiento crítico y creatividad, con interés en desarrollar habilidades vinculadas al sector energético. Tener interés en ampliar sus conocimientos en energía y sostenibilidad. Contar con disponibilidad de horario para cumplir con los requerimientos presenciales del programa de Ingeniería.",
                planHref: "https://ucarolina.edu.mx/",
                pdfHref: "https://ucarolina.edu.mx/"
            }
        },
        meta: "Plan cuatrimestral | Duración promedio 3 años y un cuatrimestre | Horario matutino inicial",
        prices: ["Inscripción | Consulta costo vigente", "Inversión mensual | Consulta costo vigente", "Becas disponibles"],
        rightTitle: "Perfil del Aspirante",
        rightBody: "Ideal para estudiantes con interés en resolver problemas técnicos, crear soluciones y participar en proyectos de innovación.",
        details: [
            { label: "Modalidad", value: "Presencial" },
            { label: "Duración", value: "3 años y 4 meses" },
            { label: "Inicio", value: "Enero / Agosto" }
        ],
        linkText: "Solicitar información",
        linkHref: "https://ucarolina.edu.mx/"
    },
    licenciaturas: {
        title: "Admisiones a Licenciatura en Universidad Carolina",
        description1: "En la Universidad Carolina, nuestro programa de Licenciatura está diseñado para formar profesionales capaces de enfrentar los retos del entorno laboral actual.",
        description2: "Integramos aprendizaje práctico, formación humana y acompañamiento académico para impulsar tu desarrollo profesional.",
        leftTitle: "Licenciaturas Disponibles",
        programs: ["Licenciatura en Producción Cinematográfica", "Licenciatura en Creatividad Tecnológica", "Licenciatura en Marketing y Publicidad", "Licenciatura en Diseño y Desarrollo de Videojuegos"],
        selectablePrograms: {
            produccionCinematografica: {
                label: "Licenciatura en Producción Cinematográfica",
                modalidad: "Presencial y ejecutiva",
                duracion: "3 a 4 años",
                horario: "Flexible",
                perfil: "La persona egresada planifica, organiza y dirige recursos humanos, financieros y operativos, fortaleciendo la toma de decisiones y la estrategia empresarial en distintos sectores.",
                ingreso: "Perfil de ingreso: aspirantes con interés en narrativa audiovisual, cine y producción creativa, con capacidad de observación, sensibilidad artística y disposición para trabajo colaborativo en proyectos de medios.",
                planHref: "https://ucarolina.edu.mx/",
                pdfHref: "https://ucarolina.edu.mx/"
            },
            creatividadTecnologica: {
                label: "Licenciatura en Creatividad Tecnológica",
                modalidad: "Presencial y ejecutiva",
                duracion: "3 a 4 años",
                horario: "Flexible",
                perfil: "La persona egresada diseña estrategias de posicionamiento y comunicación, interpreta datos de mercado y ejecuta campañas orientadas al crecimiento de marca y ventas.",
                ingreso: "Perfil de ingreso: aspirantes con afinidad por innovación digital, diseño interactivo y tecnología aplicada a la creatividad, con pensamiento crítico y apertura a metodologías multidisciplinarias.",
                planHref: "https://ucarolina.edu.mx/",
                pdfHref: "https://ucarolina.edu.mx/"
            },
            marketingPublicidad: {
                label: "Licenciatura en Marketing y Publicidad",
                modalidad: "Presencial y ejecutiva",
                duracion: "3 a 4 años",
                horario: "Flexible",
                perfil: "La persona egresada aplica marcos jurídicos con ética y criterio, desarrolla argumentación legal y participa en la solución de conflictos con enfoque en justicia y legalidad.",
                ingreso: "Perfil de ingreso: aspirantes con interés en marcas, comunicación comercial y comportamiento del consumidor, con habilidades de comunicación, creatividad y análisis de tendencias de mercado.",
                planHref: "https://ucarolina.edu.mx/",
                pdfHref: "https://ucarolina.edu.mx/"
            },
            disenoVideojuegos: {
                label: "Licenciatura en Diseño y Desarrollo de Videojuegos",
                modalidad: "Presencial y ejecutiva",
                duracion: "3 a 4 años",
                horario: "Flexible",
                perfil: "La persona egresada evalúa e interviene en procesos psicosociales y de desarrollo humano, promoviendo bienestar integral en ámbitos educativos, organizacionales y comunitarios.",
                ingreso: "Perfil de ingreso: aspirantes apasionados por el diseño visual, narrativa interactiva y desarrollo de experiencias lúdicas, con interés por arte digital, programación y trabajo por proyectos.",
                planHref: "https://ucarolina.edu.mx/",
                pdfHref: "https://ucarolina.edu.mx/"
            },
        },
        meta: "Plan flexible | Duración 3 a 4 años",
        prices: ["Inscripción | Consulta costo vigente", "Inversión mensual | Consulta costo vigente", "Opciones de beca"],
        rightTitle: "Proceso de Admisión",
        rightBody: "El proceso incluye registro, envío de documentos y entrevista de orientación para definir tu trayectoria académica.",
        details: [
            { label: "Modalidad", value: "Presencial y ejecutiva" },
            { label: "Duración", value: "3 a 4 años" },
            { label: "Requisitos", value: "Certificado de bachillerato" }
        ],
        linkText: "Ver requisitos",
        linkHref: "https://ucarolina.edu.mx/"
    },
    maestrias: {
        title: "Admisiones a Maestría en Universidad Carolina",
        description1: "En la Universidad Carolina, nuestros programas de Maestría están enfocados en la especialización profesional, la investigación aplicada y la toma de decisiones estratégicas.",
        description2: "Te acompañamos desde tu solicitud hasta tu inscripción para que puedas avanzar con un plan académico alineado a tus metas.",
        leftTitle: "Maestrías y Especialización",
        programs: ["Maestría en Educación", "Maestría en Administración", "Maestría en Derecho", "Maestría en Innovación"],
        selectablePrograms: {
            educacion: {
                label: "Maestría en Educación",
                modalidad: "Ejecutiva",
                duracion: "2 años",
                horario: "Fin de semana",
                perfil: "La persona egresada diseña e implementa propuestas educativas innovadoras, integra evaluación del aprendizaje y lidera proyectos académicos con enfoque en mejora continua.",
                ingreso: "Perfil de ingreso: profesionistas del ámbito educativo o afines, con interés en innovación pedagógica, evaluación del aprendizaje y liderazgo académico para transformar contextos formativos.",
                planHref: "https://ucarolina.edu.mx/",
                pdfHref: "https://ucarolina.edu.mx/"
            },
            administracion: {
                label: "Maestría en Administración",
                modalidad: "Ejecutiva",
                duracion: "2 años",
                horario: "Fin de semana",
                perfil: "La persona egresada fortalece liderazgo directivo, análisis estratégico y gestión organizacional para la toma de decisiones de alto impacto en entornos empresariales.",
                ingreso: "Perfil de ingreso: profesionistas en administración, negocios o áreas afines que busquen fortalecer dirección estratégica, liderazgo de equipos y análisis de escenarios organizacionales.",
                planHref: "https://ucarolina.edu.mx/",
                pdfHref: "https://ucarolina.edu.mx/"
            },
            derecho: {
                label: "Maestría en Derecho",
                modalidad: "Ejecutiva",
                duracion: "2 años",
                horario: "Fin de semana",
                perfil: "La persona egresada profundiza en interpretación y argumentación jurídica avanzada, con herramientas para asesoría, litigio estratégico y análisis normativo especializado.",
                ingreso: "Perfil de ingreso: profesionistas del derecho o disciplinas afines con interés en actualización jurídica, análisis normativo y desarrollo de competencias para práctica legal especializada.",
                planHref: "https://ucarolina.edu.mx/",
                pdfHref: "https://ucarolina.edu.mx/"
            },
            innovacion: {
                label: "Maestría en Innovación",
                modalidad: "Ejecutiva",
                duracion: "2 años",
                horario: "Fin de semana",
                perfil: "La persona egresada lidera procesos de transformación, integra metodologías de innovación y desarrolla soluciones para retos complejos en organizaciones y proyectos multidisciplinarios.",
                ingreso: "Perfil de ingreso: profesionistas con mentalidad emprendedora y enfoque de mejora continua, interesados en diseño de soluciones, gestión del cambio e innovación aplicada a su sector.",
                planHref: "https://ucarolina.edu.mx/",
                pdfHref: "https://ucarolina.edu.mx/"
            }
        },
        meta: "Plan modular | Duración 2 años",
        prices: ["Horarios ejecutivos", "Docentes con experiencia profesional", "Red de vinculación académica"],
        rightTitle: "Perfil de Ingreso",
        rightBody: "Dirigido a profesionistas que buscan fortalecer su liderazgo, ampliar su campo laboral y especializarse en su disciplina.",
        details: [
            { label: "Modalidad", value: "Ejecutiva" },
            { label: "Duración", value: "2 años" },
            { label: "Requisitos", value: "Título profesional" }
        ],
        linkText: "Conocer convocatoria",
        linkHref: "https://ucarolina.edu.mx/"
    }
};

const tabs = document.querySelectorAll(".adm-tab");
const title = document.getElementById("adm-title");
const description1 = document.getElementById("adm-description-1");
const description2 = document.getElementById("adm-description-2");
const leftCardTitle = document.getElementById("left-card-title");
const leftCardList = document.getElementById("left-card-list");
const leftCardMeta = document.getElementById("left-card-meta");
const leftCardPrices = document.getElementById("left-card-prices");
const rightCardTitle = document.getElementById("right-card-title");
const rightCardBody = document.getElementById("right-card-body");
const rightCardDetails = document.getElementById("right-card-details");
const rightCardProfileDetails = document.getElementById("right-card-profile-details");
const rightCardProfileText = document.getElementById("right-card-profile-text");
const rightCardIngresoDetails = document.getElementById("right-card-ingreso-details");
const rightCardIngresoText = document.getElementById("right-card-ingreso-text");
const rightCardPlan = document.getElementById("right-card-plan");
const rightCardPdf = document.getElementById("right-card-pdf");
const selectedProgramByLevel = {
    bachillerato: "general"
};

const ingresoProfileByLevel = {
    ingenierias: "El perfil de ingreso está dirigido a aspirantes con interés en ciencias, matemáticas, tecnología y resolución de problemas, con disposición para el trabajo colaborativo, la innovación y el aprendizaje continuo.",
    licenciaturas: "El perfil de ingreso está dirigido a aspirantes con interés en el desarrollo profesional, pensamiento crítico, comunicación efectiva y compromiso ético, con disposición para integrar teoría y práctica en contextos reales.",
    maestrias: "El perfil de ingreso está dirigido a profesionistas con experiencia o interés de especialización, habilidades de análisis y liderazgo, y compromiso para aplicar conocimiento avanzado en la solución de retos estratégicos."
};

function renderProgramDetail(level, programId) {
    const levelData = admissionsByLevel[level];
    if (!levelData || !levelData.selectablePrograms) {
        return;
    }

    const programData = levelData.selectablePrograms[programId];
    if (!programData) {
        return;
    }

    selectedProgramByLevel[level] = programId;
    rightCardTitle.textContent = programData.label;
    rightCardBody.textContent = "Consulta el perfil de egreso, modalidad y enlaces del programa seleccionado.";
    rightCardDetails.innerHTML = "";

    const modalidad = document.createElement("p");
    modalidad.innerHTML = "<strong>Modalidad:</strong> " + programData.modalidad;
    rightCardDetails.appendChild(modalidad);

    const duracion = document.createElement("p");
    duracion.innerHTML = "<strong>Duración:</strong> " + programData.duracion;
    rightCardDetails.appendChild(duracion);

    const horario = document.createElement("p");
    horario.innerHTML = "<strong>Horario:</strong> " + programData.horario;
    rightCardDetails.appendChild(horario);

    rightCardProfileText.textContent = programData.perfil;
    const ingresoText = programData.ingreso || ingresoProfileByLevel[level] || "";
    if (ingresoText && rightCardIngresoDetails && rightCardIngresoText) {
        rightCardIngresoText.textContent = ingresoText;
        rightCardIngresoDetails.open = false;
        rightCardIngresoDetails.hidden = false;
    }
    rightCardPlan.href = programData.planHref || levelData.linkHref || "https://ucarolina.edu.mx/";
    rightCardPdf.href = programData.pdfHref || levelData.linkHref || "https://ucarolina.edu.mx/";
    rightCardProfileDetails.hidden = false;
    rightCardPdf.hidden = false;

    const options = leftCardList.querySelectorAll(".bach-option");
    options.forEach(function(option) {
        const isActive = option.getAttribute("data-program-id") === programId;
        option.classList.toggle("is-active", isActive);
        option.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
}

function hideProgramActions() {
    rightCardProfileDetails.hidden = true;
    rightCardProfileDetails.open = false;
    if (rightCardIngresoDetails) {
        rightCardIngresoDetails.hidden = true;
        rightCardIngresoDetails.open = false;
    }
    rightCardPdf.hidden = true;
}

function renderLevel(level) {
    const data = admissionsByLevel[level];
    if (!data) {
        return;
    }

    title.textContent = data.title;
    description1.textContent = data.description1;
    description2.textContent = data.description2;
    leftCardTitle.textContent = data.leftTitle;
    leftCardMeta.textContent = data.meta;
    rightCardTitle.textContent = data.rightTitle;
    rightCardBody.textContent = data.rightBody;
    hideProgramActions();

    leftCardList.innerHTML = "";
    if (data.selectablePrograms) {
        Object.keys(data.selectablePrograms).forEach(function(programId) {
            const li = document.createElement("li");
            const option = document.createElement("button");
            option.className = "bach-option";
            option.type = "button";
            option.setAttribute("data-program-id", programId);
            option.setAttribute("aria-pressed", "false");
            option.textContent = data.selectablePrograms[programId].label;
            option.addEventListener("click", function() {
                renderProgramDetail(level, programId);
            });
            li.appendChild(option);
            leftCardList.appendChild(li);
        });
    } else {
        data.programs.forEach(function(program) {
            const li = document.createElement("li");
            li.textContent = program;
            leftCardList.appendChild(li);
        });
    }

    leftCardPrices.innerHTML = "";
    data.prices.forEach(function(priceText) {
        const span = document.createElement("span");
        span.textContent = priceText;
        leftCardPrices.appendChild(span);
    });

    rightCardDetails.innerHTML = "";
    data.details.forEach(function(item) {
        const p = document.createElement("p");
        p.innerHTML = "<strong>" + item.label + ":</strong> " + item.value;
        rightCardDetails.appendChild(p);
    });

    if (data.selectablePrograms) {
        const defaultProgramId = Object.keys(data.selectablePrograms)[0];
        const selected = data.selectablePrograms[selectedProgramByLevel[level]]
            ? selectedProgramByLevel[level]
            : defaultProgramId;
        renderProgramDetail(level, selected);
    }
}

tabs.forEach(function(tab) {
    tab.addEventListener("click", function() {
        const level = tab.getAttribute("data-level");
        tabs.forEach(function(otherTab) {
            otherTab.classList.remove("is-active");
            otherTab.setAttribute("aria-pressed", "false");
        });
        tab.classList.add("is-active");
        tab.setAttribute("aria-pressed", "true");
        renderLevel(level);
        window.location.hash = level;
    });
});

function activateLevel(level) {
    const exists = Object.prototype.hasOwnProperty.call(admissionsByLevel, level);
    const levelToUse = exists ? level : "bachillerato";
    tabs.forEach(function(tab) {
        const isCurrent = tab.getAttribute("data-level") === levelToUse;
        tab.classList.toggle("is-active", isCurrent);
        tab.setAttribute("aria-pressed", isCurrent ? "true" : "false");
    });
    renderLevel(levelToUse);
}

activateLevel(window.location.hash.replace("#", ""));