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

	// $(".work-button").scrollTo('#work', 2000, {offset: function() { return {top:-300}; }});
	$(".work-button").on("click", function(){
		$.scrollTo( $("#work"), 1000).offset(500);
	});
	
	$(".news-button").on("click", function(){
		$.scrollTo( $("#news"), 1000);

	});$(".blog-button").on("click", function(){
		$.scrollTo( $("#blog"), 1000);

	});$(".about-button").on("click", function(){
		$.scrollTo( $("#about"), 1000);

	});$(".network-button").on("click", function(){
		$.scrollTo( $("#network"), 1000);

	});$(".contact-button").on("click", function(){
		$.scrollTo( $("#contact"), 1000);
	});

	$(".looneyTunes-button").on("click", function(){
		$.scrollTo( $("#header"), 1000);
	});


	



})