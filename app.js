function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos e o valor do campo de pesquisa
    let section = document.getElementById("resultadosPesquisa");
    
    // Converte o valor da pesquisa para minúsculas para facilitar a comparação
    let campoPesquisa = document.getElementById("campoPesquisa").value.toLowerCase();
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
  
    // Verifica se o campo de pesquisa está vazio
    if (campoPesquisa === "") {
      // Se estiver vazio, exibe uma mensagem informando que é necessário inserir um sentimento
      section.innerHTML = `<div class="item-resultado">
                               Por Favor, informe um Sentimento
                             </div>`;
      return;
    }
  
    // Itera sobre cada dado da lista de dados (assumindo que 'dados' é um array de objetos)
    for (let dado of dados) {
      // Converte o título, descrição e tags para minúsculas para facilitar a comparação
      let titulo = dado.Titulo.toLowerCase();
      let descricao = dado.Descrição.toLowerCase();
      let tags = dado.Tags.toLowerCase();
  
      // Verifica se o termo de pesquisa está presente no título, descrição ou tags
      if (titulo.includes(campoPesquisa) ||
          descricao.includes(campoPesquisa) ||
          tags.includes(campoPesquisa)) {
        // Se o termo for encontrado, adiciona o resultado à string 'resultados'
        resultados += `
          <div class="item-resultado">
            <h2>
              <a href="#" target="_blank">${dado.Titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.Descrição}.</p>
            <a class="direita" href=${dado.Link} target="_blank">Mais informações</a>
          </div>
        `;
      }
    }
  
    // Verifica se nenhum resultado foi encontrado
    if (!resultados) {
      // Se não houver resultados, exibe uma mensagem informando que o sentimento não foi encontrado
      section.innerHTML = `<div class="item-resultado">
                               Não existe este sentimento em nossa base de dados
                             </div>`;
      return;
    }
  
    // Se houver resultados, atualiza o conteúdo da seção com os resultados
    section.innerHTML = resultados;
  }