const btnCadastro = document.getElementById('cadastro');
const btnProdutos = document.getElementById('produtos');
const btnRelatorios = document.getElementById('relatorios');
const btnUsuario = document.getElementById('icone-usuario');
const corpoCadastro = document.getElementById('corpo-cadastro');
const corpoProduto = document.getElementById('corpo-produto');
const corpoRelatorio = document.getElementById('corpo-relatorio');
const corpoUsuario = document.getElementById('corpo-usuario');
const nomeProduto = document.getElementById('nome-produto');
const valorProduto = document.getElementById('valor-produto');
const quantidadeProduto = document.getElementById('quantidade-produto');
const codigoProduto = document.getElementById('codigo');
const descricaoProduto = document.getElementById('descricao');
const btnAdicionar = document.getElementById('adicionar');
const tabelaProduto = document.getElementById('tabela-produtos');
var control = true;

function resetarCor(element) {
    element.style.backgroundColor = 'transparent';
}
;
function ocultarElemento(element) {
    element.style.display = 'none';
}
btnCadastro.style.backgroundColor = '#434254';
btnProdutos.addEventListener('click', () => {
    resetarCor(btnCadastro);
    resetarCor(btnRelatorios);
    btnProdutos.style.backgroundColor = '#434254';
    ocultarElemento(corpoCadastro);
    ocultarElemento(corpoRelatorio);
    corpoProduto.style.display = 'flex';
});
btnRelatorios.addEventListener('click', () => {
    resetarCor(btnProdutos);
    resetarCor(btnCadastro);
    btnRelatorios.style.backgroundColor = '#434254';
    ocultarElemento(corpoCadastro);
    ocultarElemento(corpoProduto);
    corpoRelatorio.style.display = 'flex';
});
btnCadastro.addEventListener('click', () => {
    resetarCor(btnProdutos);
    resetarCor(btnRelatorios);
    btnCadastro.style.backgroundColor = '#434254';
    ocultarElemento(corpoProduto);
    ocultarElemento(corpoRelatorio);
    corpoCadastro.style.display = 'flex';
});
btnUsuario.addEventListener('click', () => {
    console.log(control);
    if (control) {
        corpoUsuario.style.display = 'flex';
    } else {
        corpoUsuario.style.display = 'none';
    }
    control = !control;
});
btnAdicionar.addEventListener('click', () => {
    let linha = document.createElement('tr');
    let colunaNome = document.createElement('td');
    let colunaDescricao = document.createElement('td');
    let colunaCategoria = document.createElement('td');
    let colunaCodigo = document.createElement('td');
    let colunaQuantidade = document.createElement('td');
    let colunaValor = document.createElement('td');

    colunaNome.textContent = nomeProduto.value;
    colunaDescricao.textContent = descricaoProduto.value;
    colunaCategoria.textContent = '';
    colunaCodigo.textContent = codigoProduto.value;
    colunaQuantidade.textContent = quantidadeProduto.value;
    colunaValor.textContent = valorProduto.value;

    linha.appendChild(colunaNome);
    linha.appendChild(colunaDescricao);
    linha.appendChild(colunaCategoria);
    linha.appendChild(colunaCodigo);
    linha.appendChild(colunaQuantidade);
    linha.appendChild(colunaValor);
    tabelaProduto.appendChild(linha);

    nomeProduto.value = '';
    descricaoProduto.value = '';
    codigoProduto.value = '';
    quantidadeProduto.value = '';
    valorProduto.value = '';
});