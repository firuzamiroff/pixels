var avatars = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var avatarcolors = ["black", "#ab1d19", "#7ec5f9", "#cf629b", "#59a259", "#9334ad", "#fda500", "#797130"];
var avatar = randomNumber(0, avatars.length);
var avatarcolor = randomNumber(0, avatarcolors.length);
var data = {
	username: "",
	avatar: "",
	avatarcolor: ""
};

function randomNumber(min, max){
    const r = Math.random()*(max-min) + min
    return Math.floor(r)
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

//var n = $("#form-name")//, o = $("#lang-select")

$(".enter-button").click(function() {
	localStorage.setItem('username', JSON.stringify($("#form-name").val()));
	localStorage.setItem('avatar', JSON.stringify(avatars[avatar]));
	localStorage.setItem('avatarcolor', JSON.stringify(avatarcolors[avatarcolor]));
	document.location.href = "lounge/index.html";
});

//----
//Saving the username from input field to the Local Storage
//top.username=document.getElementById("name").value;
//localStorage.setItem('user', top.username);

//Getting out the username from the Local Storage
//document.getElementById('list').innerHTML =localStorage.getItem('user');
//----
//localStorage.setItem('arrayOfUserNames', JSON.stringify(['foo']))

//var arrayOfUserNames = JSON.parse(localStorage.getItem('arrayOfUserNames'))

//arrayOfUserNames.push('bar')

//localStorage.setItem('arrayOfUserNames', JSON.stringify(arrayOfUserNames))

//arrayOfUserNames = JSON.parse(localStorage.getItem('arrayOfUserNames'))

//console.log(arrayOfUserNames) 
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