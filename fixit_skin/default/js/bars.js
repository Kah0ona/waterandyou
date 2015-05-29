jQuery(document).ready(function($){

	$('.bar').animate(
		{'width':'100%'},
		2000 
	);

});
jQuery(document).ready(function($){
	$("a[href='#bottom']").click(function() {
	  $("html, body").animate({ scrollTop: $(document).height() }, "slow");
	  return false;
	});
});

jQuery(document).ready(function($){
 // tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    $(".tab_content").hide();
    $(".tab_content:first").show();

  /* if in tab mode */
    $("ul.tabs li").click(function() {
		
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();		
		
      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");

	  $(".tab_drawer_heading").removeClass("d_active");
	  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
	  
    });
	/* if in drawer mode */
	$(".tab_drawer_heading").click(function() {
      
      $(".tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
	  
	  $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
	  
	  $("ul.tabs li").removeClass("active");
	  $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });
	
	
	/* Extra class "tab_last" 
	   to add border to right side
	   of last tab */
	$('ul.tabs li').last().addClass("tab_last");
	


});

//--------------------- mini tabs

jQuery(document).ready(function($){
	$('.tabgroup > div').hide();
	$('.tabgroup > div:first-of-type').show();
	$('.mini-tabs a').click(function(e){
	  e.preventDefault();
	    var $this = $(this),
	        tabgroup = '#'+$this.parents('.mini-tabs').data('tabgroup'),
	        others = $this.closest('li').siblings().children('a'),
	        target = $this.attr('href');
	    others.removeClass('active');
	    $this.addClass('active');
	    $(tabgroup).children('div').hide();
	    $(target).show();
	  
	})
 });   