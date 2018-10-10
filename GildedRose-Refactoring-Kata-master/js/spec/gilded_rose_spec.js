describe("Gilded Rose", function() {

    describe(" Item 'Aged brie'", function() {
        it("Incrementar la calidad del queso en uno", function() {
            const gildedRose = new Shop([new Item("Aged Brie", 15, 2)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).toEqual(3)
        })
    })

    describe(" Item 'Aged brie'", function() {
        it("Incrementar la calidad del queso en dos", function() {
            const gildedRose = new Shop([new Item("Aged Brie", 0, 2)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).toEqual(4)
        })
    })

    describe(" Item 'Aged brie'", function() {
        it("Incrementar la calidad del queso no mas de 50", function() {
            const gildedRose = new Shop([new Item("Aged Brie", 1, 50)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).toEqual(50)
        })
    })

    describe(" Item 'Backstage'", function() {
        it("Incrementar la calidad del Backstage en uno ", function() {
            const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).toEqual(21)
        })
    })

    describe(" Item 'Backstage'", function() {
        it("Incrementar la calidad del Backstage en 2 ", function() {
            const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).toEqual(22)
        })
    })

    describe(" Item 'Backstage'", function() {
        it("Incrementar la calidad del Backstage en 3 ", function() {
            const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).toEqual(23)
        })
    })
    describe(" Item 'Backstage'", function() {
        it("poner la calidad del Backstage en 0 ", function() {
            const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).toEqual(0)
        })
    })
})