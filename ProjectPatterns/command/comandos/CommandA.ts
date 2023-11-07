import ICommand from "./ICommand";

export default class CommandA implements ICommand {

  private tarefa: string;

  constructor(tarefa: string) {
    this.tarefa = tarefa;
  }

  public executar(): void {
      console.log(`CommandA: Realizando tarefa "${this.tarefa}"`);
  }
}