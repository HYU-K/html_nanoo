
$(document).ready(function () {

	$(function () {
		var w = $(window).width();
		var h = $(window).height();

		var duration = 2000,
			el = $(".contents"),
			elem = $(".contents .content");

		elem.eq(0).addClass("z-index");

		contentl = elem.length;


		$("nav label").click(function () {
			var index = $(this).index();
			var d = index * (360 / contentl);

			$("nav label").removeClass("active");
			$(this).addClass("active");


			elem.removeClass("z-index");
			elem.eq(index).addClass("z-index");

		})
	});



	$('.continue').click(function () {
		$('.van-tabs > .active').next('label').find('a').trigger('click');
	});
	$('.back').click(function () {
		$('.van-tabs > .active').prev('label').find('a').trigger('click');
	});

}); // jQuery load

$(document).ready(function () {

    $(window).scroll(function (event) {
		var pos_body = $('html,body').scrollTop();
		// console.log(pos_body);
		if (pos_body > 20) {
			$('.site45_head_col0_lotus').addClass('croll');
		}
		else {
			$('.site45_head_col0_lotus').removeClass('croll');
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
});





jQuery(function () {

	jQuery(".video-for .video-item .title").click(function () {
		jQuery(this).css("display", "none");
	  });
	
	  jQuery('.video-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		fade: true,
		asNavFor: '.video-item-nav',
	
	  });
});




$(document).ready(function () {

	$('.slider-single').slick({
		slidesToShow: 1,
		slidesToScroll: 3,
		autoplay: true,
		centerMode: true,
		infinite: true,
		arrows: true,
		dots: true,
		fade: false,
		useTransform: true,
		speed: 400,
		cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
		responsive: [{
			breakpoint: 460,
			settings: {
				dots: false
			}
		}]
	});

	$('.slider-nav')
	.on('init', function(event, slick) {
		$('.slider-nav .slick-slide.slick-current').addClass('is-active');
	})
	.slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		dots: false,
		focusOnSelect: false,
		infinite: false,
	});


	$('.slider-single').on('afterChange', function(event, slick, currentSlide) {
		$('.slider-nav').slick('slickGoTo', currentSlide);
		var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
		$('.slider-nav .slick-slide.is-active').removeClass('is-active');
		$(currrentNavSlideElem).addClass('is-active');
	});

	$('.slider-nav').on('click', '.slick-slide', function(event) {
		event.preventDefault();
		var goToSingleSlide = $(this).data('slick-index');

		$('.slider-single').slick('slickGoTo', goToSingleSlide);
	});



}); // jQuery load



$(document).ready(function () {
	$('#slide_Component').slick({
		slidesToShow: 3,
		slidesToScroll: 2,
		autoplay: true,
		dots: true,
		arrows: false,
		infinite: true,
		speed: 700,
		responsive: [{
			breakpoint: 1000,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}]
	});

	$('.item_slide').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		dots: false,
		arrows: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear'
	});

	$('.item_slide').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		dots: false,
		arrows: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear'
	});

	$('.item_new_slide').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear'
	});


	$('.new_tin').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		dots: false,
		arrows: false,
		infinite: true,
		speed: 700,
		responsive: [{
			breakpoint: 500,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}]
	});
	

}); // jQuery load




$(document).ready(function () {

    $(window).scroll(function (event) {
		var pos_body = $('html,body').scrollTop();
		// console.log(pos_body);
		if (pos_body > 20) {
			$('.site45_head_col0_lotus').addClass('croll');
		}
		else {
			$('.site45_head_col0_lotus').removeClass('croll');
		}
		if (pos_body > 300) {
			$('.backtotop').addClass('show');
		}
		else {
			$('.backtotop').removeClass('show');
		}
	});

	$('.backtotop').click(function(){
		$('html, body').animate({scrollTop : 100},1600);
		return false;
	});
	
	$(function () {
		new WOW().init();
	})

	$('.left_3').click(function(){
        $(this).toggleClass('active');
        $(this).closest('.left_card').toggleClass('active');
    });

});







