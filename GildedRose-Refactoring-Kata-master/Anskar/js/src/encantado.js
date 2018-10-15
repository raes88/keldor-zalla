class Encantado extends Item{
    constructor(data){
        super(data.name, data.sellIn, data.quality)
    
    }
    actualizar(){    
        this.sellIn--;
        if(this.sellIn < 0){
            this.quality -= 4 
        } else {
            this.quality-=2
        }
        if(this.quality > 50){
            this.quality = 50
        }
    }    
}