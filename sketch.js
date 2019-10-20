
let drawing = false
let mode = "rectangle"
let colorModeS = "random"
let colorModeF = "random"
let sizevar1 = 5
let sizevar2 = 100


function setup() {

	x = mouseX
	y = mouseY

	
	let canvas = createCanvas(windowWidth - 15, windowHeight - 20)
	canvas.parent("p5")
	
	angleMode(DEGREES)

	push()
	strokeWeight(5)
	rect(0, 0, windowWidth - 15, windowHeight - 20)
	pop()

	randomStroke = [random(0, 255), random(0, 255), random(0, 255), random(0, 255)]
	randomFill = [random(0, 255), random(0, 255), random(0, 255), random(0, 255)]
	randomWeight = random(0, 10)
	randomX = random(0, windowWidth)
	randomY = random(0, windowHeight)
	randomSize = random(0, 80)
	randomSize2 = random(0, 80)
	shape = random("rect", "ellipse", "point")
	
}



function draw() {

	if (colorModeS == "red"){

		randomStroke = [random(110, 255), 0, 0, random(50, 255)]

	} else if (colorModeS == "purple"){

		randomStroke = [random(110, 255), 0, random(110, 255), random(50, 255)]

	} else if (colorModeS == "blue"){

		randomStroke = [0, 0, random(110, 255), random(50, 255)]

	} else if (colorModeS == "bluegreen"){

		randomStroke = [0, random(110, 255), random(110, 255), random(50, 255)]

	} else if (colorModeS == "green"){

		randomStroke = [0, random(110, 255), 0, random(50, 255)]

	} else if (colorModeS == "yellow"){

		randomStroke = [random(110, 255), random(110, 255), 0, random(50, 255)]

	} else if (colorModeS == "black"){

		randomStroke = [random(0, 255), random(50, 255)]

	} else if (colorModeS == "random"){

		randomStroke = [random(0, 255), random(0, 255), random(0, 255), random(50, 255)]

	} else if (colorModeS == "none"){

		randomStroke = [0, 0, 0, 0]

	}



	if (colorModeF == "red"){

		randomFill = [random(110, 255), 0, 0, random(50, 255)]

	} else if (colorModeF == "purple"){

		randomFill = [random(110, 255), 0, random(110, 255), random(50, 255)]

	} else if (colorModeF == "blue"){

		randomFill = [0, 0, random(110, 255), random(50, 255)]

	} else if (colorModeF == "bluegreen"){

		randomFill = [0, random(110, 255), random(110, 255), random(50, 255)]

	} else if (colorModeF == "green"){

		randomFill = [0, random(110, 255), 0, random(50, 255)]

	} else if (colorModeF == "yellow"){

		randomFill = [random(110, 255), random(110, 255), 0, random(50, 255)]

	} else if (colorModeF == "black"){

		randomFill = [random(0, 255), random(50, 255)]

	} else if (colorModeF == "random"){

		randomFill = [random(0, 255), random(0, 255), random(0, 255), random(50, 255)]

	} else if (colorModeF == "none"){

		randomFill = [0, 0, 0, 0]

	}

	randomWeight = random(0.5, 10)
	randomX = random(-10, windowWidth)
	randomY = random(-10, windowHeight)
	randomSize = random(sizevar1, sizevar2)
	randomSize2 = random(sizevar1, sizevar2)
	randomOpacity = random(0, 255)
	shape = random("rect", "ellipse", "point")



	if (drawing == true && mode == "rectangle") {

		stroke(randomStroke)
		strokeWeight(randomWeight)
		fill(randomFill)
		rect(randomX, randomY, randomSize, randomSize2)
		
	}

	if (drawing == true && mode == "ellipse") {

		stroke(randomStroke)
		strokeWeight(randomWeight)
		fill(randomFill)
		ellipse(randomX, randomY, randomSize, randomSize2)
		
	}

	if (drawing == true && mode == "point") {

		stroke(randomFill)
		strokeWeight(randomSize)
		point(randomX, randomY, randomSize)
		
	}

	if (drawing == true && mode == "heart") {

		stroke(randomStroke)
		strokeWeight(randomWeight)
		fill(randomFill)
		beginShape();
  	vertex(randomX, randomY);
  	bezierVertex(randomX - randomSize / 2, randomY - randomSize / 2, randomX - randomSize, randomY + randomSize / 3, randomX, randomY + randomSize);
  	bezierVertex(randomX + randomSize, randomY + randomSize / 3, randomX + randomSize / 2, randomY - randomSize / 2, randomX, randomY);
  	endShape(CLOSE);
		
	}

}



function drawRect() {

	mode = "rectangle"

}

function drawElli() {

	mode = "ellipse"

}

function drawPoin() {

	mode = "point"

}

function drawHear() {

	mode = "heart"

}
function strokeRed() {

	colorModeS = "red"

}

function strokePurple() {

	colorModeS = "purple"

}

function strokeBluegreen() {

	colorModeS = "bluegreen"

}

function strokeYellow() {

	colorModeS = "yellow"

}

function strokeGreen() {

	colorModeS = "green"

}

function strokeBlue() {

	colorModeS = "blue"

}

function strokeBlack() {

	colorModeS = "black"

}

function strokeRandom() {

	colorModeS = "random"

}

function strokeNone() {

	colorModeS = "none"

}

function fillRed() {

	colorModeF = "red"

}

function fillPurple() {

	colorModeF = "purple"

}

function fillBluegreen() {

	colorModeF = "bluegreen"

}

function fillYellow() {

	colorModeF = "yellow"

}

function fillGreen() {

	colorModeF = "green"

}

function fillBlue() {

	colorModeF = "blue"

}

function fillBlack() {

	colorModeF = "black"

}

function fillRandom() {

	colorModeF = "random"

}

function fillNone() {

	colorModeF = "none"

}

function sizeDown() {

	sizevar1 = (sizevar1 / 1.2)
	sizevar2 = (sizevar2 / 1.2)

}

function sizeUp() {

	sizevar1 = (sizevar1 * 1.2)
	sizevar2 = (sizevar2 * 1.2)

}

function mousePressed() {

	if (mouseX <= windowWidth && mouseX >= 0 && mouseY <= windowHeight && mouseY >= 0)
	drawing = true

}

function mouseReleased() {

	drawing = false

}





