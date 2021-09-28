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



	$('.slide-sanpham').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 2,
		dots: true,
		arrows: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}
		}, {
			breakpoint: 400,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}]
	});

	$('.slide-news-item').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [{
			breakpoint: 991,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}
		}, {
			breakpoint: 476,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}]
	});

	$('.slide-chungnhan').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 2,
		dots: true,
		arrows: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [{
			breakpoint: 1199,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 2,
			}
		}, {
			breakpoint: 515,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		}]
	});

	$('.silde-y-kien').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
	});

});
