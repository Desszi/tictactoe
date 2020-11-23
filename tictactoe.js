'use strict'

const dataTictactoe = Array.from(document.querySelectorAll('.ground td[data-value]'));

const TicArray = [[""," "," "],[" ", " ", " "],[" ", " ", " "]];
let k=0;
for (let i =0; i< 3; i+=1) {
    for(let j=0; j<3; j+=1) {
        TicArray[i][j] = dataTictactoe[k];
        k++;
    }
}
console.log(TicArray);

let signal = 'O';
(function clickHandler() {
    if(signal=='O') {
        signal = 'X';
    }else {
        signal ='O';
    }
    TicArray.onclick= ()=> {TicArray.dataset.value = signal};   
})();

(function Rule() {
    if (TicArray[0][0] === 'X' && TicArray[0][1]==='X' && TicArray[0][2]==='X') {
        console.log("Az x játékos nyert.")
    }
    else if (TicArray[1][0] === 'X' && TicArray[1][1]==='X' && TicArray[1][2]==='X') {
        console.log("Az x játékos nyert.")
    }
    else if (TicArray[2][0] === 'X' && TicArray[2][1]==='X' && TicArray[2][2]==='X') {
        console.log("Az x játékos nyert.")
    }
    else if (TicArray[0][0] === 'X' && TicArray[1][0]==='X' && TicArray[2][0]==='X') {
        console.log("Az x játékos nyert.")
    }
    else if (TicArray[0][1] === 'X' && TicArray[1][1]==='X' && TicArray[2][1]==='X') {
        console.log("Az x játékos nyert.")
    }
    else if (TicArray[0][2] === 'X' && TicArray[1][2]==='X' && TicArray[2][2]==='X') {
        console.log("Az x játékos nyert.")
    }
    else if (TicArray[0][0] === 'X' && TicArray[1][1]==='X' && TicArray[2][2]==='X') {
        console.log("Az x játékos nyert.")
    }
    else if (TicArray[0][2] === 'X' && TicArray[1][1]==='X' && TicArray[2][0]==='X') {
        console.log("Az x játékos nyert.")
    }
    else if (TicArray[0][0] === 'O' && TicArray[0][1]==='O' && TicArray[0][2]==='O') {
        console.log("Az o játékos nyert.")
    }
    else if (TicArray[1][0] === 'O' && TicArray[1][1]==='O' && TicArray[1][2]==='O') {
        console.log("Az o játékos nyert.")
    }
    else if (TicArray[2][0] === 'O' && TicArray[2][1]==='O' && TicArray[2][2]==='O') {
        console.log("Az o játékos nyert.")
    }
    else if (TicArray[0][0] === 'O' && TicArray[1][0]==='O' && TicArray[2][0]==='O') {
        console.log("Az o játékos nyert.")
    }
    else if (TicArray[0][1] === 'O' && TicArray[1][1]==='O' && TicArray[2][1]==='O') {
        console.log("Az o játékos nyert.")
    }
    else if (TicArray[0][2] === 'O' && TicArray[1][2]==='O' && TicArray[2][2]==='O') {
        console.log("Az o játékos nyert.")
    }
    else if (TicArray[0][0] === 'O' && TicArray[1][1]==='O' && TicArray[2][2]==='O') {
        console.log("Az o játékos nyert.")
    }
    else if (TicArray[0][2] === 'O' && TicArray[1][1]==='O' && TicArray[2][0]==='O') {
        console.log("Az o játékos nyert.")
    }
})();