# Fullstack Test

Full Stack test for TuParroquia developer position.


Welcome! This test covers frontend and backend web development.

You should answer the questions on the following link [questions](https://goo.gl/forms/ui9ukPcILAJNaN1A3) and then create a fork of this repo on github. You can answer the questions after finishing the test code.

Good luck!


## Challenge

The challenge is to build a very simple blog with this specifications:

* The blog should have a header and three posts.
* The html should be rendered on the browser, you can use javascript or a framework. For example [react.js](https://facebook.github.io/react/) or [angular.js](https://angularjs.org/), you shouldn't use jquery.
* An api rest for getting the data of the posts.
* For the backend you can use any language/framework that you like. We are currently using nodejs.


**Optional:**

* Use a build system for the frontend, for example [gulp](http://gulpjs.com/) or [grunt](http://gruntjs.com/).
* Deploy the app, you can use something like [heroku](https://www.heroku.com/) or [AWS](https://aws.amazon.com/es/).


**Proceso y selección de acciones**

* He desarrollo un ejemplo / esqueleto de API CORS viendo un modelo MVC. EL modelo esta creado a nivel CORS para que pueda ser usado por otras vistas (escalabilidad), asi es más
* fácil ir desarrollando más aplicaciones y funciones e insertarlas en el mismo CORS para aumentar la funcionalidad. Dentro del CORS esta la parte del controlador,
* que conecta entre la vista y la persistencia. Gracias a esto se podría aislar cada controlador pero usar los mismos servicios y persistencia que varias aplicaciones.
*
* Para la parte de la vista he usado bootstrap 3 y angularjs para bindear los datos que se reciban del CORS. El servicio que usa es el RESTFUL y te cada llamada 
* al CORS te devuelve un json con todos los datos.
*

**Comentarios**

* Espero que este modelo os guste de desarrollo, aunque es un simple esqueleto. La máxima implementación de esta metodología puede aportar gran escalabilidad y concordancia en el código.
* Con la creación de un API CORS además se tendría seguridad en que controladores pueden ser usados algunos métodos para diferentes clientes.
*


