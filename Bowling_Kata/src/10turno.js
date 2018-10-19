class Turno10 extends Turno {
    constructor(tiradas, finalizado) {
        super(tiradas, finalizado)
    }

    roll(bolos) {
        this.tiradas.push(new Tirada(bolos))
        if (this.tiradas[0].getBolos() === 10) {
        	//numStrtike +=
            this.tipo = 'strike'
        } else if (this.tiradas.length === 2) {
            if (this.getPoints() === 10) {
                this.tipo = 'spare'
            } else {
                this.tipo = 'normal'
            }
        } else if (this.tiradas.length === 3) {
            this.finalizado = true
        }
        // this.tiradas.push(new Tirada(bolos))
        // if (this.tiradas[0].getBolos() === 10) {
        //     this.tipo = 'strike'
        // } else if (this.tiradas.length === 2) {
        //     if (this.getPoints() === 10) {
        //         this.tipo = 'spare'
        //     } else {
        //         this.tipo = 'normal'
        //         this.finalizado = true
        //     }
        // }S
    }

    score() {
        let score = 0
      
        score += this.getPoints()

        return score
}

}