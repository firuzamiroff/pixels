$(document).ready(function() {
	$(".logo-wrapper").click(function(){
		$(".logo-wrapper").toggleClass("on")
	});
});

var avatars = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
var avatarcolors = ["black", "red", "green", "blue", "ping"]
var avatar = 0
var avatarlink = ""
var avatarcolor = 0

$(".left").click(function() {
	avatar = avatar - 1;
	if (avatar<0) {
		avatar = 0;
		avatarlink = "img/avatar"+avatars[avatar]+".svg"
		$( ".avatar" ).attr("src",avatarlink);
	} else {
		avatarlink = "img/avatar"+avatars[avatar]+".svg"
		$( ".avatar" ).attr("src",avatarlink);
	}
});
$(".right").click(function() {
	avatar = avatar + 1;
	if (avatar>8) {
		avatar = 8;
		avatarlink = "img/avatar"+avatars[avatar]+".svg"
		$( ".avatar" ).attr("src",avatarlink);
	} else {
		avatarlink = "img/avatar"+avatars[avatar]+".svg"
		$( ".avatar" ).attr("src",avatarlink);
	}
});
$(".up").click(function() {
	avatarcolor = avatarcolor - 1;
	if (avatarcolor<0) {
		avatarcolor = 0;
		$( ".avatar" ).css("background-color", avatarcolors[avatarcolor]);
	} else {
		$( ".avatar" ).css("background-color", avatarcolors[avatarcolor]);
	}
});
$(".down").click(function() {
	avatarcolor = avatarcolor + 1;
	if (avatarcolor>4) {
		avatarcolor = 4;
		$( ".avatar" ).css("background-color", avatarcolors[avatarcolor]);
	} else {
		$( ".avatar" ).css("background-color", avatarcolors[avatarcolor]);
	}
});