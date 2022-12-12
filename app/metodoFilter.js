const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria == categoria)
    exibirOsLivrosNaTela(livrosFiltrados)
}

//filter
//a função retorna em um novo array os objetos que suprem as necessidades passadas
/* 
const idades = [10,22,42,16,50]

const podeDirigir = idades.filter(idade => {
    return idade >= 18
})
console.log(podeDirigir)
console.log(idades) */