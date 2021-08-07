$(document).ready(function () {
	$('.slide-top').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		dots: true,
		arrows: true,
		infinite: true,
		speed: 500,
		fade: false,
	});

	$('.news-slide').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		dots: false,
		arrows: true,
		infinite: true,
		speed: 500,
		fade: false,
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