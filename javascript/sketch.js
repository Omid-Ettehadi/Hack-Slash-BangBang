var canvas;
var x, y;

function preload() {
	
}

function setup() {
	x = window.innerWidth;
	y = window.innerHeight;
	canvas = createCanvas(x, y);
    background(50);
}

function draw() {
	
}

function windowResized() {
    setup();   
}