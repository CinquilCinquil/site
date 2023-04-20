// Get the square element
var square = document.getElementById("square");
var coisa = document.getElementById("coisa");

// Set the initial position of the square
var x = 50;
var y = 50;
var v = 0;
square.style.left = x + "px";
square.style.top = y + "px";

var t = [false,false,false,false];

var enemies = [[0.0,0.0,3]];

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
    for (let i = 0;i < 1;i ++)
    {
        var e = enemies[i];
        
        e[0] += sign(parseFloat(square.style.left) - e[0]);
        e[1] += sign(parseFloat(square.style.top) - e[1]);

        coisa.style.left = e[0] + "px";
        coisa.style.top = e[1] + "px";
        
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

