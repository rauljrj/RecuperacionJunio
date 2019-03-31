//Ejercicio 3
function ejercicio3(){
    var mensaje = "<h4>Ejercicio 3</h4>" + "Hola mundo!" + "<br>" + "que fácil es incluir 'comillas simples'" + "<br>" + 'y "comillas dobles"' + "<br>";
    document.write(mensaje);
    
}
ejercicio3();

//Ejercicio 4
function ejercicio4(){
var a = 1;
var b = 2;
var c = "<h4>Ejercicio 4</h4>" + "la suma es: " + (a + b);
document.write(c);
}
ejercicio4();

//Ejercicio 5 
function ejercicio5(){
    var a = prompt("introduce un numero:");
    var b = prompt("introduce otro numero:");
    var c = parseInt(a) + parseInt(b);
    document.write("<h4>Ejercicio 5</h4>" + "La suma de los dos numeros es: " + c);
    
}
ejercicio5();