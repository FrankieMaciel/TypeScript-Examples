// Componente
interface Departamento {
    mostrarEstrutura(): void;
    adicionarDepartamento(departamento: Departamento): void;
  }
  
  // Folha
  class DepartamentoIndividual implements Departamento {
    private nome: string;
  
    constructor(nome: string) {
      this.nome = nome;
    }
  
    mostrarEstrutura(): void {
      console.log(`Departamento: ${this.nome}`);
    }
  
    adicionarDepartamento(departamento: Departamento): void {
      // Folhas não têm subdepartamentos, então não fazem nada ao adicionar.
    }
  }
  
  // Composto
  class DepartamentoComposto implements Departamento {
    private nome: string;
    private departamentos: Departamento[] = [];
  
    constructor(nome: string) {
      this.nome = nome;
    }
  
    adicionarDepartamento(departamento: Departamento): void {
      this.departamentos.push(departamento);
    }

  //Metodo recursivo
    mostrarEstrutura(): void {
      console.log(`Departamento: ${this.nome}`);
      this.departamentos.forEach((departamento) => {
        console.log(" - ");
        departamento.mostrarEstrutura();
      });
    }
  }
  
  // USO DO PADRÃO
const departamentoDesenvolvimento: Departamento = new DepartamentoComposto("Desenvolvimento Geral");
departamentoDesenvolvimento.adicionarDepartamento(new DepartamentoIndividual("Desenvolvimento Frontend"));
departamentoDesenvolvimento.adicionarDepartamento(new DepartamentoIndividual("Desenvolvimento Backend"));

departamentoDesenvolvimento.mostrarEstrutura();