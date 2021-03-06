describe("queso brie", function() {

  it("actualizar producto", function() {
    const gildedRose = new Shop([ new Brie("Aged Brie", 10, 10) ]);
    const items = gildedRose.updateQuality();
    expect(Shop.items[0].name).toEqual("Aged Brie");
    expect(items[0].quality).toEqual(11);
    expect(items[0].sellIn).toEqual(9);
  });
  it("actualizar producto fecha de venta 0", function() {
    const gildedRose = new Shop([ new Brie("Aged Brie", 0, 10) ]);
    const items = gildedRose.updateQuality();    
    expect(items[0].quality).toEqual(12);
    expect(items[0].sellIn).toEqual(-1);
  });
  it("calidad maxima 50", function() {
    const gildedRose = new Shop([ new Brie("Aged Brie", 0, 50) ]);
    const items = gildedRose.updateQuality();    
    expect(items[0].quality).toEqual(50);
    expect(items[0].sellIn).toEqual(-1);
  });
});
describe("sulfuras", function() {
  it("calidad y fecha inalterable", function() {
    const gildedRose = new Shop([ new Sulfuras("Sulfuras, Hand of Ragnaros", 10, 50) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("Sulfuras, Hand of Ragnaros");    
    expect(items[0].quality).toEqual(80);
    expect(items[0].sellIn).toEqual(10);
  });
});
describe("entrada al backstage", function() {
  it("actualizar producto", function() {
    const gildedRose = new Shop([ new Entrada("Backstage passes to a TAFKAL80ETC concert", 12, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].quality).toEqual(11);
    expect(items[0].sellIn).toEqual(11);
  });
  it("actualizar producto cuando quedan exactamente 10 dias", function() {
    const gildedRose = new Shop([ new Entrada("Backstage passes to a TAFKAL80ETC concert", 10, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(12);
    expect(items[0].sellIn).toEqual(9);
  });
  it("actualizar producto cuando quedan menos de 10 dias", function() {
    const gildedRose = new Shop([ new Entrada("Backstage passes to a TAFKAL80ETC concert", 9, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(12);
    expect(items[0].sellIn).toEqual(8);
  });
  it("actualizar producto cuando quedan exactamente 5 dias", function() {
    const gildedRose = new Shop([ new Entrada("Backstage passes to a TAFKAL80ETC concert", 5, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(13);
    expect(items[0].sellIn).toEqual(4);
  });
  it("actualizar producto cuando quedan menos 5 dias", function() {
    const gildedRose = new Shop([ new Entrada("Backstage passes to a TAFKAL80ETC concert", 4, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(13);
    expect(items[0].sellIn).toEqual(3);
  });
  it("con fecha menor que 0 la calidad debe ser 0", function() {
    const gildedRose = new Shop([ new Entrada("Backstage passes to a TAFKAL80ETC concert", -1, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
    expect(items[0].sellIn).toEqual(-2);
  });
  it("calidad maxima 50", function() {
    const gildedRose = new Shop([ new Entrada("Backstage passes to a TAFKAL80ETC concert", 1, 50) ]);
    const items = gildedRose.updateQuality();    
    expect(items[0].quality).toEqual(50);
    expect(items[0].sellIn).toEqual(0);
  });
});
describe("productos normales", function() {
  it("se degradan de uno en uno", function() {
    const gildedRose = new Shop([ new Normal("Elixir of the Mongoose", 10, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("Elixir of the Mongoose");    
    expect(items[0].quality).toEqual(9);
    expect(items[0].sellIn).toEqual(9);
  });  
  it("calidad minima 0", function() {
    const gildedRose = new Shop([ new Normal("Elixir of the Mongoose", 10, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
    expect(items[0].sellIn).toEqual(9);
  });
  it("pasada la caducidad calidad se degrada de 2 en 2", function() {
    const gildedRose = new Shop([ new Normal("Elixir of the Mongoose", -1, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(8);
    expect(items[0].sellIn).toEqual(-2);
  });
});
describe("productos encantados", function() {
  it("se degradan de dos en dos", function() {
    const gildedRose = new Shop([ new Encantado("Conjured Mana Cake", 10, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("Conjured Mana Cake");    
    expect(items[0].quality).toEqual(8);
    expect(items[0].sellIn).toEqual(9);
  });  
  it("pasada la caducidad calidad debe reducirse de 4 en 4", function() {
    const gildedRose = new Shop([ new Encantado("Conjured Mana Cake", -1, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(6);
    expect(items[0].sellIn).toEqual(-2);
  });
});