jogar();
function jogar(){
    let qtd = 0;
    while(qtd > 14 | qtd < 4){
        qtd = parseInt(prompt("Digite com quatas cartas quer jogar: "));
        if(qtd%2 !== 0){
            alert("Impossível jogar com número ímpar!!")
            qtd = 0;
        }
    }

    alert(qtd);
}



function virarCarta(){

}