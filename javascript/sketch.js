var canvas;
var x, y;

var hButton, zButton, cButton, sButton;
var buttonSize,buttonMargin;

var hasGameStarted;
var isCharacterChosen;

var hTools = [];
var zTools = [];
var Tools = [];


function preload() {
	// Preload all the tools
	// Human Tools
	for (var i = 0; i < 3; i++){
        hTools [i] = loadImage("images/hTools/htool" + i + ".png");
    }
	// Zombie Tools
	for (var i = 0; i < 3; i++){
        zTools [i] = loadImage("images/zTools/ztool" + i + ".png");
    }
}

function setup() {
	// Initializing
	cButton = 0; // cButton is not created yet
    sButton = 0; // sButton is not created yet
    isCharacterChosen = 0; // Character not chosen
	
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
	// Human Button
    hButton = createImg('images/icons/human.png');
    hButton.size(buttonSize - 10, buttonSize - 10);
    hButton.position((x/4)-75, y - buttonSize + buttonMargin);
	hButton.mousePressed(hFunction);

	// Zombie Button	
    zButton = createImg('images/icons/zombie.png');
    zButton.size(buttonSize - 20, buttonSize - 20);
    zButton.position((3*x/4)-75, y - buttonSize + buttonMargin);
	zButton.mousePressed(zFunction);
}

function draw() {
	// Do nothing
}

function gFuntion() {
	// Create shake button
    sButton = createImg('images/shake.png');
    sButton.size(250, 150);
    sButton.position((x/2) - 125, ((y - buttonSize)/2) - 75);
}

function hFunction() {
	// If character is not chosen, assign human tools to the Tools variable
    if (isCharacterChosen == 0) {
        Tools = hTools;
		
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
        Tools = zTools;
		
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
    if ( cButton != 0){
        cButton.remove();
    }
    hButton.remove();
    zButton.remove();
    setup();
}