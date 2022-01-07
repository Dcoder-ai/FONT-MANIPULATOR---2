function setup() {
    video = createCapture(VIDEO);
    video.size(560,510);
    canvas = createCanvas(500, 400);
    canvas.position(560, 100);
    poseNet = ml5.poseNet(video, modelLoaded);

}
function draw(){
background ("orange");
}
function modelLoaded() {
    console.log("PoseNEt is intialized");
}
 function gotPoses(results) {
if (results.length > 0){
    console.log(results);
}

 }