const $texto = document.getElementById('texto');
let arregloReverso = [];
let arreglo = [];

document.getElementById('btn-verificar').addEventListener('click',() => {
    arreglo = [];
    arregloReverso = [];
    
    for (let i = 0; i < $texto.value.length; i++) {
        arreglo.push($texto.value[i]);
    }
    for (let i = $texto.value.length; i >= 0 ; i--) {
        arregloReverso.push($texto.value[i]);
    }

    arreglo = arreglo.filter(e => e != ' ');    
    arreglo = arreglo.filter(e => e != ',');
    arregloReverso = arregloReverso.filter(e => e != ',');
    arregloReverso = arregloReverso.filter(e => e != ' ');

    console.log(arreglo.join(''));
    console.log(arregloReverso.join(''));
    
    if (arreglo.join('').toLowerCase() == arregloReverso.join('').toLowerCase()) {
        Swal.fire("Es un palindromo");
    } else {
        Swal.fire("NO es un palindromo");
    }
    
});
