noseX=0;
noseY=0;
wigX=0;
wigY=0;
frillX=0;
frillY=0;
function preload(){
img=loadImage("clown_nose.png");
wig=loadImage("wig.png");
frill=loadImage("https://i.postimg.cc/ydSkGMbs/frill.png");
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
    noseX=(results[0].pose.nose.x)-30;
    noseY=(results[0].pose.nose.y)-30;
    wigX=(results[0].pose.nose.x)-130;
    wigY=(results[0].pose.nose.y)-210;
    frillX=(results[0].pose.nose.x)-130;
    frillY=(results[0].pose.nose.y)+10;
    console.log(noseY);
    console.log(noseX);
       }
}
function modelLoaded(){
    console.log("loaded");
}
function draw(){
image(video,0,0,400,400);
image(img,noseX,noseY,70,70);
image(wig,wigX,wigY,260,200);
image(frill,frillX,frillY,260,200);
//fill(200,0,0);
//stroke(0,0,0);
//circle(noseX,noseY,40,);
}
function snip(){
save("filter.jpg");
}
