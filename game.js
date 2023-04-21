// Get the square element
var square = document.getElementById("square");

// Set the initial position of the square
var x = 50;
var y = 50;
var v = 0;
square.style.left = x + "px";
square.style.top = y + "px";

var t = [false,false,false,false];

var nEnemies = 3;
var enemies = [];

for (let i = 0;i < nEnemies;i ++)
{
	const box = document.createElement("div");
	box.id = "coisa";
	document.body.appendChild(box);
	
	enemies.push([300.0*i,200.0*i,3,box]);
}

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

function update()
{
    for (let i = 0;i < nEnemies;i ++)
    {
        var e = enemies[i];
        
        e[0] += sign(parseFloat(square.style.left) - e[0]);
        e[1] += sign(parseFloat(square.style.top) - e[1]);

        e[3].style.left = e[0] + "px";
        e[3].style.top = e[1] + "px";
        
    }
    requestAnimationFrame(update);
}

requestAnimationFrame(update);

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

    for (let i = 0;i < 4;i ++)
    {
        if (t[i])
        {
            switch(i)
            {
                case 0: y -= 10;break;
                case 1: y += 10;break;
                case 2: x -= 10;break;
                case 3: x += 10;break;
                
            }
        }
    }
	
	// Update the position of the square
	square.style.left = x + "px";
	square.style.top = y + "px";
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
});

