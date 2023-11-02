export interface ExercicioFavorito {
    comecar(): void;
  }
  
  export class Correr implements ExercicioFavorito {
    public comecar(): void {
      console.log('Correr uma maratona')
    }
  }
  
  export class Futebol implements ExercicioFavorito {
    public comecar(): void {
      console.log('Jogar futebol com os amigos')
    }
  }
  
  export class Musculacao implements ExercicioFavorito {
    public comecar(): void {
      console.log('Fazer musculação na academia')
    }
  }
