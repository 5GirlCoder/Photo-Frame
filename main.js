function preload()
{

}

function setup()
{
    canvas = createCanvas(500, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 120, 150, 250, 200);

    fill("#cc99ff");
    stroke("#cc66ff");
    circle(50, 50, 80);
    circle(450, 50, 80);
    circle(450, 450, 80);
    circle(50, 450, 80);
    
    fill("#99ccff");
    stroke("#6699ff");
    rect(90, 40, 320, 25);
    rect(90, 440, 320, 25);
    rect(440, 90, 25, 320);
    rect(40, 90, 25, 320);
}

function click_pic()
{
    save('MySelfie.png');
}