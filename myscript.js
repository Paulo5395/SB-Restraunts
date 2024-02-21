
$(document).ready(function() {

$('#dark').click(function(){
	$(".a").css("background-color", "rgb(20,20,20)");
	
	});
	$('#light').click(function(){
	$(".a").css("background-color", "rgb(255,255,255)");
	});
	/*$("button").click(function(){
	$(body).css("background-color", "black");
	});*/
});

$(window).on('load', function() {


	$('div').fadeIn("fast");
	$('p').fadeIn("fast");
	$('h1').fadeIn("fast");
	
});