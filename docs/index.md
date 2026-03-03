---
layout: home

hero:
  name: "IesApp"
  text: "Sistema integral de Gestión Centro"
  tagline: El eje sobre el que gira el IES Santiago Hernández y la base para un centro digital con ambición real de Papel Cero.
  actions:
    - theme: brand
      text: Comenzar
      link: /guide/
---

<style>
/* Centrar completamente el hero */
.VPHomeHero .container {
  justify-content: center !important;
}

/* Convertir main en bloque centrado real */
.VPHomeHero .main {
  display: flex;
  flex-direction: column;
  align-items: center;   /* 👈 clave */
  text-align: center;
  max-width: 820px;
  margin: 0 auto;
}

/* Asegurar que todos los textos usen el mismo ancho */
.VPHomeHero .name,
.VPHomeHero .text,
.VPHomeHero .tagline {
  max-width: 100%;
}

/* Centrar botones */
.VPHomeHero .actions {
  justify-content: center;
}
</style>