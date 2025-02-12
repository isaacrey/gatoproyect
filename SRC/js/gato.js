const celdas = document.getElementsByClassName('square');

for (let index = 0; index < celdas.length; index++) {
    celdas[index].innerHTML = index;
    celdas[index].addEventListener('click', function () {
        celdas [index].textContent= "0";
    })  
}

if (condition) {
    
}

