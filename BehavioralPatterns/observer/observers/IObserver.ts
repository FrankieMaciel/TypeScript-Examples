import ISujeito from "../sujeito/ISujeito";

export default interface IObserver {
  update(sujeito: ISujeito): void;
}