/*
* Autor: Fabio Andres Tobon Quesada
* email: fandres69@gmail.com
* Fecha: Octubre de 2019
* Descripcion: Hoja de estilos pagina modelo OVI conecxion a Mysql con Php.
*
*/


function openNav() {
    document.getElementById("Lateral").style.width = "250px";
    document.getElementById("Contenido").style.marginLeft = "250px";
  }
  
 
  function closeNav() {
    document.getElementById("Lateral").style.width = "0";
    document.getElementById("Contenido").style.marginLeft = "0";
  }