(function($){
	// init Isotope
	var $grid = $('.gallery').isotope({
	  // options
	});
	// filter items on button click
	$('.gallery_filter').on( 'click', 'li', function() {
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});
})(jQuery);
