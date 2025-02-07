/*function esPrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

// Ejemplo de uso
const numero = parseInt(prompt("Ingresa un número: "), 10);
if (esPrimo(numero)) {
    alert(`${numero} es un número primo.`);
} else {
    alert(`${numero} no es un número primo.`);
}*/

let numero = parseInt(prompt("Ingrese un número"));

function numPrimo(){
    if(numero <= 1){
        alert("Numero no debe ser menor que 1");
        return;
    }
        for(let i = 2; i < numero; i++){
            if (numero % i === 0){
                alert("Numero NO es primo: "+numero);
            return;
            }  
        }alert("Numero ES PRIMO: "+numero);
    }
numPrimo();
