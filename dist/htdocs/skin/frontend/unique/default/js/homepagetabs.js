jQuery(document).ready(function($){
	$('.product-tab').on('click', function(event){
		$('.product-tab').removeClass('active-tab');
		$('.product-tab-content').hide().removeClass('tab-content-fullwidth');
		$('.product-tab-content .description').hide();
		var clicked = $(event.currentTarget);
		clicked.addClass('active-tab');
		var targetId = clicked.attr('data-target');
		$('#'+targetId).show().addClass('tab-content-fullwidth');
		$('#'+targetId+" .description").show();
		$('.bar').animate(
		{'width':'100%'},
		1000
	);
	});
}); 