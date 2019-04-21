var normal=document.getElementById("enlaceNormal");
var minimalista = document.getElementById("enlaceMinimalista");
var container = document.getElementById("container");

minimalista.addEventListener("click", function(){
   container.style.backgroundColor="orange";
});
normal.addEventListener("click", function(){
    container.style.background=null;
})