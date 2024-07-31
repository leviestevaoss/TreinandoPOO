class Pessoa{
    constructor(nome,sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`O Usuario ${this.nome} Falou: Bom dia`)
    }
}

const p1 = new Pessoa('Levi', 'Estevão');

p1.falar();
p1.comer();
p1.beber();
