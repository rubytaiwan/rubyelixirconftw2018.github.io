//= require jquery/dist/jquery.min
//= require bootstrap-sass/assets/javascripts/bootstrap/affix.js
//= require bootstrap-sass/assets/javascripts/bootstrap/modal.js
//= require bootstrap-sass/assets/javascripts/bootstrap/collapse.js
//= require bootstrap-sass/assets/javascripts/bootstrap/transition.js
//= require fastclick/lib/fastclick.js

var $window = $(window);
var $document = $(document);

$document.ready(function () {

  // Navbar
  $('#affixNav').affix({
    offset: {
      top: 100
    }
  });

  $('.navbar-collapse ul li a').click(function(){
    $('.navbar-toggle:visible').click();
  });

  // Modal URL
  $(window.location.hash).modal('show');
  $('[data-toggle="modal"]').click(function(){
     window.location.hash = $(this).attr('data-target');
  });

  function revertToOriginalURL() {
    var original = window.location.href.substr(0, window.location.href.indexOf('#'))
    history.replaceState({}, document.title, original);
  }

  $('.modal').on('hidden.bs.modal', function () {
      revertToOriginalURL();
  });

  // Toggle More New
  var hidden = $('.news').hasClass('hidden')

  $('#news-more').click(function(){
    if (hidden){
      $('.news.inactive').removeClass('hidden');
      $(this).hide();
    }
  });
})