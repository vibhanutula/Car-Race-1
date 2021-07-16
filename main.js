

canvas = document.getElementById('Racer');
ctx = canvas.getContext("2d");

CarB_width = 100;
CarB_height = 100;

background_image = "Ground.jpg";
CarB_image = "CarB.png";


CarB_x = 10;
CarB_y = 10;

function add() {
	background_imgTag = new Image(); //defining a variable with a new image
	background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
	background_imgTag.src = background_image;   // load image

    CarB_imgTag = new Image(); //defining a variable with a new image
	CarB_imgTag.onload = uploadCarB; // setting a function, onloading this variable
	CarB_imgTag.src = CarB_image;   // load image
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCarB() {
	ctx.drawImage(CarB_imgTag, CarB_x, CarB_y, CarB_width, CarB_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
}




function up()
{
	if(CarB_y >=0)
	{
		CarB_y = CarB_y - 10;
		console.log("When up arrow is pressed,  x = " + CarB_x + " | y = " +CarB_y);
		 uploadBackground();
		 uploadCarB();
	}
}
function down()
{
	if(CarB_y <=500)
	{
		CarB_y =CarB_y+ 10;
		console.log("When down arrow is pressed,  x = " + CarB_x + " | y = " +CarB_y);
		uploadBackground();
		 uploadCarB();
	}
}
function left()
{
	if(CarB_x >= 0)
	{
		CarB_x =CarB_x - 10;
		console.log("When left arrow is pressed,  x = " + CarB_x + " | y = " +CarB_y);
		uploadBackground();
		 uploadCarB();
	}
}
function right()
{
	if(CarB_x <= 700)
	{
		CarB_x =CarB_x + 10;
		console.log("When right arrow is pressed,  x = " + CarB_x + " | y = " +CarB_y);
		uploadBackground();
		uploadCarB();
   }
}
