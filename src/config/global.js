export default {
  global: {
    componenteFormativo:
      'Ejecución en el LMS, según orientaciones institucionales para la formación virtual',
    descripcionCurso:
      'La ejecución de un LMS sirve para organizar, gestionar y facilitar el proceso de enseñanza. Al momento de realizarla, se deben tener en cuenta aspectos como la centralización del contenido, el seguimiento del progreso, la facilitación de la comunicación, la personalización del aprendizaje, la accesibilidad, el análisis de datos, entre otros aspectos, que son de utilidad para modernizar y optimizar un entorno virtual.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Lineamientos institucionales (SENA) para la formación virtual',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Estrategias de implementación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Implementación de estrategias didácticas activas aplicadas en Ambientes Virtuales de Aprendizaje',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Implementación de actividades de aprendizaje',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Implementación de estrategias para el seguimiento del aprendizaje en el LMS',
            hash: 't_1_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_03_41311588_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Lineamientos institucionales (SENA) para la formación virtual',
      referencia:
        'SENA. (2019). Aplicativo CompromISO. Guía de orientaciones para la formación en ambientes virtuales de aprendizaje.',
      tipo: 'Documento',
      link: 'https://compromiso.sena.edu.co/',
    },
    {
      tema:
        '1.2 Implementación de estrategias didácticas activas aplicadas en Ambientes Virtuales de Aprendizaje',
      referencia: 'SENA. (2011). Estrategias didácticas. Bpo Comercio.',
      tipo: 'Blog',
      link:
        'https://bpocentrodecomercio.blogspot.com/2011/10/estrategias-didacticas.html',
    },
  ],
  glosario: [
    {
      termino: 'Actividad de aprendizaje',
      significado:
        'acciones integradoras e integradas entre sí, realizadas por los aprendices con la orientación del instructor - tutor - a lo largo del proceso formativo. Son objeto directo de aprendizaje, lo que indica que existe una relación directa entre lo que se debe hacer en el centro formativo y lo que más tarde se hará en el mundo laboral (SENA, 2020).',
    },
    {
      termino: 'Aprendizaje',
      significado:
        'proceso mediante el cual el aprendiz comprende, asimila, incorpora y aplica conocimientos, habilidades, destrezas y actitudes que lo hacen competente para actuar técnica, metodológica, participativa y socialmente en el trabajo (SENA, 2020).',
    },
    {
      termino: 'Aprendizaje colaborativo',
      significado:
        'conjunto de métodos que se aplican en grupos pequeños de entrenamiento y desarrollo de habilidades mixtas, donde cada miembro del grupo es responsable, tanto de su aprendizaje como de los demás miembros del grupo.',
    },
    {
      termino: 'Estrategia de aprendizaje',
      significado:
        'combinación de métodos, medios y mediaciones didácticas, utilizadas por los instructores y aprendices para facilitar el aprendizaje y la obtención de los resultados definidos en el diseño curricular (SENA, 2020).',
    },
    {
      termino: 'Evidencia de aprendizaje',
      significado:
        'manifestación del aprendizaje que se refiere a la comprobación de lo que “sabe”, “sabe hacer” y “es” el aprendiz. Pueden ser de conocimiento, de desempeño y de producto, de las cuales se pueden inferir los logros de aprendizaje y establecer el desarrollo o no de las competencias (SENA, 2020).',
    },
    {
      termino: 'Guía de aprendizaje',
      significado:
        'son instrumentos o recursos de planificación del aprendizaje que facilitan el proceso de enseñanza - aprendizaje - evaluación, a través de las cuales se comunica a los aprendices los compromisos y objetivos del proceso de aprendizaje.',
    },
    {
      termino: 'Rúbrica',
      significado:
        'es un conjunto de criterios y normas establecidos por los instructores, con el fin de evidenciar la calidad de los resultados u objetivos que se deben alcanzar en una actividad formativa.',
    },
    {
      termino: 'Técnica didáctica',
      significado:
        'corresponde a las distintas metodologías y métodos sistematizados que pueden ser usados para el desarrollo de determinada actividad de aprendizaje. Entre ellos, se considera el estudio de caso, análisis de objeto – sistemas, análisis de servicios – procesos, simulaciones, juego de roles, socialización de conceptos (SENA, 2020).',
    },
  ],
  referencias: [
    {
      referencia:
        'Ángel, W. I. (2019). Guía de orientaciones para la formación en Ambientes Virtuales de Aprendizaje. Servicio Nacional de Aprendizaje SENA.',
      link: '',
    },
    {
      referencia:
        'Carrera, X., Zubizarreta, M., Rodríguez, V., Arana, N. y Astigarraga, E. (2007). Marco conceptual y pedagógico para la implementación de la Formación por Proyectos en el SENA.',
      link: '',
    },
    {
      referencia: 'SENA. (2020). Glosario SENA.',
      link: 'https://www.sena.edu.co/es-co/ciudadano/Paginas/glosario.aspx',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Wilmer Ismael Ángel Benavides',
          cargo: 'Líder equipo / Asesor formación virtual',
          centro: 'Dirección de Formación Profesional',
        },
        {
          nombre: 'Aura Andrea Sánchez Suárez ',
          cargo: 'E-Pedagoga',
          centro: 'Centro Agroempresarial y Minero - Regional Bolívar',
        },
        {
          nombre: 'Bibiana Lucía Camargo Romero ',
          cargo: 'E-Pedagoga',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diana Patricia Carmona Milian',
          cargo: 'E-Pedagoga',
          centro:
            'Centro de Gestión y Desarrollo Sostenible Surcolombiano - Regional Huila',
        },
        {
          nombre: 'Humberto Amaya Alvear',
          cargo: 'E-Pedagogo',
          centro: 'Centro Agroempresarial y Minero - Regional Bolívar',
        },
        {
          nombre: 'Laura Ivonne Rusinque Gamboa',
          cargo: 'E-Pedagoga',
          centro: 'Centro Agropecuario la Granja-Regional Tolima',
        },
        {
          nombre: 'Marisol Báez Solano	',
          cargo: 'E-Pedagoga',
          centro: 'Centro de Industria y la Construcción - Regional Tolima',
        },
        {
          nombre: 'María Cecilia Aroca Díaz	',
          cargo: 'Soporte de seguimiento académico',
          centro: 'Centro Agroempresarial y Minero - Regional Bolívar',
        },
        {
          nombre: 'Diego Alejandro Córdoba Mavesoy',
          cargo: 'Soporte de diseño y multimedia',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
