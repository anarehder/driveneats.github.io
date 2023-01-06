src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"

var valorTotal = 0;
var valorPrato = 0;
var valorBebida = 0;
var valorSobremesa = 0;
var nomePrato;
var nomeBebida;
var nomeSobremesa;

function selecionaPrato(pratoSelecionado) {
    const selecionadoAnt = document.querySelector(".prato .selecionado");
  
    if (selecionadoAnt !== null){
        selecionadoAnt.classList.remove("selecionado");
        valorPrato = 0;
    }

    const selecionadoIconeAnt = document.querySelector(".prato .exibirIcon");
    
    if (selecionadoIconeAnt !== null){
        selecionadoIconeAnt.classList.remove("exibirIcon");
    }

    let allChildren = pratoSelecionado.querySelectorAll(":scope > div");
    pratoSelecionado.classList.add("selecionado");
    allChildren.forEach((item) => item.classList.add("exibirIcon"));

    //nome do prato
    const nome1 = pratoSelecionado.getElementsByTagName("h1");
    nomePrato = nome1[0].innerHTML;
    console.log(nomePrato);

    //preço
    const valor1 = pratoSelecionado.getElementsByClassName("escondido");
    const preco1 = valor1[0].innerHTML;
    valorPrato = Number(preco1);

    //valorTotal += valorPrato;
    console.log(valorPrato.toFixed(2));

    const qntdSelecionada = document.querySelectorAll(".selecionado").length;
    console.log(qntdSelecionada);
    if (qntdSelecionada === 3){
        document.getElementById("botao").disabled = false;
    }

}



function selecionaBebida(bebidaSelecionada) {
    const selecionadoAnt = document.querySelector(".bebida .selecionado");
 
    const selecionadoIconeAnt = document.querySelector(".bebida .exibirIcon");
    
    let allChildren = bebidaSelecionada.querySelectorAll(":scope > div");

    if (selecionadoAnt !== null){
        selecionadoAnt.classList.remove("selecionado");
        valorBebida = 0;
    }

    if (selecionadoIconeAnt !== null){
        selecionadoIconeAnt.classList.remove("exibirIcon");
    }

    bebidaSelecionada.classList.add("selecionado");
    allChildren.forEach((item) => item.classList.add("exibirIcon"));
    
    //nome da bebida
    const nome2 = bebidaSelecionada.getElementsByTagName("h1");
    nomeBebida = nome2[0].innerHTML;
    console.log(nomeBebida);

    //preço
    let valor2 = bebidaSelecionada.getElementsByClassName("escondido");
    let preco2 = valor2[0].innerHTML;
    valorBebida = Number(preco2);
    //valorTotal += valorBebida;
    console.log(valorBebida.toFixed(2));

    const qntdSelecionada = document.querySelectorAll(".selecionado").length;
    console.log(qntdSelecionada);
    if (qntdSelecionada === 3){
        document.getElementById("botao").disabled = false;
    }
}



function selecionaSobremesa(sobremesaSelecionada) {
    // selecionando unicamente uma opção    
    const selecionadoAnt = document.querySelector(".sobremesa .selecionado");
 
    const selecionadoIconeAnt = document.querySelector(".sobremesa .exibirIcon");
    
    if (selecionadoAnt !== null){ //borda
        selecionadoAnt.classList.remove("selecionado");
        valorSobremesa = 0;
    }

    sobremesaSelecionada.classList.add("selecionado");

    if (selecionadoIconeAnt !== null){ //ícone
        selecionadoIconeAnt.classList.remove("exibirIcon");
    } 

    let allChildren = sobremesaSelecionada.querySelectorAll(":scope > div");
    allChildren.forEach((item) => item.classList.add("exibirIcon"));

    //nome da sobremesa
    const nome3 = sobremesaSelecionada.getElementsByTagName("h1");
    nomeSobremesa = nome3[0].innerHTML;
    console.log(nomeSobremesa);
    
    //preço
    let valor3 = sobremesaSelecionada.getElementsByClassName("escondido");
    let preco3 = valor3[0].textContent;
    valorSobremesa = Number(preco3);
    //valorTotal += valorSobremesa;
    console.log(valorSobremesa.toFixed(2));

    const qntdSelecionada = document.querySelectorAll(".selecionado").length;
    const botao = document.querySelector("button");
    console.log(qntdSelecionada);

    if (qntdSelecionada === 3){
        if (botao.disabled === true){
        botao.disabled = false;
        botao.innerHTML = "Fechar pedido";
        }
    }

}

function enviarPedido(){
    valorTotal = valorPrato + valorBebida + valorSobremesa;

    let textoInicial = "Olá, gostaria de fazer o pedido:" + "\n";
    let textoPrato = "- Prato: " + nomePrato + "\n";
    let textoBebida = "- Bebida: " + nomeBebida + "\n";
    let textoSobremesa = "- Sobremesa: "+ nomeSobremesa + "\n";
    let textoValor = "Total: R$ "+ valorTotal.toFixed(2);

    let textoTotal = textoInicial+textoPrato+textoBebida+textoSobremesa+textoValor
    console.log(textoTotal);

    let textoWhatasppInicial = encodeURIComponent(textoTotal);

    let textoWhatasppFinal = "https://wa.me/5534984339233?text="+textoWhatasppInicial;
    console.log(textoWhatasppFinal);
    window.location.replace(textoWhatasppFinal);
}