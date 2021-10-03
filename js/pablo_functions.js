
$(document).ready(function(){
	// HOME SLIDER
	var homeSlider = $(".slider").bxSlider();
    var currentSlide = homeSlider.getCurrentSlide();	
    homeSlider.reloadSlider({
    	startSlide: currentSlide,
		mode: 'fade',
		captions: false,
		controls: false,
		auto: true,
		speed: 1500,
		pager: false,
		responsive: true,
		touchEnabled: true,
		autoControls: false,
		pause: 1000
	});	

    // TABS
	$('.my-bets-header h2').click(function(){
		var tab_id = $(this).attr('data-tab');

		$(".my-bets-placeholder").addClass("active");
		$(".maximize-cart").html("Hide Cart");

		$('.my-bets-header h2').removeClass('active');
		$('.cart-tab-content').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
	})

	// SHOW/HIDE CART
	$(".maximize-cart").click(function(){
		if ($(".my-bets-placeholder").hasClass("active") ) {
			$(".maximize-cart").html("Show Cart");
		} else {
			$(".maximize-cart").html("Hide Cart");
		}
		$(".my-bets-placeholder").toggleClass("active");
		$(".cart-tab-content").removeClass("active");
		$(".cart-display-content").addClass("active");
	});
	$('.information-area h3').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.information-area h3').removeClass('active');
		$('.tab-content').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
	})


	// BOTTOM GAMES CAROUSEL  --> TODO: one single call, not 3
	$('#cart-page .owl-carousel').owlCarousel({
	    loop:true,
	    // margin:10,
	    responsiveClass:true,
	    navText: ["&lsaquo;", "&rsaquo;"],
        dots: false,
        stagePadding: 0,
	    responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	        480:{
	            items:2,
	            nav:true,
	            margin: 0
	        },
	        768:{
	            items:3,
	            nav:true
	        },        
	        1000:{
	            items:4,
	            nav:true
	        }
	    }
	});
	$('#game-page .owl-carousel').owlCarousel({
	    loop:true,
	    responsiveClass:true,
	    navText: ["&lsaquo;", "&rsaquo;"],
        dots: false,
	    responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	        480:{
	            items:2,
	            nav:true,
	            margin: 0
	        },
	        768:{
	            items:3,
	            nav:true
	        },        
	        1000:{
	            items:4,
	            nav:true
	        }
	    }
	});
	$('#lobby-page .more-jackpots .owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    responsiveClass:true,
	    navText: ["&lsaquo;", "&rsaquo;"],
        dots: false,
	    responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	        480:{
	            items:2,
	            nav:true,
	            margin: 0
	        },
	        768:{
	            items:3,
	            nav:true
	        },        
	        1000:{
	            items:4,
	            nav:true
	        }
	    }
	});




	if($(window).width() >900)   {
		$('#lobby-page .all-games .owl-carousel').trigger('destroy.owl.carousel');
		$('#lobby-page .all-games .owl-carousel').removeClass('owl-carousel');
	} else {

		$('#lobby-page .all-games .owl-carousel').owlCarousel({
		    loop:true,
		    margin:10,
		    responsiveClass:true,
		    navText: ["&lsaquo;", "&rsaquo;"],
	        dots: false,
		    responsive:{
		        0:{
		            items:1,
		            nav:true
		        },
		        580:{
		            items:1,
		            nav:true
		        },
		        800:{
		            items:2,
		            nav:true
		        },        
		        1000:{
		            items:3,
		            nav:false,
		            loop: true
		        }
		    }
		});




	}









	if($(window).width() > 1000)   {
		// $('#lobby-page .owl-carousel').trigger('destroy.owl.carousel');
		// $('#lobby-page .owl-carousel').removeClass('owl.carousel');
	}






	// if ($(".single-participant.dragging")  ) {
	// 	console.log("tetas");
	// }













});


// jQuery(document).ready(function($) {

//   // When user resizes window...
//   $(window).on('resize',function() {
  
//     // Set interval until timer is cleared, indicating end of the resize event
//     waitForFinalEvent(function() {
     
//       // Get owl carousel
//       var owldata = $(".owl-carousel").data('owlCarousel');
      
//       // Use the owl Carousel's reset method
//       owldata.updateVars();
  
  
  
//     }, 200, "OwlCarouselResizeReset");
//   });

  

// });

var waitForFinalEvent = (function () {
  var timers = {};
  return function (callback, ms, uniqueId) {
    if (!uniqueId) {
      uniqueId = "Don't call this twice without a uniqueId";
    }
    if (timers[uniqueId]) {
      clearTimeout (timers[uniqueId]);
    }
    timers[uniqueId] = setTimeout(callback, ms);
  };
})();










// $(document).ready(function() {
// $(window).resize(function() {
//   console.log('Has cambiado el tamaño de la ventana');



// 	if($(window).width() >900)   {
// 		$('#lobby-page .all-games .owl-carousel').trigger('destroy.owl.carousel');
// 		$('#lobby-page .all-games .owl-carousel').removeClass('owl-carousel');
// 	} else {

// 		$('#lobby-page .all-games .owl-carousel').owlCarousel({
// 		    loop:true,
// 		    margin:10,
// 		    responsiveClass:true,
// 		    navText: ["&lsaquo;", "&rsaquo;"],
// 	        dots: false,
// 		    responsive:{
// 		        0:{
// 		            items:1,
// 		            nav:true
// 		        },
// 		        580:{
// 		            items:1,
// 		            nav:true
// 		        },
// 		        800:{
// 		            items:2,
// 		            nav:true
// 		        },        
// 		        1000:{
// 		            items:3,
// 		            nav:false,
// 		            loop: true
// 		        }
// 		    }
// 		});




// 	}



  
// });
// });