import ObserverInterface from "./IObserver";
import Sujeito from "../sujeito/Sujeito";
import SujeitoInterface from "../sujeito/ISujeito";

export default class ObserverB implements ObserverInterface {
  public update(sujeito: SujeitoInterface): void {
    if (sujeito instanceof Sujeito && (sujeito.estado === 0 || sujeito.estado >= 2)) {
      console.log('ObservadorB: Reagi ao evento');
    }
  }
}