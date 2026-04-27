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
                planHref: "https://ucarolina.edu.mx/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9JYTJWNVNTSWhZV0YwWkc5eU9YQTVkVzVwTVdGNmRYVmpZemRoYm1NNFptWnBiZ1k2QmtWVU9oQmthWE53YjNOcGRHbHZia2tpQVg5cGJteHBibVU3SUdacGJHVnVZVzFsUFNKQ1lXTm9MVlJsSlROR1kyNXBZMjhnWlc0Z1RXRnVkR1Z1YVcxcFpXNTBieTB5TURJMUxuQmtaaUk3SUdacGJHVnVZVzFsS2oxVlZFWXRPQ2NuUW1GamFDMVVaU1ZEUXlVNE1XTnVhV052SlRJd1pXNGxNakJOWVc1MFpXNXBiV2xsYm5SdkxUSXdNalV1Y0dSbUJqc0dWRG9SWTI5dWRHVnVkRjkwZVhCbFNTSVVZWEJ3YkdsallYUnBiMjR2Y0dSbUJqc0dWRG9SYzJWeWRtbGpaVjl1WVcxbE9ncHNiMk5oYkE9PSIsImV4cCI6IjIwMjYtMDQtMjdUMDU6MjI6NTAuNzE1WiIsInB1ciI6ImJsb2Jfa2V5In19--d985bdf9dd328dc28f0c70cbc4991afea3d81e6b/Bach-Te%CC%81cnico%20en%20Mantenimiento-2025.pdf",
                pdfHref: "https://ucarolina.edu.mx/rvoes/RVOE-0527257113.pdf"
            },
            programacion: {
                label: "Programación",
                modalidad: "Presencial",
                duracion: "3 años",
                horario: "Matutino",
                perfil: "Aprenderá a analizar, diseñar, desarrollar, instalar y mantener software de aplicación, convirtiendo ideas y necesidades en soluciones tecnológicas eficientes. Desarrollará habilidades en programación, bases de datos y arquitectura de software, utilizando lenguajes y metodologías actualizadas para crear aplicaciones innovadoras y funcionales. Su formación incluirá el uso de herramientas de desarrollo ágil, ciberseguridad y computación en la nube, preparándolo para responder a las demandas de la transformación digital. Con un enfoque práctico y orientado a la resolución de problemas, estará listo para integrarse a la industria tecnológica o emprender proyectos propios con una visión estratégica e innovadora.",
                planHref: "https://ucarolina.edu.mx/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9JYTJWNVNTSWhOVE5wZUcxaFpqVnZPVzh3Y1RWc01qZHBjVGQ2YTNKcFl6ZGhjd1k2QmtWVU9oQmthWE53YjNOcGRHbHZia2tpYUdsdWJHbHVaVHNnWm1sc1pXNWhiV1U5SWtKaFkyZ3RVSEp2WjNKaGJXRmphVzhsTTBadUxUSXdNalV1Y0dSbUlqc2dabWxzWlc1aGJXVXFQVlZVUmkwNEp5ZENZV05vTFZCeWIyZHlZVzFoWTJsdkpVTkRKVGd4YmkweU1ESTFMbkJrWmdZN0JsUTZFV052Ym5SbGJuUmZkSGx3WlVraUZHRndjR3hwWTJGMGFXOXVMM0JrWmdZN0JsUTZFWE5sY25acFkyVmZibUZ0WlRvS2JHOWpZV3c9IiwiZXhwIjoiMjAyNi0wNC0yN1QwNToyNTozMi4xMjVaIiwicHVyIjoiYmxvYl9rZXkifX0=--8e57ed55ac8f1f7e90c39e7ee245eaa0fc4dfd35/Bach-Programacio%CC%81n-2025.pdf",
                pdfHref: "https://ucarolina.edu.mx/rvoes/RVOE-0527257114.pdf"
            },
            cienciasArtesDigitales: {
                label: "Ciencias y Artes Digitales",
                modalidad: "Presencial",
                duracion: "3 años",
                horario: "Matutino",
                perfil: "Aprenderá a integrar creatividad, técnica y visión estratégica para desarrollar contenidos digitales innovadores que respondan a las demandas del mundo visual y tecnológico actual. A través del dominio de procesos creativos, diseño gráfico, técnicas fotográficas, retoque digital, diseño editorial, ilustración, edición de video y animación, el egresado podrá participar activamente en medios de comunicación, agencias creativas, estudios audiovisuales o emprender sus propios proyectos visuales. Será capaz de operar cámaras de video, crear efectos especiales y gráficos en movimiento, colaborar en campañas de marketing digital y utilizar herramientas de análisis y métricas para mejorar el impacto de los contenidos. Su formación le permitirá continuar estudios superiores en áreas como diseño, comunicación visual, producción digital o publicidad, consolidando un perfil artístico-tecnológico que lo posiciona en entornos creativos con visión crítica, estética e innovadora.",
                planHref: "https://ucarolina.edu.mx/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9JYTJWNVNTSWhOR0kyWVRJNGNERnRaelZwYW5Kek9YY3plbWxyWVROMFpITTNlUVk2QmtWVU9oQmthWE53YjNOcGRHbHZia2tpZEdsdWJHbHVaVHNnWm1sc1pXNWhiV1U5SWtKaFkyZ3RWR1VsTTBaamJtbGpieUJsYmlCQmNuUmxjeTB5TURJMUxuQmtaaUk3SUdacGJHVnVZVzFsS2oxVlZFWXRPQ2NuUW1GamFDMVVaU1ZEUXlVNE1XTnVhV052SlRJd1pXNGxNakJCY25SbGN5MHlNREkxTG5Ca1pnWTdCbFE2RVdOdmJuUmxiblJmZEhsd1pVa2lGR0Z3Y0d4cFkyRjBhVzl1TDNCa1pnWTdCbFE2RVhObGNuWnBZMlZmYm1GdFpUb0tiRzlqWVd3PSIsImV4cCI6IjIwMjYtMDQtMjdUMDU6MjM6NDAuOTAzWiIsInB1ciI6ImJsb2Jfa2V5In19--5414c9aabb06abd4004627c1a9aa3bc5b6b0b825/Bach-Te%CC%81cnico%20en%20Artes-2025.pdf",
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
        programs: ["Ingeniería Industrial y de Sistemas", "Ingeniería en Procesos Industriales", "Ingeniería en Mecatrónica", "Ingeniería en Programación", "Ingeniería en Energía y Sustentabilidad"],
        selectablePrograms: {
            sistemas: {
                label: "Ingeniería Industrial y de Sistemas",
                modalidad: "Presencial",
                duracion: "3 años y 4 meses",
                horario: "Matutino inicial",
                perfil: "El alumno egresado de la Ingeniería Industrial y de Sistemas desarrolla procesos productivos para mejorar la eficiencia en el uso de recursos y generar bienes o servicios según los requerimientos del cliente. También administra procesos del sistema de gestión de calidad, planea, diseña, analiza y mejora operaciones mediante estrategias de cambio y mejora continua, coordina esfuerzos de trabajo optimizando recursos financieros y administra con una perspectiva integradora, estratégica y respetuosa del medio ambiente. Además, desarrolla investigación en producción y sistemas, evalúa procesos industriales y resuelve problemas vinculados con la industria y los sistemas operacionales de las organizaciones.",
                ingreso: "En sintonía con sus valores y su vocación social como, organización, la Universidad Carolina ha decidido enfocar principalmente la provisión de sus servicios educativos a personas con el siguiente perfil. Que hayan completado su bachillerato y cuenten con el certificado correspondiente. Tener interés en la creación y el desarrollo tecnológico. Tener capacidad de análisis, alta responsabilidad social, ser creativo y tener imaginación, seguridad en la toma de decisiones, interés y respeto hacia otras culturas; capacidad para soportar jornadas completas frente al computador, disposición para el trabajo en equipo, actitud emprendedora y adaptación a los cambios de trabajo, compromiso en lo profesional y personal. Con nociones de computación básica. Con capacidad de redacción y creatividad.",
                planHref: "https://ucarolina.edu.mx/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc29EIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--3d0522e956ba32b717ea93157dd1f84f993c21af/NS-Industrial%20y%20Sistemas-2025.pdf,",
                pdfHref: "https://ucarolina.edu.mx/rvoes/RVOE-0528238301.pdf"
            },
            procesosIndustriales: {
                label: "Ingeniería en Procesos Industriales",
                modalidad: "Presencial",
                duracion: "3 años y 4 meses",
                horario: "Matutino inicial",
                perfil: "Se busca que el egresado obtenga las siguientes competencias: Desarrollar y aplicar habilidades en el diseño, rediseño, gestión y evaluación de procesos industriales en las organizaciones. Gestionar los recursos de la organización con una visión compartida, para optimizar los procesos y suministrar bienes y servicios de calidad. Ser competente para analizar, modelar y resolver problemas relacionados a la manufactura. Organizar y direccionar sistemas integrales de calidad con un liderazgo efectivo y un compromiso ético, aplicando herramientas de administración y de ingeniería. Utilizar nuevas tecnologías para optimizar los procesos industriales y ser eficientes en la toma de decisiones. Diseñar productos o piezas mecánicas y su proceso de fabricación, planeando, controlando y mejorando el sistema de producción. Administrar la cadena de suministros y creación de valor, mediante los sistemas de logística, disposición de materiales y productos. Transformar su entorno a través de la consideración socioeconómica y ambiental para crear, innovar, adaptar y transferir tecnología con el recurso técnico y económico.",
                ingreso: "En sintonía con sus valores y con su vocación social como organización, la Universidad Carolina ha decidido enfocar principalmente la provisión de sus servicios educativos a personas con el siguiente perfil: Que hayan completado sus estudios de nivel preparatoria. Que procuren su bienestar integral y muestren un claro deseo y compromiso por superarse y aportar valor a su propio desarrollo, al de sus familias y al de su comunidad. Deberán tener un razonamiento crítico y analítico de situaciones a partir de la medición y comparabilidad numérica. Laborar actualmente en una organización enfocada a la producción de bienes y servicios, primordialmente en la industria. Poseer la habilidad de resolución de problemas en organizaciones. Contar con razonamiento grupal para evaluar y solucionar problemáticas empresariales. Tener interés y gusto por las ciencias de la ingeniería. Gusto por analizar y plantear alternativas de creación de proyectos de cambio para pequeñas y medianas empresas. Mostrar interés en los procesos y sistemas de producción de bienes y servicios, tanto en aspectos técnicos, humanos, económicos como científicos. Iniciativa y creatividad para realizar actividades de forma más sencilla y en menor tiempo, con menores recursos.",
                planHref: "https://ucarolina.edu.mx/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc3NEIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--3a7df0647a97765fb7348d6be304574f1f50223f/NS-Ingenieri%CC%81a%20en%20Procesos%20Industriales_2025.pdf,",
                pdfHref: "https://ucarolina.edu.mx/rvoes/RVOE-0528238384.pdf"
            },
            mecatronica: {
                label: "Ingeniería en Mecatrónica",
                modalidad: "Presencial",
                duracion: "3 años y 4 meses",
                horario: "Matutino inicial",
                perfil: "Ejercer su profesión, dentro de un marco legal, teniendo un sentido de responsabilidad social, con apego a las normas nacionales e internacionales. Analizar, sintetizar, diseñar, simular, construir e innovar productos, equipos y sistemas mecatrónicos, con una actitud investigadora, de acuerdo a las necesidades tecnológicas, y sociales actuales y emergentes impactando positivamente en el entorno global. Integrar, instalar, construir, optimizar, operar, controlar, mantener, administrar y/o automatizar sistemas mecánicos utilizando tecnologías eléctricas, electrónicas u herramientas computacionales. Evaluar y generar proyectos industriales de carácter social. Coordinar y dirigir grupos multidisciplinarios fomentando el trabajo en equipo para la implementación de trabajos mecatrónicos, asegurando su calidad, eficiencia, productividad y rentabilidad con sentido de responsabilidad de su entorno social y cultural para un desarrollo sustentable. Desarrollar capacidades de liderazgo, comunicación e interrelaciones personales para transmitir ideas, facilitar conocimientos, trabajar en equipos multidisciplinarios y multiculturales con responsabilidad colectiva para la solución de problemas y desarrollo de proyectos con un sentido crítico y autocritico. Ser creativo, emprendedor y comprometido con su actualización profesional continua y autónoma para estar a la vanguardia en los cambios científicos y tecnológicos que se dan en el ejercicio de su profesión. Interpretar información técnica de las áreas que componen a la ingeniería Mecatrónica para la transferencia, adaptación, asimilación e innovación de tecnologías de vanguardia.",
                ingreso: "El alumno deberá haber culminado su preparación correspondiente de nivel bachillerato y contar con los siguientes conocimientos, habilidades y actitudes: Poseer conocimientos básicos de matemáticas, álgebra, geometría analítica y calculo diferencial e integral de funciones de una variable. Contar con conocimientos de física particularmente en los que respecta a temas relacionados con mecánica clásica, la electricidad, el magnetismo, así como conocimientos generales de química y computación. Tener conocimientos de inglés, por lo menos al nivel de comprensión de textos. Tener disposición para el trabajo en equipo, capacidad de análisis y síntesis, y adaptación a situaciones nuevas, así como espíritu creativo. Procurar su bienestar integral y muestren un claro deseo y compromiso por superarse y aportar valor a su propio desarrollo, al de sus familias y al de sus comunidades, a pesar de las adversidades que hayan tenido que afrontar en sus vidas.",
                planHref: "https://ucarolina.edu.mx/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc2tEIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--7c2a06dba561debcfe08f871d8a31b79e0a73dfa/NS-Mecatro%CC%81nica-2025.pdf,",
                pdfHref: "https://ucarolina.edu.mx/rvoes/RVOE-0528238302.pdf"
            },
            programacion: {
                label: "Ingeniería en Programación",
                modalidad: "Presencial",
                duracion: "3 años y 4 meses",
                horario: "Matutino inicial",
                perfil: "El egresado de la Ingeniería en Programación podrá: Comprender conceptos y fundamentos del lenguaje de programación. Emprender, ejecutar y liderar proyectos de diseño y desarrollo de páginas web, softwares y aplicaciones. Analizar y proponer soluciones a problemáticas de creación de empresas especializadas en la programación informática. Intervenir en la elaboración de proyectos de programación informática. Vincular la programación en la cotidianidad organizacional. Ser asesor en áreas de tecnología, innovación y de sistemas. Tener interés por incrementar sus conocimientos sobre diseño de páginas web y automatizaciones. Tener la disponibilidad de horario para cumplir con los requerimientos presenciales de la ingeniería.",
                ingreso: "En sintonía con sus valores y con su vocación social como organización, la Universidad Carolina ha decidido enfocar principalmente la provisión de sus servicios educativos de esta ingeniería a personas con el siguiente perfil: Que hayan completado sus estudios de nivel bachillerato satisfactoriamente. Que procuren su bienestar integral y muestran un deseo claro por superarse y aportar valor a su propio desarrollo, de sus familias y de sus comunidades, a pesar de las adversidades. Tengan las competencias de comunicación oral y escrita en español suficientes para la comprensión y producción de softwares y aplicaciones. Que sea crítico y creativo, correspondiente a desarrollar habilidades para el desarrollo de proyectos de programación informática.",
                planHref: "https://ucarolina.edu.mx/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc3dEIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6fd69fbd29400058f6d62624dd17085d8b442874/NS-Ingenieri%CC%81a%20en%20programacio%CC%81n-2025.pdf,",
                pdfHref: "https://ucarolina.edu.mx/rvoes/RVOE-0528228243.pdf"
            },
            energiaSustentabilidad: {
                label: "Ingeniería en Energía y Sustentabilidad",
                modalidad: "Presencial",
                duracion: "3 años y 4 meses",
                horario: "Matutino inicial",
                perfil: "El egresado de la Ingeniería en Energía y Sostenibilidad podrá: Planear, construir, operar y mejorar tecnologías relacionadas con la optimización energética de forma sostenible. Gestionar y planear proyectos de energía y sostenibilidad, preservando el medio ambiente. Colaborar en plantas de generación y conversión de energía en diversas industrias. Contribuir a la formación de nuevas empresas energéticas. Colaborar en el diseño y la supervisión de proyectos y auditorías energéticas.Emitir diagnósticos sobre el potencial energético en la industria y en las ciudades. Implementar sistemas de fuentes de energía renovable, así como conocer los procedimientos y la normativa legal aplicable.",
                ingreso: "En sintonía con sus valores y con su vocación social, la Universidad Carolina orienta principalmente la provisión de sus servicios educativos de nivel superior a personas que cuenten con el siguiente perfil: Haber concluido satisfactoriamente los estudios de nivel Bachillerato. Procurar su bienestar integral y mostrar un claro deseo de superación personal, así como de aportar valor a su propio desarrollo y al de sus familias y comunidades, aun frente a las adversidades. Contar con competencias de comunicación oral y escrita en español que permitan la comprensión y producción de información académica. Mostrar pensamiento crítico y creatividad, con interés en desarrollar habilidades vinculadas al sector energético. Tener interés en ampliar sus conocimientos en energía y sostenibilidad. Contar con disponibilidad de horario para cumplir con los requerimientos presenciales del programa de Ingeniería.",
                planHref: "https://ucarolina.edu.mx/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBa3dFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d6edfa470bb771bfb56f84aa3a140423b240fffb/Ingenieri%CC%81a%20en%20Energi%CC%81a%20y%20Sostenibilidad.pdf,",
                pdfHref: "https://ucarolina.edu.mx/rvoes/RVOE-0528208059.pdf"
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
        programs: ["Licenciatura en Administración y Finanzas", "Licenciatura en Arquitectura y Sostenibilidad", "Licenciatura en Ciencia Política y Planeación Urbana", "Licenciatura en Comercio Internacional", "Licenciatura en Derecho", "Licenciatura en Producción Cinematográfica", "Licenciatura en Creatividad Tecnológica", "Licenciatura en Marketing y Publicidad", "Licenciatura en Diseño y Desarrollo de Videojuegos"],
        selectablePrograms: {
            administracionFinanzas: {
                label: "Licenciatura en Administración y Finanzas",
                modalidad: "Presencial",
                duracion: "3 años y 4 meses",
                horario: "Matutino inicial",
                perfil: "En sintonía con sus valores y su vocación social como organización, la Universidad Carolina ha decidido enfocar principalmente la provisión de sus servicios educativos a personas con el siguiente perfil: Con bachillerato terminado. Interés por la economía de la nación, la gestión de empresas, la toma de decisiones financieras y la optimización de recursos. Con valores como el respeto, el compromiso, el trabajo en equipo, la responsabilidad, la disciplina y la búsqueda del bien común. Capacidad analítica, habilidades tecnológicas y matemáticas, y orientación a la resolución de problemas, alta responsabilidad social, creatividad e imaginación, seguridad en la toma de decisiones e interés y respeto hacia otras culturas. Capacidad para soportar jornadas completas frente al computador, disposición para el trabajo en equipo, actitud emprendedora y adaptación a los cambios de trabajo, compromiso en lo profesional y personal. Con nociones de computación básica. Con alta capacidad de redacción.",
                ingreso: "El alumno egresado de la Licenciatura en Administración y Finanzas contará con las siguientes habilidades y competencias: Dominio de los procesos y funciones administrativas para el manejo eficiente de organizaciones públicas y privadas. Capacidad para desarrollar estrategias que impulsen el crecimiento del capital y mejoren el desempeño organizacional. Toma de decisiones financieras orientadas a optimizar los recursos y garantizar la sostenibilidad de las empresas. Comprensión de los principios económicos que afectan a las organizaciones y su impacto en las decisiones estratégicas. Manejo de herramientas tecnológicas y software de gestión empresarial que contribuyen a la eficiencia y competitividad. Capacidad para coordinar equipos de trabajo y gestionar recursos financieros, humanos y materiales de manera efectiva. Habilidad para negociar e impulsar mejoras económicas dentro de las organizaciones. Disposición y actitud para asumir riesgos calculados en beneficio del crecimiento empresarial. Capacidad para fomentar una cultura de innovación dentro de la organización. Gestión de sistemas de calidad que optimicen los procesos productivos con base en modelos de referencia. Evaluación y mejora continua de los procesos administrativos y financieros, así como la solución ética de problemas organizacionales.",
                planHref: "https://ucarolina.edu.mx/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc2NEIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--19ce4e72049a59d305f98f8c4aaa50a585c43395/NS-Administracio%CC%81n%20y%20Finanzas-2025.pdf,",
                pdfHref: "https://ucarolina.edu.mx/rvoes/RVOE-0528238297.pdf"
            },
            arquitecturaSostenibilidad: {
                label: "Licenciatura en Arquitectura y Sostenibilidad",
                modalidad: "Presencial",
                duracion: "3 años y 4 meses",
                horario: "Matutino inicial",
                perfil: "El egresado de la Licenciatura en Arquitectura y Sostenibilidad podrá: Comprender conceptos y fundamentos de Arquitectura y Sostenibilidad. Emprender, ejecutar y liderar proyectos de urbanismo, vivienda y diseño arquitectónico en general. Analizar y proponer soluciones a problemáticas de la arquitectura contemporánea. Intervenir en la elaboración de proyectos arquitectónicos innovadores. Vincular la arquitectura con el uso de nuevas tecnologías. Ser asesor en proyectos arquitectónicos sostenibles.",
                ingreso: "En sintonía con sus valores y su vocación social como, organización, la Universidad Carolina ha decidido enfocar principalmente la provisión de sus servicios educativos de nivel Maestría con el siguiente perfil. Que hayan completado sus estudios de nivel Bachillerato Satisfactoriamente. Que procuren su bienestar integral y muestren un deseo claro por superarse y aportar valor a su propio desarrollo, de sus familias y de sus comunidades, a pesar de las adversidades. Tengan las competencias de comunicación oral y escrita en español suficientes para la comprensión y producción de información. Que sea crítico y creativo, correspondiente a desarrollar habilidades para el desarrollo de la arquitectura. Tenga interés por incrementar sus conocimientos sobre estructuras arquitectónicas. Tenga la disponibilidad de horario de cumplir con los requerimientos presenciales de la Licenciatura.",
                planHref: "https://ucarolina.edu.mx/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9JYTJWNVNTSWhhV0l4Tm1wdWFXcDZiemx4Y0hsNGRHdHZPR1ExT1RreU1uY3lNQVk2QmtWVU9oQmthWE53YjNOcGRHbHZia2tpYzJsdWJHbHVaVHNnWm1sc1pXNWhiV1U5SWs1VExVRnljUzRnZVNCemIzTjBaVzVwWW1sc2FXUmhaQzB5TURJMVh5NXdaR1lpT3lCbWFXeGxibUZ0WlNvOVZWUkdMVGduSjA1VExVRnljUzRsTWpCNUpUSXdjMjl6ZEdWdWFXSnBiR2xrWVdRdE1qQXlOVjh1Y0dSbUJqc0dWRG9SWTI5dWRHVnVkRjkwZVhCbFNTSVVZWEJ3YkdsallYUnBiMjR2Y0dSbUJqc0dWRG9SYzJWeWRtbGpaVjl1WVcxbE9ncHNiMk5oYkE9PSIsImV4cCI6IjIwMjYtMDQtMjdUMDU6Mjc6NDYuNzk2WiIsInB1ciI6ImJsb2Jfa2V5In19--a601ab3e6293accf0676c24387b3eca2ec7634b3/NS-Arq.%20y%20sostenibilidad-2025_.pdf",
                pdfHref: "https://ucarolina.edu.mx/rvoes/RVOE-0528208056.pdf"
            },
            cienciaPoliticaPlaneacionUrbana: {
                label: "Licenciatura en Ciencia Política y Planeación Urbana",
                modalidad: "Presencial",
                duracion: "3 años y 4 meses",
                horario: "Matutino inicial",
                perfil: "El egresado de la Licenciatura en Política Pública y Planeación Urbana será capaz de: Analizar, diseñar e implementar políticas públicas relacionadas al urbanismo. Asesorar decisiones políticas respecto a las ciudades. Diferenciar particularidades urbanas a nivel nacional, regional y mundial. Comprender los principios sociales e históricos del urbanismo. Gestionar desde una esfera política la planeación urbana de una ciudad. Desarrollar proyectos de investigación urbana. Organizar la teoría con la metodología de planeación urbana para la solución de problemas sociales.",
                ingreso: "En sintonía con sus valores y con su vocación social como organización, la Universidad Carolina ha decidido enfocar principalmente la provisión de sus servicios educativos de nivel Licenciatura a personas con el siguiente perfil. Haber completado satisfactoriamente los estudios de nivel Bachillerato. Procurar su bienestar integral y mostrar un deseo claro de superación personal, así como de aportar valor a su propio desarrollo, al de sus familias y al de sus comunidades, aun frente a las adversidades. Contar con competencias de comunicación oral y escrita en español suficientes para la comprensión y producción de información académica. Provenir principalmente de los niveles socioeconómicos C, D+, D y E, según la clasificación de la Asociación Nacional de Agencias de Inteligencia de Mercado y Opinión (AMAI).",
                planHref: "https://ucarolina.edu.mx/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBa29FIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--86ebe47c68dcc82ea2338e62c816dd516828be83/Licenciatura%20en%20Ciencia%20Poli%CC%81tica.pdf,",
                pdfHref: "https://ucarolina.edu.mx/rvoes/RVOE-0528198009.pdf"
            },
            comercioInternacional: {
                label: "Licenciatura en Comercio Internacional",
                modalidad: "Presencial",
                duracion: "3 años y 4 meses",
                horario: "Matutino inicial",
                perfil: "El alumno egresado de la Licenciatura en Comercio Internacional contará con las siguientes habilidades y competencias: Dominar la logística, normatividad aduanera, negocios internacionales y operaciones de aduanas. Identificar las oportunidades de comercio exterior y negocios internacionales. Clasificar y comercializar mercancía, incluyendo la correcta clasificación arancelaria y el cumplimiento de regulaciones internacionales. Reconocer las operaciones no arancelarias y conocer los procesos fiscales relacionados con las importaciones y exportaciones. Conocer y desarrollar los procesos aduaneros dentro del marco jurídico internacional. Desarrollar las estrategias para la internacionalización de mercancías objeto de comercio exterior. Seleccionar los medios adecuados de transporte y los productos, con base en las necesidades de tiempo, espacio, costo, seguridad y disposición. Definir las especificaciones técnicas de envase y embalaje de los productos para su transportación. Conocer operaciones de comercio exterior tanto en el sector público como en el privado, así como en organismos internacionales que regulan el comercio exterior. Aplicar herramientas, estrategias y técnicas para planear, organizar, dirigir y negociar estratégicamente la operatividad del comercio internacional. Comprender los conceptos económicos fundamentales que afectan el comercio internacional y su entorno. Aplicar las normas y criterios jurídicos del derecho que facultan a las personas y entidades a realizar actos jurídicos y sus instrumentos en materia de importaciones y exportaciones. Gestionar de manera eficiente la cadena de suministro, el transporte internacional y las operaciones aduaneras, utilizando herramientas tecnológicas que favorezcan la gestión del comercio internacional. Aplicar estrategias de liderazgo para la toma de decisiones. Evaluar el sistema logístico más adecuado para cada operación comercial. Realizar análisis financieros que respalden las operaciones internacionales y la toma de decisiones estratégicas. Realizar contratos para el comercio internacional de bienes y servicios con base en las leyes y reglamentos de comercio exterior, así como en los acuerdos y tratados internacionales de México con otros países, estableciendo niveles de integración, beneficios, reservas y aplicaciones de los TLCs. Aplicar términos técnicos de comercio internacional y utilizar los TLCs para las operaciones del comercio internacional. Comunicarse en inglés y otros idiomas, y apegarse a los criterios que rigen el comercio internacional.",
                ingreso: "En sintonía con sus valores y su vocación social como organización, la Universidad Carolina ha decidido enfocar principalmente la provisión de sus servicios educativos a personas con el siguiente perfil: Con bachillerato terminado. Profundo interés por las relaciones internacionales, el comercio global, las culturas y los procesos de importación y exportación, así como por la logística y distribución de mercancías. Con valores como el respeto, el compromiso, el trabajo en equipo, la responsabilidad social, la disciplina y la búsqueda del bien común. Capacidad de comunicación verbal y escrita, capacidad analítica, habilidades de negociación y resolución de problemas. Alta responsabilidad social, creatividad e imaginación, seguridad en la toma de decisiones, interés y respeto hacia otras culturas. Capacidad de adaptación a los cambios laborales y disposición para el trabajo en equipo. Capacidad para soportar jornadas completas frente al computador, actitud emprendedora y compromiso en lo profesional y personal. Con nociones de computación básica. Con alta capacidad de relaciones internacionales. Dominio de otros idiomas.",
                planHref: "https://ucarolina.edu.mx/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc1lEIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--bbd8477916ca1f50e34ec67020a3e2474aa1252c/NS-Comercio%20Internacional-2025.pdf,",
                pdfHref: "https://ucarolina.edu.mx/rvoes/RVOE-0528238298.pdf"
            },
            derecho: {
                label: "Licenciatura en Derecho",
                modalidad: "Presencial",
                duracion: "3 años y 4 meses",
                horario: "Matutino inicial",
                perfil: "El alumno egresado de la Licenciatura en Derecho contará con las siguientes habilidades y competencias: Capacidad para interpretar y aplicar las normas jurídicas en diferentes ámbitos del derecho mexicano. Ejecutar de manera adecuada y con justicia en el derecho mexicano. Redactar contratos, convenios, constitución de sociedades o cualquier otro acto jurídico que corresponda a los estándares del derecho mexicano. Estructurar acciones de manera colaborativa, multidisciplinaria y multicultural. Tomar decisiones, ejercer y delegar autoridad, dirigir con liderazgo, promover el desarrollo organizacional y la calidad de vida en el trabajo, así como investigar y diseñar creativamente propuestas para la solución de problemas. Capacidad para resolver problemas jurídicos con eficiencia, eficacia y oportunidad. Capacidad de redacción y argumentación jurídica, sustentadas en el análisis crítico y ético de la realidad. Manejar casos civiles, penales, administrativos y de cualquier índole jurídica en los tribunales competentes. Capacidad para realizar investigaciones jurídicas aplicadas a la solución de problemas sociales y económicos. Diseñar, instrumentar, operar y evaluar proyectos de investigación jurídica. Realizar diagnósticos y estudios de la situación que guardan las actuales instituciones jurídicas y, en particular, las estructuras y procesos de gobierno, proponiendo las reformas conducentes. Habilidades de negociación y mediación para la solución pacífica de conflictos. Tener habilidades en un segundo idioma. Conocer el proceso para el establecimiento de una empresa de cualquier tipo. Capacidad de colaboración con otras personas físicas y morales, en el ámbito jurídico, empresarial y social.",
                ingreso: "En sintonía con sus valores y su vocación social como organización, la Universidad Carolina ha decidido enfocar principalmente la provisión de sus servicios educativos a personas con el siguiente perfil: Con bachillerato terminado. Profundo interés por los procesos jurídicos mexicanos, por promover el orden social a través de las leyes, así como por contribuir al bienestar social mediante la equidad y la justicia. Interés por servir a la comunidad, defendiendo sus derechos, promoviendo la solución de conflictos y por temas sociales, políticos y económicos. Con valores como la responsabilidad social, el compromiso, la justicia, la equidad, la ética profesional, la empatía, la honestidad, la integridad y el respeto, y la búsqueda del bien común. Tener capacidad de análisis, alta responsabilidad social, ser creativo y tener imaginación, seguridad en la toma de decisiones, interés y respeto hacia otras culturas. Pensamiento crítico y ético, capacidad de comunicación verbal y escrita, capacidad analítica y de síntesis, así como disposición para investigar, negociar y tomar decisiones. Capacidad para soportar jornadas completas frente al computador, disposición para el trabajo en equipo, actitud emprendedora y adaptación a los cambios de trabajo, compromiso en lo profesional y personal. Con nociones de computación básica. Con alta capacidad de redacción y oralidad. Con respeto y admiración por el ser humano. Habilidad para escribir bien, buena ortografía, dominio de la sintaxis y facilidad para redactar. Disposición para prolongadas horas de lectura. Interés por el razonamiento abstracto. Interés por aprender otros idiomas. Disposición de servicio. Disposición para trabajar en equipo y relacionarse con otras personas. Concentración durante las clases. Disposición para mediar en situaciones de conflicto. Don de persuasión. Capacidad de adaptación a diferentes contextos profesionales y sociales.",
                planHref: "https://ucarolina.edu.mx/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9JYTJWNVNTSWhOek54ZHpscmNuYzJlR3R0Ym5NM01XSnlZM2hpYW5GcU5HOW1kUVk2QmtWVU9oQmthWE53YjNOcGRHbHZia2tpVVdsdWJHbHVaVHNnWm1sc1pXNWhiV1U5SWs1VExVUmxjbVZqYUc4dE1qQXlOUzV3WkdZaU95Qm1hV3hsYm1GdFpTbzlWVlJHTFRnbkowNVRMVVJsY21WamFHOHRNakF5TlM1d1pHWUdPd1pVT2hGamIyNTBaVzUwWDNSNWNHVkpJaFJoY0hCc2FXTmhkR2x2Ymk5d1pHWUdPd1pVT2hGelpYSjJhV05sWDI1aGJXVTZDbXh2WTJGcyIsImV4cCI6IjIwMjYtMDQtMjdUMDU6Mjk6MTguNDY1WiIsInB1ciI6ImJsb2Jfa2V5In19--5fae266c503bf8f685f0c54bec616282bf92b298/NS-Derecho-2025.pdf",
                pdfHref: "https://ucarolina.edu.mx/rvoes/RVOE-0528238285.pdf"
            },
            produccionCinematografica: {
                label: "Licenciatura en Producción Cinematográfica",
                modalidad: "Presencial",
                duracion: "3 años y 4 meses",
                horario: "Matutino inicial",
                perfil: "El estudiante será capaz de: Analizar y escribir guiones para cortometrajes, series, documentales, spots publicitarios y películas. Dominar la historia del cine, sus diferentes corrientes y etapas a nivel mundial. Diseñar y producir proyectos cinematográficos; desde cortometrajes, documentales, largometrajes, series de televisión, videoclips, spots publicitarios y materiales para redes sociales. Evaluar guiones y obras audiovisuales. Abordar asuntos complejos interdisciplinarios dentro de las diferentes áreas de la producción cinematográfica, por ejemplo, dirección, edición, fotografía, diseño sonoro, musicalización, diseño de producción, animación, entre otras.",
                ingreso: "En sintonía con sus valores y su vocación social como, organización, la Universidad Carolina ha decidido enfocar principalmente la provisión de sus servicios educativos de nivel superior con el siguiente perfil. Que hayan completado sus estudios de nivel Bachillerato Satisfactoriamente. Que procuren su bienestar integral y muestren un deseo claro por superarse y aportar valor a su propio desarrollo, de sus familias y de sus comunidades, a pesar de las adversidades. Tengan las competencias de comunicación oral y escrita en español suficientes para la comprensión y producción de información. Que sea crítico y creativo, correspondiente a desarrollar habilidades para el desarrollo del sector cinematográfico. Tenga interés por incrementar sus conocimientos sobre cine y producción cinematográfica. Tenga la disponibilidad de horario de cumplir con los requerimientos presenciales de la Licenciatura.",
                planHref: "https://ucarolina.edu.mx/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb0VEIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--74d31c9974b2bd4fb308f5566a03bd54b4b0e034/NS-Cine-2025.pdf,",
                pdfHref: "https://ucarolina.edu.mx/rvoes/RVOE-0528208058.pdf"
            },
            creatividadTecnologica: {
                label: "Licenciatura en Creatividad Tecnológica",
                modalidad: "Presencial",
                duracion: "3 años y 4 meses",
                horario: "Matutino inicial",
                perfil: "El egresado de la Licenciatura en Creatividad Tecnológica contará con: Conocimientos administrativos, metodológicos y técnicos para la planeación, registro e implementación de nuevas tecnologías. Experiencia en identificar y anticipar oportunidades tecnológicas que impulsen el desarrollo local, regional y nacional. Capacidades creativas e innovadoras con una visión empresarial y estratégica. Dominio de las áreas administrativas que facilitan su incorporación al entorno laboral moderno y globalizado. Conocimiento y dominio de los procedimientos administrativos. Formación sólida para emprender con altos valores éticos y morales. Capacidad de análisis, pensamiento estratégico y visión global. Formación integral que le permite asumir un liderazgo orientado a resultados, respondiendo a los retos de organizaciones en contextos dinámicos y altamente competitivos. Espíritu emprendedor para generar proyectos estratégicos apoyados en tecnologías de la información que optimicen la toma de decisiones y el uso de recursos. Alta capacidad de trabajo colaborativo, lo que le permite adaptarse a las necesidades de distintos tipos de organizaciones.",
                ingreso: "En sintonía con sus valores y su vocación social como organización, la Universidad Carolina ha decidido enfocar principalmente la provisión de sus servicios educativos a personas con el siguiente perfil: Haber completado el bachillerato y contar con el certificado correspondiente. Tener interés en la creación y el desarrollo tecnológico. Contar con capacidad de análisis, alta responsabilidad social, creatividad e imaginación. Mostrar seguridad en la toma de decisiones, interés y respeto hacia otras culturas. Tener disposición para trabajar en equipo, actitud emprendedora, compromiso profesional y personal, así como capacidad de adaptación a entornos cambiantes. Estar preparado para afrontar jornadas completas frente a la computadora. Poseer nociones básicas de computación. Tener habilidades de redacción y expresión creativa.",
                planHref: "https://ucarolina.edu.mx/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbTBEIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b53d878ed4497383cb846ef804957ec58836754f/NS-Creatividad-2025.pdf,",
                pdfHref: "https://ucarolina.edu.mx/rvoes/RVOE-0528238299.pdf"
            },
            marketingPublicidad: {
                label: "Licenciatura en Marketing y Publicidad",
                modalidad: "Mixto",
                duracion: "3 años y 4 meses",
                horario: "Asincrónico",
                perfil: "El perfil de egreso define las competencias, habilidades, conocimientos y actitudes que un estudiante debe haber desarrollado al concluir la Licenciatura en Marketing y Nuevos Medios. Estas competencias le permitirán desempeñarse de manera eficiente en el ámbito profesional. Dominio de los fundamentos teóricos y prácticos del marketing, la publicidad, el branding y la comunicación en medios digitales y emergentes. Conocimiento avanzado de estrategias de marketing digital, SEO, SEM, analítica web, redes sociales, e-commerce y generación de contenido. Conocimiento en el manejo de herramientas y plataformas tecnológicas como CRM, CMS, software de edición de medios y herramientas de análisis de datos. Entendimiento del comportamiento del consumidor, así como de técnicas avanzadas de investigación de mercados y análisis de datos. Capacidad para diseñar, implementar y evaluar estrategias de marketing integrales que respondan a los objetivos de las organizaciones y a las necesidades del mercado. Habilidades de comunicación para elaborar contenido relevante, atractivo y persuasivo en diferentes formatos y medios. Competencia en el uso de tecnologías emergentes (como inteligencia artificial, realidad virtual, realidad aumentada y big data) aplicadas al marketing y la publicidad. Habilidad para liderar y gestionar proyectos de marketing y comunicación, incluyendo el trabajo en equipos multidisciplinarios y la colaboración con instituciones del ámbito público y privado. Compromiso con la ética profesional, la responsabilidad social y el respeto por la diversidad cultural. Mentalidad innovadora, emprendedora y adaptable a los cambios del entorno digital y de los medios emergentes. Orientación al cliente y al consumidor, con enfoque en la creación de valor mediante la satisfacción de necesidades y el cumplimiento de expectativas. Proactividad para la resolución de problemas, pensamiento crítico y capacidad de toma de decisiones en contextos complejos. Capacidad para mantenerse actualizado en tendencias y avances del marketing digital y de los nuevos medios emergentes. Habilidad para evaluar el impacto de las estrategias de marketing en los objetivos de negocio mediante el análisis de métricas y KPIs.",
                ingreso: "De conocimientos y habilidades: Conocimientos básicos de mercadotecnia, administración y tecnologías de la información. Habilidades elementales en matemáticas y estadística, útiles para la investigación de mercados y el análisis de datos. Capacidad de análisis y síntesis de información. Habilidades comunicativas efectivas, tanto orales como escritas. Competencia digital básica: manejo de herramientas tecnológicas, aplicaciones de software, redes sociales y plataformas digitales. Creatividad e innovación para proponer soluciones originales a problemas de marketing y comunicación. Interés por el marketing digital, la publicidad, la comunicación y los nuevos medios. Disposición para el aprendizaje continuo y la autoformación. Ética profesional, responsabilidad y compromiso social. Actitud colaborativa, proactiva y emprendedora, orientada al trabajo en equipo. Adaptabilidad al cambio y disposición para enfrentar los retos de la era digital. Interés por las tendencias en marketing, tecnología y medios emergentes.",
                planHref: "https://ucarolina.edu.mx/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBa2dFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--9a442819e996e8d024e0d91eb10e13477487a22d/Licenciatura%20en%20Marketing%20y%20publicidad.pdf,",
                pdfHref: "https://ucampus.lat/rvoes/RVOE-0528258449.pdf"
            },
            disenoVideojuegos: {
                label: "Licenciatura en Diseño y Desarrollo de Videojuegos",
                modalidad: "En línea",
                duracion: "3 años",
                horario: "Asincrónico",
                perfil: "El egresado de la Licenciatura en Diseño y Desarrollo de Videojuegos podrá: Comprender y aplicar conceptos generales para crear, diseñar, producir, comercializar y administrar proyectos de videojuegos. Conocer los requerimientos técnicos y tecnológicos indispensables para la creación y desarrollo de un videojuego. Entender y aplicar el análisis de arquetipos psicológicos de los diferentes jugadores. Aplicar métodos de mercadotecnia digital.",
                ingreso: "Los candidatos a esta licenciatura deben ser afines a los videojuegos, contar con un perfil creativo y narrativo, y tener disposición para trabajar en equipo. Que hayan completado sus estudios de preparatoria satisfactoriamente. Haber completado satisfactoriamente sus estudios de preparatoria. Procurar su bienestar integral y mostrar un deseo claro de superación, aportando valor a su desarrollo personal, al de sus familias y comunidades, a pesar de las adversidades. Ser críticos y creativos, con habilidades para la gestión de equipos creativos y multidisciplinarios. Tener interés en incrementar sus conocimientos sobre innovación y gestión de negocios.",
                planHref: "https://ucarolina.edu.mx/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc2dEIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--2ae5a98fea006ff06be5a8a51a6c5823e872aa43/NS-Videojuegos-2025.pdf,",
                pdfHref: "https://ucarolina.edu.mx/rvoes/RVOE-0528208057.pdf"
            },
        },
        meta: "Plan flexible | Duración 3 años y 4 meses | Horario matutino inicial",
        prices: ["Inscripción | Consulta costo vigente", "Inversión mensual | Consulta costo vigente", "Opciones de beca"],
        rightTitle: "Proceso de Admisión",
        rightBody: "El proceso incluye registro, envío de documentos y entrevista de orientación para definir tu trayectoria académica.",
        details: [
            { label: "Modalidad", value: "Presencial y En línea" },
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
        programs: ["Maestría en Desarrollo Humano", "Maestría en Gestión Industrial", "Maestría en Innovación Educativa", "Maestría en Negocios Digitales"],
        selectablePrograms: {
            desarrolloHumano: {
                label: "Maestría en Desarrollo Humano",
                modalidad: "Ejecutivo",
                duracion: "5 Cuatrimestres",
                horario: "Presencial",
                perfil: "El egresado de la Maestría en Desarrollo Humano es capaz de: Dimensionar y redireccionar el entono de un grupo de personas mediante intervenciones para que almacenen sus propósitos. Fomentar el cambio sistémico desde el individuo para proveer soluciones sociales. Generar un cambio desde la práctica del desarrollo de capacidades de los individuos y grupos. Fomentar que las empresas y grupos de individuos alcancen niveles de asertividad que les permitan facilitar sus labores y alcanzar sus metas. Gestionar el trabajo de líderes dentro de las empresas u organizaciones que desarrollen el trabajo en equipo. Aplicar métodos de investigación que tengan como pilar el aprendizaje basado en la persona. Definir y llevar a cabo líneas de investigación científicas que permitan potencializar el desempeño individual y de grupo.",
                ingreso: "La Universidad Carolina tiene su fundamento en potencializar las capacidades de los individuos y busca que las personas que ingresen en el nivel de Maestría a personas con el siguiente perfil: Que hayan completado sus estudios de nivel Licenciatura satisfactoriamente. Que procuren su bienestar integral y muestren un deseo claro por superarse y aportar valor a su propio desarrollo, de sus familias y de sus comunidades, a pesar de las adversidades. Tengan las competencias de comunicación oral y escrita en español suficientes para la comprensión y producción de información. Tenga las competencias de lectura y comprensión en el idioma inglés. Que se considere y pruebe su importancia como agente de cambio en su comunidad. Que tenga una proyección de vida en favor de su comunidad y el medio que lo rodea. Tenga la disponibilidad de horario de cumplir con los requerimientos presenciales de la Materia en Administración Pública.",
                planHref: "https://ucarolina.edu.mx/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbW9EIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c9bab19a926ab221484ed9d34ff1721a3b910778/Maestri%CC%81as-DH-2025.pdf,",
                pdfHref: "https://ucarolina.edu.mx/rvoes/RVOE-0529209024.pdf"
            },
            gestionIndustrial: {
                label: "Maestría en Gestión Industrial",
                modalidad: "Ejecutivo",
                duracion: "5 Cuatrimestres",
                horario: "Presencial",
                perfil: "El egresado de la Maestría en Gestión Industrial es capaz de: Reconocer la base conceptual, contar con una visión teórica y práctica de la Gestión Industrial. Elaborar, desarrollar y aplicar estrategias comerciales y financieras. Tomar de decisiones en materia de administración de la industria. Desarrollar planes financieros y estrategias para negocios desde una perspectiva de disminución en el impacto ambiental.",
                ingreso: "En sintonía con sus valores y con su vocación social como organización, la Universidad Carolina ha decidido enfocar principalmente la provisión de sus servicios educativos de nivel Maestría a personas con el siguiente perfil: Que hayan completado sus estudios de nivel licenciatura satisfactoriamente. Que procuren su bienestar integral y muestren un deseo claro por superarse y aportar valor a su propio desarrollo, de sus familias y de sus comunidades, a pesar de las adversidades. Tenga las competencias de comunicación oral y escrita en español suficientes para la comprensión y producción de información académica. Con disciplina de aprendizaje autodidacta. Que sea crítico y creativo, correspondiente a desarrollar habilidades en materia de gestión industrial. Tenga interés por incrementar sus conocimientos sobre gestión e industria. Tenga la disponibilidad de horario de cumplir con los requerimientos presenciales de la Maestría en Gestión Industrial.",
                planHref: "https://ucarolina.edu.mx/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbVlEIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--361e1f3dd9c0495cdab1ed37aa93f1e52d8e3f84/Maestri%CC%81as-GI-2025.pdf,",
                pdfHref: "https://ucarolina.edu.mx/rvoes/RVOE-0529209025.pdf"
            },
            innovacionEducativa: {
                label: "Maestría en Innovación Educativa",
                modalidad: "Ejecutivo",
                duracion: "5 Cuatrimestres",
                horario: "Presencial",
                perfil: "El egresado de la Maestría en Innovación Educativa será capaz de: Comprender conceptos de Ciencias de la Educación. Emprender, ejecutar y liderar proyectos de investigación educativa. Analizar y proponer soluciones a problemáticas de la educación contemporánea. Intervenir en la elaboración de programas, planes y técnicas de enseñanza-aprendizaje aplicando innovaciones. Vincular la educación con el uso de nuevas tecnologías. Ser asesor en procesos, planes y programas en instituciones educativas para la mejora continua e innovación.",
                ingreso: "En sintonía con sus valores y con su vocación social como organización, la Universidad Carolina ha decidido enfocar principalmente la provisión de sus servicios educativos de nivel Maestría a personas con el siguiente perfil: Que hayan completado sus estudios de nivel licenciatura satisfactoriamente. Que procuren su bienestar integral y muestren un deseo claro por superarse y aportar valor a su propio desarrollo, de sus familias y de sus comunidades, a pesar de las adversidades. Tenga las competencias de comunicación oral y escrita en español suficientes para la comprensión y producción de información académica. Tenga las competencias de lectura y comprensión en idioma inglés. Que sea crítico y creativo, correspondiente a desarrollar habilidades para el desarrollo de la innovación educativa. Tenga interés por incrementar sus conocimientos sobre innovación y ciencias de la educación (sociológicos, psicopedagógicos y filosóficos). Tenga la disponibilidad de horario de cumplir con los requerimientos presenciales de la Maestría en Innovación Educativa.",
                planHref: "https://ucarolina.edu.mx/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbWdEIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d8357230c53a0a18fdfa57dc97965f81cae8bac3/Maestri%CC%81as-IE-2025.pdf,",
                pdfHref: "https://ucarolina.edu.mx/rvoes/RVOE-0529199007.pdf"
            },
            negociosDigitales: {
                label: "Maestría en Negocios Digitales",
                modalidad: "En Línea",
                duracion: "5 Cuatrimestres",
                horario: "Asincrónico",
                perfil: "La persona egresada lidera procesos de transformación, integra metodologías de innovación y desarrolla soluciones para retos complejos en organizaciones y proyectos multidisciplinarios.",
                ingreso: "En sintonía con sus valores y su vocación social como, organización, la Universidad Carolina ha decidido enfocar principalmente la provisión de sus servicios educativos de nivel Materia a personas con el siguiente perfil. Que hayan completado sus estudios de nivel Licenciatura satisfactoriamente. Que procuren su bienestar integral y muestren un deseo claro por superarse y aportar valor a su propio desarrollo, de sus familias y de sus comunidades, a pesar de las adversidades. Tengan las competencias de comunicación oral y escrita en español suficientes para la comprensión y producción de información académica. Tenga las competencias de lectura y comprensión en el idioma inglés. Que sean críticos y creativos, correspondiente a desarrollar habilidades para la gestión de negocios digitales. Tenga interés por incrementar sus conocimientos sobre innovación y gestión de negocios. Tenga la disponibilidad de horario de cumplir con los requerimientos presenciales de la Materia en Negocios Digitales (No Escolarizada).",
                planHref: "https://ucarolina.edu.mx/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbVVEIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--0b59f12c871ea92e7bb08eb65d1dfd183642130e/Maestri%CC%81as-ND-2025.pdf,",
                pdfHref: "https://ucarolina.edu.mx/rvoes/RVOE-0529209026.pdf"
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
const rightCardPdfDefaultText = (rightCardPdf.textContent || "Ver PDF del programa").trim();
const selectedProgramByLevel = {
    bachillerato: "general"
};

const ingresoProfileByLevel = {
    ingenierias: "El perfil de ingreso está dirigido a aspirantes con interés en ciencias, matemáticas, tecnología y resolución de problemas, con disposición para el trabajo colaborativo, la innovación y el aprendizaje continuo.",
    licenciaturas: "El perfil de ingreso está dirigido a aspirantes con interés en el desarrollo profesional, pensamiento crítico, comunicación efectiva y compromiso ético, con disposición para integrar teoría y práctica en contextos reales.",
    maestrias: "El perfil de ingreso está dirigido a profesionistas con experiencia o interés de especialización, habilidades de análisis y liderazgo, y compromiso para aplicar conocimiento avanzado en la solución de retos estratégicos."
};

function setPdfButtonState(isDisabled) {
    rightCardPdf.classList.toggle("is-disabled", isDisabled);
    rightCardPdf.setAttribute("aria-disabled", isDisabled ? "true" : "false");
    rightCardPdf.tabIndex = isDisabled ? -1 : 0;
    rightCardPdf.textContent = isDisabled ? "PDF no disponible" : rightCardPdfDefaultText;
}

rightCardPdf.addEventListener("click", function(event) {
    if (rightCardPdf.getAttribute("aria-disabled") === "true") {
        event.preventDefault();
    }
});

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
    const disablePdf = level === "maestrias" || (level === "licenciaturas" && programId === "marketingPublicidad");
    setPdfButtonState(disablePdf);
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
    setPdfButtonState(false);
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