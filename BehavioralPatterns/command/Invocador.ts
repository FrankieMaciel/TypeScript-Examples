import ICommand from "./comandos/ICommand";

export default class Invocador {
  private aoIniciar!: ICommand;
  private aoFinalizar!: ICommand;

  public setAoIniciar(comando: ICommand) {
    this.aoIniciar = comando;
  }

  public setAoFinalizar(comando: ICommand) {
    this.aoFinalizar = comando;
  }

  public isComando(object: any): object is ICommand {
    return object.executar !== undefined;
  }

  public metodoAleatorio(): void {
    console.log('Invocador: Executando funções de inicialização...');
    if (this.isComando(this.aoIniciar)) this.aoIniciar.executar();

    console.log('Invocador: Fazendo algo...');

    console.log('Invocador: Executando funções de finalização...');
    if (this.isComando(this.aoFinalizar)) this.aoFinalizar.executar();   
  }
}