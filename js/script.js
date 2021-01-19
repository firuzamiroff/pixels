$(document).ready(function() {
	$(".logo-wrapper").click(function(){
		$(".logo-wrapper").toggleClass("on")
	});
});

var avatars = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
var avatar = 0
$(".left").click(function() {
	console.log("Left")
	avatar = avatar - 1
	console.log(avatar)
	console.log(avatars[avatar])
});
$(".right").click(function() {
	console.log("Right")
	avatar = avatar + 1
	console.log(avatar)
	console.log(avatars[avatar])
});
$(".up").click(function() {
	console.log("Up")
});
$(".down").click(function() {
	console.log("Down")
});