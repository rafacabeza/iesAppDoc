export default {
  title: "IesApp",
  description: "Proyecto Gestión Centro",
  base: '/iesAppDoc/',

  themeConfig: {
    nav: [
      { text: "Guía", link: "/guide/introduccion" },
    //   { text: "Backend", link: "/backend/laravel" },
    //   { text: "Frontend", link: "/frontend/vue" },
    //   { text: "Docker", link: "/docker/entorno" }
    ],

    sidebar: {
      "/guide/": [
        {
          text: "Guía",
          items: [
            { text: "Introducción", link: "/guide/introduccion" },
            { text: "Instalación", link: "/guide/instalacion" },
            { text: "Arquitectura", link: "/guide/arquitectura" },
            { text: "Despliegue", link: "/guide/despliegue" }
          ]
        }
      ],

      "/backend/": [
        {
          text: "Backend",
          items: [
            { text: "Laravel", link: "/backend/laravel" },
            { text: "API", link: "/backend/api" },
            { text: "Base de datos", link: "/backend/base-de-datos" }
          ]
        }
      ],
    },

    // socialLinks: [
    //   { icon: "github", link: "https://github.com/tuusuario" }
    // ]
  }
}