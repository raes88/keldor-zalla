class Normal extends Item{
    constructor(data){
        super(data.name, data.sellIn, data.quality)
    }
    actualizar(){
        this.sellIn--;
        if(this.sellIn < 0){
            this.quality -= 2 
        } else {
            this.quality--
        }
        if(this.quality > 50){
            this.quality = 50
        } else if(this.quality < 0) {
            this.quality = 0
        }
    }    
}