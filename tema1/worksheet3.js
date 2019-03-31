//ejercicio 4

document.write("<h1>ejercicio 4</h1>");
function calcCircunference(radio){
var perimetro = 2*Math.PI*radio;
document.write("el diametro es: " + perimetro + "<br>");
}

function calcArea(radio){
var area = (radio**2)*Math.PI
document.write("el area es:" + area + "<br>");
}

calcCircunference(4);
calcArea(4);