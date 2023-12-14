import Sujeito from "../sujeito/Sujeito";
import IObserver from "./IObserver";
import ISujeito from "../sujeito/ISujeito";

export default class ObserverA implements IObserver {
  public update(sujeito: ISujeito): void {
    if (sujeito instanceof Sujeito && (sujeito.estado < 3)) {
      console.log('ObservadorA: Reagi ao evento');
    }
  }
}