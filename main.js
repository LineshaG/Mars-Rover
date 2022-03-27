Canvas = document.getElementById("myCanvas");
ctx= Canvas.getContext("2d");

img_array = ["MarsPhoto.jpg", "nasa.jpg", "photo.jpg", "picturemars.jpg", "mars.jpg"];
 
random_number = Math.floor(Math.random()*5);
background_image = img_array[random_number];
rover_width = 90;
rover_height = 70;
rover_x = 150;
rover_y = 150;
rover_image = "rover.png";

function add()
{
    background_Img = new Image();
    background_Img.onload = uploadBackground;
    background_Img.src = background_image;

    rover_Img = new Image();
    rover_Img.onload = uploadrover;
    rover_Img.src = rover_image;
}

function uploadBackground()
{
    ctx.drawImage(background_Img, 0, 0, Canvas.width, Canvas.height);
}

function uploadrover()
{
    ctx.drawImage(rover_Img, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) 
{
    KeyPressed = e.keyCode;
    if (KeyPressed == "38")
    {
        up();
        console.log("up");
    }
    if (KeyPressed == "40")
    {
        down();
        console.log("down");
    }
    if (KeyPressed == "37")
    {
        left();
        console.log("left");
    }
    if (KeyPressed == "39")
    {
        right();
        console.log("right");
    }
}
 
function up()
{
    if(rover_y>=0)
    {
     rover_y= rover_y-10;
     uploadBackground();
     uploadrover();
    }
}
function down()
{
    if(rover_y<=520)
    {
     rover_y= rover_y+10;
     uploadBackground();
     uploadrover();
    }
}
function left()
{
    if(rover_x>=0)
    {
     rover_x= rover_x-10;
     uploadBackground();
     uploadrover();
    }
}
function right()
{
    if(rover_x<=700)
    {
     rover_x= rover_x+10;
     uploadBackground();
     uploadrover();
    }
}
