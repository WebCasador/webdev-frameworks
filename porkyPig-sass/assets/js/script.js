console.log("ready2go!")

$(document).on("ready", function(e) {

	var fixedNavBar = $('#navbar').offset().top;

	var fixedNavigation = function(){
		var scrollTop = $(window).scrollTop();
		      
		if (scrollTop > fixedNavBar) { 
		    $('#navbar').addClass('fixed');
		} else {
		    $('#navbar').removeClass('fixed'); 
		}
	};
	 
	fixedNavigation();
	$(window).scroll(fixedNavigation);

	// $(".work-button").scrollTo('#work', 500, {offset: function() { return {top:-300}; }});
	$(".work-button").on("click", function(){
		$.scrollTo( $("#work"), 500);
	});
	
	$(".news-button").on("click", function(){
		$.scrollTo( $("#news"), 500);

	});$(".blog-button").on("click", function(){
		$.scrollTo( $("#blog"), 500);

	});$(".about-button").on("click", function(){
		$.scrollTo( $("#about"), 500);

	});$(".network-button").on("click", function(){
		$.scrollTo( $("#network"), 500);

	});$(".contact-button").on("click", function(){
		$.scrollTo( $("#contact"), 500);
	});

	$(".looneyTunes-button").on("click", function(){
		$.scrollTo( $("#header"), 500);
	});


	



})