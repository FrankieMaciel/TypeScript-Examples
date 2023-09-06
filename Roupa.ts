import { CorDaRoupa } from "./CorDaRoupa";

export default class Roupa {
  tamanho: string;
  cor: CorDaRoupa;
  modelo: string;
  preco: number;

  constructor(tamanho: string, cor: CorDaRoupa, modelo: string, preco: number) {
    this.tamanho = tamanho;
    this.cor = cor;
    this.modelo = modelo;
    this.preco = preco;
  }

  getTamanho(): string {
    return this.tamanho;
  }

  getPreco(): number {
    return this.preco;
  }

  getCor(): CorDaRoupa {
    return this.cor;
  }

  setPreco(preco: number): void {
    this.preco = preco;
  }
}