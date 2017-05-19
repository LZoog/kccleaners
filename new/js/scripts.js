function init_map() {
  var pioneer_location = new google.maps.LatLng(32.449574,-99.780882);

  var pioneer_mapoptions = {
    center: pioneer_location,
    zoom: 14
  };

  var pioneer_marker = new google.maps.Marker({
    position: pioneer_location,
    map: pioneer_map,
    title:"Pioneer Dr. KC Cleaners"
  });

  var pioneer_map = new google.maps.Map(document.getElementById("map-pioneer"),
      pioneer_mapoptions);

  pioneer_marker.setMap(pioneer_map);


  var rebecca_location = new google.maps.LatLng(32.3953377,-99.7675238);

  var rebecca_mapoptions = {
    center: rebecca_location,
    zoom: 14
  };

  var rebecca_marker = new google.maps.Marker({
    position: rebecca_location,
    map: rebecca_map,
    title:"Rebecca Ln. KC Cleaners"
  });

  var rebecca_map = new google.maps.Map(document.getElementById("map-rebecca"),
      rebecca_mapoptions);

  rebecca_marker.setMap(rebecca_map);
}

google.maps.event.addDomListener(window, 'load', init_map);
