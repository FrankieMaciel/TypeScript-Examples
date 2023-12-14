import IObserver from "../observers/IObserver";
import SujeitoInterface from "./ISujeito";

export default class Sujeito implements SujeitoInterface {
  public estado: number = 0;
  private observers: IObserver[] = [];

  public inscrever(observer: IObserver): void {
    const existe = this.observers.includes(observer);
    if (existe) return console.log('Sujeito: Observador já está isncrito!');

    console.log('Sujeito: Observador inscrito.');
    this.observers.push(observer);
  }

  public desinscrever(observer: IObserver): void {
    const index = this.observers.indexOf(observer);
    if (index === -1) return console.log('Sujeito: Observador não está inscrito!');
    
    this.observers.splice(index, 1);
    console.log('Sujeito: Observador desinscrito.');
  }

  public notificar(): void {
    console.log('Sujeito: Notificando observadores');
    for (const observer of this.observers) observer.update(this);
  }

  public metodoAleatorio(): void {
    console.log('\nSujeito: Estou fazendo algo importante...');
    this.estado = Math.floor(Math.random() * (10 + 1));

    console.log(`Sujeito: Meu estado acabou de mudar para: ${this.estado}`);
    this.notificar();
  }
}