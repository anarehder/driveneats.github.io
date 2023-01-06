src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"

function selecionaPrato(pratoSelecionado) {
    const selecionadoAnt = document.querySelector(".prato .selecionado");
 
    const selecionadoIconeAnt = document.querySelector(".prato .exibirIcon");
    
    let allChildren = pratoSelecionado.querySelectorAll(":scope > div");

    if (selecionadoAnt !== null){
        selecionadoAnt.classList.remove("selecionado");
    }

    if (selecionadoIconeAnt !== null){
        selecionadoIconeAnt.classList.remove("exibirIcon");
    }

    pratoSelecionado.classList.add("selecionado");
    allChildren.forEach((item) => item.classList.add("exibirIcon"));

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
    }

    if (selecionadoIconeAnt !== null){
        selecionadoIconeAnt.classList.remove("exibirIcon");
    }

    bebidaSelecionada.classList.add("selecionado");
    allChildren.forEach((item) => item.classList.add("exibirIcon"));
    
    const qntdSelecionada = document.querySelectorAll(".selecionado").length;
    console.log(qntdSelecionada);
    if (qntdSelecionada === 3){
        document.getElementById("botao").disabled = false;
    }
}



function selecionaSobremesa(sobremesaSelecionada) {
    const selecionadoAnt = document.querySelector(".sobremesa .selecionado");
 
    const selecionadoIconeAnt = document.querySelector(".sobremesa .exibirIcon");
    
    let allChildren = sobremesaSelecionada.querySelectorAll(":scope > div");

    if (selecionadoAnt !== null){
        selecionadoAnt.classList.remove("selecionado");
    }

    if (selecionadoIconeAnt !== null){
        selecionadoIconeAnt.classList.remove("exibirIcon");
    }

    sobremesaSelecionada.classList.add("selecionado");
    allChildren.forEach((item) => item.classList.add("exibirIcon"));

    
    const qntdSelecionada = document.querySelectorAll(".selecionado").length;
    const botao = document.querySelector("button");
    console.log(qntdSelecionada);
    console.log(botao);

    if (qntdSelecionada == 3){

        botao.disabled = false;
        botao.innerHTML = "Fechar pedido";
    }
    
}