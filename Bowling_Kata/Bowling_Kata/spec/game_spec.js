describe("Bowling Game", function() {

    describe("tiradas'", function () {
      const game = new Game();
      for(let i = 0; i<20; i++) {
          game.roll(0)
      }

      it("todas las tiradas 0 puntos", function () {
          console.log(game);
          expect(game.score()).toEqual(0);
      })
    })
     describe("tiradas'", function () {
         const game = new Game();
         for (let i = 0; i < 20; i++) {
             game.roll(1)
         }

         it("todas las tiradas 1 punto", function () {
             console.log(game);
             expect(game.score()).toEqual(20);
         })
     })
});
