$(document).ready(function() {
	const myData = JSON.parse(localStorage.getItem('User'));
	$(".avatar").attr("src", "../img/avatar"+ myData["avatar"] +".svg");
	$(".avatar").css("background-color", myData["avatarcolor"]);
	$(".name").text(myData["username"]);
});