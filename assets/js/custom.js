$(document).ready(function () {
	$('.slide_maumau').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		dots: false,
		arrows: false,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear'
	});

	$('.slide_maunoibat').slick({
		slidesToShow: 3,
		slidesToScroll: 2,
		autoplay: true,
		dots: true,
		arrows: true,
		infinite: true,
		speed: 500,
		fade: false,
		responsive: [{
			breakpoint: 576,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		}, {
			breakpoint: 400,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}]
	});







	$('.slider-single').slick({
		slidesToShow: 1,
		arrows: false,
		asNavFor: '.slider-nav',
		autoplay: true,
	});

	$('.slider-nav')
		.on('init', function (event, slick) {
			$('.slider-nav .slick-slide.slick-current').addClass('is-active');
		})
		.slick({
			slidesToShow: 4,
			asNavFor: '.slider-main',
			vertical: true,
			focusOnSelect: true,
			autoplay: false,
			centerMode: true,
		});



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





	$('.slider-single').on('afterChange', function (event, slick, currentSlide) {
		$('.slider-nav').slick('slickGoTo', currentSlide);
		var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
		$('.slider-nav .slick-slide.is-active').removeClass('is-active');
		$(currrentNavSlideElem).addClass('is-active');
	});

	$('.slider-nav').on('click', '.slick-slide', function (event) {
		event.preventDefault();
		var goToSingleSlide = $(this).data('slick-index');

		$('.slider-single').slick('slickGoTo', goToSingleSlide);
	});

	$(window).scroll(function (event) {
		var pos_body = $('html,body').scrollTop();
		// console.log(pos_body);
		if (pos_body > 20) {
			$('.site4_head_col0_kova').addClass('croll');
		}
		else {
			$('.site4_head_col0_kova').removeClass('croll');
		}
		if (pos_body > 300) {
			$('.backtotop').addClass('show');
		}
		else {
			$('.backtotop').removeClass('show');
		}
	});
	$(function () {
		new WOW().init();
	})


}); // jQuery load


$(document).ready(function () {

	$(".fa-search").click(function () {
		$(".togglesearch").toggle();
		$("input[type='text']").focus();
	});

});




$(function () {
	function slideMenu() {
		var activeState = $(".menu-top .menu-list").hasClass("active");
		$(".menu-top .menu-list").animate({ left: activeState ? "0%" : "-100%" }, 400);
	}
	$(".menu-wrapper").click(function (event) {
		event.stopPropagation();
		$(".hamburger").toggleClass("open");
		$(".menu-top .menu-list").toggleClass("active");
		slideMenu();

		$("body").toggleClass("overflow-hidden");
	});

	$(".menu-list").find(".accordion-toggle").click(function () {


		$(".menu-list .accordion-content").not($(this).next()).slideUp("fast").removeClass("open");
		$(".menu-list .accordion-toggle").not(jQuery(this)).removeClass("active-tab").find(".menu-link").removeClass("active");
	});
}); // jQuery load



