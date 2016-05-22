	$(function(){
		var mouseIn = function(){
			$(this).find("a").addClass("animated pulse");
			//console.debug($(this).find("a"));
			$("#h1").addClass("animated pulse");
			$("#l2").addClass("animated pulse");
		};
		var mouseOut = function(){
			$(this).find("a").removeClass("animated pulse");
			$("#h1").removeClass("animated pulse");
			$("#l2").removeClass("animated pulse");
		};
		$(".menulist > li").hover(mouseIn, mouseOut);
	
	
	
		$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		items:1,
		   });
	
});	
	