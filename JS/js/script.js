
class Carro{
    constructor(valor_1, valor_2, valor_3){
        this.marca = valor_1
        this.modelo = valor_2
        this.ano = valor_3
    };

    buzina(){
        return this.modelo + ' Buzinou: Biiiiiii';
    }
};



console.log( new Carro('Fiat', 'Uno', 1999));
console.log( new Carro('Fokswag', 'Gol', 2010).buzina());