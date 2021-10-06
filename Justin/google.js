const geocoder = new google.maps.geocoder();
let address = ""
geocoder.geocode ({address: address } ,
  (results, status) =>{
    if (status === "ok") {
      var latitude = results[0].geometry.location.lat();
      var longitude = results [0].geometry.location.lng();
    initialize(latitude, longitude);
  }
});



function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: { lat: 32.8800604, lng: -117.2340135 },
  });

  marker = new google.maps.Marker({
    map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: { lat: 32.8800604, lng: -117.2340135  },
  });
  marker.addListener("click", toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

