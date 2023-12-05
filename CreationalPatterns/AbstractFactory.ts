abstract class Camisa {
  tamanho: string
  tecido: string
  manga: string

  constructor(tamanho: string, tecido: string, manga: string) {
    this.tamanho = tamanho;
    this.tecido = tecido;
    this.manga = manga;
  }
}

abstract class Calca {
  tamanho: string
  tecido: string

  constructor(tamanho: string, tecido: string) {
    this.tamanho = tamanho;
    this.tecido = tecido;
  }
}

class CamisaMasc extends Camisa {
  constructor(tamanho: string, tecido: string, manga: string) {
    super(tamanho, tecido, manga);
  }
}

class CalcaMasc extends Calca {
  constructor(tamanho: string, tecido: string) {
    super(tamanho, tecido);
  }
}

class CamisaFem extends Camisa {
  constructor(tamanho: string, tecido: string, manga: string) {
    super(tamanho, tecido, manga);
  }
}

class CalcaFem extends Calca {
  constructor(tamanho: string, tecido: string) {
    super(tamanho, tecido);
  }
}

interface Fabrica {
  criarCamisa(tamanho: string, tecido: string, manga: string): Camisa
  criarCalca(tamanho: string, tecido: string): Calca
}

class FabricaMasculino implements Fabrica {
  criarCamisa(tamanho: string, tecido: string, manga: string): Camisa {
    return new CamisaMasc(tamanho, tecido, manga);
  }
  criarCalca(tamanho: string, tecido: string): Calca {
    return new CalcaMasc(tamanho, tecido);
  }
}

class FabricaFeminino implements Fabrica {
  criarCamisa(tamanho: string, tecido: string, manga: string): Camisa {
    return new CamisaFem(tamanho, tecido, manga);
  }
  criarCalca(tamanho: string, tecido: string): Calca {
    return new CalcaFem(tamanho, tecido);
  }
}

// CLIENTE
const criarConjunto = (fabrica: Fabrica) => {
  const camisa = fabrica.criarCamisa('M', 'Algodão', 'Curta');
  const calca = fabrica.criarCalca('M', 'Jeans');

  console.log(camisa);
  console.log(calca);
}

console.log('Criando conjunto masculino...');
criarConjunto(new FabricaMasculino());

console.log('\nCriando conjunto feminino...');
criarConjunto(new FabricaFeminino());
