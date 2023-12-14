interface Batom {
    aplicarCor(cor: string): void;
  }

  class BatomConcreto implements Batom {
    private marca: string;
  
    constructor(marca: string) {
      this.marca = marca;
    }
  
    public aplicarCor(cor: string): void {
      console.log(`Aplicando batom da marca ${this.marca} com a cor ${cor}`);
    }
  }

  class CriaBatom {
    private batons: { [key: string]: Batom } = {};
  
    public getBatom(marca: string): Batom {
      const chave = marca;
  
      if (!this.batons[chave]) {
        this.batons[chave] = new BatomConcreto(marca);
      }
  
      return this.batons[chave];
    }
  
    public getQuantidadeBatons(): number {
      return Object.keys(this.batons).length;
    }
  }
  class UsuarioBatom {
    private criaBatom: CriaBatom;
  
    constructor(criaBatom: CriaBatom) {
      this.criaBatom = criaBatom;
    }
  
    public aplicarBatom(marca: string, cor: string): void {
      const batom = this.criaBatom.getBatom(marca);
      batom.aplicarCor(cor);
    }
  }

  
const EBatom = new CriaBatom();
const usuario = new UsuarioBatom(EBatom);

usuario.aplicarBatom("MAC", "Vermelho");
usuario.aplicarBatom("Maybelline", "Rosa");
usuario.aplicarBatom("MAC", "Nude");

console.log(`Número de batons criados: ${EBatom.getQuantidadeBatons()}`);

  
  