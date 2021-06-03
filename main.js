moosic=""
moosic2=""

function setup(){
    canvas=createCanvas(400,300)
    canvas.center();
    video=createCapture(VIDEO)
    video.hide()

}
function preload(){
    moosic=loadSound("Darkside.mp3")
    moosic2=loadSound("Elektronomia.mp3")
}
function draw(){
    image(video,0,0,400,300)
}