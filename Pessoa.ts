class Pessoa {
    nome: string;
    idade: number;
    estaVivo: boolean;

    constructor(nome: string, idade:number, estaVivo:boolean) {
        this.nome = nome;
        this.idade = idade;
        this.estaVivo = estaVivo;

        this.nascer();
    }

    nascer():void {
        console.log('Nasci galera!');
    }

    crescer():void {
        this.idade++;
        console.log(`${this.nome} agora tem ${this.idade} anos.`);
    }
}
// Executando 

let pessoa = new Pessoa('Diogo', 28, true);
pessoa.crescer();