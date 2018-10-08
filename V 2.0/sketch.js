//Rock Paper Scissors simple version

// I'm going to make a simple shake, play sprite and sound, click to reset- gun reload sound

//set the variables I need for the sprites

var rgn, cardStart, cardRevealONE, cardRevealTWO, cardRevealTHREE, humImg01, humImg02, humImg03;


//two wonderful variables I made and these are now ready to show up in the game,
//Wow I'm doing this

// Lets start preloading the assets

function preload() {
	// lets load the sprites and images here -- isn't that lovely

	cardStart = loadAnimation('images/cardStart01.png','images/cardStart02.png'); // shows when the app starts
	
	cardRevealONE = loadAnimation('images/cardFlip01.png','images/cardFlip03.png','images/card1.png');
	cardRevealTWO = loadAnimation('images/cardFlip01.png','images/cardFlip03.png','images/card2.png');
	cardRevealTHREE = loadAnimation('images/cardFlip01.png','images/cardFlip03.png','images/card3.png');

	// Need to now load the sounds here

	soundReady = loadSound('sounds/ready.mp3');
	fire = loadSound('sounds/fire.mp3');
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  
   
  
  
}

function draw() {
  

}


function deviceShaken() {

	rgn = Math.round(random(0,300)); // Assign number from randomGenerator
    if ( rgn > 200 ) {
        rgn = 2;
    } else if ( rgn > 100) {
        rgn = 1;
    } else {
        rgn = 0;
    }


 	//cardStart.remove();
 	background(64, 64, 64);
 	if (rgn === 1) {
 		animation(cardRevealONE,200,250);
 		cardReveal.play();
	 	if ( fire.isPlaying() ) { // .isPlaying() returns a boolean
	    	fire.pause(); // .play() will resume from .pause() position
	 	}
    }
    if (rgn === 2) {
 		animation(cardRevealTWO,200,250);
 		cardReveal.play();
	 	if ( fire.isPlaying() ) { // .isPlaying() returns a boolean
	    	fire.pause(); // .play() will resume from .pause() position
	 	}

	 }
	 if (rgn === 0) {
 		animation(cardRevealTHREE,200,250);
 		cardReveal.play();
	 	if ( fire.isPlaying() ) { // .isPlaying() returns a boolean
	    	fire.pause(); // .play() will resume from .pause() position
	 	}
	 }


  
}
 








