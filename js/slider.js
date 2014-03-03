$(document).ready(function(){
	var research = $("#research-slider"); 
	var build = $("#build-slider");
	var test = $("#test-slider");
	var distribute = $("#distribute-slider");
	var report = $("#report-slider");


	research.owlCarousel({
		items: 1
	});

	build.owlCarousel({
		items: 1
	});

	test.owlCarousel({
		items: 1
	});

	distribute.owlCarousel({
		items: 1
	});

	report.owlCarousel({
		items: 1
	});
});