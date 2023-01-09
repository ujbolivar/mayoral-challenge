# Mayoral Frontend Assignment

Para iniciar este proyecto en local, descarge o clone el repositorio a su ordenador y abra una terminal en su carpeta raiz y corra los siguientes comandos:

1. yarn install
2. yarn run dev
3. Abran una venta nueva en el browser y escriban el url http://localhost:3000/

Objetivo:

Maquetar las imágenes adjuntas y tener en cuenta los diferentes cortes en móvil y escritorio. La prueba deberá estar subida en un repositorio de GitHub.


:pencil: Funcionalidad a implementar:

- Separa en componentes de una forma óptima y organizada 	                                  :heavy_check_mark:

:pushpin: Implemente todos los componentes que crei necesarios para este challenge.

:pushpin: Mantener los componentes secos limmitando la logica interna en lo posible.

- La vista debe asemejarse lo más parecido posible a las fotos adjuntas 	                  :heavy_check_mark:

:pushpin: Esmero y gran atención al detalle para que mi presentación sea igual a la de los mockups

- Implementar búsqueda de productos por nombre                          	                  :heavy_check_mark:

:pushpin: Logica de busqueda esta elaborada aparte del componente siempre pensando en mantener la complejidad baja a la hora de hacer tests.

- Consumir un JSON con los datos de productos (JSON local o externo) 	                      :heavy_check_mark:

:pushpin: Hace una llamada a la fakestore API y jugamos con el JSON de productos que nos devuelve.

- Cambiar la vista con los iconos indicados en la foto: 
  - Escritorio de 4 a 3 elementos 	                                                        :heavy_check_mark:
  - Móvil de 3 a 2 elementos 	                                                              :heavy_check_mark:

:pushpin: Responsive en todo momento

- Implementar lógica y diseño de un componente “ordenar” (precio ascendente y descendente) :x:
  
:pushpin: Implemente una logica de orden pero de momento ordena por nombre. Esto ha sido un error mio al no fijarme bien que justo ahi arriba dice PRECIO.

:pushpin:  Logica de orden esta elaborada aparte del componente siempre pensando en mantener la complejidad baja a la hora de hacer tests.

- Crea los test unitarios que creas conveniente 	                                          :heavy_check_mark:

:pushpin: Creé tests unitarios para probar las funciones de busqueda y ordenar, asegurar que los botones de la tarjeta de producto se rendericen y que generen los mensajes correctos para cada boton, y para comprobar que la opcion de 'mas colores' solo se renderice cuando sea necesario.
