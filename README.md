# web-coningenio
Este proyecto es un prototipo de sitio web para una empresa de desarrollo y consultoría de software. El objetivo fue construir una experiencia moderna, responsiva y dinámica, consumiendo datos desde una API externa protegida por autenticación.

<h2>🔗 Vista previa</h2>
<p>
  <a href="https://mdazaciisa.github.io/web-coningenio/" target="_blank">
    <img src="https://img.shields.io/badge/Ver%20sitio%20web-%F0%9F%94%8D-blue?style=for-the-badge" alt="Ver sitio web">
  </a>
</p>


## Mockup
Este proyecto se basó inicialmente en un mockup o prototipo visual, que sirvió como guía para estructurar el sitio web.

<img src="https://raw.githubusercontent.com/mdazaciisa/web-coningenio/main/prototipo.png" alt="Prototipo de página web" style="width: 100%; max-width: 100%; height: auto;" />

El diseño final mejora la estética del prototipo, incorporando modo oscuro, responsividad y contenido dinámico desde una API externa.

## Características
- **Diseño responsivo y moderno**, compatible con distintos dispositivos móviles y de escritorio.
- **Modo día/noche** con cambio dinámico de logo.
- **Consumo de datos desde API externa** mediante proxy CORS.
- Navegación adaptable con menú hamburguesa funcional.
- Contenido de "Nuestros servicios" y "Nosotros" cargado automáticamente.

## Evaluación de UX
Este proyecto se desarrolló utilizando un enfoque centrado en el usuario, partiendo de un prototipo visual.
La interfaz y estructura se ajustaron según principios de usabilidad y diseño accesible.

## Formulario de contacto
El formulario incluye:
- Nombre completo (campo obligatorio)
- Selección de servicio desde los datos dinámicos de la API
- Mensaje personalizado
- Validación de todos los campos antes de enviar
- Registro de envíos exitosos en la consola del navegador

## Tecnologías usadas
- HTML5
- CSS3
- Javascript
- APIs externas (con Authorization Bearer y CORS proxy)

## APIs externas utilizadas
- **Servicios**: https://ciisa.coningenio.cl/v1/services/
- **Nosotros**: https://ciisa.coningenio.cl/v1/about-us/
- **Proxy CORS**: https://cors-anywhere.herokuapp.com/

¡Gracias por visitar este repositorio!