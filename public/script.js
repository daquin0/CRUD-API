function iniciarMap(){
    var coord = {lat: 19.25009936938215 ,lng: -103.71958864626532};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 18,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
        map:map
    });
}

