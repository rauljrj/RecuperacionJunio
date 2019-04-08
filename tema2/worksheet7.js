
var marker;

function success(pos) {
    var latitude = pos.coords.latitude;
    var longitude = pos.coords.longitude;
     var position = {lat: latitude, lng: longitude};
    console.log(latitude, longitude);
    var map = new google.maps.Map(document.getElementById("map"), {zoom: 15, center: position});
    var geocoder = new google.maps.Geocoder;
    var infowindow = new google.maps.InfoWindow;
    geocoder.geocode({"location": position}, function(status, results){
        if(results == "OK"){
            if(status[0]){
                marker = new google.maps.Marker({
                    map: map,
                    draggable: true,
                    animation: google.maps.Animation.DROP,
                    position: {lat: latitude, lng: longitude},
                    title: "aqui estas crack"
            });
            marker.addListener('click', toggleBounce);
            infowindow.setContent(status[0].formatted_address);
            infowindow.open(map, marker);
            }
            else {
                window.alert('Geocoder failed due to: ' + status);
            }
        }
    });
       
}

function toggleBounce() {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }
      }


function geolocation(){
    navigator.geolocation.watchPosition(success);   
}