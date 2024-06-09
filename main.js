const btnDropdown = document.querySelector("button[data-bs-toggle='dropdown']");
const btnMonedaColones = document.querySelector("#moneda-a-colones"); // cambiar texto de este boton
const btnColonesMoneda = document.getElementById("colones-a-moneda"); // cambiar texto de este boton

const inputValorMoneda = document.getElementById("valor-moneda");
// Tomar referencia del input de colones
const inputValorColones = document.getElementById("valor-colones");

const liEUR = document.getElementById("eur");
const liUSD = document.getElementById("usd");
const liGTQ = document.getElementById("gtq");
const liMXN = document.getElementById("mxn");
const liHNL = document.getElementById("hnl");

const TIPO_CAMBIO_DOLAR_COLONES = 514.26;
const TIPO_CAMBIO_EURO_COLONES = 558.70;
const TIPO_CAMBIO_QUETZAL_COLONES = 68.06;
const TIPO_CAMBIO_PESO_COLONES = 28.89;
const TIPO_CAMBIO_LEMPIRA_COLONES = 21.40;

let monedaSeleccionada = 'USD';

liEUR.addEventListener('click', () => {
    btnDropdown.innerText = 'Euro';
    btnMonedaColones.innerText = 'Euros a colones';
    btnColonesMoneda.innerText = 'Colones a euros';
    monedaSeleccionada = 'EUR';
});

liUSD.addEventListener('click', () => {
    btnDropdown.innerText = 'Dolar';
    btnMonedaColones.innerText = 'Dólares a colones';
    btnColonesMoneda.innerText = 'Colones a dólares';
    monedaSeleccionada = 'USD';
}); 

liGTQ.addEventListener('click', () => {
    btnDropdown.innerText = 'Quetzal';
    btnMonedaColones.innerText = 'Quetzales a colones';
    btnColonesMoneda.innerText = 'Colones a quetzales';
    monedaSeleccionada = 'GTQ';
}); 

liMXN.addEventListener('click', () => {
    btnDropdown.innerText = 'Pesos';
    btnMonedaColones.innerText = 'Pesos a colones';
    btnColonesMoneda.innerText = 'Colones a pesos';
    monedaSeleccionada = 'MXN';
}); 

liHNL.addEventListener('click', () => {
    btnDropdown.innerText = 'Lempira';
    btnMonedaColones.innerText = 'Lempiras a colones';
    btnColonesMoneda.innerText = 'Colones a lempiras';
    monedaSeleccionada = 'HNL';
});

// Crear evento click para btnMonedaColones donde imprima por consola el valor de monedaSeleccionada
btnMonedaColones.addEventListener('click', () => {
    const valorMoneda = inputValorMoneda.value; // extraer el valor del input: string

    if(valorMoneda.length === 0 || parseInt(valorMoneda) < 0){ // si no hay nada en el input o el valor es menor que 0
        alert('El valor no es correcto');
        return; // aqui acaba la funcion
    }

    // "5.4" => 5 = usando parseInt
    // "5.4" => 5.4 = usando parseFloat
    const valorMonedaParseado = parseFloat(valorMoneda); // parsear el valor el input, de string a number

    //              5.4 * 513.04 = x
    let result = 0;

    // Condicion
    // if(monedaSeleccionada === 'USD'){
    //     result = valorMonedaParseado * TIPO_CAMBIO_DOLAR_COLONES; // 513.04
    // }

    // if(monedaSeleccionada === 'EUR'){
    //     result = valorMonedaParseado * TIPO_CAMBIO_EURO_COLONES;
    // }

    // TAREA: Usar switch en lugar de condiciones => tiempo limite: 7:06
    switch(monedaSeleccionada){
        case 'USD':
            result = valorMonedaParseado * TIPO_CAMBIO_DOLAR_COLONES;
        break;

        case 'EUR': 
            result = valorMonedaParseado * TIPO_CAMBIO_EURO_COLONES;
        break; 

        case 'GTQ': 
            result = valorMonedaParseado * TIPO_CAMBIO_QUETZAL_COLONES;
        break; 

        case 'MXN': 
            result = valorMonedaParseado * TIPO_CAMBIO_PESO_COLONES;
        break; 

        case 'HNL': 
            result = valorMonedaParseado * TIPO_CAMBIO_LEMPIRA_COLONES;
        break;

        default:
            console.error('Moneda no controlada');
            // throw new Error('Moneda no controlada'); // dispara un error, terminamos la funcion
    }

    inputValorColones.value = result.toFixed(2); // Muestra el resutado con 2 decimales
});

// Agregar evento a btnColonesMoneda e imprimir hola 
btnColonesMoneda.addEventListener('click', () => {
    const colonesValor = inputValorColones.value;

    if(colonesValor.length === 0 || parseInt(colonesValor) < 0){ // si no hay nada en el input o el valor es menor que 0
        alert('El valor no es correcto');
        return; // aqui acaba la funcion
    }

    const valorColonesParseado = parseInt(colonesValor); // pasando a un numero entero

    let result = 0;

    switch (monedaSeleccionada) {
        case 'USD':
            result = valorColonesParseado / TIPO_CAMBIO_DOLAR_COLONES; // dolares 
        break;

        case 'EUR':
            result = valorColonesParseado / TIPO_CAMBIO_EURO_COLONES; // euros
        break;

        case 'GTQ':
            result = valorColonesParseado / TIPO_CAMBIO_QUETZAL_COLONES; 
        break;

        case 'MXN':
            result = valorColonesParseado / TIPO_CAMBIO_PESO_COLONES; 
        break;

        case 'HNL':
            result = valorColonesParseado / TIPO_CAMBIO_LEMPIRA_COLONES; 
        break;
    
        default:
            console.error('Moneda no controlada');
    }

    inputValorMoneda.value = result.toFixed(2);
});