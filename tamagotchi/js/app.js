// ===============================================================
// BEGIN CODE:
// ===============================================================

$('document').ready(function() {

// ===============================================================
// GLOBAL VARIABLES:
// ===============================================================

let seconds = 0;


// ===============================================================
// CONSTRUCTOR CREATING VARIABLES & VALUES OF 2.
// ===============================================================

class Tamagotchi {
	constructor(name) {
		this.name = name;
		this.sleepiness = 2;
		this.boredom = 2;
		this.age = 0;
		this.hunger = 2;
		this.love = 2;
	}
	hungry() {
		if(this.hunger >= 2) {
			this.hunger -= 2;
		}
	}
	sleepy() {
		if(this.sleepiness >= 2) {
			this.sleepiness -= 2;
		}
	}
	petting() {
		if (this.love >= 2) {
			this.love -= 2;
		}
	}
	playing () {
		if (this.boredom >= 2) {
			this.boredom -= 2;
		}
	}
}

// ===============================================================
// PET INSTANTIATED:
// ===============================================================

let pet = new Tamagotchi();

// ===============================================================
// START GAME:
// ===============================================================

$('body').on('click', '#startButton', function(){
	$('#startButton').remove();
	$('form').empty();
	$('.catStill').attr('src', 'images/cat2.gif');
	$('.liveStats').css("background-image", "url(images/life.gif)");
			setTimeout( 
			function moveRight() {
				$(".catStill").css({
					"transform": "scaleX(-1)"
				});
			    $(".catStill").animate({left: "+=70", top: "-=120", transform: "scaleX"}, 2000, function() {
			    		$(".catStill").animate({left: "+=200"}, 4000, function() {
			    			$(".catStill").css({
								"transform": "scaleX(1)"
						});
							$(".catStill").animate({left: "-=70", top: "+=120"}, 2000, function() {
				    			$(".catStill").animate({left: "-=200"}, 4000, function() {
									moveRight();
				    		});
				    	});
				    });
				});
			},500);
	const timePassing = () => {
	updateTamagotchi();
	seconds++;
		if(seconds % 7 == 0) {
			pet.hunger++;
			$('.hungry').empty().append(pet.hunger);
		}
		if(seconds % 11 == 0) {
			pet.sleepiness++;
			$('.sleepy').empty().append(pet.sleepiness);
		}
		if(seconds % 15 == 0) {
			pet.love++;
			$('.bored').empty().append(pet.love);
		}
		if(seconds % 9 == 0) {
			pet.boredom++;
			$('.feisty').empty().append(pet.boredom);
		}
		if(seconds % 17 == 0) {
			pet.age++;
			$('.aged').empty().append(pet.age);
			if(pet.age === 2) {
				$('.catStill').attr('src', 'images/cat.gif');
					alert("Your pet has morphed!");
			}
		}
		if(seconds % 7 == 0) {
			checkVitals();
		}
		if(pet.hunger >= 10 || pet.boredom >= 10 || pet.sleepiness >= 10 || pet.love >= 10) {
			$('.catStill').attr('src', 'images/dead.png');
			$('.liveStats').css("background-image", "url(images/life2.gif)");
				alert(`${pet.name} bit the bullet.`)
			$(".catStill").stop();
			clearInterval(timePasses);
			$('.changeStatDivs').empty();
			const $restartButton = $('<button class="refresh" value="Refresh Page" onClick="window.location.reload()">Start Over</button>');
			$('form	').text(`Sorry, ${pet.name} has died. Let's Play Again!`).append($('<br>')).append($restartButton);
		}
	}
	const timePasses = setInterval(timePassing, 1000);
});

// ===============================================================
// EVENT LISTENERS:
// ===============================================================


$('form').on('submit', (e) => {
	e.preventDefault();
	const userName = $('#input-box').val();
	$('.name').empty().append(userName);
	pet.name = userName;
	$('#nameButton').remove();
	$('#input-box').remove();
	const $startButton = $('<button id="startButton">START!</button>')
	$('form').empty().text("Ready?!").append($('<br>')).append($startButton);

});

$('.feed').on('click', () => {
	if (pet.hunger <= 1 || pet.sleepiness <= 1) {
		alert(`${pet.name} is gonna hurl!`);
		return
	}
		pet.hunger-= 1;
		pet.sleepiness+= 1;
		updateTamagotchi();
});

$('.sleep').on('click', () => {
	if (pet.sleepiness <= 1 || pet.hunger <= 1) {
		alert(`${pet.name} is bright-eyed and bushy-tailed!`);
		return
	}
		pet.sleepiness-= 1;
		pet.hunger+= 1;
		updateTamagotchi();

});

$('.pet').on('click', () => {
	if (pet.love <= 1 || pet.sleepiness <= 1 || pet.hunger <= 1) {
		alert(`${pet.name}'s heart is filled with love!`);
		return
	}
		pet.love-= 1;
		pet.sleepiness+= 1;
		pet.hunger+= 1;
		updateTamagotchi();

});

$('.play').on('click', () => {
	if (pet.boredom <= 1 || pet.hunger <= 1 || pet.love <= 1) {
		alert(`${pet.name} is all worn out!`);
		return
	}
		pet.hunger+= 1;
		pet.boredom-= 1;
		pet.love-= 1;
		updateTamagotchi();

});

// ===============================================================
// GLOBAL FUNCTIONS - CHECKING VITALS & UPDATING TAMAGOTCHI STATS:
// ===============================================================

function checkVitals() {
	if (pet.hunger === 8) {
	    alert(`${pet.name} is about to go "Donner Party" on someone. Feed ${pet.name} now!`);
	}
	if (pet.boredom === 7) {
	    alert(`${pet.name} is going stir crazy!`)
	}
	if (pet.sleepiness === 9) {
	    alert(`${pet.name} is falling asleep at the wheel!`)
	}
	if (pet.love === 6) {
	    alert(`${pet.name} is feeling neglected :( `)
	}
};

function updateTamagotchi() {
	$('.aged').text(pet.age);
	$('.hungry').text(pet.hunger);
	$('.bored').text(pet.boredom);
	$('.sleepy').text(pet.sleepiness);
	$('.feisty').text(pet.love);
};

// ===============================================================
// END CODE:
// ===============================================================

});











