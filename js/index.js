$(window).scroll(function(evt){
  if ($(window).scrollTop()>0)
    $(".navbar").removeClass("navbar-top");
  else
    $(".navbar").addClass("navbar-top");
  
});
var s = skrollr.init();

$(document).ready(function(){
  $("#tohead").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#head").offset().top
   		}, 800);
	});
	$("#toask").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#ask").offset().top
   		}, 800);
	});
	$("#tostory").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#story").offset().top
   		}, 800);
	});
	$("#toabout").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#about").offset().top
   		}, 800);
	});
  $("#tofuture").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#future").offset().top
   		}, 800);
	});
})