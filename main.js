function setup(){
    canvas=createCanvas(550,550);
    canvas.position(20,200);
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    stroke('red')
    fill('red')
    circle(60,60,100,30);
    stroke('red')
    fill('red')
    circle(60,490,100,30);
    stroke('red')
    fill('red')
    circle(490,60,100,30);
    stroke('red')
    fill('red')
    circle(490,490,100,30);

    stroke('green')
    fill('green')
    rect(110,50,330,20);
    stroke('green')
    fill('green')
    rect(480,110,20,330);
    stroke('green')
    fill('green')
    rect(50,110,20,330);
    stroke('green')
    fill('green')
    rect(110,480,330,20);

    image(video,100,100,350,350);
}

function take_snapshot(){
    save('download.png');
}