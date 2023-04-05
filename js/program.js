function generarNumero(){
    numeroMagico = Math.floor(Math.random() * (11 - 1) + 1);
}
function generarAdivina(){
    if(noJuego){
        let ingresarNumero = document.createElement('input');
        ingresarNumero.className = "form-control border border-secondary mt-5";
        ingresarNumero.id = "numeroIngresado";
        ingresarNumero.type = "number"
        ingresarNumero.placeholder = "ingrese un numero del 1 al 10 para adivinar";
    
        let botonAdivinar = document.createElement("button");
        botonAdivinar.innerHTML = "Adivinar!"
        botonAdivinar.className = "btn mt-3 bg-white"
        botonAdivinar.addEventListener('click', adivinar);
    
        seccionAdivini.insertBefore(ingresarNumero, document.getElementById('adivina').firstChild);
        seccionAdivini.insertBefore(botonAdivinar, document.getElementById('numeroIngresado').firstChild);
        noJuego = false;
    }
    else generarAdivina();
}

function adivinar(){
    let numero = document.getElementById('numeroIngresado').value;
    if(numero > 0 && numero < 11){
        if(numero==numeroMagico) alert("Felicidades ustede adivino cual es el numero magico");
        else if(numero > numeroMagico) alert("Perdon pero usted ingreso un numero mayor que el 'Numero magico'");
        else alert("Perdon pero usted ingreso un numero menor que el 'Numero magico'");
    }
    else alert("Por favor ingrese un numero entre 1 y 10");
}

let numeroMagico;

let noJuego = true;

let boton = document.getElementById('iniciarJuego');

let seccionAdivini = document.getElementById("adivina");
