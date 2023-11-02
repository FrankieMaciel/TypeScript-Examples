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
  
    // Método para alterar o estado do carro
    mudarEstado(novoEstado: EstadoCarro): void {
      this.estado = novoEstado;
    }
  }
  
  // Exemplo de uso
  const carro = new Carro();
  carro.alugarCarro(); 
  
  carro.mudarEstado(new EstadoAlugado());
  carro.devolverCarro(); 
  
  carro.mudarEstado(new EstadoManutencao());
  carro.alugarCarro();

  carro.realizarManutencao(); 
  carro.devolverCarro();