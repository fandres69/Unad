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

  
  function S_introduccion(){
    window.location.href="Introduccion.html";
  }
  
  function S_InstalandoXAMP(){
    window.location.href="InstalandoXAMP.html";
  }


  function Clicktarget(x){
  $(x).click();  
  }

  //Función que retorna la pagina a la parte superior tras hacer click en los botones de paginación
$(document).ready(function () {

  $('.page-link').click(function () {
    $('body,html').animate({
      scrollTop: '0px'
    },300);
   
  });
});

function verimg(params,contenedor) {
var rta=params.id;
var im=document.createElement("img");
$(contenedor).empty();
im.id="vimm";
im.src=rta;
im.style.height="650px";
im.style.width="750px";

contenedor.appendChild(im);
$("#vmodal").click();
}

var R1="p1b";
var R2="p2a";
var R3="p3d";


function SelectorRespuestas(respuesta,generador,ck2,ck3,ck4) {
   if(generador.checked===true){
     ck2.checked=false;
     ck3.checked=false;
     ck4.checked=false;
   }
$(respuesta).val(generador.id);

}

function verp1(res) {
  var mres=$(res).val();
  if(mres===R1){
    alert('Buen trabajo, has escogido la respuesta correcta')
  }else{
    alert('has fallado, intentalo de nuevo')
  }  
}

function verp2(res) {
  var mres=$(res).val();
  if(mres===R2){
    alert('Buen trabajo, has escogido la respuesta correcta')
  }else{
    alert('has fallado, intentalo de nuevo')
  }  
}
function verp3(res) {
  var mres=$(res).val();
  if(mres===R3){
    alert('Buen trabajo, has escogido la respuesta correcta')
  }else{
    alert('has fallado, intentalo de nuevo')
  }  
}