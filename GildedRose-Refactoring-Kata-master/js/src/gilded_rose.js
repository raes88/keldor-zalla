class Item {
    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

class Shop {
    constructor(items = []) {
        this.items = items;
    }
    updateQuality() {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].name == "Aged Brie") {
                this.procesBrieItems(i)
            } else if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
                this.procesBackstage(i)
            } else {
                if (this.items[i].name=='Sulfuras, Hand of Ragnaros'){
                    this.items[i].quality = 80
                }
                if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
                    if (this.items[i].quality > 0) {
                        if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                            this.items[i].quality = this.items[i].quality - 1;
                        }
                    }
                } else {
                    if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                        this.items[i].sellIn = this.items[i].sellIn - 1;
                    }
                    if (this.items[i].sellIn < 0) {
                        if (this.items[i].name != 'Aged Brie') {
                            if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
                                if (this.items[i].quality > 0) {
                                    if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                                        this.items[i].quality = this.items[i].quality - 1;
                                    }
                                }
                            } //else {
                            //     this.items[i].quality = this.items[i].quality - this.items[i].quality;
                            // }
                        } else {
                            if (this.items[i].quality < 50) {
                                this.items[i].quality = this.items[i].quality - 1;
                            }
                        }
                    }
                }
                if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                    this.items[i].sellIn = this.items[i].sellIn - 1;
                }
            }
        }
        return this.items;
    }

    procesBrieItems(index) {
        this.items[index].sellIn--;
        if (this.items[index].sellIn >= 0) {
            this.items[index].quality++;
        } else {
            this.items[index].quality += 2;
        }
        if (this.items[index].quality > 50) {
            this.items[index].quality = 50
        }
    }

    procesBackstage(index) {
        if (this.items[index].sellIn == 0) {
            this.items[index].quality = 0
        } else if (this.items[index].sellIn < 6) {
            this.items[index].sellIn -= 1
            this.items[index].quality = this.items[index].quality + 3

            if (this.items[index].quality > 50) {
                this.items[index].quality = 50
            }
        } else if (this.items[index].sellIn < 11) {
            this.items[index].quality = this.items[index].quality + 2
            this.items[index].sellIn -= 1
            if (this.items[index].quality > 50) {
                this.items[index].quality = 50
            }
        } else {
            this.items[index].quality = this.items[index].quality + 1
            this.items[index].sellIn -= 1
            if (this.items[index].quality > 50) {
                this.items[index].quality = 50

            }
        }
    }
}