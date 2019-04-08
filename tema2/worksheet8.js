function video() {
    var video = document.querySelector("video");    
    if(navigator.mediaDevices.getUserMedia){
        navigator.mediaDevices.getUserMedia({video: true, audio: true})
        .then(function(stream){
            video.srcObject=stream;
        });
    }
}
video()