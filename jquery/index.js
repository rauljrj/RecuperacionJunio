var encontrado = false;
carga = 1;

function buscarPilotos(piloto){
    var div = document.createElement("div");
    var error = document.createTextNode("ERROR: no se ha encontrado el piloto");   
    $.ajax({
        url:"http://ergast.com/api/f1/drivers/" + $("#introducirPiloto").val(),
        success: function(respuesta){
                encontrado = true;
                encontrarPiloto(respuesta);
                console.log(respuesta);
            
        },
        error: function(){
            div.appendChild(error);
            document.body.appendChild(div);
            console.log("no se ha obtenido el piloto");
        }
        });
}



function mostrarDetalle() {
var pilotos = piloto.getElementsByTagName("Driver");
  for (var i = 0; i < pilotos.length; i++) {  
 $("#piloto").append('<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">' +
  '<div class="modal-dialog modal-dialog-centered" role="document">' +
    '<div class="modal-content">' +
      '<div class="modal-header">' +
        '<h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>' +
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
          '<span aria-hidden="true">&times;</span>' +
        '</button>' +
      '</div>' +
      '<div class="modal-body">Nombre: '+ pilotos[i].childNodes[1].innerHTML + '<br>' + 'Apellido: ' +  pilotos[i].childNodes[3].innerHTML + '<br>' + 'Nacimiento: ' + pilotos[i].childNodes[5].innerHTML + '<br>' + 'Nacionalidad: ' + pilotos[i].childNodes[7].innerHTML +
      '<div class="modal-footer">' +
        '<button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>' +
        '<button type="button" class="btn btn-primary">De acuerdo</button>' +
      '</div>'+
    '</div>' +
  '</div>' +
'</div>')
  }
}

function encontrarPiloto(piloto){
    if (encontrado === true) {
        $("#piloto").append('<p><a style="text-align: center">Resultados para:<p> <h4 style="display:inline-block;">' + $("#introducirPiloto").val() + '</h4></a></p><hr>');
    }
    encontrado = false;
    var pilotos = piloto.getElementsByTagName("Driver");
    console.log(pilotos);
    for (var i = 0; i < pilotos.length; i++) {
        $("#piloto").append('<div class="card col-lg-3 col-md-4 col-sm-6 col-xs-12 col-12" style="height: 200px; display: inline-flex;">\n' +
            '   <div class="card-body" style="background-color: yellow">\n' +
            '    <a class="card-nombre" href="#" onclick="mostrarDetalle(\'' + pilotos[i].childNodes[3].innerHTML + '\')">' + pilotos[i].childNodes[1].innerHTML + '<br>' + pilotos[i].childNodes[3].innerHTML + ' </a>\n' +
            '    <p class="card-text">' + '</p>\n' +
            '    <p class="btn btn-primary col-6 offset-3" style="color: white" onclick="mostrarDetalle(\'' + pilotos[i].childNodes[1].innerHTML + '\')">Ver detalle</p>\n' +
            '  </div>\n' +
            '</div>');
    }


$(window).scroll(function () {
    var peticionScroll = true
        if ($(document).height() - $(window).height() <= ($(window).scrollTop() + 80) && peticionScroll === true && $("#introducirPiloto").val() != '') {
            carga++;
            peticionScroll = false;
            $.ajax({
                url: "http://ergast.com/api/f1/drivers/" + $("#introducirPiloto").val() + carga,
                success: function (nueva) {
                    encontrarPiloto(nueva);
                    peticionScroll = true;
                }
            });
        }
    });
}

$(document).ready(function(){
    buscarPilotos();
})