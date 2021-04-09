let qtd = 4;
let jogadas = 0;
let vitoria = 0;
let iguais = [];

const imagens = [
    "./imagens/bobrossparrot.gif",
    "./imagens/explodyparrot.gif",
    "./imagens/fiestaparrot.gif",
    "./imagens/metalparrot.gif",
    "./imagens/tripletsparrot.gif",
    "./imagens/revertitparrot.gif",
    "./imagens/unicornparrot.gif"];


jogar();
function jogar(){
    /*while(qtd > 14 || qtd < 4){
        qtd = parseInt(prompt("Digite com quatas cartas quer jogar: "));
        if(qtd%2 !== 0){
            qtd = 0;
        }
    }*/
    
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
        n.classList.add('back-face');

        for (let i = 0; i < qtd/2; i++) {
            if(n.classList.contains('carta' + i)){

                virar.setAttribute("src", imagens[i]);
                n.removeAttribute("onclick");
                jogadas = jogadas + 1;
            }
            
        }
    }

    if(jogadas == 1){
        timer = setInterval(alteraNumero, 1000);
    }

    iguais = document.querySelectorAll(".selecionado");

    if(iguais.length === 2){
        if(iguais[0].innerHTML === iguais[1].innerHTML){
            iguais[0].classList.remove('selecionado');
            iguais[1].classList.remove('selecionado');

            vitoria = vitoria + 1;
            
            iguais = [];

        }else{
            setTimeout(desvira, 1000);
        }

    }
    

    console.log(vitoria);
    
    if(vitoria === qtd/2){
        setTimeout(venceu, 100);
    }
}

function desvira(){

    for (let i = 0; i < 2; i++) {
        iguais[i].classList.remove('selecionado');
        iguais[i].classList.remove('back-face');
        iguais[i].setAttribute("onclick", "virarCarta(this)");
        const virarVolta = iguais[i].querySelector("img");
        virarVolta.setAttribute("src","./imagens/front.png");  
    }
    iguais = [];
}

function venceu(){
    const minutos = document.querySelector(".min");
    const segundos = document.querySelector(".seg");

    clearInterval(timer);

    if(minutos.innerHTML !== "00"){
        alert("Você venceu o jogo em " + jogadas + " jogadas em " + minutos.innerHTML + "minutos e " + segundos.innerHTML + " segundos");
    }else{
        alert("Você venceu o jogo em " + jogadas + " jogadas em " + segundos.innerHTML + " segundos");
    }
    const novoJogo = prompt("Gostaria de jogar de novo?(sim/não)");
    if(novoJogo === "sim"){
        minutos.innerHTML = 0;
        segundos.innerHTML = 0;
        jogadas = 0;
        iguais = [];
        vitoria = 0;
        jogar();
    }
}

function alteraNumero(){
    const minutos = document.querySelector(".min");
    const segundos = document.querySelector(".seg");
    segundos.innerHTML ++;
    if(segundos.innerHTML == 60){
        minutos.innerHTML += 1;
        segundos.innerHTML = 00;
    }

}