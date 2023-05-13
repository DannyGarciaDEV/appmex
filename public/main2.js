function initMap() {
    // Create a map object
    var map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 19.4326, lng: -99.1332 }, // Mexico City coordinates
      zoom: 12 // Set the initial zoom level
    });

    // Get the user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        // Create a marker for the user's location
        var marker = new google.maps.Marker({
          position: userLocation,
          map: map,
          title: "Your Location"
        });

        // Center the map on the user's location
        map.setCenter(userLocation);
      }, function() {
        // Handle geolocation error
        alert("Error: The Geolocation service failed.");
      });
    } else {
      // Browser doesn't support geolocation
      alert("Error: Your browser doesn't support geolocation.");
    }
  }

  // Load the map when the page has finished loading
  window.addEventListener('load', initMap);
