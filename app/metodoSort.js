let btnOdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco)

function ordenarLivrosPorPreco() {
    let lirvosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibirOsLivrosNaTela(lirvosOrdenados)
}
//sort

/* let precos = [29.98, 11, 1, 101, 110]

//organizar do maior para o menor

let precosOrdenados = precos.sort(function(a,b){
    return b - a
}) */