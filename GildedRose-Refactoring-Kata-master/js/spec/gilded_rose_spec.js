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
})