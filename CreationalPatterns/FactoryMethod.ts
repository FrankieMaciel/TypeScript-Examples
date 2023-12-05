interface Veiculo {
  andar(): void;
}

class Carro implements Veiculo {
  andar(): void {
    console.log('O carro está andando...');
  }
}

class Moto implements Veiculo {
  andar(): void {
    console.log('A moto está andando...');
  }
}

abstract class FabricaVeiculo {
  venderVeiculo(): void {
    const veiculo = this.criarVeiculo();
    console.log('Veiculo vendido!');
    veiculo.andar();
  }

  abstract criarVeiculo(): Veiculo;
}

class FabricaCarro extends FabricaVeiculo {
  criarVeiculo(): Veiculo {
    return new Carro();
  }
}

class FabricaMoto extends FabricaVeiculo {
  criarVeiculo(): Veiculo {
    return new Moto();
  }
}

const fabricaCarro = new FabricaCarro();
const fabricaMoto = new FabricaMoto();

console.log('Cliente requisitou um carro');
fabricaCarro.venderVeiculo()

console.log('\nCliente requisitou uma moto');
fabricaMoto.venderVeiculo();
