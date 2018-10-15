//comprobamos el tipo de clase que es
const classes = {
    'Aged Brie': Brie,
    'Sulfuras, Hand of Ragnaros': Sulfuras,
    'Backstage passes to a TAFKAL80ETC concert': Entrada,
    'Conjured Mana Cake': Encantado
}
class Shop {
    // llamamos al constructor con el tipo de clase
    constructor(items = []) {
        // this.items = items;
        this.items = []

        // for (let item of items) {
        //     let Clase
        //     if (item.name.includes('Conjured')) {
        //         Clase = ConjuredItem
        //     } else {
        //         Clase = (classes[item.name] ? classes[item.name]: NormalItem)
        //     }
        //     this.items.push(new Clase(item))
        // }

        //esto es los mimo de arriba

        for (let item of items) {
            const Clase = (classes[item.name] ? classes[item.name] : Normal)
            this.items.push(new Clase(item))

            // otra manera de hacerlo

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
    // funcion de actualizacion
    updateQuality() {
        for (var i = 0; i < this.items.length; i++) {
            // pasamos el item por la actualizacion propia del objeto
            this.items[i].actualizar()
        }
        // sin el get tendriamos que devolver el resultado con el return
        //return this.items;
    }

    // funcion geter para recoger los resultados
    getItems() {
        return this.items;
    }
}