describe("queso brie", function() {
    const gildedRose = new Shop([{
        name: 'Aged Brie',
        sellIn: 10,
        quality: 10
    }]);
    // 
    gildedRose.updateQuality();
    const items = gildedRose.getItems();


    it("Deberia de actualizar el producto correctamente", function() {
        expect(items[0].name).toEqual("Aged Brie");
        expect(items[0].sellIn).toEqual(9);
        expect(items[0].quality).toEqual(11);
    })
})

describe("queso brie", function() {

    const gildedRose = new Shop([{
        name: 'Aged Brie',
        sellIn: 0,
        quality: 10
    }]);
    gildedRose.updateQuality();
    const items = gildedRose.getItems();


    it("actualizar producto fecha de venta 0", function() {
        expect(items[0].name).toEqual("Aged Brie");
        expect(items[0].sellIn).toEqual(-1);
        expect(items[0].quality).toEqual(12);
    })
})

describe("queso brie", function() {

    const gildedRose = new Shop([{
        name: 'Aged Brie',
        sellIn: 0,
        quality: 50
    }]);
    gildedRose.updateQuality();
    const items = gildedRose.getItems();


    it("calidad maxima 50", function() {
        expect(items[0].name).toEqual("Aged Brie");
        expect(items[0].quality).toEqual(50);
        expect(items[0].sellIn).toEqual(-1);
    })
})

describe("sulfuras", function() {

    const gildedRose = new Shop([{
        name: 'Sulfuras, Hand of Ragnaros',
        sellIn: 10,
        quality: 50
    }]);
    gildedRose.updateQuality();
    const items = gildedRose.getItems();


    it("sulfuras - calidad  80 y fecha inalterable", function() {
        expect(items[0].name).toEqual("Sulfuras, Hand of Ragnaros");
        expect(items[0].quality).toEqual(80);
        expect(items[0].sellIn).toEqual(10);
    })
})

describe("entrada al backstage", function() {
    const gildedRose = new Shop([{
        name: 'Backstage passes to a TAFKAL80ETC concert',
        sellIn: 12,
        quality: 10
    }]);
    gildedRose.updateQuality();
    const items = gildedRose.getItems();

    it("actualizar producto", function() {

        expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
        expect(items[0].quality).toEqual(11);
        expect(items[0].sellIn).toEqual(11);
    });
});

describe("entrada al backstage", function() {
    const gildedRose = new Shop([{
        name: 'Backstage passes to a TAFKAL80ETC concert',
        sellIn: 10,
        quality: 10
    }]);
    gildedRose.updateQuality();
    const items = gildedRose.getItems();

    it("actualizar producto cuando quedan exactamente 10 dias", function() {

        expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
        expect(items[0].quality).toEqual(12);
        expect(items[0].sellIn).toEqual(9);
    });
});

describe("entrada al backstage", function() {
    const gildedRose = new Shop([{
        name: 'Backstage passes to a TAFKAL80ETC concert',
        sellIn: 9,
        quality: 10
    }]);
    gildedRose.updateQuality();
    const items = gildedRose.getItems();

    it("actualizar producto cuando quedan menos de 10 dias", function() {

        expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
        expect(items[0].quality).toEqual(12);
        expect(items[0].sellIn).toEqual(8);
    });
});

describe("entrada al backstage", function() {
    const gildedRose = new Shop([{
        name: 'Backstage passes to a TAFKAL80ETC concert',
        sellIn: 5,
        quality: 10
    }]);
    gildedRose.updateQuality();
    const items = gildedRose.getItems();

    it("actualizar producto cuando quedan exactamente 5 dias", function() {

        expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
        expect(items[0].quality).toEqual(13);
        expect(items[0].sellIn).toEqual(4);
    });
});

describe("entrada al backstage", function() {
    const gildedRose = new Shop([{
        name: 'Backstage passes to a TAFKAL80ETC concert',
        sellIn: 4,
        quality: 10
    }]);
    gildedRose.updateQuality();
    const items = gildedRose.getItems();

    it("actualizar producto cuando quedan menos 5 dias", function() {

        expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
        expect(items[0].quality).toEqual(13);
        expect(items[0].sellIn).toEqual(3);
    });
});

describe("entrada al backstage", function() {
    const gildedRose = new Shop([{
        name: 'Backstage passes to a TAFKAL80ETC concert',
        sellIn: -1,
        quality: 10
    }]);
    gildedRose.updateQuality();
    const items = gildedRose.getItems();

    it("con fecha menor que 0 la calidad debe ser 0", function() {

        expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
        expect(items[0].quality).toEqual(0);
        expect(items[0].sellIn).toEqual(-2);
    });
});

describe("entrada al backstage", function() {
    const gildedRose = new Shop([{
        name: 'Backstage passes to a TAFKAL80ETC concert',
        sellIn: 1,
        quality: 50
    }]);
    gildedRose.updateQuality();
    const items = gildedRose.getItems();

    it("con fecha menor que 0 la calidad debe ser 0", function() {

        expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
        expect(items[0].quality).toEqual(50);
        expect(items[0].sellIn).toEqual(0);
    });
});

describe("entrada al backstage", function() {
    const gildedRose = new Shop([{
        name: 'Backstage passes to a TAFKAL80ETC concert',
        sellIn: 1,
        quality: 50
    }]);
    gildedRose.updateQuality();
    const items = gildedRose.getItems();

    it("con fecha menor que 0 la calidad debe ser 0", function() {

        expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
        expect(items[0].quality).toEqual(50);
        expect(items[0].sellIn).toEqual(0);
    });
});

describe("productos normales", function() {
    const gildedRose = new Shop([{
        name: 'Elixir of the Mongoose',
        sellIn: 10,
        quality: 10
    }]);
    gildedRose.updateQuality();
    const items = gildedRose.getItems();

    it("se degradan de uno en uno", function() {

        expect(items[0].name).toEqual("Elixir of the Mongoose");
        expect(items[0].quality).toEqual(9);
        expect(items[0].sellIn).toEqual(9);
    });
});

describe("productos normales", function() {
    const gildedRose = new Shop([{
        name: 'Elixir of the Mongoose',
        sellIn: 10,
        quality: 0
    }]);
    gildedRose.updateQuality();
    const items = gildedRose.getItems();

    it("calidad minima 0", function() {

        expect(items[0].name).toEqual("Elixir of the Mongoose");
        expect(items[0].quality).toEqual(0);
        expect(items[0].sellIn).toEqual(9);
    });
});

describe("productos normales", function() {
    const gildedRose = new Shop([{
        name: 'Elixir of the Mongoose',
        sellIn: -1,
        quality: 10
    }]);
    gildedRose.updateQuality();
    const items = gildedRose.getItems();

    it("pasada la caducidad calidad se degrada de 2 en 2", function() {

        expect(items[0].name).toEqual("Elixir of the Mongoose");
        expect(items[0].quality).toEqual(8);
        expect(items[0].sellIn).toEqual(-2);
    });
});

describe("productos encantados", function() {
    const gildedRose = new Shop([{
        name: 'Conjured Mana Cake',
        sellIn: 10,
        quality: 10
    }]);
    gildedRose.updateQuality();
    const items = gildedRose.getItems();

    it("se degradan de dos en dos", function() {

        expect(items[0].name).toEqual("Conjured Mana Cake");
        expect(items[0].quality).toEqual(8);
        expect(items[0].sellIn).toEqual(9);
    });
});

describe("productos encantados", function() {
    const gildedRose = new Shop([{
        name: 'Conjured Mana Cake',
        sellIn: -1,
        quality: 10
    }]);
    gildedRose.updateQuality();
    const items = gildedRose.getItems();

    it("pasada la caducidad calidad debe reducirse de 4 en 4", function() {

        expect(items[0].name).toEqual("Conjured Mana Cake");
        expect(items[0].quality).toEqual(6);
        expect(items[0].sellIn).toEqual(-2);
    });
});
