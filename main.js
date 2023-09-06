"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Roupa_1 = __importDefault(require("./Roupa"));
function mostraRoupa(roupa) {
    console.log(roupa.modelo, roupa.getCor(), roupa.getTamanho(), roupa.getPreco() + '0');
}
let roupa = new Roupa_1.default('M', "Preto" /* CorDaRoupa.Preto */, 'Camisa', 2.5);
mostraRoupa(roupa);
