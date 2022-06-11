status1 = false;

function setup() {
  createCanvas(400, 400);
  video = createVideo("video.mp4");
  video.hide();
}

function draw() {
  background(220);
  image(video, 0, 0, 400, 400);
}

function start() {
  objectDetector = ml5.objectDetector('cocossd',modelLoaded);
}

function modelLoaded() {
  console.log("Model Loaded!");
  status1 = true;
  video.loop();
  video.speed(1);
  video.volume(1);
}