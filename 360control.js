// window.addEventListener('load', initControl, false);

var canvas = document.getElementById("clickCanvas");
var ctx = canvas.getContext("2d");

var image = new Image()
image.src = 'images/bay360Sprint.png';

var frames = 100;
var bottomFrame = 1;
var currentFrame;
var currentFrame = bottomFrame;
var click = false;
var width = 109;
var height = 81.75;
var B;
var ALPHA;
var DIFF = 0;

// ctx.clearRect(0, 0, width, height);
ctx.drawImage(image, 0, height * currentFrame, width, height, 0, 0, width, height);
// ??WHy currentFram * height??


function initControl() {
	var X = [];
	var DELTA; 

	// var ALPHA2 =
	canvas.addEventListener("mousedown", doMouseDown, false);

	function doMouseDown (event) {
		X[0] = event.pageX;
		canvas.addEventListener("mousemove",mouseX, false);
		//set initial X == currentMouse Location
		

		document.body.addEventListener("mouseup", mouseUp, false);
		
	};	
	function mouseUp(event) {
		// document.body.removeEventListener("mouseup", mouseUp, false);
	  canvas.removeEventListener("mousemove",mouseX, false);
	  console.log("alpha2 -> " + ALPHA2);
	};



	function mouseX (event) {
	    // event.preventDefault();
	    var canvasX = event.pageX;
	    X[1] = canvasX;


	  	A = ALPHA;
	  	DIFF = X[0] - X[1];

	  	// ALPHA = Math.abs(DIFF);
	  	ALPHA = DIFF;

	  	B = ALPHA;
	  	console.log("A - B = " + (A - B));
	  // if (A != B){
	  			if (B < A){
	  	  		// ALPHA++;
	  	  		if (currentFrame === frames ) {
	  	  			currentFrame = 1;
	  	  		} currentFrame++;
	  	  	} console.log("currentFrame1 = " + currentFrame)
	  	  	if (B > A) {
	  	  		if (currentFrame < bottomFrame ) {//or TRY 1 here...> see helmetLoop
	  	  			currentFrame = frames;
	  	  		} currentFrame--;
	  	  		console.log("ALPHA06 =>" + ALPHA);
	  	  	} console.log("currentFrame2 = " + currentFrame)
	  	  	var ALPHA2 = ALPHA;	
	  	  	console.log("currentFrame3 = " + currentFrame)
	  	  	console.log("ALPHA##2 => " + ALPHA);
	  	  	ctx.clearRect(0, 0, width, height);
	  	  	ctx.drawImage(image, 0, height * currentFrame, width, height, 0, 0, width, height);
	  	  	console.log("alpha2 -> " + ALPHA2);
	  	  	//WHATS THIS???
	  	  	X[1] = X[0];////
	  // }

	}

}
