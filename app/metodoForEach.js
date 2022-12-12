const elementoParaInserirLivros = document.getElementById('livros')

function exibirOsLivrosNaTela(listaDeLivros){
    elementoParaInserirLivros.innerHTML = ''
    listaDeLivros.forEach(livro =>{
        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
            <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo">
                ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
        </div>
        `
    })
}

//forEach

//resume isto
/* let ex = ['python', 'js', 'php']

for (let i = 0; i < ex.length; i++){
    console.log(livros[i])
} */

//usando ForEach
//pega cada elemento do array e executa uma função
/* let ex = ['python', 'js', 'php']
ex.forEach(exemplo => {
    console.log(exemplo)
}) */