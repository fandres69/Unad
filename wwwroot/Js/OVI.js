/*
* Autor: Fabio Andres Tobón Quesada
* email: fandres69@gmail.com
* Fecha: Octubre de 2019
* Descripción: Hoja de estilos pagina modelo OVI conexión a Mysql con Php.
*
*/


function openNav() {
    document.getElementById("Lateral").style.width = "250px";
    document.getElementById("Contenido").style.marginLeft = "250px";
    document.getElementById('btnabrir').style.display="none";
    document.getElementById('btncerrar').style.display="block";
  }
  
 
  function closeNav() {
    document.getElementById("Lateral").style.width = "0";
    document.getElementById("Contenido").style.marginLeft = "0";
    document.getElementById('btncerrar').style.display="none";
    document.getElementById('btnabrir').style.display="block";
  }

  