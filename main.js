var song1="";
var song2="";
function preload(){
    song1=loadSound("music.mp3")
    song2=loadSound("music2.mp3")
}
function setup(){
    canv=createCanvas(700,400);
    canv.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,700,400);
}
function start(){
    song2.play();
}