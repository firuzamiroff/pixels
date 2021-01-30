$(document).ready(function() {
	const myData = JSON.parse(localStorage.getItem('User'));
	$(".avatar").attr("src", "../img/avatar"+ myData["avatar"] +".svg");
	$(".avatar").css("background-color", myData["avatarcolor"]);
	$(".name").text(myData["username"]);
});

$(".create-room").click(function() {
	document.location.href = "../createroom/index.html";
});

$(".room-name").click(function() {
	document.location.href = "../chat/index.html";
});