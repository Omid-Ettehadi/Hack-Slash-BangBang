var canvas;
var x, y;

var buttonSize,buttonMargin;
var hButton, zButton;

function preload() {
	
}

function setup() {
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
    hButton = createImg('images/human.png');
    hButton.size(buttonSize - 10, buttonSize - 10);
    hButton.position((x/4)-75, y - buttonSize + buttonMargin);

	// Zombie Button	
    zButton = createImg('images/zombie.png');
    zButton.size(buttonSize - 20, buttonSize - 20);
    zButton.position((3*x/4)-75, y - buttonSize + buttonMargin);
}

function draw() {
	// Do nothing
}

function windowResized() {
    setup();   
}