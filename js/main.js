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
	var stickyNavTop = $('.stickNav');

	if (stickyNavTop.length) {
	
	var ssnav = stickyNavTop.offset().top;

	var stickyNav = function() {
		var scrollTop = $(window).scrollTop();

		if (scrollTop > ssnav) {
			$('.stickNav').addClass('sticky');
			
		} else {
			$('.stickNav').removeClass('sticky');
			
		}
	};


	stickyNav();


	$(window).scroll(function() {
		stickyNav();
	});

}

	/*=================================================================
	*** NAVIGATE TO ID ELEMENT
	***===============================================================*/
	//var ids = new Array('researchhub', 'build', 'test', 'distribute', 'report');



	$('a[href^="#"]').on('click', function (e) {
	    e.preventDefault();
	    
	    $('a[href^="#"]').removeClass('active');
	    $(this).addClass('active');

		var target = this.hash,
	    $target = $(target);

	 var scrolldown = function(item, tuner) {
		$('html, body').stop().animate({
	        'scrollTop': $target.offset().top - tuner
	        
	    }, 500, 'swing', function () {
	        window.location.hash = target;
	    });

  };

	    scrolldown(target, "50");



	});


	/*====================================================================
	*** SLIDER AREA
	***==================================================================*/

	var research = $("#research-slider"); 
	var build = $("#build-slider");
	var test = $("#test-slider");
	var distribute = $("#distribute-slider");
	var report = $("#report-slider");


	research.owlCarousel({
		items: 1,
		navigation: true,
		navigationText: false,
		responsive: true,
		responsiveRefreshRate: 200,
		responsiveBaseWindow: window,
		itemsDesktop: [1201, 1],
		itemsDesktopSmall: [960, 1],
		itemsTablet: [768, 1],
		itemsTableSmall: false,
		itemsMobile: [501, 1],
		itemsScaleUp: false
	});

	build.owlCarousel({
		items: 1,
		navigation: true,
		navigationText: false,
		responsive: true,
		responsiveRefreshRate: 200,
		responsiveBaseWindow: window,
		itemsDesktop: [1201, 1],
		itemsDesktopSmall: [960, 1],
		itemsTablet: [768, 1],
		itemsTableSmall: false,
		itemsMobile: [501, 1],
		itemsScaleUp: false
	});

	test.owlCarousel({
		items: 1,
		navigation: true,
		navigationText: false,
		responsive: true,
		responsiveRefreshRate: 200,
		responsiveBaseWindow: window,
		itemsDesktop: [1201, 1],
		itemsDesktopSmall: [960, 1],
		itemsTablet: [768, 1],
		itemsTableSmall: false,
		itemsMobile: [501, 1],
		itemsScaleUp: false
	});

	distribute.owlCarousel({
		items: 1,
		navigation: true,
		navigationText: false,
		responsive: true,
		responsiveRefreshRate: 200,
		responsiveBaseWindow: window,
		itemsDesktop: [1201, 1],
		itemsDesktopSmall: [960, 1],
		itemsTablet: [768, 1],
		itemsTableSmall: false,
		itemsMobile: [501, 1],
		itemsScaleUp: false
	});

	report.owlCarousel({
		items: 1,
		navigation: true,
		navigationText: false,
		responsive: true,
		responsiveRefreshRate: 200,
		responsiveBaseWindow: window,
		itemsDesktop: [1201, 1],
		itemsDesktopSmall: [960, 1],
		itemsTablet: [768, 1],
		itemsTableSmall: false,
		itemsMobile: [501, 1],
		itemsScaleUp: false
	});


	/***video placeholder script***/
	$('#video-placeholder').click(function () {
		var video = '<iframe width="400" height="225" src="' + $(this).attr('data-video') +'" frameborder="0" allowfullscreen></iframe>';
		$(this).replaceWith(video);
	});
	



}); //dom ready

//Select dropdown menu
$('#jumpTo').change(function() {
	
	var target = $('option:selected').val();
	
	if (target.length !== 0) {
		
		$('html, body').animate(500, 'swing',  function() {
			window.location.hash = target; 

	});
		
	}
});

