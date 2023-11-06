interface ServicoCarrinho {
    processarItens(): void;
  }
  
  // Implementação real
  class ServicoCarrinhoReal implements ServicoCarrinho {
    processarItens(): void {
      console.log("Processando itens do carrinho...");
    }
  }
  
  // "Objeto nulo" que implementa a interface do serviço, mas não faz nada
  class ServicoCarrinhoNulo implements ServicoCarrinho {
    processarItens(): void {
      console.log("Carrinho vazio. Nenhuma operação a ser processada.");
    }
  }
  
  // Função que utiliza o serviço do carrinho
  function usarServicoCarrinho(servico: ServicoCarrinho): void {
    servico.processarItens();
  }
  
  // EXEMPLO DE USO
  const carrinhoVazio = new ServicoCarrinhoNulo();
  const carrinhoReal = new ServicoCarrinhoReal();
  

  usarServicoCarrinho(carrinhoVazio); 

  usarServicoCarrinho(carrinhoReal);

  