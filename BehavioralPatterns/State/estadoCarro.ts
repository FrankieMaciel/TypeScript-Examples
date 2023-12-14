export interface EstadoCarro {
    alugarCarro(): void;     //METODOS CONCRETOS
    devolverCarro(): void;
    realizarManutencao(): void;
  }
  
  // Classe representando o estado Disponível
  export class EstadoDisponivel implements EstadoCarro {
    alugarCarro(): void {
      console.log("Carro alugado com sucesso.");
    }
  
    devolverCarro(): void {
      console.log("Este carro já está disponível para alugar.");
    }
  
    realizarManutencao(): void {
      console.log("Iniciando manutenção do carro.");
    }
  }
  
  // Classe representando o estado Alugado
  export class EstadoAlugado implements EstadoCarro {
    alugarCarro(): void {
      console.log("Este carro já está alugado.");
    }
  
    devolverCarro(): void {
      console.log("Carro devolvido com sucesso.");
    }
  
    realizarManutencao(): void {
      console.log("O carro está alugado e não pode ser enviado para manutenção.");
    }
  }
  
  // Classe representando o estado Em Manutenção
  export class EstadoManutencao implements EstadoCarro {
    alugarCarro(): void {
      console.log("O carro está em manutenção e não pode ser alugado no momento.");
    }
  
    devolverCarro(): void {
      console.log("A manutenção foi concluída. O carro está disponível para uso.");
    }
  
    realizarManutencao(): void {
      console.log("Este carro já está em manutenção.");
    }
  }
  