function ejercicio1(){
    var div = document.getElementById("div");
    var boton = document.getElementById("boton");
    var contador = 1;
    
    boton.onclick= function(){
        div.innerHTML= contador;
        contador+=1;
    }
}
ejercicio1();