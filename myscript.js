
$(document).ready(function() {
if (typeof(Storage) !== "undefined"){
 if (localStorage.getItem("dark") == "true")
 {
 	$(".a").css("background-color", "rgb(20,20,20)");
 }
 if (localStorage.getItem("dark") == "false")
 {
 	$(".a").css("background-color", "rgb(255,255,255)");
 }
}
else{
 dark = false
}

$('#dark').click(function(){
	$(".a").css("background-color", "rgb(20,20,20)");
		localStorage.setItem("dark", "true");
	});
$('#light').click(function(){
	$(".a").css("background-color", "rgb(255,255,255)");
	localStorage.setItem("dark", "false");
	});
		
});


$(window).on('load', function() {


	$('div').fadeIn("fast");
	$('p').fadeIn("fast");
	$('h1').fadeIn("fast");
	$('.card').fadeIn("slow");

});