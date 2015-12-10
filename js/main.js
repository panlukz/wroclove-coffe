// preloader timeout
$(window).load(function() {
  $(".loader").fadeOut(1000);
});



$(document).ready(function() {


//scroll to top 

  var y = $(window).scrollTop();
  $(window).scrollTop(y+1);



//google maps 
  if(window.google != undefined) {
    function initialize() {
            var map_canvas = document.getElementById('map_canvas');

            var mapOptions = {
                center: new google.maps.LatLng(51.1097692, 17.0315521),
                zoom: 17,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false
              }

            var map = new google.maps.Map(map_canvas, mapOptions);

            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(51.1097692, 17.0315521),
              map: map,
              icon: 'images/map.png'
            });

          }
    
      google.maps.event.addDomListener(window, 'load', initialize);
  }


//starting the carousels
  $('.carousel').carousel({
      pause: false
  });



//sticky menu
  $(".sticker").sticky({topSpacing:0});




//adding active class to current menu section 
  $(document).scroll(function(){
           $('.anchor').each(function(){
               var $this = $(this),
               pos = $this.offset().top - $(window).scrollTop();
               if(pos < 150 ){
                   $('.navbar-nav a').removeClass('nav-active');
                  $('.navbar-nav a[href="#'+$this.attr('id')+'"]').addClass('nav-active');
              }
          });
              
  });

  //smooth scrolling plugin

  $(".navbar-nav a, .over").not('.external').click(function(evn){
      evn.preventDefault();
        $.scrollTo( this.hash,1000,{easing: 'swing', offset:-115});
        return false;
  });


  $('#background-carousel').css('height', $(window).innerHeight());
  $(window).resize(function() {
        $('#background-carousel').css('height', $(window).innerHeight());
    });




//animations 

 $(window).scroll(function() {

  $('.page-header, .flipIn').each(function(i){
    if (status[i] !== 'showing') {

      var imagePos = $(this).offset().top +100;
      var topOfWindow = $(window).scrollTop() + $(window).height();

      if (imagePos < topOfWindow) {
        $(this).addClass("animated flipInX");
        status[i] = 'showing';
      }
    }
        
  });


  $('.fadeLeft').each(function(i){
    if (status[i] !== 'showing') {

      var imagePos = $(this).offset().top +100;
      var topOfWindow = $(window).scrollTop() + $(window).height();

      if (imagePos < topOfWindow) {
        $(this).addClass("animated fadeInLeft");
        status[i] = 'showing';
      }
    }
        
  });


  $('.fadeRight').each(function(i){
    if (status[i] !== 'showing') {

      var imagePos = $(this).offset().top +100;
      var topOfWindow = $(window).scrollTop() + $(window).height();

      if (imagePos < topOfWindow) {
        $(this).addClass("animated fadeInRight");
        status[i] = 'showing';
      }
    }
        
  });


  $('.fadeUp').each(function(i){
    if (status[i] !== 'showing') {

      var imagePos = $(this).offset().top +100;
      var topOfWindow = $(window).scrollTop() + $(window).height();

      if (imagePos < topOfWindow) {
        $(this).addClass("animated fadeInUp");
        status[i] = 'showing';
      }
    }
        
  });


 });



     
//count To  
    var counterNumbersStatus = [];       
    $(window).scroll( function(){
        

            $('.counter-numbers').each(function(i){
                if (counterNumbersStatus[i] !== 'showing') {

                 var imagePos = $(this).offset().top +100;
                 var topOfWindow = $(window).scrollTop() + $(window).height();

                     if (imagePos < topOfWindow) {
                         $('.counter-numbers').countTo();
                         counterNumbersStatus[i] = 'showing';
                     }
                }
            }); 
    });




//gallery isotope 
  var $container = $('#img-container').imagesLoaded( function() {
    
    $container.isotope({
      itemSelector: '.portfolio-img',
      layoutMode: 'fitRows',
      columnWidth: 500
    });  

  });


  $('#portfolio-filters').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $container.isotope({ filter: filterValue });
    $('#portfolio-filters button').removeClass('current');
    $(this).addClass('current');
  });



  // smooth scrolling plugin 
  $("html body").niceScroll({
    zindex: 9999,
    cursorcolor: '#FE7E17',
    cursorwidth: '12px',
    cursorborderradius: '2px',
    cursorborder: 'none',
    background: '#f9f9f9',
    autohidemode: false,
    cursoropacitymax: 0.8,
    horizrailenabled: false

  });


  //go to up button event
  $('.goup').click(function () {
  $('body,html').animate({
      scrollTop: 0
    }, 800);
      return false;
  });

}); //end of document ready event












