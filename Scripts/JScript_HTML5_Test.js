/*
	Copyright Oliver Perry 22/11/2013
*/

$(document).ready(function() {
	if (!document.createElement("video").canPlayType) {
		document.getElementById("html, body").style.opacity = "0.2";
		alert("Your browser is out of date. Please update it to unlock all the features of this site.");
	}
});