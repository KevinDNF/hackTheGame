class UI{
  // options = [
  //  [name,value,total],
  // ]
    constructor(options){
      this.height = options.length * 30
      this.width = 500
      this.x = 50
      this.y = canvas.height - this.height - 50
      this.options = options
      this.rect = null;
    }

    draw(options) {
      this.rect = drawRect(this.x-5,this.y-30,this.width,this.height+40,"rgba(0,0,0,0.5)");
      for (let i=0;i<this.options.length;i++){
        let item = this.options[i]
        let name = item[0]
        let value = item[1]
        let total = item[2]
        let string = `${name}: ${value}/${total}`
        let y = this.y + 40*i
        this.text = drawText(this.x, y, string,"30px monospace","rgba(255,255,255,1)");
      }
      context.clearRect(this.rect);
    }
}
