# ProyectoPaginaWeb-04

Página web creada con:
- **HTML:** permite crear la estructura del sitio web mediante etiquetas
- **CSS:** para definir y crear la presentación de del sitio web
- **JavaScript:** añade características que permite establecer acciones interactivas al sitio web
- **Bootstrap:** utilizado para personalizar el sitio web y adaptarlo a la pantalla del dispositivo usado por el usuario
- **Ajax:** permite al  usuario interactuar con el sitio web sin la interrupción que implica volver a cargarlo.

Este sitio web fue creado y desarrollado usando la plataforma NetBeans 10.0. Además está adaptado para ejecutarse en dispositivos móviles.

El archivo index.html es el que contiene la página de inicio, la página principal del sitio web.

El sitio web en su totalidad consta de varias secciones: 
1. **Un encabezado:** donde se muestra el logotipo de la organización y el menú principal
2. **Una sección principal:** el cual de cuatro partes:
   - La primera parte consta de una presentación del negocio a través de imágenes
   - La segunda parte consta del menú de especialidades que ofrece el restaurante a sus clientes
   - La tercera parte  consta de una sección donde el negocio puede incluir y contar una reseña histórica
   - La cuarta parte consta de un formulario donde el usuario puede realizar sus comentarios acerca de visita el restaurante
   - Un pie de página: que muestra la información de contacto del negocio

El menú de especialidades está dividido en seis categorías:
1.  Aperitivos: consta de platos sencillos y que no requieren de mucho tiempo de elaboración
2.  Pizzas: ofrece una lista con los sabores que más demandan o tienen más preferencia entre los clientes 
3.  Pastas: ofrece una lista con los distintos tipos de pasta más populares entre los clientes
4.  Hamburguesas: además de las clásicas hamburguesas, este menú ofrece otras opciones para sus clientes como sándwiches, hot dogs, entre otros.
5.  Bebidas: ofrece una amplia variedad de bebidas para acompañar cualquier plato que solicite el cliente, tales como cervezas, gaseosas, naturales, entre otros
6.  Postres: ofrece una buena variedad para sus clientes, desde copas de helados, de frutas hasta trozos de pastel, flanes y wafles

Para enviar la información del usuario a través del formulario de contacto se utiliza un módulo llamado Nodemailer, el cual, para este ejemplo, utilizará una cuenta de Gmail para recibir los datos enviados desde el formulario. Aunque, en la documentación de Nodemailer se puede encontrar instrucciones para hacerlo con diversos servicios, tales como hotmail.

Nodemailer se instala usando npm y debe ser ejecutado bajo un servidor creado con Nodejs utilizando express para crearlo; así, proporcionamos un conjunto sólido de funciones para aplicaciones web y móviles

Finalmente, se utiliza una librería llamada SweetAlert para mostrar al usuario mensajes personalizados que le van a indicar si los datos fueron enviados correcta o erróneamente

A continuación se presentan algunas imágenes del sitio web brevemente descrito anteriormente: 

