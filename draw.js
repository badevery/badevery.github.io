class Draw{
  constructor(){
    this.py = constrain(pwinMouseY,0,364)
    this.px = constrain(pwinMouseX,0,512)
    this.y = constrain(winMouseY,0,364)
    this.x = constrain(winMouseX,0,512)
    this.color = colorPicker.color()
    this.weight = weightSlider.value()
  }
  show(){
    strokeWeight(this.weight)
    stroke(this.color)
    line(this.px,this.py,this.x,this.y)
  }
}