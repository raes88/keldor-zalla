class Backstage extends Item {
    constructor(name, sellIn, quality) {
        super(name, sellIn, quality);
    }
    processItem() {
        if (this.items.sellIn == 0) {
            this.items.quality = 0
        } else if (this.items.sellIn < 6) {
            this.items.sellIn -= 1
            this.items.quality = this.items[index].quality + 3

            if (this.items.quality > 50) {
                this.itemsquality = 50
            }
        } else if (this.items.sellIn < 11) {
            this.items.quality = this.items[index].quality + 2
            this.items.sellIn -= 1
            if (this.items.quality > 50) {
                this.items.quality = 50
            }
        } else {
            this.items.quality = this.items[index].quality + 1
            this.items.sellIn -= 1
            if (this.items.quality > 50) {
                this.items.quality = 50

            }
        }
    }
}