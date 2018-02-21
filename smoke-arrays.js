var x = [];
var y = [];
var r = [];
var ySpeed = [];
var xSpeed = [];

function setup() {
  createCanvas(400, 400);
	for(var i = 0; i<200; i= i+1)
	{
		x[i] = 210;
		y[i] = 290;
		r[i] = 0
		ySpeed[i] = random(1,7);
		xSpeed[i] = random(-2,2);
	}
}
  
function draw() {
  background(0);
  noStroke();

  // draw smokestack
  fill(255);
	rect(195, height, 30, -100);

	for(var i = 0; i<200; i=i+1){
		 push();
		 fill(y[i]);
		 translate(x[i], y[i]);
		 rotate(r[i]);
		 rect(-10, -10, 20, 20);
		 pop();
	
		 
	}
	
	
  

  // save graphics state
 
  // darker as it gets closer to 0
 
  // rotate r around (x,y)
  
  
  // draw rectangle
  
  // reset rotation and translation
  for (var i = 0; i<200; i = i+1)
	{
		y[i] -= ySpeed[i];
		x[i] += xSpeed[i];
		r[i] += .05;
	}
  for (var i =0; i<200; i = i+1)
	{
		if (y[i] < -150) {
    y[i] = 290;
		x[i] = 210;
		}
		
  
		
	}
 
  
}
