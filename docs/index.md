---
layout: home

hero:
  name: "IesApp"
  text: "Sistema Integral de Gestión Eficiente de Centro"
  tagline: El eje sobre el que gira el IES Santiago Hernández y la base para un centro digital, de calidad y con ambición de Papel Cero.
  # actions:
  #   - theme: brand
  #     text: Comenzar
  #     link: /guide/introduccion
features:
  - icon: 🚀
    title: Gestión Eficiente
    details: Optimiza todos los procesos administrativos del centro desde una única plataforma.
    link: /guide/introduccion
  - icon: 📄
    title: Papel Cero
    details: Digitalización completa de documentos y trámites para un centro sostenible.
    link: /guide/cero-papel
  - icon: 🛠️
    title: Herramientas Integradas
    details: Todo lo que el profesorado y alumnado necesita en un solo lugar.
    link: /guide/integracion
  - icon: 💎
    title: Gestión de Calidad Ágilr
    details: Todo para cumplir estándares de calidad sin esfuerzo.
    link: /guide/calidad

---





<div class="footer-columns">
  <div class="column">
    <h3><a href="/enseñanza/intro">Enseñanza</a></h3>
    <ul>
      <li><a href="/enseñanza/alumnos">Alumnos</a></li>
      <li><a href="/enseñanza/grupos">Grupos</a></li>
      <li><a href="/enseñanza/profesores">Profesores</a></li>
      <li><a href="/enseñanza/aulas">Aulas</a></li>
      <li><a href="/enseñanza/ausencias">Ausencias</a></li>
      <li><a href="/enseñanza/guardias">Guardias</a></li>
      <li><a href="/enseñanza/notificaciones">Notificaciones</a></li>
      <li><a href="/enseñanza/disciplina">Disciplina</a></li>
      <li><a href="/enseñanza/calendario">Calendario</a></li>
      <li><a href="/enseñanza/tareas">Tareas</a></li>
    </ul>
  </div>
  <div class="column">
    <h3><a href="/fp/intro">FP</a></h3>
    <ul>
      <li><a href="/fp/encuestas">Encuestas</a></li>
      <li><a href="/fp/cuaderno">Cuaderno del profesor</a></li>
      <li><a href="/fp/fct">FCT/FEOE</a></li>
      <li><a href="/fp/extra">Procedimientos</a></li>
    </ul>
  </div>
  <div class="column">
    <h3><a href="/gestion/intro">Gestión</a></h3>
    <ul>
      <li><a href="/gestion/compras">Compras</a></li>
      <li><a href="/gestion/facturas">Facturas</a></li>
      <li><a href="/gestion/tesoreria">Tesorería</a></li>
      <li><a href="/gestion/inventario">Inventario</a></li>
      <li><a href="/gestion/averias">Averías</a></li>
      <li><a href="/gestion/tpv">TPV</a></li>
      <li><a href="/gestion/entradas-salidas">Entradas/salidas</a></li>
      <li><a href="/gestion/proyectos">Proyectos</a></li>
    </ul>
  </div>
  <div class="column">
    <h3><a href="/utilidades/intro">Utilidades</a></h3>
    <ul>
      <li><a href="/utilidades/carnets">Carnets</a></li>
      <li><a href="/utilidades/libros">Libros de texto</a></li>
      <li><a href="/utilidades/importacion">Importación</a></li>
      <li><a href="/utilidades/avisos">Avisos</a></li>
      <li><a href="/utilidades/vehiculos">Vehículos</a></li>
      <li><a href="/utilidades/biblioteca">Biblioteca</a></li>
    </ul>
  </div>
</div>





<style scoped>
.footer-columns {
  display: flex;
  justify-content: center;
  gap: 4rem;
  padding: 3rem 1.5rem;
  border-top: 1px solid var(--vp-c-divider);
  margin-top: 2rem;
}
.column h3 {
  font-weight: bold;
  margin-bottom: 0.5rem;
  font-size: 0.9rem; 
}
.column ul {
  list-style: none;
  padding: 0;
}
.column li {
  margin-bottom: 0.0rem;
  font-size: 0.85rem; 
}
.column a {
  color: var(--vp-c-text-2);
  transition: color 0.25s;
}
.column a:hover {
  color: var(--vp-c-brand);
}
</style>












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

/* Centrar el contenido de las tarjetas de Features */
.VPFeatures {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Centrar el contenedor del icono */
.VPFeatures .icon {
  margin: 0 auto 1.5rem; /* Centra el icono y da espacio abajo */
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
}

</style>


