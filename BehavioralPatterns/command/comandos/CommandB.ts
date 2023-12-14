import ICommand from "./ICommand";
import Receptor from "../Receptor";

export default class CommandB implements ICommand {

  private receptor: Receptor;
  private tarefaA: string;
  private tarefaB: string;

  constructor(receptor: Receptor, tarefaA: string, tarefaB: string) {
    this.receptor = receptor;
    this.tarefaA = tarefaA;
    this.tarefaB = tarefaB;
  }

  public executar(): void {
    console.log('CommandB: Chamando receptor...');
    this.receptor.metodoAleatorio(this.tarefaA);
    this.receptor.outroMetodoAleatorio(this.tarefaB);
  }
}