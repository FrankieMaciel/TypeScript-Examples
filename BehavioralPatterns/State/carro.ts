import {EstadoAlugado, EstadoCarro, EstadoDisponivel, EstadoManutencao} from './estadoCarro'

class Carro {
    private estado: EstadoCarro;
  
    constructor() {
      this.estado = new EstadoDisponivel(); // Estado inicial: Disponível
    }
    
    alugarCarro(): void {
      this.estado.alugarCarro();
    }
  
    devolverCarro(): void {
      this.estado.devolverCarro();
    }
  
    realizarManutencao(): void {
      this.estado.realizarManutencao();
    }
  }
  
  // EXEMPLO DE USO
  const carro = new Carro();
  carro.alugarCarro(); 
  
  const carro2 = (new EstadoAlugado());
  carro2.devolverCarro(); 
  
  const carro3 = (new EstadoManutencao());
  carro3.alugarCarro();

  carro.realizarManutencao(); 
  carro.devolverCarro();