(function ($) {
"use strict";


// preloader
$(window).load(function() {
	$("#loading").delay(4000).fadeOut(1000);
	$("#loading-center").click(function() {
	$("#loading").fadeOut(1000);
	})
  })

// Active WOW js
new WOW().init();

 // meanmenu active
   jQuery('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "991"
  });

// sticky
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 100) {
	  $("#header-sticky").removeClass("sticky");
	} else {
	  $("#header-sticky").addClass("sticky");
	}
  });

   // Show or hide the sticky footer button
   $(window).on('scroll', function(event) {
	if($(this).scrollTop() > 600){
		$('#scroll').fadeIn(200)
	} else{
		$('#scroll').fadeOut(200)
	}
  });

  //Animate the scroll to yop
  $('#scroll').on('click', function(event) {
	  event.preventDefault();
	  
	  $('html, body').animate({
		  scrollTop: 0,
	  }, 1500);
  });

// One Page Nav
var top_offset = $('.header-area').height() - 10;
$('.main-menu nav ul').onePageNav({
  currentClass: 'active',
  scrollOffset: top_offset,
});

// Testimonial active
$('.testimonial-active').slick({
	dots: true,
	arrows: false,
	infinite: true,
	autoplay: true,
	speed: 3000,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
	  {
		breakpoint: 1024,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  infinite: true,
		  dots: false
		}
	  },
	  {
		breakpoint: 991,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  }
	]
  });
  

// Brand active
$('.brand-active').slick({
	dots: false,
	arrows: false,
	infinite: true,
	autoplay: true,
	speed: 3000,
	slidesToShow: 5,
	slidesToScroll: 1,
	responsive: [
	  {
		breakpoint: 1024,
		settings: {
		  slidesToShow: 5,
		  slidesToScroll: 1,
		  infinite: true,
		  dots: false
		}
	  },
	  {
		breakpoint: 991,
		settings: {
		  slidesToShow: 4,
		  slidesToScroll: 1
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 1
		}
	  }
	]
  });

/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});



$('.grid').imagesLoaded( function() {
	// init Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: '.grid-item',
	  }
	});
});

// filter items on button click
$('.portfolio-menu').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});	



//for menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});



})(jQuery);	