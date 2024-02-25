$(document).ready(function() {
	
$('#dark').mouseover(function(){
	$(this).css("background-color", "#808080")
});

$('#dark').mouseout(function(){
	$(this).css("background-color", "#000000")
});
	
$('#light').mouseover(function(){
	$(this).css("background-color", "#808080")
});

$('#light').mouseout(function(){
	$(this).css("background-color", "#000000")
});

		if (typeof(Storage) !== "undefined"){
		 if (localStorage.getItem("dark") == "true")
		 {
			$(".theme").css("background-color", "#383c42");
			$(".theme-card").css("background-color", "#565b61")
			$(".theme").css("color", "white");
			$(".theme-card").css("color", "white");
		 }
		 if (localStorage.getItem("dark") == "false")
		 {
			$(".theme").css("background-color", "rgb(255,255,255)");
			$(".theme").css("color", "black");
			$(".theme-card").css("background-color", "rgb(255,255,255)");
			$(".theme-card").css("color", "black");
		 }
		}
		else{
		 dark = false;
		}
		
		$('#dark').click(function(){
			$(".theme").css("background-color", "#383c42");
			$(".theme-card").css("background-color", "#565b61")
			$(".theme").css("color", "white");
			$(".theme-card").css("color", "white");
			localStorage.setItem("dark", "true");
		});
		$('#light').click(function(){
			$(".theme").css("background-color", "rgb(255,255,255)");
			$(".theme").css("color", "black");
			$(".theme-card").css("background-color", "rgb(255,255,255)");
			$(".theme-card").css("color", "black");
			localStorage.setItem("dark", "false");
		});
		
		$('.clickable').click(function(){
			$(".clickable").css("width", "1000px");
				
		});

		$('.overlay-img-button').click(function(){
			$(".menuOverlay").css("display", "block");
		});
		$('.menuOverlay').click(function(){
			$(".menuOverlay").css("display", "none");
		});
});

$(window).on('load', function() {
	$('div.shown').fadeIn("fast");
	$('p').fadeIn("fast");
	$('h1').fadeIn();
});