noseX=0;
noseY=0;
function preload(){

}
function setup(){
canvas=createCanvas(400,400)
canvas.position(550,300)
video=createCapture(VIDEO)
video.size(400,400)
video.hide();
console.log(ml5.version);
posenet=ml5.poseNet(video,modelLoaded);
posenet.on("pose",gotPoses);

}
function gotPoses(results){
    if (results.length>0){
        console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log(noseY);
    console.log(noseX);
       }
}
function modelLoaded(){
    console.log("loaded")
}
function draw(){
image(video,0,0,400,400);
fill(200,0,0);
stroke(0,0,0);
circle(noseX,noseY,40,)
}
function snip(){
    save("filter.jpg")
}
