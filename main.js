function setup() {
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,400);
    video.position(50,120);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',getposes);
}



function draw() {
   background("#aaff80");
}



function modelLoaded() {
    console.log("posenet is intialized");
}



function getposes(results) {
    if(results.length > 0) {
        console.log(results);
    }
}

