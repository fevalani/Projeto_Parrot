let qtd = 0;
jogar();
function jogar(){
    /*while(qtd > 14 | qtd < 4){
        qtd = parseInt(prompt("Digite com quatas cartas quer jogar: "));
        if(qtd%2 !== 0){
            qtd = 0;
        }
    }*/
    qtd = 6;
    //document.getElementsByClassName('container').style.width = "100px";
    distribuirCartas();
}

function distribuirCartas(){
    const distribuir = document.querySelector("ul");
    i = 0;
    cartas = [];
    while(i < qtd){
        cartas[i] = `<li onclick="virarCarta(${i})"><img src="./imagens/front.png" alt="papagaio"></li>`;
        i++;
    }
    distribuir.innerHTML = cartas;
}


let virada = 0;
function virarCarta(n){
    const valor = n + 1;
    if(virada < 2){
        const virar = document.querySelector("li:nth-child("+valor+") img");
        virar.setAttribute("src", "./imagens/bobrossparrot.gif");
        virada = virada + 1;
        console.log(virada);
    } else{
        alert("duas cartas já selecionadas");
    }
}