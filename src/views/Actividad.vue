<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema:
        'Ejecución en el LMS, según orientaciones institucionales para la formación virtual',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> lea los siguientes enunciados y seleccione la respuesta que considere correcta.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            '<strong>Si va a dar una respuesta en un foro a un aprendiz, qué norma es la más aconsejada aplicar:</strong>',
          imagen: require('@/assets/componentes/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ubicar el lugar donde está.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ser prudente con la opinión.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Compartir el conocimiento.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Respetar la privacidad de los demás.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Conoce qué norma se debe aplicar antes de una intervención en un foro.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '<b>El anuncio de bienvenida es el primero que se aconseja realizar para darle la apertura a un curso SENA:</b>',
          imagen: require('@/assets/componentes/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso.', esCorrecta: false },
            { id: 'b', texto: 'Verdadero.', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Muy bien! Este tipo de anuncio se aconseja que se utilice para abrir un curso virtual.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '<b>Acaba de ingresar a un curso virtual que va a realizar y le piden que determine cuál de los siguientes momentos no se debe utilizar en los foros:</b>',
          imagen: require('@/assets/componentes/pregunta_3.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Apertura.', esCorrecta: false },
            { id: 'b', texto: 'Sesiones en línea.', esCorrecta: true },
            { id: 'c', texto: 'Desarrollo.', esCorrecta: false },
            { id: 'd', texto: 'Cierre.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Muy bien! Aunque esta herramienta hace parte del LMS, no tiene que ver con los momentos de los foros.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '<b>Dentro del curso que está llevando a cabo, necesita implementar una estrategia didáctica en su proceso formativo y elige como acción más viable la aplicación del desempeño y el producto. Esta elección fue la más adecuada.</b>',
          imagen: require('@/assets/componentes/pregunta_4.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Falso.', esCorrecta: true },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Estas no son tipos de estrategias, ya que hacen parte de los tipos de evidencias manejados en un curso.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '<b>Seleccione la herramienta de trabajo colaborativo que considera viable aplicar en un curso virtual que se encuentra ejecutando sobre manejo ambiental:</b>',
          imagen: require('@/assets/componentes/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Informe.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Scorm.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Blog.', esCorrecta: true },
            {
              id: 'd',
              texto: 'Evaluación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Aunque las otras opciones son herramientas por las cuales se pueden trabajar evidencias, no son colaborativas.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '<b>Un aprendiz dentro de su proceso formativo puede realizar un entregable por medio de un archivo .zip sin ningún problema.</b>',
          imagen: require('@/assets/componentes/pregunta_2.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Falso.', esCorrecta: false },
            { id: 'b', texto: 'Verdadero.', esCorrecta: true },
          ],

          mensaje_correcto:
            '¡Muy bien! Un .zip se puede enviar como entregable en un curso.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '<b>Si desea evaluar una evidencia entregada por un aprendiz, qué herramienta utilizaría:</b>',
          imagen: require('@/assets/componentes/pregunta_3.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Foro.', esCorrecta: false },
            { id: 'b', texto: 'Scorm.', esCorrecta: false },
            { id: 'c', texto: 'Rúbrica.', esCorrecta: true },
            { id: 'd', texto: 'Anuncios.', esCorrecta: false },
          ],

          mensaje_correcto:
            '¡Muy bien! La rúbrica es la herramienta evaluativa utiliza para las evidencias.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '<b>Dentro de su formación virtual desea realizar una sesión en línea, pero se abstiene de hacerlo, ya que estas solo se realizan en programas titulados.</b>',
          imagen: require('@/assets/componentes/pregunta_4.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Falso.', esCorrecta: true },
            { id: 'b', texto: 'Verdadero.', esCorrecta: false },
          ],

          mensaje_correcto:
            '¡Buen trabajo! Una sesión en línea se puede realizar en cualquier programa de formación virtual, sea complementario, titulado o a distancia.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '<b>Al implementar un aprendizaje colaborativo en la formación, las habilidades que se aplican en este tipo de aprendizaje son: </b>',
          imagen: require('@/assets/componentes/pregunta_1.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Blandas.', esCorrecta: false },
            { id: 'b', texto: 'Cognitivas.', esCorrecta: false },
            { id: 'c', texto: 'Mixtas.', esCorrecta: true },
            { id: 'd', texto: 'Evaluativas.', esCorrecta: false },
          ],

          mensaje_correcto:
            '¡Muy bien! En un aprendizaje colaborativo se da un desarrollo de habilidades mixtas.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '<b>El chat es una herramienta de comunicación sincrónica disponible en el LMS SENA, para interactuar en tiempo real sobre las dudas que se le presenten al aprendiz en la formación que está orientando.</b>',
          imagen: require('@/assets/componentes/pregunta_2.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Falso.', esCorrecta: false },
            { id: 'b', texto: 'Verdadero.', esCorrecta: true },
          ],

          mensaje_correcto:
            '¡Muy bien! Esta es una de las herramientas del LMS de la institución disponibles para interactuar con los aprendices.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Felicitaciones! Ha superado la actividad, demostrando que posee conocimientos sólidos sobre la temática tratada en el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Se recomienda revisar el componente formativo e intentarlo nuevamente.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
