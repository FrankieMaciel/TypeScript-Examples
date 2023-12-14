import IObserver from "../observers/IObserver";

export default interface ISujeito {
  inscrever(observer: IObserver): void;
  desinscrever(observer: IObserver): void;
  notificar(): void;
}