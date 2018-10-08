var canvas;
var x, y;

var hButton, zButton, cButton, sButton;
var buttonSize,buttonMargin;

var rgn;

var hasGameStarted;
var isCharacterChosen;

var zAudio, hAudio;
var hrAudio, hpAudio, hsAudio;
var zrAudio, zpAudio, zsAudio;
var audioPlay, memory;

var hpCardAnimation, hrCardAnimation, hsCardAnimation;
var zpCardAnimation, zrCardAnimation, zsCardAnimation;
var playAnimation;

var t;


function preload() {
	// Preload all animationsthe
	hpCardAnimation = loadAnimation('images/cards/hCard1.png','images/cards/hCard2.png','images/cards/hCard3.png', 'images/cards/hPaper.png');
    hrCardAnimation = loadAnimation('images/cards/hCard1.png','images/cards/hCard2.png','images/cards/hCard3.png', 'images/cards/hRock.png');
    hsCardAnimation = loadAnimation('images/cards/hCard1.png','images/cards/hCard2.png','images/cards/hCard3.png', 'images/cards/hScissor.png');
    zpCardAnimation = loadAnimation('images/cards/zCard1.png','images/cards/zCard2.png','images/cards/zCard3.png', 'images/cards/zPaper.png');
    zrCardAnimation = loadAnimation('images/cards/zCard1.png','images/cards/zCard2.png','images/cards/zCard3.png', 'images/cards/zRock.png');
    zsCardAnimation = loadAnimation('images/cards/zCard1.png','images/cards/zCard2.png','images/cards/zCard3.png', 'images/cards/zScissor.png');
	
	// Load all sound files
    soundFormats('mp3', 'ogg', 'm4a');
    zAudio = loadSound("audios/zombie.mp3");
    hAudio = loadSound("audios/human.mp3");
    hrAudio = loadSound("audios/hRock.mp3");
    hpAudio = loadSound("audios/hPaper.mp3");
    hsAudio = loadSound("audios/hScissor.mp3");
    zrAudio = loadSound("audios/zRock.mp3");
    zpAudio = loadSound("audios/zPaper.mp3");
    zsAudio = loadSound("audios/zScissor.mp3"); 
}
function setup() {
	getAudioContext().resume();
    
	// Initializing
	cButton = 0; // cButton is not created yet
    sButton = 0; // sButton is not created yet
    isCharacterChosen = 0; // Character not chosen
	hasGameStarted = 0; // Game has not started
	playAnimation = 0; // No animation to be shown
	audioPlay = 0; // Don't start the sound effect
	memory = 0; // No audio has been played
	t = 0; // has not be given a value
	
	randomNumberGenerator();
	
	// Canvas
	x = window.innerWidth;
	y = window.innerHeight;
	canvas = createCanvas(x, y);
    background(10);
    
    // Buttons
    var bWidth, bHeight; // adjustable size for picture's width and height
    bWidth = (x/3);
    bHeight = (x/3)*1.25;
    hButton = createImg('images/cards/hCard0.png');
    hButton.size( bWidth , bHeight);
    hButton.position((x/2)-(bWidth+25), (y/2)-(bHeight/2));
    hButton.mousePressed(hFunction);
        
    zButton = createImg('images/cards/zCard0.png');
    zButton.size( bWidth , bHeight);
    zButton.position((x/2)+25, (y/2)-(bHeight/2));
    zButton.mousePressed(zFunction);
}
function draw() {
	// Call timer
    timer();
    if ( playAnimation == 1){
        background(10);
        animation(hrCardAnimation,(x/2),(y/2));
		// Only play audio after timer is passed
        if (audioPlay == 1 ){
			// Make sure audio is not already playing
			// Make sure the audio isonly played once
            if (hrAudio.isPlaying() == 0 && memory == 0) {
                hrAudio.play();
                memory = 1;
            }
        }
    } else if ( playAnimation == 2){
        background(10);
        animation(hpCardAnimation,(x/2),(y/2));
		// Only play audio after timer is passed
        if (audioPlay == 1 ){
			// Make sure audio is not already playing
			// Make sure the audio isonly played once
            if (hpAudio.isPlaying() == 0 && memory == 0) {
                hpAudio.play();
                memory = 1;
            }  
        }
    } else if ( playAnimation == 3){
        background(10);
        animation(hsCardAnimation,(x/2),(y/2));
		// Only play audio after timer is passed
        if (audioPlay == 1 ){
			// Make sure audio is not already playing
			// Make sure the audio isonly played once
            if (hsAudio.isPlaying() == 0 && memory == 0) {
                hsAudio.play();
                memory = 1;
            }
        }  
    } else if ( playAnimation == 4){
        background(10);
        animation(zrCardAnimation,(x/2),(y/2));
		// Only play audio after timer is passed
        if (audioPlay == 1 ){
			// Make sure audio is not already playing
			// Make sure the audio isonly played once
            if (zrAudio.isPlaying() == 0 && memory == 0) {
                zrAudio.play();
                memory = 1;
            }
        }
    } else if ( playAnimation == 5){
        background(10);
        animation(zpCardAnimation,(x/2),(y/2));
		// Only play audio after timer is passed
        if (audioPlay == 1 ){
			// Make sure audio is not already playing
			// Make sure the audio isonly played once
            if (zpAudio.isPlaying() == 0 && memory == 0) {
                zpAudio.play();
                memory = 1;
            }
        }
    } else if ( playAnimation == 6){
        background(10);
        animation(zsCardAnimation,(x/2),(y/2));
		// Only play audio after timer is passed
        if (audioPlay == 1 ){
			// Make sure audio is not already playing
			// Make sure the audio isonly played once
            if (zsAudio.isPlaying() == 0 && memory == 0) {
                zsAudio.play();
                memory = 1;
            }
        } 
    }
}
function deviceShaken() {
    // If game has started
    if (hasGameStarted == 1) {
		// remove previous buttons
        sButton.remove();
        cButton.remove();
		sButton = 0;
        cButton = 0;
        
		// Is character human
        if (isCharacterChosen == 1){
            if(rgn == 0) {
                playAnimation = 1;
                t = second();
            } else if(rgn == 1){
                playAnimation = 2;
                t = second();
            } else if(rgn == 2){
                playAnimation = 3;
                t = second();
            }
        }
		// Is character zombie		
		else if (isCharacterChosen == 2){
            if(rgn == 0) {
                playAnimation = 4;
                t = second();
            } else if(rgn == 1){
                playAnimation = 5;
                t = second();
            } else if(rgn == 2){
                playAnimation = 6;
                t = second();
            }
        }
    }
}

function randomNumberGenerator() {
    // Assign number from randomGenerator
    rgn = Math.round(random(0,300));
    if ( rgn > 200 ) {
        rgn = 2;
    } else if ( rgn > 100) {
        rgn = 1;
    } else {
        rgn = 0;
    }
}
function timer() {
    var tt = 1;
    if (t != 0) {
        if (second() - t > tt || t - second() > (59 - tt) ){
            audioPlay = 1;
        }
    }
}

function gFuntion() {
	// Create shake button
    sButton = createImg('images/shake.png');
    sButton.size(500, 300);
    sButton.position((x/2) - 250, ((y/2) - 150));
	
	hasGameStarted = 1;
}
function hFunction() {
	// Remove previous buttons
	hButton.remove();
    zButton.remove();
	hButton = 0;
    zButton = 0;
	
	// If character is not chosen, assign human tools to the Tools variable
    if (isCharacterChosen == 0) {		
		// Play audio
		if (hAudio.isPlaying() == 0) {
			hAudio.play();
		}
		
		// Create cButton
        cButton = createImg('images/cards/hCard1.png');
        cButton.size(618, 1000);
		cButton.position((x/2) - 309, ((y/2) - 500));
		cButton.mousePressed(gFuntion);
        
		// Set character as chosen (human)
        isCharacterChosen = 1;
    } 
}
function zFunction() {
	// Remove previous buttons
	hButton.remove();
    zButton.remove();
	hButton = 0;
    zButton = 0;
	
	// If character is not chosen, assign zombie tools to the Tools variable
    if (isCharacterChosen == 0){
		// Play audio
		if (zAudio.isPlaying() == 0) {
			zAudio.play();
		}
	
		// Create cButton
        cButton = createImg('images/cards/hCard1.png');
        cButton.size(618, 1000);
		cButton.position((x/2) - 309, ((y/2) - 500));
		cButton.mousePressed(gFuntion);
        
		// Set character as chosen (zombie)
        isCharacterChosen = 2;
    }
}

function windowResized() {
    // Check if cButton is created, if so remove it
    if ( cButton != 0){
        cButton.remove();
    }
    // Check if sButton is created, if so remove it
    if ( sButton != 0){
        sButton.remove();
    }
    // Check if hButton is created, if so remove it
    if ( hButton != 0){
        hButton.remove();
    }
    // Check if zButton is created, if so remove it
    if ( zButton != 0){
        zButton.remove();
    }
    // Run setup again to reset the application
    setup();
}