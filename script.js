// TIPOS DE DATOS EN JAVASCRIPT
// TIPO NUMBER
let numero = 10;
// TIPO STRING
let saludo = "hola mundo, desde js"
let nombre = "Lester"
// TIPO BOOLEAN
let validacion = true;
let validacion2 = false;
// TIPO NULL
let data = null;

// CREACION DE OBJETO 
let Automovil = {
    marca: "Honda",
    color: "Rojo",
    modelo: 2023,
    mensaje: function (){
        consolo.log ("Hola soy un vehiculo");
    },
};
console.log (Automovil);

// CREACION DE ARRAY
let array = [1, 2, 3, 4, 5, "array"]
console.log(array); 

// DEFINICION DE UN CONSTANTE
const nombrecreador = "Lester";


// METODOS PARA EL TIPO DE DATO "NUMERO"
// Método: toFixed()
let numeroFormateado = numero.toFixed(2);
console.log(numeroFormateado); // Salida: "10.00"

// Método: isNaN()
let noEsNumero = isNaN(numero);
console.log(noEsNumero); // Salida: false

// METODO PARA EL TIPO DE DATO "STRING"
// Método: length
let longitudSaludo = saludo.length;
console.log(longitudSaludo); // Salida: 20

// Método: toUpperCase()
let nombreMayusculas = nombre.toUpperCase();
console.log(nombreMayusculas); // Salida: "LESTER"
