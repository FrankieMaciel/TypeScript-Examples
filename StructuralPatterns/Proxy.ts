interface Lanchonete {
  fazerPedido(pedido: string): void
}

class Caixa implements Lanchonete {
  fazerPedido(pedido: string): void {
    console.log(`(Caixa) Pedido registrado: ${pedido}`)
  }
}

class CaixaDigital implements Lanchonete {
  caixa: Caixa;

  constructor(caixa: Caixa) {
    this.caixa = caixa;
  }

  fazerPedido(pedido: string): void {
    console.log('(CaixaDigital) Enviando pedido para o caixa.');
    this.caixa.fazerPedido(pedido);
  }
}

function cliente(caixa: Lanchonete) {
  let pedido = 'Hambúrguer'
  console.log(`(Cliente) Quero um ${pedido}!`);
  caixa.fazerPedido(pedido);
}

const caixa = new Caixa();
const caixaDigital = new CaixaDigital(caixa);

cliente(caixaDigital);
