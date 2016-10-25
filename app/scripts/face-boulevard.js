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
	}

	setYear('year');

	// anchor navigation
	$('a[href^="#"]').on('click', scrollNavigation);
	// showMap
	$('#btn_ver_mapa').on('click', toggleMapView);

});