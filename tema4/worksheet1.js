/*WORKSHEET 1 */


//exercise 1
//window.addEventListener("click", evento);


function evento() {
    alert("has pulsado");
}
//exercise 2
//window.addEventListener("mousemove", coordenadas);

function coordenadas(event){
    var x = event.clientX;
    var y = event.clientY;
    var coords = "eje x: " + x + " " + "eje y: " + y;
    document.getElementById("parrafo").innerHTML = coords;
    
}

//exercise 4
window.addEventListener("load", tabla)

function tabla(){
    var body =  document.getElementsByTagName("body");
    var table = document.createElement("table");
    for(var i=0; i<=40; i++){
        var tr = document.createElement("tr");
        for(var j=0; j<=40; j++){
            var td = document.createElement("td");
            td.setAttribute("width", 10);
            td.setAttribute("height", 10);
            tr.appendChild(td);
            td.onmousemove = function(event) {
                if( event.ctrlKey){
                    event.target.style.backgroundColor = "red";
                }
                if(event.shiftKey){
                    event.target.style.backgroundColor = "blue";
                }
                if(event.altKey){
                    event.target.style.backgroundColor = "white";
                }
            }
            
            
        }
        table.appendChild(tr);
        
    }
    document.body.appendChild(table);
    table.setAttribute("border", "2");
    
}
