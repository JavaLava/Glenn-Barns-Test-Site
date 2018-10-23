/* 
Copyright Oliver Perry 30/10/2013 
*/

$(document).ready(function() {
	slideCount = 0;
	leftAmount = 0;
	var id = "#slider";
	moveLeft(id);
	moveRight(id);
});

function moveLeft(id) {
	$("#slideLeftBtn").click(function(event){
		event.preventDefault();
		
		if (slideCount === 0) {
			document.getElementById("triangle-left").style.opacity = "0.5";
		} else {
			document.getElementById("triangle-right").style.opacity = "1";
			slideCount--;
			leftAmount = slideCount * -230;
			$(id).stop().animate({
				left: (leftAmount + "px")
			}, 0);
		}
	});
}

function moveRight(id) {
	$("#slideRightBtn").click(function(event){
		event.preventDefault();
		
		if (slideCount === 9) {
			document.getElementById("triangle-right").style.opacity = "0.5";
		} else {
			document.getElementById("triangle-left").style.opacity = "1";
			slideCount++;
			leftAmount = slideCount * -230;
			$(id).stop().animate({
				left: (leftAmount + "px")
			}, 0);
		}
	});
}