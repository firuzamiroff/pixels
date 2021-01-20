var avatars = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var avatarcolors = ["black", "#ab1d19", "#7ec5f9", "#cf629b", "#59a259", "#9334ad", "#fda500", "#797130"];
var avatar = randomNumber(0, avatars.length);
var avatarcolor = randomNumber(0, avatarcolors.length);
var user = {
	name: "",
	lang: "",
	avatar: "",
	avatarcolor: ""
};

function randomNumber(min, max){
    const r = Math.random()*(max-min) + min
    return Math.floor(r)
}

function myFunction() {
	$(".settings").css("display", "block");
}



$(".left").click(function() {
	console.log("left")
	avatar--;
	if (avatar< 0) {
		avatar = avatars.length-1;
		$(".avatar").attr("src", "img/avatar"+avatars[avatar]+".svg");
	} else {
		$(".avatar").attr("src", "img/avatar"+avatars[avatar]+".svg");
	}
});

$(".right").click(function() {
	console.log("right")
	avatar++;
	if (avatar>avatars.length-1) {
		avatar -= avatars.length;
		$(".avatar").attr("src", "img/avatar"+avatars[avatar]+".svg");
	} else {
		$(".avatar").attr("src", "img/avatar"+avatars[avatar]+".svg");
	}
});

$(".up").click(function() {
	console.log("up")
	avatarcolor--;
	if (avatarcolor < 0) {
		avatarcolor = avatarcolors.length-1;
		$(".avatar").css("background-color", avatarcolors[avatarcolor]);
		$( ".avatar" ).css("box-shadow", " 0 0 0 5px " + avatarcolors[avatarcolor]);
	} else if (avatarcolor === 0) {
		$(".avatar").css("background-color", avatarcolors[avatarcolor]);
		$( ".avatar" ).css("box-shadow", " 0 0 0 5px " + "#333");
	} else {
		$(".avatar").css("background-color", avatarcolors[avatarcolor]);
		$( ".avatar" ).css("box-shadow", " 0 0 0 5px " + avatarcolors[avatarcolor]);
	}
});

$(".down").click(function() {
	console.log("down")
	avatarcolor++;
	if (avatarcolor > avatarcolors.length-1) {
		avatarcolor = avatarcolor - avatarcolors.length;
		$(".avatar").css("background-color", avatarcolors[avatarcolor]);
		$( ".avatar" ).css("box-shadow", " 0 0 0 5px " + "#333");
	} else {
		$(".avatar").css("background-color", avatarcolors[avatarcolor]);
		$( ".avatar" ).css("box-shadow", " 0 0 0 5px " + avatarcolors[avatarcolor]);
	}
});

$(document).ready(function() {
	$(".logo-wrapper").click(function(){
		$(".logo-wrapper").toggleClass("on")
	});
	$( ".avatar" ).attr("src", "img/avatar"+avatars[avatar]+".svg");
	$( ".avatar" ).css("background-color", avatarcolors[avatarcolor]);

	if (avatarcolor === 0) {
		$( ".avatar" ).css("box-shadow", " 0 0 0 5px " + "#333");
	} else {
		$( ".avatar" ).css("box-shadow", " 0 0 0 5px " + avatarcolors[avatarcolor]);
	}
});

