abstract class Roupa {
  tipo: string;
  tamanho: string | number;
  estampa: boolean;
  cor: CorDaRoupa;
  constructor(tipo: string, tamanho: string | number, estampa: boolean, cor: CorDaRoupa) {
    this.tipo = tipo
    this.tamanho = tamanho;
    this.estampa = estampa;
    this.cor = cor
  }
  toString(): string {
    return `${this.tipo} ${this.cor} ${this.estampa ? 'com' : 'sem'} estampa tamanho ${this.tamanho}`;
  }
}

abstract class CorDaRoupa {
  nome: string;
  constructor(nome: string) {
    this.nome = nome;
  }
  toString(): string {
    return this.nome;
  }
}

class Vestido extends Roupa {
  constructor(tamanho: string | number, estampa: boolean, cor: CorDaRoupa) {
    super('Vestido', tamanho, estampa, cor);
  }
}

class Terno extends Roupa {
  constructor(tamanho: string | number, estampa: boolean, cor: CorDaRoupa) {
    super('Terno', tamanho, estampa, cor);
  }
}

class Preto extends CorDaRoupa {
  constructor() {
    super('preto');
  }
}

class Azul extends CorDaRoupa {
  constructor() {
    super('azul');
  }
}

const vestidoAzul = new Vestido('M', true, new Azul());
const ternoPreto = new Terno('G', false, new Preto());

console.log(`${vestidoAzul.toString()}\n${ternoPreto.toString()}`);