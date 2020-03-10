/*
|------------------------------------------------------------
| Script for navigation for mobile
|------------------------------------------------------------
*/$(document).ready(function() {
    $('[data-nav-button]').on('click', function () {
        $('[data-nav-button]').toggleClass('is-activated');
        $('[data-nav-button-span]').toggleClass('is-opened');
        $('[data-nav]').toggleClass('is-collapsed');
    });

    $(window).on('resize', function () {
        if ($(window).width() > 768) {
            $('nav').removeAttr('style');
        }
    });
 });

$(document).ready(function() {
    $('.Header__button-nav').on('click', function() {
        $('nav').fadeIn(700);
    })
});

var myCenter=new google.maps.LatLng(45.0660729,20.58279,15);
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
