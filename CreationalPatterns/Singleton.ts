class ItemLista {
    constructor(public nome: string, public quantidade: number) {}
  }

  class ListaCompras {
    private static instancia: ListaCompras | null = null;
    private itens: ItemLista[] = [];


    // O construtor é privado para evitar a criação direta de instâncias
    private constructor() {}
  
    
    public static obterInstancia(): ListaCompras {
      if (!ListaCompras.instancia) {
        ListaCompras.instancia = new ListaCompras();
      }
  
      return ListaCompras.instancia;
    }
  
    public adicionarItem(item: ItemLista): void {
      this.itens.push(item);
    }
  
    public obterItens(): ItemLista[] {
      return this.itens;
    }
  }
  
  // EXEMPLO DE USO DO SINGLETON COM LISTACOMPRAS
  const lista1 = ListaCompras.obterInstancia();
  lista1.adicionarItem(new ItemLista('Maçã', 5));
  
  const lista2 = ListaCompras.obterInstancia();
  lista2.adicionarItem(new ItemLista('Banana', 12));
  
  //Exemplo teste da lista completa
  const itensDaLista = lista2.obterItens();
  console.log(itensDaLista);
  