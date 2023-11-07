import Invocador from "./Invocador";
import Receptor from "./Receptor";
import CommandA from "./comandos/CommandA";
import CommandB from "./comandos/CommandB";

const invocador = new Invocador;
invocador.setAoIniciar(new CommandA('Ligar ar-condicionado'));
invocador.setAoFinalizar(new CommandB(new Receptor(), 'Desligar ar-condicionado', 'Ligar robô aspirador de pó'));

invocador.metodoAleatorio();