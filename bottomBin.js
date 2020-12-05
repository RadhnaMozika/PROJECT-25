class BinImage extends Bin{
    constructor(x, y, w, h){ 
    
    super(x, y, w, h);
        this.image=loadImage("dustbin.png");
}
display()
{
    
    image(this.image, 1135, 360, 350, 350);
   
}
}