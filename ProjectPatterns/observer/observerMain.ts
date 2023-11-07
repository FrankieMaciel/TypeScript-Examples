import ObserverA from "./observers/ObserverA";
import ObserverB from "./observers/ObserverB";
import Sujeito from "./sujeito/Sujeito";

const sujeito = new Sujeito();
const observador1 = new ObserverA();
const observador2 = new ObserverB();

sujeito.inscrever(observador1);
sujeito.inscrever(observador2);

sujeito.metodoAleatorio();
sujeito.metodoAleatorio();

sujeito.desinscrever(observador2);

sujeito.metodoAleatorio();
