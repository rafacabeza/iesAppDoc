export default {
  title: "IesApp",
  description: "Proyecto Gestión Centro",
  base: '/iesAppDoc/',

  themeConfig: {
    nav: [
      { text: "Bases", link: "/guide/introduccion" },
      { text: "Enseñanza", link: "/enseñanza/alumnos" },
      { text: "FP", link: "/fp/vue" },
      { text: "Utilidades", link: "/docker/entorno" }
    ],

    sidebar: {
      "/guide/": [
        {
          text: "Bases",
          items: [
            { text: "Introducción", link: "/guide/introduccion" },
            { text: "Integración", link: "/guide/integracion" },
            { text: "Cero papel", link: "/guide/cero-papel" }
          ]
        }
      ],

      "/enseñanza/": [
        {
          text: "Enseñanza",
          items: [
            { text: "Alumnos", link: "/enseñanza/alumnos" },
            { text: "Grupos", link: "/enseñanza/grupos" },
            { text: "Profesores", link: "/fp/encuestas" },
            { text: "Aulas", link: "/enseñanza/aulas" }
          ]
        }
      ],

      "/fp/": [
        {
          text: "FP",
          items: [
            { text: "Encuestas", link: "/enseñanza/alumnos" },
            { text: "Cuaderno del profesor", link: "/enseñanza/grupos" },
            { text: "Empresas", link: "/enseñanza/profesores" },
            { text: "Inasistencia", link: "/enseñanza/aulas" }
          ]
        }
      ],      
    },

    // socialLinks: [
    //   { icon: "github", link: "https://github.com/tuusuario" }
    // ]
  }
}