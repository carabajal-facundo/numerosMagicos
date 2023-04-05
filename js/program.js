function generarNumero(){
    numeroMagico = Math.floor(Math.random() * (11 - 1) + 1);
}
function generarAdivina(){
    let ingresarNumero = document.createElement('input');
    ingresarNumero.className = "form-control border border-secondary mt-5";
    ingresarNumero.id = "numeroIngresado";
    ingresarNumero.type = "number"
    /*ingresarNumero.minLength = '1';
    ingresarNumero.maxLength = '2';*/
    ingresarNumero.placeholder = "ingrese un numero del 1 al 10 para adivinar";

    let botonAdivinar = document.createElement("button");
    botonAdivinar.innerHTML = "Adivinar!"
    botonAdivinar.className = "btn mt-3 bg-white"
    botonAdivinar.addEventListener('click', adivinar);

    seccionAdivini.insertBefore(ingresarNumero, document.getElementById('adivina').firstChild);
    seccionAdivini.insertBefore(botonAdivinar, document.getElementById('numeroIngresado').firstChild);
}

function adivinar(){
    let numero = document.getElementById('numeroIngresado').value;
    if(numero==numeroMagico) alert("Felicidades ustede adivino cual es el numero magico");
    else if(numero > numeroMagico) alert("Perdon pero usted ingreso un numero mayor que el 'Numero magico'");
    else alert("Perdon pero usted ingreso un numero menor que el 'Numero magico'");
}

let numeroMagico;

let boton = document.getElementById('iniciarJuego');

let seccionAdivini = document.getElementById("adivina");

/*
<input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" maxlength="25">
<button class="btn btn-outline-light" type="submit"><i class="bi bi-search"></i></button>
*/