function Cachorro(raca, idade, cor) {
    this.raca = raca;
    this.idade = idade;
    this.cor = cor;

    this.apresentacao = function() {
        console.log(`${this.nome} é da raça ${this.raca}, tem ${this.idade} anos, e é ${this.cor}`);
    };
};

function Pitbull(nome) {
    this.nome = nome;

    Cachorro.call(this, "Pitbull", 3, "Marrom");
};

function Labrador(nome) {
    this.nome = nome;
    
    this.latir = function() {
        console.log(`${this.nome} está latindo`);
    };
    
    Cachorro.call(this, "Labrador", 5, "branco");
};

const cachorro1 = new Pitbull("Pandora");
const cachorro2 = new Labrador("Marley");

cachorro1.apresentacao()
cachorro2.apresentacao()
cachorro2.latir()