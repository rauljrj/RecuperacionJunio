//Ejercicio 1

function ejercicio1(cad){
    var numeroMayus = 0;
    var numeroMinus = 0;
    for(var i = 0; i< cad.length; i++){
            if(cad[i] == cad.toUpperCase(i)){
                numeroMayus+=1;
            }
            else {
                numeroMinus+=1;
            }
        }
    document.write("El número de mayúsculas que contiene " + cad + " es de: " + numeroMayus + " y el número de minúsculas es de: " + numeroMinus);
}
ejercicio1("adios");


function ejercicio2(cad, char){
    contador = 0;
    for(var i=0; i<cad.length;i++){
        if(cad[i] == char){
            contador+=1;
        }
        
    }
    console.log("numero de veces que se repite el caracter " + char + " es igual a = " + contador);
}
ejercicio2("hhhhhhhhhhhh", "h");


function ejercicio3(cad){
    var palabraReves = cad.split("").reverse().join("");
    if(cad == palabraReves){
        console.log("Es palindromo");
    }
    else{
        console.log("no es palindromo");
    }
}
ejercicio3("halah");

function ejercicio4(x, s){
    for(var i=0;i<x.length;i++){
        if(x[i] == s){
            x[i].toUpperCase();
        }
    }
    console.log(x);
}

ejercicio4("holah", "h");