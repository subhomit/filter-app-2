function preload(){

}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses)

}
function draw(){
    image(video, 0,0,300,300);

}
function take_snapshot(){
    save('FilterImg.png');
}
function modelLoaded(){
    console.log("Model is Initialised");
}
function gotPoses(result){
    if(result.length > 0){
        console.log(result);
        console.log("Nose X =" + result[0].pose.nose.x);
        console.log("Nose Y =" + result[0].pose.nose.y);
    }
}