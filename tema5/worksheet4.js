google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(graficoPolitico);
var grafico;
var tabla;

function graficoPolitico() {
    var datos = new google.visualization.DataTable();
    datos.addColumn("string", "partido");
    datos.addColumn("number", "nº votos");
    datos.addRows([
        ['PP', 7906185],
        ['PSOE', 5424709],
        ['UNIDOS PODEMOS', 5049734],
        ['CIUDADANOS', 3123769]
    ]);
    tabla = {"title": "Elecciones 2016",
                 "width": 700,
                 "height": 400,
                 is3D: true,
                 animation:{
                 duration: 10000,
                 easing: 'out',
                 barColors: ['#e0440e', '#00FFFF', '#000000', '#A52A2A'],
                 },
                };
    grafico = new google.visualization.BarChart(document.getElementById("grafico"));
    grafico.draw(datos, tabla);
    setTimeout(mifunction, 10000);
}
function mifunction() {
    var datos = new google.visualization.DataTable();
    datos.addColumn("string", "partido");
    datos.addColumn("number", "nº votos");
    datos.addRows([
        ['PP', 6666666],
        ['PSOE', 7424709],
        ['UNIDOS PODEMOS', 4049734],
        ['CIUDADANOS', 5123769]
    ]);
    grafico.draw(datos, tabla);
    
    
}
google.charts.load('current', {'packages':['geochart'], 'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'});
google.charts.setOnLoadCallback(graficoMundial);

function graficoMundial() {
    var paises = new google.visualization.arrayToDataTable([
        ["pais", "visitas"],
        ["France", 83000000],
        ["United States", 77654340],
        ["Spain", 73987654]
        ]);
    var mapa = {"width": 900,
                "height": 600,
               };
    var dibujo = new google.visualization.GeoChart(document.getElementById('graficoMundial'));
    dibujo.draw(paises, mapa);
      }