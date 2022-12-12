function aplicarDesconto(livros){
    const desconto = 0.3
    livrosComDesconto = livros.map(livro => {
        return {
            ...livro, preco: livro.preco - (livro.preco * desconto)
        }
    })
    return livrosComDesconto;
}

//map

// altera todos os valores de uma array e passa para outra
/* const array1 = [1,2,3,4];
const map1 = array1.map(x=> x*2) */
//map1 terá os elementos de array 1 multiplicados por 2