var x = []
var y = []
var d = []
var c1 = []
var c2 = []
var c3 = []
var r = []


function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
	for (var i = 0; i<100; i= i+1){
		x[i] = random(400);
		y[i] = random(400);
		d[i] = 10
		c1[i] = random(255);
		c2[i] = random(255);
		c3[i] = random(255);
		r[i] = random(0,.005)
	}
	
}
  
function draw() {
  background(255);
  noStroke();

  // draw two ellipses
  
	for (var i = 0; i<100; i++){
		fill(c1[i], c2[i], c3[i]);
		ellipse(x[i],y[i],d[i]);
	}

  for (var i = 0; i<100; i++){
		if (random() < r[i])
		{
			d[i] = random(10,400);
		}
	}
	
}
