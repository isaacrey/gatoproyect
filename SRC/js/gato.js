const celdas = document.getElementsByClassName("box");
const resetbtn = document.getElementById("juego");
const newGameBtn = document.getElementsByClassName("new-btn");
const msgContainer = document.getElementsByClassName("msg-container");
const msg = document.getElementsByClassName("msg");

resetbtn.addEventListener("click", function() {
    location.reload();
});

let turn0 = true; //playerx, player 0

let listasdisponibles = []

let listasocupadas = []

let listasrestantes = []

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

for (let index = 0; index < celdas.length; index++) {
    listasdisponibles.push(index)
    celdas[index].addEventListener ("click", function () {
        console.log(index);
    console.log ("box was clicked");
    if (true) {
        celdas[index].innerText = "O";
        
        listasocupadas.push(index) 
        listasrestantes = listasdisponibles.filter(el => !listasocupadas.includes(el));
        let val = listasrestantes[Math.floor(Math.random() * listasrestantes.length)]; 
        celdas[val].innerText = "X";  
        listasocupadas.push(val)
        celdas.disabled = true;
    }
    checkWinner();
});
}

function showWinner (winner){
    console.log("ganador");
    msg.innerText = `CONGRATULATIONS, WINNER IS ${winner}`;
    msgContainer.classList.remove ("hide");

}



function checkWinner(){
    for(let combinaciones of winPatterns) {
      if (celdas[combinaciones[0]].textContent == "X" && celdas[combinaciones[1]].textContent == "X" && celdas[combinaciones[2]].textContent == "X") {
        alert("GANO X");

      } 
      if (celdas[combinaciones[0]].textContent == "O" && celdas[combinaciones[1]].textContent == "O" && celdas[combinaciones[2]].textContent == "O") {
        alert("GANO 0");
      } 
    }
}
