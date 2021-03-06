/* jshint smarttabs:true */
/* global $, SmartPhone */

var mobileFirst;

/*
 *  setYear()
 *	set footer year.
 */
const setYear = (element) => {
  'use strict';
  var year = new Date();
  $(element).html(year.getFullYear().toString());
}

/*
 *  scrollNavigation()
 * 	smooth anchor navigation.
 */
const scrollNavigation = (event) => {
	'use strict';
    event.preventDefault();

    var target = event.currentTarget.hash;
    var $target = $(target);
    var scroll;

    if ($(window).scrollTop() == 0) {
        scroll =  ($target.offset().top) - 160
    } else {
        scroll =  ($target.offset().top) - 60
    }

    $('html, body').stop().animate({
        'scrollTop': scroll
    }, 900, 'swing', function () {
        //window.location.hash = target;
    });
}

/*
 *  toggleMapView()
 * 	show building location.
 */
const toggleMapView = (event) => {
	'use strict';
    event.preventDefault();

   	$(event.currentTarget).text((i, text) => {
   		return text === 'VER MAPA' ? 'CERRAR MAPA' : 'VER MAPA';
   	});

    $('.content_mapa').toggle();
}

const openModal = (event) => {
	'use strict';
	event.preventDefault();
	let flatSelected = $(event.currentTarget).data('flat');
	$('#' + flatSelected).addClass('visible');
	$('#' + flatSelected + ' ul').slick({
		fade: true
	});
}

/*
 *	Ready Callback
 */
$(document).ready(() => {
	'use strict';

	mobileFirst = SmartPhone.isAny();

	if (mobileFirst) {
		$('.btn_lines').click(event => {
			event.preventDefault();
			$(event.currentTarget).toggleClass('close');
			$('menu').toggleClass('visible');
		});

		$('menu a').click(event => {
			event.preventDefault();
			$('.btn_lines').removeClass('close');
			$('menu').removeClass('visible');
		});
	}

	var e = $('.indicador');

	$(document).scroll(function() {
	    var o = $(window).scrollTop() + screen.height / 2,
	    	t = -1,
	    	a = null,
	    	n = null ;

	    $('.story').each(function() {
	        n = Math.abs(o - ($(this).offset().top + $(this).height() / 2)), -1 === t ? (t = n, a = this) : t > n && (t = n, a = this);
	    });

	    e.find('a.active').removeClass('active'),
	    e.find('a#nav_' + $(a).attr('id')).addClass('active')
	});

	// set footet year
	setYear('year');
	// anchor navigation
	$('a[href^="#"]').on('click', scrollNavigation);
	// showMap
	$('#btn_ver_mapa').on('click', toggleMapView);
	// open apartments modals
	$('.btn_open_plantas').on('click', openModal);
	// show amenity modal
	$('#btn_ver_plano').click((event) => {
		event.preventDefault();
		$('#amenities_modal').addClass('visible');
	});
	// close modals
	$('.btn_close_modal').click((event) => {
		event.preventDefault();
		$('.modal').removeClass('visible');
		// $('.modal ul').slick('unslick');
	});

});