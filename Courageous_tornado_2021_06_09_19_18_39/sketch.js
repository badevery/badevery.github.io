var lines = []
function setup() {
  createCanvas(696, 495);
  img = loadImage('LoL.jpg')
  weightSlider = createSlider(1,10,1)
  weightSlider.position(10,400)
  frameRate(1000)
  clearButton = createButton('Clear Drawings')
  clearButton.position(550,30)
  clearButton.mousePressed(clearDrawing)
  undoButton = createButton('Undo')
  undoButton.position(550,70)
  undoButton.mousePressed(undoDrawing)
  colorPicker = createColorPicker('#808080')
  colorPicker.position(550, 100)
}

function undoDrawing(){
  lines.pop()
}

function clearDrawing(){
  lines = [] 
}


function draw() {
  background(220);
  image(img,0,0)
  mouseClick()
  showLines()
}

function mouseClick(){
  if(mouseIsPressed && pwinMouseX<512 && pwinMouseY<364){
    lines.push(new Draw())
  }
}

function showLines(){
  for(let line of lines){
    line.show()
  
  }
}