abstract class PotatoChain {

  protected slowness: number;
  protected next: PotatoChain;
  protected time: number;

  constructor(slowness:number) {
    this.slowness = slowness;
  }

  setNext(next: PotatoChain): void {
    if (!this.next) this.next = next;
    else this.next.setNext(next);
  }

  passHotPotato(time: number): void {
    let timeRemaining = this.timeRemaining(time);
    if (timeRemaining <= 0) {
      this.loseGame();
      return;
    }
    if (!this.next) {
      console.log('Não foi possível passar a batata.');
      return;
    }
    console.log('Passando batata...');
    this.next.passHotPotato(timeRemaining);
  }

  timeRemaining(time: number): number {
    let timeSpent = Math.round(Math.random() * (10 - this.slowness) + this.slowness);
    return time - timeSpent;
  }

  abstract loseGame(): void;
}

class Child extends PotatoChain {

  private name: string;

  constructor(name: string, slowness: number) {
    super(slowness);
    this.name = name;
  }

  loseGame(): void {
      console.log(`${this.name} perdeu o jogo!`);
  }
}

// Organiza a ordem do jogo
const SlowChild: PotatoChain = new Child('Criança Lenta', 2);
const FastChild: PotatoChain = new Child('Criança Rápida', 1);

SlowChild.setNext(FastChild);
FastChild.setNext(SlowChild);

// Começa o jogo
SlowChild.passHotPotato(20);