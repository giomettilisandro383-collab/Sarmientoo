/* =========================================================
   Trabajo Práctico: Efemérides escolares y Próceres argentinos
   Prócer elegido: Domingo Faustino Sarmiento
   Hoja de estilos externa (CSS)
   ========================================================= */

/* --- Tokens de diseño: paleta inspirada en el paisaje cuyano
   (adobe, siesta andina, algarrobo) y en la tinta de "El Zonda" --- */
:root {
  --color-fondo: #f1e6cd;        /* papel/arena de San Juan */
  --color-fondo-alt: #e8d8b4;    /* arena más oscura para franjas */
  --color-indigo: #1b2a4a;       /* cielo nocturno andino / azul patrio */
  --color-indigo-suave: #24365c;
  --color-terracota: #b5651d;    /* adobe / ladrillo cuyano */
  --color-terracota-suave: #d98a3d;
  --color-oliva: #6e7b4f;        /* algarrobo */
  --color-tinta: #2b2118;        /* texto principal, tinta de imprenta */
  --color-tinta-suave: #5a4c3c;
  --color-blanco-hueso: #faf5e8;

  --fuente-display: "Fraunces", "Georgia", serif;
  --fuente-cuerpo: "Source Serif 4", "Georgia", serif;
  --fuente-utilitaria: "JetBrains Mono", monospace;

  --radio-borde: 4px;
  --sombra-suave: 0 6px 18px rgba(27, 42, 74, 0.15);
}

/* --- Reset y base --- */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background-color: var(--color-fondo);
  color: var(--color-tinta);
  font-family: var(--fuente-cuerpo);
  line-height: 1.65;
}

h1, h2, h3, h4 {
  font-family: var(--fuente-display);
  color: var(--color-indigo);
  font-weight: 700;
  letter-spacing: 0.2px;
}

h1 { font-size: 2.6rem; }
h2 { font-size: 1.9rem; margin-top: 2.5rem; }
h3 { font-size: 1.35rem; color: var(--color-terracota); }

a { color: var(--color-terracota); }
a:hover { color: var(--color-terracota-suave); }

.eyebrow {
  font-family: var(--fuente-utilitaria);
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 0.75rem;
  color: var(--color-oliva);
}

/* --- Header con imagen de fondo (requisito CSS) --- */
.site-header {
  position: relative;
  background-image:
    linear-gradient(180deg, rgba(27,42,74,0.78) 0%, rgba(27,42,74,0.55) 55%, rgba(27,42,74,0.85) 100%),
    url("https://commons.wikimedia.org/wiki/Special:FilePath/Domingo%20Sarmiento%20abre%20el%20periodo%20ordinario%20de%20sesiones%20en%20el%20Congreso%20(1872).JPG");
  background-size: cover;
  background-position: center 20%;
  color: var(--color-blanco-hueso);
  padding: 4.5rem 1.5rem 3.5rem;
  text-align: center;
  border-bottom: 6px solid var(--color-terracota);
}

.site-header h1 {
  color: var(--color-blanco-hueso);
  margin-bottom: 0.4rem;
}

.site-header p.subtitulo {
  font-family: var(--fuente-utilitaria);
  font-size: 1rem;
  letter-spacing: 1px;
  color: var(--color-fondo);
}

/* --- Nav (requisito: fondo de color + min. 3 links) --- */
.navbar-cuyo {
  background-color: var(--color-indigo) !important;
  border-bottom: 2px solid var(--color-terracota);
}

.navbar-cuyo .navbar-brand,
.navbar-cuyo .nav-link {
  color: var(--color-blanco-hueso) !important;
  font-family: var(--fuente-utilitaria);
  letter-spacing: 0.5px;
}

.navbar-cuyo .nav-link.active {
  color: var(--color-terracota-suave) !important;
  font-weight: 700;
}

.navbar-cuyo .nav-link:hover {
  color: var(--color-terracota-suave) !important;
}

/* --- Contenedor general --- */
main {
  max-width: 980px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem 1rem;
}

section {
  margin-bottom: 3rem;
}

.franja {
  background-color: var(--color-fondo-alt);
  border-left: 5px solid var(--color-oliva);
  padding: 1.5rem 1.8rem;
  border-radius: var(--radio-borde);
}

/* --- Línea histórica / timeline (elemento distintivo del sitio) --- */
.linea-historica {
  position: relative;
  padding-left: 2.2rem;
  margin-top: 2rem;
  border-left: 3px dashed var(--color-terracota);
}

.hito {
  position: relative;
  margin-bottom: 1.9rem;
}

.hito::before {
  content: "";
  position: absolute;
  left: -2.55rem;
  top: 0.15rem;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: var(--color-terracota);
  border: 3px solid var(--color-blanco-hueso);
  box-shadow: 0 0 0 2px var(--color-terracota);
}

.hito .anio {
  font-family: var(--fuente-utilitaria);
  color: var(--color-indigo);
  font-weight: 700;
  font-size: 0.95rem;
}

/* --- Tarjetas (Bootstrap Cards personalizadas) --- */
.card-cuyo {
  border: none;
  border-radius: var(--radio-borde);
  box-shadow: var(--sombra-suave);
  background-color: var(--color-blanco-hueso);
  height: 100%;
}

.card-cuyo .card-title {
  font-family: var(--fuente-display);
  color: var(--color-indigo);
}

.card-cuyo .card-footer {
  background-color: transparent;
  border-top: 1px solid var(--color-fondo-alt);
}

/* --- Botones --- */
.btn-terracota {
  background-color: var(--color-terracota);
  border-color: var(--color-terracota);
  color: var(--color-blanco-hueso);
  font-family: var(--fuente-utilitaria);
  letter-spacing: 0.5px;
}

.btn-terracota:hover {
  background-color: var(--color-terracota-suave);
  border-color: var(--color-terracota-suave);
  color: var(--color-blanco-hueso);
}

.btn-volver {
  position: fixed;
  right: 1.2rem;
  bottom: 1.2rem;
  z-index: 999;
  background-color: var(--color-indigo);
  color: var(--color-blanco-hueso);
  border: 2px solid var(--color-terracota);
  border-radius: 50px;
  padding: 0.55rem 1.1rem;
  font-family: var(--fuente-utilitaria);
  font-size: 0.85rem;
  text-decoration: none;
  box-shadow: var(--sombra-suave);
}

.btn-volver:hover {
  background-color: var(--color-terracota);
  color: var(--color-blanco-hueso);
}

/* --- Tablas --- */
.tabla-cuyo thead {
  background-color: var(--color-indigo);
  color: var(--color-blanco-hueso);
  font-family: var(--fuente-utilitaria);
}

.tabla-cuyo td, .tabla-cuyo th {
  vertical-align: middle;
}

/* --- Figuras / imágenes con crédito --- */
figure.imagen-fuente {
  margin: 0 0 1.5rem;
}

figure.imagen-fuente img {
  width: 100%;
  border-radius: var(--radio-borde);
  border: 1px solid var(--color-fondo-alt);
}

figcaption {
  font-size: 0.8rem;
  color: var(--color-tinta-suave);
  margin-top: 0.35rem;
}

figcaption a {
  color: var(--color-tinta-suave);
  text-decoration: underline;
}

/* --- Blockquote de frases célebres --- */
blockquote.frase {
  font-family: var(--fuente-display);
  font-style: italic;
  font-size: 1.15rem;
  color: var(--color-indigo);
  border-left: 4px solid var(--color-oliva);
  padding-left: 1.2rem;
  margin: 1.5rem 0;
}

/* --- Footer (requisito: fondo de color) --- */
footer.site-footer {
  background-color: var(--color-indigo);
  color: var(--color-fondo);
  padding: 2.2rem 1.5rem;
  margin-top: 3rem;
  text-align: center;
  font-size: 0.9rem;
}

footer.site-footer a {
  color: var(--color-terracota-suave);
}

footer.site-footer .fuentes {
  max-width: 760px;
  margin: 0.8rem auto 0;
  font-size: 0.78rem;
  color: #c9d1e0;
  line-height: 1.6;
}

/* --- Accesibilidad y detalle responsive --- */
@media (max-width: 576px) {
  .site-header { padding: 3rem 1rem 2.5rem; }
  h1 { font-size: 2rem; }
}

:focus-visible {
  outline: 3px solid var(--color-terracota);
  outline-offset: 2px;
}
