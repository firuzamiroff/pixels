var avatars = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var avatarcolors = ["black", "#ab1d19", "#7ec5f9", "#cf629b", "#59a259", "#9334ad", "#fda500", "#797130"];
var avatarborders = ["#333", "#ab1d19", "#7ec5f9", "#cf629b", "#59a259", "#9334ad", "#fda500", "#797130"];
var avatar = randomNumber(0, avatars.length);
var avatarcolor = randomNumber(0, avatarcolors.length);

//Random Number
function randomNumber(min, max){
    const r = Math.random()*(max-min) + min
    return Math.floor(r)
}
//Arrows Logic
function arrows(direction) {
	if (direction === "Left" || direction === "Right") {
		if (direction === "Left") {
			avatar--;
			if (avatar < 0) {avatar = avatars.length-1;}
		} else if (direction === "Right") {
			avatar++;
			if (avatar>avatars.length-1) {avatar -= avatars.length;}
		}
		$(".avatar").attr("src", "img/avatar"+avatars[avatar]+".svg");
	} else if (direction === "Up" || direction === "Down") {
		if (direction === "Up") {
			avatarcolor--;
			if (avatarcolor < 0) {avatarcolor = avatarcolors.length-1;}
		} else if (direction === "Down") {
			avatarcolor++;
			if (avatarcolor > avatarcolors.length-1) {avatarcolor = avatarcolor - avatarcolors.length;}
		}
		$(".avatar").css("background-color", avatarcolors[avatarcolor]);
		$( ".avatar" ).css("box-shadow", " 0 0 0 5px " + avatarborders[avatarcolor]);
	}
}

$(document).ready(function() {
	//Random Avatar when site Open
	$(".avatar").attr("src", "img/avatar"+avatars[avatar]+".svg");
	$(".avatar").css("background-color", avatarcolors[avatarcolor]);
	$(".avatar").css("box-shadow", " 0 0 0 5px " + avatarborders[avatarcolor]);
	//Logo Animation
	$(".logo-wrapper").click(function(){$(".logo-wrapper").toggleClass("on")});
	//Arrows Logic
	$(".left").click(function() {arrows("Left");});
	$(".right").click(function() {arrows("Right");});
	$(".up").click(function() {arrows("Up");});
	$(".down").click(function() {arrows("Down");});
	//Save Data in localStorage
	$(".enter-button").click(function() {
		var UserData = {
			'username': $("#form-name").val(),
			'avatar': avatars[avatar],
			'avatarcolor': avatarcolors[avatarcolor],
			'avatarborder': avatarborders[avatarcolor]
		}
		localStorage.setItem('User', JSON.stringify(UserData));
		document.location.href = "lounge/index.html";
	});
});

//var n = $("#form-name")//, o = $("#lang-select")

//---
// General syntax for storing data
//localStorage.setItem('key', 'value');
// Also note that both the key & the value has to be strings. So we stringify the value(if it's an object) before setting it.

// So, if you have an object as a value that you want to save, stringify it like this
//localStorage.setItem('some-key', JSON.stringify(itemData));

// OR for individual key-value pairs
//localStorage.setItem('some-key', JSON.stringify({ token: token, name: name }));

// To retrieve data from localstorage
//const myData = JSON.parse(localStorage.getItem('some-key'));

// To remove a value/item from localStorage
//localStorage.removeItem("some-key");


// see a note at the end of this answer for tips about 
// using an angular package for a cleaner & smoother storage usage.