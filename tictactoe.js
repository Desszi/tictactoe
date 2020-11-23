'use strict'

let signal = "O";
const TicArray = [[""," "," "],[" ", " ", " "],[" ", " ", " "]];

function myFunction() { 
    const dataTictactoe = Array.from(document.querySelectorAll('.ground td[data-value]'));
    
    let k=0;
    for (let i =0; i< 3; i+=1) {
        for(let j=0; j<3; j+=1) {
            TicArray[i][j] = dataTictactoe[k];
            k++;
        }
    }

       for (let i = 0; i < TicArray.length; i++) {
            for (let j = 0; j < TicArray[i].length; j++) {
                TicArray[i][j].onclick = function () { 
                        TicArray[i][j].innerHTML = signal;
                        Rule();
                        if (signal === "O") {
                            signal = "X";
                        } 
                        else if (signal==="X") {
                            signal = "O";
                        }
                };
            }
        }
};


function Rule() {
    if (TicArray[0][0].innerHTML === 'X' && TicArray[0][1].innerHTML==='X' && TicArray[0][2].innerHTML==='X') {
        console.log("Az x játékos nyert.");
    }
    else if (TicArray[1][0].innerHTML === 'X' && TicArray[1][1].innerHTML==='X' && TicArray[1][2].innerHTML==='X') {
        console.log("Az x játékos nyert.");
    }
    else if (TicArray[2][0].innerHTML === 'X' && TicArray[2][1].innerHTML==='X' && TicArray[2][2].innerHTML==='X') {
        console.log("Az x játékos nyert.");
    }
    else if (TicArray[0][0].innerHTML === 'X' && TicArray[1][0].innerHTML==='X' && TicArray[2][0].innerHTML==='X') {
        console.log("Az x játékos nyert.");
    }
    else if (TicArray[0][1].innerHTML === 'X' && TicArray[1][1].innerHTML==='X' && TicArray[2][1].innerHTML==='X') {
        console.log("Az x játékos nyert.");
    }
    else if (TicArray[0][2].innerHTML === 'X' && TicArray[1][2].innerHTML==='X' && TicArray[2][2].innerHTML==='X') {
        console.log("Az x játékos nyert.");
    }
    else if (TicArray[0][0].innerHTML === 'X' && TicArray[1][1].innerHTML==='X' && TicArray[2][2].innerHTML==='X') {
        console.log("Az x játékos nyert.");
    }
    else if (TicArray[0][2].innerHTML === 'X' && TicArray[1][1].innerHTML==='X' && TicArray[2][0].innerHTML==='X') {
        console.log("Az x játékos nyert.")
    }
    else if (TicArray[0][0].innerHTML === 'O' && TicArray[0][1].innerHTML==='O' && TicArray[0][2].innerHTML==='O') {
        console.log("Az o játékos nyert.");
    }
    else if (TicArray[1][0].innerHTML === 'O' && TicArray[1][1].innerHTML==='O' && TicArray[1][2].innerHTML==='O') {
        console.log("Az o játékos nyert.");
    }
    else if (TicArray[2][0].innerHTML === 'O' && TicArray[2][1].innerHTML==='O' && TicArray[2][2].innerHTML==='O') {
        console.log("Az o játékos nyert.");
    }
    else if (TicArray[0][0].innerHTML === 'O' && TicArray[1][0].innerHTML==='O' && TicArray[2][0].innerHTML==='O') {
        console.log("Az o játékos nyert.");
    }
    else if (TicArray[0][1].innerHTML === 'O' && TicArray[1][1].innerHTML==='O' && TicArray[2][1].innerHTML==='O') {
        console.log("Az o játékos nyert.");
    }
    else if (TicArray[0][2].innerHTML === 'O' && TicArray[1][2].innerHTML==='O' && TicArray[2][2].innerHTML==='O') {
        console.log("Az o játékos nyert.");
    }
    else if (TicArray[0][0].innerHTML === 'O' && TicArray[1][1].innerHTML==='O' && TicArray[2][2].innerHTML==='O') {
        console.log("Az o játékos nyert.");
    }
    else if (TicArray[0][2].innerHTML === 'O' && TicArray[1][1].innerHTML==='O' && TicArray[2][0].innerHTML==='O') {
        console.log("Az o játékos nyert.");
    }
};

function NewGame() {
    for (let i = 0; i < TicArray.length; i++) {
        for (let j = 0; j < TicArray[i].length; j++) {
                    TicArray[i][j].innerHTML = ' ';
              
        }
    }
}