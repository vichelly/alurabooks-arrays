function calcularValorTotalDeLivrosDisponiveis(livros){
    return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2)
}

//reduce
/* 
const precos = [10, 20, 70]

// neste exemplo retorna o maior valor da array
const precoTotal = precos.reduce((acc, atual) => acc > atual ? acc :atual)
console.log(precoTotal) */