class Carro{
    #velocidade;
    constructor(nome){
        this.nome = nome;
        this.#velocidade = 0;
    }

    getVelocidade(){
        return this.#velocidade;
    }

    acelerar(){
        if(this.getVelocidade() == 100){
            return;
        }
        this.#velocidade ++;
    }

    freiar(){
        if(this.getVelocidade() <= 0){
            return;
        }
        this.#velocidade --;
    }
}

const c1 = new Carro('Palio');

for(let i = 0 ; i <= 200 ; i++){
    c1.acelerar();
}
console.log(c1)
console.log(c1.getVelocidade())