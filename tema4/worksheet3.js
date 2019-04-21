/*WORKSHEET 3
*/

window.addEventListener("load", formulario);

function formulario(){
    var nombre = document.getElementById("nombre");
    var apellidos = document.getElementById("apellidos");
    var dni = document.getElementById("dni");
    var telefono = document.getElementById("telefono");
    var email = document.getElementById("email");
    var exN = new RegExp("[a-zA-Z]{8,20}");
    var exA = new RegExp("[a-zA-Z]{8,20}");
    var exD = new RegExp("[0-9]{8}-[A-Z]{1}");
    var exT = new RegExp("[6-9]{1}[0-9]{8}");
    var exE = new RegExp("[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,5})");
    nombre.onkeyup = function(event) {
        if(exN.test(event.target.value)){
            event.target.style.backgroundColor="green";
        }
        else if(event.target.value==""){
            event.target.style.backgroundColor="white"
        }
        else{
            event.target.style.backgroundColor="red";
        }
    }
    apellidos.onkeyup = function(event) {
        if(exA.test(event.target.value)){
            event.target.style.backgroundColor="green";
        }
        else if(event.target.value==""){
            event.target.style.backgroundColor="white"
        }
        else{
            event.target.style.backgroundColor="red";
        }
    }
    dni.onkeyup = function(event) {
        if(exD.test(event.target.value)){
            event.target.style.backgroundColor="green";
        }
        else if(event.target.value==""){
            event.target.style.backgroundColor="white"
        }
        else{
            event.target.style.backgroundColor="red";
        }
    }
    telefono.onkeyup = function(event) {
        if(exT.test(event.target.value)){
            event.target.style.backgroundColor="green";
        }
        else if(event.target.value==""){
            event.target.style.backgroundColor="white"
        }
        else{
            event.target.style.backgroundColor="red";
        }
    }
    email.onkeyup = function(event) {
        if(exE.test(event.target.value)){
            event.target.style.backgroundColor="green";
        }
        else if(event.target.value==""){
            event.target.style.backgroundColor="white"
        }
        else{
            event.target.style.backgroundColor="red";
        }
    }
    
}
