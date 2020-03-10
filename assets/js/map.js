
    var myCenter=new google.maps.LatLng(44.779763, 20.504197);
    var marker;
      function initialize() {
        var mapProp = {
        center:myCenter,
        scrollwheel: false,
        zoom:14,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    var map=new google.maps.Map(document.getElementById("map-canvas"),mapProp);
    var marker=new google.maps.Marker({
       position:myCenter,
      animation:google.maps.Animation.BOUNCE
  });

marker.setMap(map);
  }

  google.maps.event.addDomListener(window, 'load', initialize);
