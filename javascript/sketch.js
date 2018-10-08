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

var hpCardAnimation, hrCardAnimation, hsCardAnimation;
var zpCardAnimation, zrCardAnimation, zsCardAnimation;
var playAnimation;

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
	
	randomNumberGenerator();
	
	// Canvas
	x = window.innerWidth;
	y = window.innerHeight;
	canvas = createCanvas(x, y);
    background(10);
    
    // Button's bar
    buttonSize = 150;
    buttonMargin = 5;
    
    rect(0, y - buttonSize, x, buttonSize);
    strokeWeight(4); // Line thickness
    line(0, y - buttonSize, x,  y - buttonSize); // Top line
    line(x/2, y - buttonSize, x/2, y); // Center line
        
    // Buttons
    hButton = createImg('images/icons/human.png');
    hButton.size(buttonSize - 10, buttonSize - 10);
    hButton.position((x/4)-75, y - buttonSize + buttonMargin);
    hButton.mousePressed(hFunction);
        
    zButton = createImg('images/icons/zombie.png');
    zButton.size(buttonSize - 20, buttonSize - 20);
    zButton.position((3*x/4)-75, y - buttonSize + buttonMargin);
    zButton.mousePressed(zFunction);
}
function draw() {
	if ( playAnimation == 1){
        fill(0);
        rect(0,0,window.innerWidth,window.innerHeight-150);
        animation(hrCardAnimation,500,520);
    } else if ( playAnimation == 2){
        fill(0);
        rect(0,0,window.innerWidth,window.innerHeight-150);
        animation(hpCardAnimation,500,520);
    } else if ( playAnimation == 3){
        fill(0);
        rect(0,0,window.innerWidth,window.innerHeight-150);
        animation(hsCardAnimation,500,520);
    } else if ( playAnimation == 4){
        fill(0);
        rect(0,0,window.innerWidth,window.innerHeight-150);
        animation(zrCardAnimation,500,520);        
    } else if ( playAnimation == 5){
        fill(0);
        rect(0,0,window.innerWidth,window.innerHeight-150);
        animation(zpCardAnimation,500,520);        
    } else if ( playAnimation == 6){
        fill(0);
        rect(0,0,window.innerWidth,window.innerHeight-150);
        animation(zsCardAnimation,500,520);        
    }
}
function deviceShaken() {
    // If game has started
    if (hasGameStarted == 1) {   
		sButton.remove();
		cButton.remove();
        if (isCharacterChosen == 1 ){
            if(rgn == 0) {
                playAnimation = 1;
                
            } else if(rgn == 1){
                playAnimation = 2;
                if (hpAudio.isPlaying() == 0) {
                    hpAudio.play();
                }
            } else if(rgn == 2){
                playAnimation = 3;
                if (hsAudio.isPlaying() == 0) {
                    hsAudio.play();
                }
            }
        } else if (isCharacterChosen == 2){
            if(rgn == 0) {
                playAnimation = 4;
                if (zrAudio.isPlaying() == 0) {
                    zrAudio.play();
                } 
            } else if(rgn == 1){
                playAnimation = 5;
                if (zpAudio.isPlaying() == 0) {
                    zpAudio.play();
                }
            } else if(rgn == 2){
                playAnimation = 6;
                if (zsAudio.isPlaying() == 0) {
                    zsAudio.play();
                }
            }
        }
    }
}

function randomNumberGenerator(){
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

function gFuntion() {
	// Create shake button
    sButton = createImg('images/shake.png');
    sButton.size(250, 150);
    sButton.position((x/2) - 125, ((y - buttonSize)/2) - 75);
	
	hasGameStarted = 1;
}
function hFunction() {
	// If character is not chosen, assign human tools to the Tools variable
    if (isCharacterChosen == 0) {		
		// Play audio
		if (hAudio.isPlaying() == 0) {
			hAudio.play();
		}
		
		// Create cButton
        cButton = createImg('images/cards/hCard1.png');
        cButton.size(309, 500);
        cButton.position((x/2) - 155, ((y - buttonSize)/2) - 250);
        cButton.mousePressed(gFuntion);
        
		// Set character as chosen (human)
        isCharacterChosen = 1;
    } 
}
function zFunction() {
	// If character is not chosen, assign zombie tools to the Tools variable
    if (isCharacterChosen == 0){
		// Play audio
		if (zAudio.isPlaying() == 0) {
			zAudio.play();
		}
	
		// Create cButton
        cButton = createImg('images/cards/hCard1.png');
        cButton.size(309, 500);
        cButton.position((x/2) - 155, ((y - buttonSize)/2) - 250);
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