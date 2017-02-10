var goal;
var random = function() {
	goal = Math.floor(Math.random() * (121-19) + 19)
}
var crystalValue = function() {
	return Math.floor(Math.random() * (13-1) + 1)
}
var score = 0
var win = 0
var lose = 0

/*
I first came up with a solution that had all of the crystals already built into the HTML
and which, in the JS, assigned each crystal its own value and click event.
However, I wanted to make use of some of the stuff I learned in the in-class activities,
such as automatically generating images and values with a loop and a more comprehensive 
click event using "this" to refer to whichever button was being used. I wasn't sure if I
should leave the other solution in, but I figured it wouldn't be a big deal to do so.

var crystalValue1 = crystalValue()
var crystalValue2 = crystalValue()
var crystalValue3 = crystalValue()
var crystalValue4 = crystalValue()*/

$ (document).ready( function() {
	random()

	$("#goalNum").text(goal)

	var crystalValues =[];

	for (var i = 0; i < 4; i++) {
		crystalValues.push(crystalValue());
	}

	for (var i = 0; i < crystalValues.length; i ++) {
		var crystalImage = $("<img>")
		crystalImage.addClass("clickMe")
		crystalImage.attr("id", "crystal"+i)
		crystalImage.attr("data-value", crystalValues[i])
		$("#crystalBox").append(crystalImage)
	}

	$("#crystal0").attr("src", "assets/images/Purple.png")
	$("#crystal1").attr("src", "assets/images/Green.png")
	$("#crystal2").attr("src", "assets/images/White.png")
	$("#crystal3").attr("src", "assets/images/Red.png")

	/*

	These are the click events and value assignemnts for the crystals
	that I commented out of the HTML.

	$("#crystalOne").attr("value", crystalValue1)
	$("#crystalOne").click( function() {
		score +=crystalValue1
		alert(score)
		$("#totalNum").text(score)
	})

	$("#crystalTwo").attr("value", crystalValue2)
	$("#crystalTwo").click( function() {
		score +=crystalValue2
		alert(score)
		$("#totalNum").text(score)
	})

	$("#crystalThree").attr("value", crystalValue3)
	$("#crystalThree").click( function() {
		score += crystalValue3
		alert(score)
		$("#totalNum").text(score)
	})

	$("#crystalFour").attr("value", crystalValue4)
	$("#crystalFour").click( function() {
		score +=crystalValue4
		alert(score)
		$("#totalNum").text(score)
	})*/


	$(".clickMe").click( function(){

		var points = $(this).attr("data-value");
		score += parseInt(points)
		$("#totalNum").text(score)

	if (score === goal) { 
		win++
		$("#wins").text("Wins: " + win)
		score = 0 
		$("#totalNum").text(score)
		random()
		$("#goalNum").text(goal);
	var crystalValues =[];

	for (var i = 0; i < 4; i++) {
		crystalValues.push(crystalValue());
	}

	for (var i = 0; i < crystalValues.length; i ++) {
		$("#crystal"+i).attr("data-value", crystalValues[i])
	}
		}

	else if (score > goal) { 
		lose++
		$("#losses").text("Losses: " + lose)
		score = 0
		$("#totalNum").text(score)
		random()
		$("#goalNum").text(goal);
	var crystalValues =[];

	for (var i = 0; i < 4; i++) {
		crystalValues.push(crystalValue());
	}

	for (var i = 0; i < crystalValues.length; i ++) {
		$("#crystal"+i).attr("data-value", crystalValues[i])
	}
		}

	});
});