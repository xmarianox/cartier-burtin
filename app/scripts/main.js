/* jshint smarttabs:true */
/* global $, SmartPhone */

var mobileFirst;
const sliderOptionsMobile = {
	delay: 7000,
	timer: false,
	slides: [
    	{ src: '/images/m_slider1.jpg' },
    	{ src: '/images/m_slider2.jpg' },
    	{ src: '/images/m_slider3.jpg' }
	]
};
const sliderOptionsDesktop = {
	delay: 7000,
	timer: false,
	slides: [
    	{ src: '/images/slider1.jpg' },
    	{ src: '/images/slider2.jpg' },
    	{ src: '/images/slider3.jpg' }
	]
};

$(document).ready(() => {
	'use strict';

	mobileFirst = SmartPhone.isAny();

	if (mobileFirst) {
		$('.main_slider_container').vegas(sliderOptionsMobile);
	} else {
		$('.main_slider_container').vegas(sliderOptionsDesktop);
	}

	$('.project_list li').hover(event => {
		event.preventDefault();
		$('.project_list li').removeClass('active');
		$(event.currentTarget).addClass('active');
	});

});