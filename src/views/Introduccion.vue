<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.mb-5
      .col-lg-10.col-12
        figure.mb-4
          img(src='@/assets/curso/temas/intro/img01.png', alt='Imagen decorativa')
        p.mb-5(data-aos="fade-left") El alistamiento es uno de los procedimientos más importantes en el quehacer de la formación virtual. En componente formativo, conocerán cada una de las acciones a realizar en este primer momento de la ejecución de la formación virtual y las diferentes herramientas a trabajar en el LMS del SENA.
          
    
    //- figure.mb-5(data-aos="zoom-in")
    //-   .video
    //-     iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
