
$(document).ready(function() {
// if (typeof(Storage) !== "undefined"){
//  if (localStorage.getItem("dark") == "true")
//  {
//  	// $(".theme").css("background-color", "#383c42");
// 	// $(".theme-card").css("background-color", "#565b61");
//  }
//  if (localStorage.getItem("dark") == "false")
//  {
//  	// $(".theme").css("background-color", "#ffffff");
// 	// $(".theme-card").css("background-color", "#ffffff");
//  }
// }
// else{
//  dark = false;
// }

$('#dark').click(function(){
	$(".theme").css("background-color", "#383c42");
	$(".theme-card").css("background-color", "#565b61")
	$(".theme").css("color", "white");
	$(".theme-card").css("color", "white");
	//localStorage.setItem("dark", "true");
	});
	
$('#dark').mouseover(function(){
	$(this).css("background-color", "#808080")
});

$('#dark').mouseout(function(){
	$(this).css("background-color", "#000000")
});
	
$('#light').click(function(){
	$(".theme").css("background-color", "rgb(255,255,255)");
	$(".theme").css("color", "black");
	$(".theme-card").css("background-color", "rgb(255,255,255)");
	$(".theme-card").css("color", "black");
	//localStorage.setItem("dark", "false");
	});
	
$('#light').mouseover(function(){
	$(this).css("background-color", "#808080")
});

$('#light').mouseout(function(){
	$(this).css("background-color", "#000000")
});

});

$(window).on('load', function() {
	$('div').fadeIn("fast");
	$('p').fadeIn("fast");
	$('h1').fadeIn();
});