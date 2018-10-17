describe("Bowling Game", function() {

    describe("tiradas 1", function() {
        const game = new Game();
        for (let i = 0; i < 20; i++) {
            game.roll(0)
        }

        it("todas las tiradas 3 puntos", function() {
            console.log(game);
            expect(game.score()).toEqual(0);
        })
    })
    describe("tiradas 2", function() {
        const game = new Game();
        for (let i = 0; i < 20; i++) {
            game.roll(3)

        }
        it("todas las tiradas 3 punto", function() {
            console.log(game);
            expect(game.score()).toEqual(60);
        })
    })

    describe("tiradas 3 ", function() {
        const game = new Game();
        game.roll(10)
        game.roll(1)
        game.roll(1)
        game.roll(10)


        for (let i = 0; i < 14; i++) {
            game.roll(1)
        }
        it(" dos strike  no conseguidos 38 puntos ", function() {
            console.log(game);
            expect(game.score()).toEqual(38);
        })
    })

    describe("tiradas 4 ", function() {
        const game = new Game();
        game.roll(10)
        game.roll(10)


        for (let i = 0; i < 16; i++) {
            game.roll(1)
        }
        it(" dos strike conseguidos   37 puntos", function() {
            console.log(game);
            expect(game.score()).toEqual(37);
        })
    })

    describe(" 5 Bowling game una tirada de 10 puntos'", function() {
        const game = new Game();
        game.roll(4)
        game.roll(6)
        game.roll(4)
        for (let i = 0; i < 17; i++) {
            game.roll(1)
        }

        it("Should score 35 points", function() {
            console.log(game);
            expect(game.score()).toEqual(35);
        })

    })
});