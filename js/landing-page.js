// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});


$(document).ready(function(){/* google maps -----------------------------------------------------*/
google.maps.event.addDomListener(window, 'load', initialize);

function initialize() {

  /* position Amsterdam */
  var latlng = new google.maps.LatLng(28.896805,-82.5863789);

  var imageLocation = 'img/carrot1.png';

  var mapOptions = {
    center: latlng,
    scrollwheel: false,
    zoomControl: true,
    scaleControl: true,
    zoom: 15,
    draggable: false,
  };
  
  var marker = new google.maps.Marker({
    position: latlng,
    url: '/',
    icon: imageLocation,
    animation: google.maps.Animation.BOUNCE
  });
  
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  marker.setMap(map);


  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h3 id="firstHeading" class="firstHeading">Tony&#39s Produce Market</h3>'+
      '<div id="bodyContent">'+
      '<p>It&#39s pretty much the best produce market ever. '+
      'Why don&#39t you stop by and say "Hi!"? :)</p>'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

};
/* end google maps -----------------------------------------------------*/
});


$(document).ready(function(){
    $('[data-toggle="popover"]').popover({
      delay: {
        show: "5200",
        hide: "100"
      },
  }); 

    setTimeout(function() {
        $('[data-toggle="popover"]').popover('show');
    }, 5000);

    setTimeout(function() {
        $('[data-toggle="popover"]').popover('hide');
    }, 10000);

    $('#splash-button > a').hover(function() {
      $('[data-toggle="popover"]').popover('destroy');
    });
    
});
