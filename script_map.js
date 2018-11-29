function initMap() {
  // The location of Uluru
  var uluru = {lat: 50.447220, lng: 30.508354};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 18, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}