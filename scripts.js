var valorTotal = 0;
var valorPrato = 0;
var valorBebida = 0;
var valorSobremesa = 0;
var nomePrato;
var nomeBebida;
var nomeSobremesa;
var nome;
var endereco;
const decimais = 2;
const numSel = 3;

function selecionaPrato(pratoSelecionado) {
    //borda
    const selecionadoAnt = document.querySelector(".prato .selecionado");
    if (selecionadoAnt !== null){
        selecionadoAnt.classList.remove("selecionado");
        valorPrato = 0;
    }
    pratoSelecionado.classList.add("selecionado");

    //ícone
    const selecionadoIconeAnt = document.querySelector(".prato .exibirIcon");
    if (selecionadoIconeAnt !== null){
        selecionadoIconeAnt.classList.remove("exibirIcon");
    }
    const allChildren1 = pratoSelecionado.querySelectorAll(":scope > div");
    allChildren1.forEach((item) => item.classList.add("exibirIcon"));

    //nome do prato
    const nome1 = pratoSelecionado.getElementsByTagName("h1");
    nomePrato = nome1[0].innerHTML;

    //preço
    const valor1 = pratoSelecionado.getElementsByClassName("escondido");
    const preco1 = valor1[0].innerHTML;
    valorPrato = Number(preco1);

    //botão finalizar
    const qntdSelecionada = document.querySelectorAll(".selecionado").length;
    const botao = document.querySelector("button");
    if (qntdSelecionada === numSel && botao.disabled === true){
        botao.disabled = false;
        botao.innerHTML = "Fechar pedido";
    }
}

function selecionaBebida(bebidaSelecionada) {
    //borda
    const selecionadoAnt = document.querySelector(".bebida .selecionado");
    if (selecionadoAnt !== null){
        selecionadoAnt.classList.remove("selecionado");
        valorBebida = 0;
    }
    bebidaSelecionada.classList.add("selecionado");

    //ícone
    const selecionadoIconeAnt = document.querySelector(".bebida .exibirIcon");
    if (selecionadoIconeAnt !== null){
        selecionadoIconeAnt.classList.remove("exibirIcon");
    }
    const allChildren2 = bebidaSelecionada.querySelectorAll(":scope > div");
    allChildren2.forEach((item) => item.classList.add("exibirIcon"));

    //nome da bebida
    const nome2 = bebidaSelecionada.getElementsByTagName("h1");
    nomeBebida = nome2[0].innerHTML;

    //preço
    const valor2 = bebidaSelecionada.getElementsByClassName("escondido");
    const preco2 = valor2[0].innerHTML;
    valorBebida = Number(preco2);

    //botão finalizar
    const qntdSelecionada = document.querySelectorAll(".selecionado").length;
    const botao = document.querySelector("button");
    if (qntdSelecionada === numSel && botao.disabled === true){
        botao.disabled = false;
        botao.innerHTML = "Fechar pedido";
        }
}

function selecionaSobremesa(sobremesaSelecionada) {
    //borda
    const selecionadoAnt = document.querySelector(".sobremesa .selecionado");
    if (selecionadoAnt !== null){
        selecionadoAnt.classList.remove("selecionado");
        valorSobremesa = 0;
    }
    sobremesaSelecionada.classList.add("selecionado");

    //ícone
    const selecionadoIconeAnt = document.querySelector(".sobremesa .exibirIcon");
    if (selecionadoIconeAnt !== null){
        selecionadoIconeAnt.classList.remove("exibirIcon");
    }
    const allChildren3 = sobremesaSelecionada.querySelectorAll(":scope > div");
    allChildren3.forEach((item) => item.classList.add("exibirIcon"));

    //nome da sobremesa
    const nome3 = sobremesaSelecionada.getElementsByTagName("h1");
    nomeSobremesa = nome3[0].innerHTML;

    //preço
    const valor3 = sobremesaSelecionada.getElementsByClassName("escondido");
    const preco3 = valor3[0].textContent;
    valorSobremesa = Number(preco3);

    //botão finalizar
    const qntdSelecionada = document.querySelectorAll(".selecionado").length;
    const botao = document.querySelector("button");
    if (qntdSelecionada === numSel && botao.disabled === true){
        botao.disabled = false;
        botao.innerHTML = "Fechar pedido";
        }
}

function revisarPedido(){
    nome = prompt("Qual seu nome?");
    endereco = prompt("Qual seu endereço?");

    const limparTela = document.querySelector(".inativaFundo");
    limparTela.classList.remove("escondido");

    const revisaPedido = document.querySelector(".confirmarPedido");
    revisaPedido.classList.remove("escondido");

    const editarListaPedidos = document.querySelector(".pedido");
    editarListaPedidos.innerHTML = nomePrato + "<br>" + nomeBebida + "<br>" + nomeSobremesa;

    const editarListaPrecos = document.querySelector(".precos");
    editarListaPrecos.innerHTML = "R$ " + valorPrato.toFixed(decimais) + "<br>" + "R$ " + valorBebida.toFixed(decimais) + "<br>" + "R$ " + valorSobremesa.toFixed(decimais);

    valorTotal = valorPrato + valorBebida + valorSobremesa;

    const editarTotal = document.querySelector(".valor");
    editarTotal.innerHTML = "R$ " + valorTotal.toFixed(decimais);
}

function enviarPedido(){
    const textoInicial = "Olá, gostaria de fazer o pedido:" + "\n";
    const textoPrato = "- Prato: " + nomePrato + "\n";
    const textoBebida = "- Bebida: " + nomeBebida + "\n";
    const textoSobremesa = "- Sobremesa: "+ nomeSobremesa + "\n";
    const textoValor = "Total: R$ "+ valorTotal.toFixed(decimais) + "\n" + "\n";
    const textoNome = "Nome: " + nome + "\n";
    const textoEnd = "Endereço: " + endereco + "\n";

    const textoTotal = textoInicial+textoPrato+textoBebida+textoSobremesa+textoValor+textoNome+textoEnd;
    const textoWhatasppInicial = encodeURIComponent(textoTotal);

    const textoWhatasppFinal = "https://wa.me/5534984339233?text="+textoWhatasppInicial;
    window.location.replace(textoWhatasppFinal);
}

function cancelar(){
    const limparTela = document.querySelector(".inativaFundo");
    limparTela.classList.add("escondido");

    const revisaPedido = document.querySelector(".confirmarPedido");
    revisaPedido.classList.add("escondido");
}