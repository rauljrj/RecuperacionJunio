var encontrado = false;
carga = 1;

function buscarPilotos(piloto){
    var div = document.createElement("div");
    var error = document.createTextNode("ERROR: no se ha encontrado el piloto");   
    $.ajax({
        url:"https://ergast.com/api/f1/drivers/" + $("#introducirPiloto").val(),
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



function mostrarDetalle(id) {
     $.ajax({
        url:"https://ergast.com/api/f1/drivers/" + id,
        success: function(respuesta){
                encontrado = true;
                console.log(respuesta);
                $("#piloto").hide();
                $("#detalle").show();
                $("#detalle").append('<div style=text-align:center>' + '<table border= "1px solid black;" style="margin: 0 auto;">' + '<tr><th>Nombre </th>' + '<th>Apellido </th>' + '<th>Nacimiento </th>' + '<th>Nacionalidad </th></tr>' + '<tr><td>' + respuesta.getElementsByTagName("GivenName")[0].innerHTML+ '</td>' + '<td>' + respuesta.getElementsByTagName("FamilyName")[0].innerHTML + '</td><td>'  + respuesta.getElementsByTagName("DateOfBirth")[0].innerHTML + '</td><td>' + respuesta.getElementsByTagName("Nationality")[0].innerHTML + '</td></tr>' + '<tr><td rowspan=3><a href="index.html">volver</a></td></tr>' + '</table></div>' );
            
        }
        });
}

function encontrarPiloto(piloto){
    if (encontrado === true) {
        $("#piloto").show();
        $("#detalle").hide();
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
            '    <p class="btn btn-primary col-6 offset-3" style="color: white" onclick="mostrarDetalle(\'' + pilotos[i].childNodes[3].innerHTML + '\')">Ver detalle</p>\n' +
            '  </div>\n' +
            '</div>');
    }


$(window).scroll(function () {
    var peticionScroll = true
        if ($(document).height() - $(window).height() <= ($(window).scrollTop() + 80) && peticionScroll === true && $("#introducirPiloto").val() != '') {
            carga++;
            peticionScroll = false;
            $.ajax({
                url: "https://ergast.com/api/f1/drivers/" + $("#introducirPiloto").val() + carga,
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
