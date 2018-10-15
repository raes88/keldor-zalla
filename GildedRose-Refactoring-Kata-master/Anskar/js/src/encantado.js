class Encantado extends Item{
    // llamamos al contructor con los datos recividos
    constructor(data){
        // super para acceder el constructor del padre
        super(data.name, data.sellIn, data.quality)
    
    }
    // parametros para la actualizacion
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