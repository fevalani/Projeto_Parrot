let qtd = 0;
jogar();
function jogar(){
    /*while(qtd > 14 | qtd < 4){
        qtd = parseInt(prompt("Digite com quatas cartas quer jogar: "));
        if(qtd%2 !== 0){
            qtd = 0;
        }
    }*/
    qtd = 14;
    distribuirCartas();
}

function distribuirCartas(){
    const distribuir = document.querySelector("ul");
    i = 0;
    cartas = [];
    while(i < qtd){
        cartas[i] = `<li onclick="virarCarta()"><img src="./imagens/front.png" alt="papagaio"></li>`;
        i++;
    }
    distribuir.innerHTML = cartas;
}


function virarCarta(){
    const virar = document.querySelector("li:nth-child(4) img");
    virar.setAttribute("src", "./imagens/bobrossparrot.gif");
}