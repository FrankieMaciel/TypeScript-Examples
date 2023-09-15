"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Roupa {
    constructor(tamanho, cor, modelo, preco) {
        this.tamanho = tamanho;
        this.cor = cor;
        this.modelo = modelo;
        this.preco = preco;
    }
    getTamanho() {
        return this.tamanho;
    }
    getPreco() {
        return this.preco;
    }
    getCor() {
        return this.cor;
    }
    setPreco(preco) {
        this.preco = preco;
    }
}
exports.default = Roupa;
