
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
$('#light').click(function(){
	$(".theme").css("background-color", "rgb(255,255,255)");
	$(".theme").css("color", "black");
	$(".theme-card").css("background-color", "rgb(255,255,255)");
	$(".theme-card").css("color", "black");
	//localStorage.setItem("dark", "false");
	});
		
});


$(window).on('load', function() {


	$('div').fadeIn("fast");
	$('p').fadeIn("fast");
	$('h1').fadeIn("fast");
	$('.card').fadeIn("slow");
});