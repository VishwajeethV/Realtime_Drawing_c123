nosex=0;
nosey=0;
leftwristx=0;
rightwristx=0;
difference=0;



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
   fill("goldenrod");
   stroke("white");
   square(nosex,nosey,difference);
   document.getElementById("square_side").innerHTML="Length of square is "+difference+" px";
}



function modelLoaded() {
    console.log("posenet is intialized");
}



function getposes(results) {
    if(results.length > 0) {
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log(nosex,nosey);
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        difference=floor(leftwristx-rightwristx);
        console.log(difference);
    }
}

