const classes = {
    'Aged Brie': Brie,
    'Sulfuras, Hand of Ragnaros': Sulfuras,
    'Backstage passes to a TAFKAL80ETC concert': Entrada,
    'Conjured Mana Cake': Encantado
}
class Shop {
    constructor(items = []) {
        // this.items = items;
        this.items = []
        for (let item of items) {
            const Clase = (classes[item.name] ? classes[item.name] : Normal)
            this.items.push(new Clase(item))
            // switch (item.name) {
            //  case 'Aged Brie':
            //    this.items.push(new Brie(item))
            //    break;
            //    case 'Aged Brie':
            //    this.items.push(new Brie(item))
            //    break;
            //    case 'Aged Brie':
            //    this.items.push(new Brie(item))
            //    break;
            //  default:
            //    this.items.push(new Normal(item))
            //    break;
            //}
        }
    }
    updateQuality() {
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].actualizar()
        }
        //return this.items;
    }
    getItems() {
        return this.items;
    }
}