jQuery(function () {

	jQuery(".img-x2 .videos .title").click(function () {
		jQuery(this).css("display", "none");
	  });

});


$(document).ready(function () {

    $(window).scroll(function (event) {
		var pos_body = $('html,body').scrollTop();
		// console.log(pos_body);
		if (pos_body > 20) {
			$('.head_Edally .container .header').addClass('croll');
		}
		else {
			$('.head_Edally .container .header').removeClass('croll');
		}
	});

	$(function () {
		new WOW().init();
	})

	$(".new_slide").slick({
		centerMode: true,
		centerPadding: '0',
		slidesToShow: 3,
		dots: true,
		arrows: true,
		responsive: [{
			breakpoint: 991,
			settings: {
				slidesToShow: 1,
				centerPadding: '180px',
			}
		}, {
			breakpoint: 700,
			settings: {
				slidesToShow: 1,
				centerPadding: '160px',
			} 
		}, {
			breakpoint: 640,
			settings: {
				slidesToShow: 1,
				centerPadding: '150px',
			}
		}, {
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				centerPadding: '135px',
			}
		}, {
			breakpoint: 543,
			settings: {
				slidesToShow: 1,
				centerPadding: '0',
				centerMode: true,
			}
		}]
	});

	$(".slide-item-y-kien").slick({
		slidesToShow: 1,
		dots: true,
		arrows: false,
		cssEase: 'linear',
		speed: 500,
		infinite: true,
	});
	

	$(function () {
		function slideMenu() {
			var activeState = $(".menu-top .main-menu").hasClass("active");
			$(".menu-top .main-menu").animate({ left: activeState ? "0%" : "-100%" }, 400);
		}
		$(".menu-wrapper").click(function (event) {
			event.stopPropagation();
			$(".hamburger").toggleClass("open");
			$(".menu-top .main-menu").toggleClass("active");
			slideMenu();
	
			$("body").toggleClass("overflow-hidden");
		});
	
		$(".main-menu").find(".accordion-toggle").click(function () {
	
	
			$(".main-menu .accordion-content").not($(this).next()).slideUp("fast").removeClass("open");
			$(".main-menu .accordion-toggle").not(jQuery(this)).removeClass("active-tab").find(".menu-link").removeClass("active");
		});
	
	}); // jQuery load 

	$(window).scroll(function (event) {
		var pos_body = $('html,body').scrollTop();
		// console.log(pos_body);
		if (pos_body > 300) {
			$('.backtotop').addClass('show');
		} else {
			$('.backtotop').removeClass('show');
		}
	});

	$('.backtotop').click(function () {
		$('html, body').animate({
			scrollTop: 100
		}, 1600);
		return false;
	});


});
