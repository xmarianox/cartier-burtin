/* jshint smarttabs:true */
/* global $, SmartPhone */

var mobileFirst;

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

	$('#btn_ver_mapa').click(event => {
		event.preventDefault();
		$('.content_mapa').toggle();
	});

});