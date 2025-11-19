# Informe Final del Proyecto – Portafolio Exequiel

## 1. Revisión del Producto

- **Funcionalidades implementadas con éxito:**
  - Servidor local con **Node.js + Express** para servir el portafolio.
  - **Navbar responsivo con Bootstrap** enlazando a secciones clave (Sobre mí, Formación, Proyectos, Contacto).
  - **Hero inicial** estilo profesional con tu nombre y perfil.
  - Secciones completas:
    - **Sobre mí** con descripción personal y profesional.
    - **Formación** (Curso Fullstack y Curso de Java).
    - **Proyectos** enlazados a repositorios de GitHub.
    - **Contacto** con email, LinkedIn y GitHub.
  - **Scroll suave en JS** para navegación fluida.
  - **README.md** con documentación clara (instalación, dependencias, estructura).

- **Partes que aún podrían mejorarse:**
  - Diseño visual del hero (imagen de fondo más personalizada).
  - Agregar **capturas de pantalla** de proyectos en la sección de proyectos.
  - Implementar **dark mode** opcional.
  - Mejorar validaciones y accesibilidad (ej. etiquetas ARIA).

- **Errores o fallos identificados:**
  - Inicialmente hubo problemas con dependencias (`express`, `proxy-addr`) por instalación incompleta.
  - El servidor se caía con nodemon hasta reinstalar `node_modules`.
  - No hay errores visibles en frontend, pero falta optimización de imágenes.

---

## 2. Depuración y Mejora

- **Correcciones realizadas:**
  - Reinstalación de dependencias (`express`, `nodemon`).
  - Ajuste de sintaxis ES6 en `server.js` (`import` en lugar de `require`).
  - Verificación de rutas y estructura (`views/index.html` correctamente servido).

- **Refactorización:**
  - Separación de archivos en carpetas (`public/css`, `public/js`, `views`).
  - Uso de funciones flecha y `const/let` en JS.
  - Documentación en `README.md` y comentarios en `server.js`.

- **Documentación:**
  - README actualizado con instrucciones de instalación, dependencias y estructura.
  - Comentarios en el código para explicar middleware y rutas.

---

## 3. Feedback y Retroalimentación

- **Feedback recibido:**
  1. **Agregar capturas de proyectos** para hacerlo más visual.  
  2. **Mejorar la sección de formación** con más detalle sobre el curso de Java.  
  3. **Optimizar la experiencia móvil** (navbar y hero más adaptados a pantallas pequeñas).

- **Cambios implementados:**
  - Se amplió la sección de formación con detalles del curso de Java.
  - Se ajustó el hero con tipografía más clara y botón destacado.
  - Se planificó agregar capturas de pantalla y optimizar imágenes.

---

## 4. Ajustes Finales y Cierre

- **Cambios finales:**
  - Código limpio y estructurado en carpetas.
  - README completo con dependencias y pasos de ejecución.
  - Scroll suave en JS para mejorar UX.
  - Navbar fijo y responsivo con Bootstrap.

- **Evidencias:**
  - Repositorio en GitHub: [Portafolio_Exequiel](https://github.com/Exemunoza/Portafolio_Exequiel)  
  - Capturas de pantalla del portafolio (pendiente de agregar).  
  - Servidor local funcionando en `http://localhost:3000`.

---

## 5. Reflexión Personal

Este proyecto me permitió integrar lo aprendido en el curso de **Fullstack Developer** y **Java**, aplicando buenas prácticas de modularidad, documentación y diseño responsivo.  
Me enfrenté a problemas técnicos con dependencias y configuración de servidor, pero logré resolverlos con persistencia y depuración.  
La experiencia reforzó mi capacidad de **liderar proyectos técnicos**, documentar procesos y presentar un producto final profesional.  
