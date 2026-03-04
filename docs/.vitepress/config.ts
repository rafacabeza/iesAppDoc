export default {
  title: "IesApp",
  description: "Proyecto Gestión Centro",
  base: '/iesAppDoc/',

  themeConfig: {
    nav: [
      { text: "Bases", link: "/guide/introduccion" },
      { text: "Enseñanza", link: "/enseñanza/intro" },
      { text: "FP", link: "/fp/intro" },
      { text: "Gestión", link: "/gestion/intro" },
      { text: "Utilidades", link: "/utilidades/intro" }
    ],

    sidebar: {
      "/guide/": [
        {
          text: "Bases",
          items: [
            { text: "Introducción", link: "/guide/introduccion" },
            { text: "Integración", link: "/guide/integracion" },
            { text: "Calidad", link: "/guide/calidad" },
            { text: "Cero papel", link: "/guide/cero-papel" }
          ]
        }
      ],

      "/enseñanza/": [
        {
          text: "Enseñanza",
          items: [
            { text: "Introducción", link: "/enseñanza/intro" },
            { text: "Alumnos", link: "/enseñanza/alumnos" },
            { text: "Grupos", link: "/enseñanza/grupos" },
            { text: "Profesores", link: "/enseñanza/profesores" },
            { text: "Aulas", link: "/enseñanza/aulas" },
            { text: "Ausencias", link: "/enseñanza/ausencias" },
            { text: "Guardias", link: "/enseñanza/guardias" },
            { text: "Notificaciones", link: "/enseñanza/notificaciones" }
          ]
        }
      ],

      "/fp/": [
        {
          text: "FP",
          items: [
            { text: "Introducción", link: "/fp/intro" },
            { text: "Encuestas", link: "/fp/encuestas" },
            { text: "Cuaderno del profesor", link: "/fp/cuaderno" },
            // { text: "Empresas", link: "/fp/empresas" },
            { text: "FCT/FEOE", link: "/fp/fct" },
            { text: "Extra", link: "/fp/extra" }
          ]
        }
      ],

      "/gestion/": [
        {
          text: "Gestión",
          items: [
            { text: "Introducción", link: "/gestion/intro" },
            { text: "Compras", link: "/gestion/compras" },
            { text: "Inventario", link: "/gestion/inventario" },
            { text: "Averías", link: "/gestion/averias" },
            { text: "Facturas", link: "/gestion/facturas" },
            { text: "Tesorería", link: "/gestion/tesoreria" },
            { text: "TPV", link: "/gestion/tpv" },
            { text: "Entradas/salidas", link: "/gestion/entradas-salidas" },
          ]
        }
      ],

      "/utilidades/": [
        {
          text: "Utilidades",
          items: [
            { text: "Introducción", link: "/utilidades/intro" },
            { text: "Carnets", link: "/utilidades/carnets" },
            { text: "Libros de texto", link: "/utilidades/libros" },
            { text: "Importación", link: "/utilidades/importacion" },
          ]
        }
      ],
    },
  }
}