Status = false;

function setup() {
  createCanvas(400, 400);
  video = createVideo("video.mp4");
  video.hide();
}

function draw() {
  background(220);
  image(video, 0, 0, 400, 400);
  if (Status == true) {
  objectDetector.detect(video, gotResults);
  }
}

function start() {
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function modelLoaded() {
  console.log("Model Loaded!");
  Status = true;
  video.loop();
  video.speed(1);
  video.volume(0);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  }
  console.log(results);
}