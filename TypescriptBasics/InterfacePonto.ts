interface Ponto {
	x: number;
	y: number;
}
interface Nomeada {
	nome: string;
}
 
function exibirPonto(point: Ponto) {
	console.log('x = ' + point.x + ', y = ' + point.y);
}
 
function exibirNome(x: Nomeada) {
	console.log('Olá, ' + x.nome);
}
 
const obj = {
	x: 0,
	y: 0,
	nome: 'Origem'
};
 
exibirPonto(obj);
exibirNome(obj);