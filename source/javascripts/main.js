//= require jquery/dist/jquery.min
//= require bootstrap-sass/assets/javascripts/bootstrap.min.js
//= require fastclick/lib/fastclick.js

var $window = $(window);
var $document = $(document);

$document.ready(function () {

  $('#affixNav').affix({
    offset: {
      top: 100
    }
  });

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function(){
    $('.navbar-toggle:visible').click();
  });
})