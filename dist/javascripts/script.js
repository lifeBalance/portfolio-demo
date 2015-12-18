/* Parallax effect */
$(document).ready(function(){
  // cache the window object
  $window = $(window);

  $('section[data-type="background"]').each(function(){
    // declare the variable to affect the defined data-type
    var $scroll = $(this);

    $(window).scroll(function() {
      // HTML5 proves useful for helping with creating JS functions!
      // also, negative value because we're scrolling upwards
      var yPos = -($window.scrollTop() / $scroll.data('speed'));

      // background position
      var coords = '50% '+ yPos + 'px';

      // move the background
      $scroll.css({ backgroundPosition: coords });
    }); // end window scroll
  });  // end section function
}); // close out script

/*(function initialize() {
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
      center: new google.maps.LatLng(44.5403, -78.5463),
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);
})()*/
//google.maps.event.addDomListener(window, 'load', initialize);
