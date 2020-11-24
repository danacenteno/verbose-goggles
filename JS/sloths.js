$(function() {

	var userScore = [];

	$('a').smoothScroll();

	$("input[name='question1']").on("click", function(){
		$.smoothScroll({
			scrollTarget: "#question2"
		});
	});

	$("input[name='question2']").on("click", function(){
		$.smoothScroll({
			scrollTarget: "#question3"
		});
	});

	$("input[name='question3']").on("click", function(){
		$.smoothScroll({
			scrollTarget: "#question4"
		});
	});

	$("input[name='question4']").on("click", function(){
		$.smoothScroll({
			scrollTarget: "#question5"
		});
	});

	$("#scrollResults").on("click", function(){
		$.smoothScroll({
			scrollTarget: ".results"
		});
	});

	// Refreshes page when button is clicked
	$(".reset").on("click", function(){
		// location.reload();
		$("body").scrollTop(0);
		console.log("hi?");
	});

	$("form").submit(function(e) {
		e.preventDefault();

		$("input[type=radio]:checked").each(function(){
			var points = $(this).val();
			$(this).val("");

			if(points != ""){
				// parseInt is converting strings into integers yay!
				userScore.push(parseInt(points));
			}
		});

		console.log(userScore);

		// need to take userScore(array) and find the sum of this array

		var finalTotal = userScore.reduce(function(a,b){
			return a + b;
		});
			console.log(finalTotal);


		if (finalTotal <= 0 || finalTotal < 10){
			$(".results").html('<div class="sloth sloths"><p>You are...</p><img src="images/sloth-sloth.gif" alt="" class="gif"><div class="result-container"><img src="images/sloth-icon.png" alt="" class="icon"><h3 class="sloth-type">Sloth!</h3><img src="images/sloth-icon.png" alt="" class="icon"></div><p>Congratulations! You are one true sloth! You didn’t even bother filling out the quiz in its entirety. </p><button type="button" class="reset">Retake Quiz</button></div>');
		} else if (finalTotal <= 10 || finalTotal < 30) {
			$(".results").html('<div class="wrath sloths"><p>You are...</p><img src="images/wrath-sloth.gif" alt="" class="gif"><div class="result-container"><img src="images/wrath-icon.png" alt="" class="icon"><h3 class="sloth-type">Wrath!</h3><img src="images/wrath-icon.png" alt="" class="icon"></div><p>You are one sloth who is just full of rage. No one ever wants to see you angry… because it can get pretty terrifying.</p><button type="button" class="reset">Retake Quiz</button></div>');
		} else if (finalTotal <= 30 || finalTotal < 50) {
			$(".results").html('<div class="envy sloths"><p>You are...</p><img src="images/envy-sloth.gif" alt="" class="gif"><div class="result-container"><img src="images/envy-icon.png" alt="" class="icon"><h3 class="sloth-type">Envy!</h3><img src="images/envy-icon.png" alt="" class="icon"></div><p>You’re always looking at what the other sloths have. You’re never really happy with the tree that you own.</p><button type="button" class="reset">Retake Quiz</button></div>');
		} else if (finalTotal <= 50 || finalTotal < 70) {
			$(".results").html('<div class="pride sloths"><p>You are...</p><img src="images/pride-sloth.gif" alt="" class="gif"><div class="result-container"><img src="images/pride-icon.png" alt="" class="icon"><h3 class="sloth-type">Pride!</h3><img src="images/pride-icon.png" alt="" class="icon"></div><p>You think you’re the greatest sloth in the forest and you make sure everybody knows it!</p><button type="button" class="reset">Retake Quiz</button></div>');
		} else if (finalTotal <= 70 || finalTotal < 100) {
			$(".results").html('<div class="greed sloths"><p>You are...</p><img src="images/greed-sloth.gif" alt="" class="gif"><div class="result-container"><img src="images/greed-icon.png" alt="" class="icon"><h3 class="sloth-type">Greed!</h3><img src="images/greed-icon.png" alt="" class="icon"></div><p>You don’t really like to share your leaves with others. You take everything for yourself and leave nothing for your fellow sloth-mates.</p><button type="button" class="reset">Retake Quiz</button></div>');
		} else if (finalTotal <= 100 || finalTotal < 120) {
			$(".results").html('<div class="lust sloths"><p>You are...</p><img src="images/lust-sloth.gif" alt="" class="gif"><div class="result-container"><img src="images/lust-icon.png" alt="" class="icon"><h3 class="sloth-type">Lust!</h3><img src="images/lust-icon.png" alt="" class="icon"></div><p>Oh behave, you lusty sloth! You just don’t know how to keep your claws to yourself.</p><button type="button" class="reset">Retake Quiz</button></div>');
		}else if (finalTotal <= 120 || finalTotal <= 150) {
			$(".results").html('<div class="gluttony sloths"><p>You are...</p><img src="images/gluttony-sloth.gif" alt="" class="gif"><div class="result-container"><img src="images/gluttony-icon.png" alt="" class="icon"><h3 class="sloth-type">Gluttony!</h3><img src="images/gluttony-icon.png" alt="" class="icon"></div><p>You eat ALL the leaves and don\'t really know when to stop. You’ll probably keep eating until the branch you’re hanging onto ends up breaking.</p><button type="button" class="reset">Retake Quiz</button></div>');
		}

		// Clears radio buttons on submit and stops function

		// $("").on("click", function(){
		// 	$("form").trigger("reset");
		// });

		// Refreshes page when button is clicked
		$(".reset").on("click", function(){
			location.reload();
			$("html, body").animate({ scrollTop: 0 }, "slow");
		});
		
	});

});
