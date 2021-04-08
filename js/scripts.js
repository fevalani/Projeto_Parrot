let qtd = 0;

let jogadas = 0;
let vitoria = 0;
let iguais = [];


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
    const cartas = [];
    i = 0;
    while(i < qtd/2){
        cartas.push(`<li class="${'carta' + i}" onclick="virarCarta(this)"><img src="./imagens/front.png" alt="papagaio"></li>`);
        cartas.push(`<li class="${'carta' + i}" onclick="virarCarta(this)"><img src="./imagens/front.png" alt="papagaio"></li>`);
        i++;
    }

    cartas.sort(comparador);
    distribuir.innerHTML = cartas.join("");
}

function comparador(){
    return Math.random() - 0.5;
}

function virarCarta(n){
    const virar = n.querySelector("img");

    if(iguais.length < 2){

        n.classList.add('selecionado');

        if(n.classList.contains('carta0')){
            virar.setAttribute("src", "./imagens/bobrossparrot.gif");
            n.removeAttribute("onclick");
            jogadas = jogadas + 1;
        }
        else if(n.classList.contains('carta1')){
            virar.setAttribute("src", "./imagens/explodyparrot.gif");
            n.removeAttribute("onclick");
            jogadas = jogadas + 1;
        }
        else if(n.classList.contains('carta2')){
            virar.setAttribute("src", "./imagens/fiestaparrot.gif");
            n.removeAttribute("onclick");
            jogadas = jogadas + 1;
        }
        else if(n.classList.contains('carta3')){
            virar.setAttribute("src", "./imagens/metalparrot.gif");
            n.removeAttribute("onclick");
            jogadas = jogadas + 1;
        }
        else if(n.classList.contains('carta4')){
            virar.setAttribute("src", "./imagens/tripletsparrot.gif");
            n.removeAttribute("onclick");
            jogadas = jogadas + 1;
        }
        else if(n.classList.contains('carta5')){
            virar.setAttribute("src", "./imagens/revertitparrot.gif");
            n.removeAttribute("onclick");
            jogadas = jogadas + 1;
        }
        else if(n.classList.contains('carta6')){
            virar.setAttribute("src", "./imagens/unicornparrot.gif");
            n.removeAttribute("onclick");
            jogadas = jogadas + 1;
        }
    }

    iguais = document.querySelectorAll(".selecionado");

    if(iguais.length === 2){
        if(iguais[0].innerHTML === iguais[1].innerHTML){
            iguais[0].classList.remove('selecionado');
            iguais[1].classList.remove('selecionado');
            vitoria = vitoria + 1;
            iguais = [];
        }else{
            iguais[0].classList.remove('selecionado');
            iguais[1].classList.remove('selecionado');
            iguais[0].setAttribute("onclick", "virarCarta(this)");
            iguais[1].setAttribute("onclick", "virarCarta(this)");
            const virarVolta = iguais[0].querySelector("img");
            virarVolta.setAttribute("src","./imagens/front.png");
            const voltar = iguais[1].querySelector("img");
            voltar.setAttribute("src","./imagens/front.png");
            iguais = [];
        }
    }
    console.log(jogadas);
    if(vitoria === qtd/2){
    alert("Você venceu o jogo em " + jogadas + " jogadas!!!");
    }
}

