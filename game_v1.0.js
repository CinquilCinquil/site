//Math functions

function sign(valor)
{
    if (valor == 0)
    {
        return 0;
    }
    if (valor > 0)
    {
        return 1;
    }
    return -1;
}

// Get the square element
const square = document.getElementById("square");
const moveLeftBtn = document.getElementById('move-left-btn');
const moveRightBtn = document.getElementById('move-right-btn');
const moveUpBtn = document.getElementById('move-up-btn');
const moveDownBtn = document.getElementById('move-down-btn');

// Set the initial position of the square
var x = 50;
var y = 50;
var v = 0;
square.style.left = x + "px";
square.style.top = y + "px";

var t = [false,false,false,false];
var intervalOver = true;

var nEnemies = 3;
var enemies = [];

//Spawning enemies
for (let i = 0;i < nEnemies;i ++)
{
	const box = document.createElement("div");
	box.id = "coisa";
	document.body.appendChild(box);
	
	enemies.push([300.0*i,200.0*i,3,box]);
}

function update()
{
	var eSpd = 1;
	
	//updating enemies
    for (let i = 0;i < nEnemies;i ++)
    {
        var e = enemies[i];
		var dirX = sign(parseFloat(square.style.left) - e[0]);
		var dirY = sign(parseFloat(square.style.top) - e[1]);
        
        e[0] += dirX*eSpd;
        e[1] += dirY*eSpd;

        e[3].style.left = e[0] + "px";
        e[3].style.top = e[1] + "px";
		
		//Collision
		for (let j = 0;j < nEnemies;j ++)
		{
			if (j != i)
			{
				var e2 = enemies[j];
				
				var dx = e2[0] - e[0];
				var dy = e2[1] - e[1];
				var dis = dx*dx + dy*dy;
				
				if (dis < 576)
				{
					if (j > i)
					{
						var colDirX = sign(dx);
						var colDirY = sign(dy);
						
						e[0] -= colDirX*eSpd*2;
						e[1] -= colDirY*eSpd*2;
					}
				}
			}
		}
        
    }
    requestAnimationFrame(update);
}

requestAnimationFrame(update);

// Controls

/*
moveLeftBtn.addEventListener('mousedown', function() {intervalId = setInterval(moveLeft, 10);});
moveLeftBtn.addEventListener('mouseup', function() {clearInterval(intervalId);});
function moveLeft() {let temp = parseInt(square.style.left);temp -= 1;square.style.left = temp + 'px';}

moveRightBtn.addEventListener('mousedown', function() {intervalId = setInterval(moveRight, 10);});
moveRightBtn.addEventListener('mouseup', function() {clearInterval(intervalId);});
function moveRight() {let temp = parseInt(square.style.left);temp += 1;square.style.left = temp + 'px';}

moveUpBtn.addEventListener('mousedown', function() {intervalId = setInterval(moveUp, 10);});
moveUpBtn.addEventListener('mouseup', function() {clearInterval(intervalId);});
function moveUp() {let temp = parseInt(square.style.top);temp -= 1;square.style.top = temp + 'px';}

moveDownBtn.addEventListener('mousedown', function() {intervalId = setInterval(moveDown, 10);});
moveDownBtn.addEventListener('mouseup', function() {clearInterval(intervalId);});
function moveDown() {let temp = parseInt(square.style.top);temp += 1;square.style.top = temp + 'px';}
*/


// Add an event listener for keydown events
document.addEventListener("keydown", function(event) {
	
	// Get the key code of the pressed key
	var keyCode = event.keyCode;
	
	// Move the square based on the pressed key
	switch(keyCode) {
		case 87: // W key
			t[0] = true;
			break;
		case 83: // S key
			t[1] = true;
			break;
		case 65: // A key
			t[2] = true;
			break;
		case 68: // D key
		    t[3] = true;
			break;
	}
	
	if (intervalOver)
	{
		intervalId = setInterval(Move, 10);
		intervalOver = false;
	}
	
});

document.addEventListener("keyup", function(event) {
	
	// Get the key code of the pressed key
	var keyCode = event.keyCode;
	
	// Move the square based on the pressed key
	switch(keyCode) {
		case 87: // W key
			t[0] = false;
			break;
		case 83: // S key
			t[1] = false;
			break;
		case 65: // A key
			t[2] = false;
			break;
		case 68: // D key
		    t[3] = false;
			break;
	}
	
	if (!t[0] && !t[1] && !t[2] && !t[3])
	{
		clearInterval(intervalId);
		intervalOver = true;
	}
	
});

function Move()
{

	var playerSpd = 1.5;

    for (let i = 0;i < 4;i ++)
    {
        if (t[i])
        {
            switch(i)
            {
                case 0: y -= playerSpd;break;
                case 1: y += playerSpd;break;
                case 2: x -= playerSpd;break;
                case 3: x += playerSpd;break;
                
            }
        }
    }
	
	// Update the position of the square
	square.style.left = x + "px";
	square.style.top = y + "px";
}
