import $ from "jquery";
import 'slick-carousel';

export function slick_init() {	
	const settings = {
		autoplay: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		swipe: false,
		dots: true,
		centerMode: true,
		swipeToSlide: true,
		speed: 600,
		autoplaySpeed: 2000,
		cssEase: 'cubic-bezier(.19,1,.22,1)',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					fade: false,
					arrows: false,
					swipe: true,
					autoplay: false
				}
			}
		]
	};

	const sl = $('.js-slick-bannerslider').slick(settings);

	$(window).on('resize', function() {
		if ($(window).width() < 768 && !sl.hasClass('slick-initialized')) {
			$('.js-slick-bannerslider').slick(settings);
		}
	});
}