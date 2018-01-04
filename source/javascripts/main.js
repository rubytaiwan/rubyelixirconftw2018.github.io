//= require jquery/dist/jquery.min
//= require bootstrap-sass/assets/javascripts/bootstrap/affix.js
//= require bootstrap-sass/assets/javascripts/bootstrap/modal.js
//= require bootstrap-sass/assets/javascripts/bootstrap/collapse.js
//= require bootstrap-sass/assets/javascripts/bootstrap/transition.js
//= require jquery.easing/js/jquery.easing.min.js
//= require fastclick/lib/fastclick.js
//= require scrollreveal/dist/scrollreveal.min.js

var $window = $(window);
var $document = $(document);

$document.ready(function () {

  WebFont.load({
    google: {
      families: ['Lato', 'Righteous']
    }
  });

  // Enable FastClick
	FastClick.attach(document.body);

  // Navbar
  if(window.location.pathname == "/"){
    $('.navbar').attr('id', 'affixNav');
    $('#affixNav').affix({
      offset: {
        top: 100
      }
    });
    $('a.navbar-brand').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: 0
      }, 1000, 'easeInOutExpo');
      event.preventDefault();
    });
  }

  if(window.location.pathname != "/"){
    var currentPage = window.location.pathname;
    var $anchor = $("a[href='" + currentPage +"']");
    $anchor.addClass("active");
  }

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

  // Scroll Reveal
  window.sr = ScrollReveal();
  sr.reveal('.reveal');

  // Scroll Up
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });
  
  $('.scrollup').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 600, 'easeInOutExpo');
    return false;
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