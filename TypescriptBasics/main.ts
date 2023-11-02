import { CorDaRoupa } from "./CorDaRoupa";
import Roupa from "./Roupa";

function mostraRoupa(roupa: Roupa): void {
  console.log(roupa.modelo, roupa.getCor(), roupa.getTamanho(), roupa.getPreco() + '0');
}

let roupa: Roupa = new Roupa('M', CorDaRoupa.Preto, 'Camisa', 2.5);
mostraRoupa(roupa);