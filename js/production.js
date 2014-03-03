$(document).ready(function () {

	/*================================================================
	*** RESPONSIVE NAVIGATION
	***==============================================================*/
	$('.hamburgerBtn').click(function(event) {
		event.preventDefault();
		$('.mobile-menu').slideDown();
		$(this).hide();
		$('.hideBtn').show();
	});

	$('.hideBtn').click(function(event) {
		event.preventDefault();
		$('.mobile-menu').hide('slide');
		$(this).hide();
		$('.hamburgerBtn').show();
	});



	/*==========================================================
	*** STICKY NAV
	***=======================================================*/
	var stickyNavTop = $('.stickNav').offset().top;

	var stickyNav = function() {
		var scrollTop = $(window).scrollTop();

		if (scrollTop > stickyNavTop) {
			$('.stickNav').addClass('sticky');
		} else {
			$('.stickNav').removeClass('sticky');
		}
	};

	stickyNav();

	$(window).scroll(function() {
		stickyNav();
	});


	/*=================================================================
	*** NAVIGATE TO ID ELEMENT
	***==============================================================*/
	var ids = new Array('researchhub', 'build', 'test', 'distribute', 'report');

	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    $('a[href^="#"]').removeClass('active');
	    $(this).addClass('active');

	    var target = this.hash,
	    $target = $(target);



	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top,
	        
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});


	/*====================================================================
	*** SLIDER AREA
	***==================================================================*/
	$('.banner').unslider({
		complete : function() {},
		delay : false,
		keys : true,
		dots : true,
		fluid : true
	});

	var unslider = $('#research-slider').unslider();
	var build = $('#build-slider').unslider();
	var test = $('#test-slider').unslider();
	var distribute = $('#distribute-slider').unslider();
	var report = $('#report-slider').unslider();

	$('.research-arrow').click(function (event) {
		event.preventDefault();

		if($(this).hasClass('next')) {
			unslider.data('unslider')['next']();
		} else {
			unslider.data('unslider')['prev']();
		}
	});

	$('.build-arrow').click(function (event) {
		event.preventDefault();

		if($(this).hasClass('next')) {
			build.data('unslider')['next']();
		} else {
			build.data('unslider')['prev']();
		}
	});

	$('.test-arrow').click(function (event) {
		event.preventDefault();

		if($(this).hasClass('next')) {
			test.data('unslider')['next']();
		} else {
			test.data('unslider')['prev']();
		}
	});

	$('.distribute-arrow').click(function (event) {
		event.preventDefault();

		if($(this).hasClass('next')) {
			distribute.data('unslider')['next']();
		} else {
			distribute.data('unslider')['prev']();
		}
	});

	$('.report-arrow').click(function (event) {
		event.preventDefault();

		if($(this).hasClass('next')) {
			report.data('unslider')['next']();
		} else {
			report.data('unslider')['prev']();
		}
	});

});