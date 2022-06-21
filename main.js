Status = false;
object = [];
video = ""; 

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
    for (i = 0; i < object.length; i++) {
      document.getElementById("status").innerHTML = "Object Detected";
      document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : " + object.length;

      fill(255, 0, 0);
      percent = floor(object[i].confidence * 100);
      text(object[i].label + " " + percent + "%", object[i].x + 15, object[i].y + 15);
      noFill();
      stroke(255, 0, 0);
      rect(object[i].x, object[i].y, object[i].width, object[i].height);
  }
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
  object = results;
}
