function setup() {
  createCanvas(900, 600, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(125);
  
  // Camera setup
  var xLoc = 0;
  var yLoc = 0;
  
  // var zLoc = ((sin(frameCount)+1)/2 * height) + 200; // Moves forwards and backwards
  // var zLoc = map(sin(frameCount), -1, 1, 200, 800); // Moves forwards and backwards (same)
  
  // Bumblebee movement
  // var xLoc = map(noise(frameCount/100), 0, 1, -500, 500);
  // var yLoc = map(noise(frameCount/100 + 100), 0, 1, -500, 500);
  // var zLoc = map(noise(frameCount/100 + 150), 0, 1, 300, 800);
  
  // Circling around the object
  // var xLoc = cos(frameCount) * height;
  // var yLoc = 0; 
  // var zLoc = sin(frameCount) * height;
  
  // Up and down movement 
  // var xLoc = cos(frameCount) * height;
  // var yLoc = sin(frameCount * 3) * 300;
  // var zLoc = sin(frameCount) * height;
  
  // Camera Parameters
  // Camera(locationOfCamera, CoordinateOfPointWhereCameraFaces, CameraUpVector);
  camera(xLoc, yLoc , zLoc, 0, 0, 0, 0, 1, 0);
  
  // Camera shaking head 
  // var xAim = sin(frameCount * 3) * 300;
  // camera(0, 0, height, xAim, 0, 0, 0, 1, 0);
  
  // Slanting to the right
  // camera(0, 0, height, 0, 0, 0, 1, 1, 0);
  
  // Object Setup
  normalMaterial();
  torus(150, 50, 50, 50);
  translate(0, 170, 0);
  rotateX(90);
  fill(200);
  plane(500, 500);
}