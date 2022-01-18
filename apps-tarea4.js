
/* Muestra de parámetros de entrada*/

let crear_tabla_en_txt = require('./apps-tarea3-modulo');
let params = require("process");

let esNumero = (n) => typeof(n)=="number" &&! Number.isNaN(n);

console.log("Dónde está NODE?? -> " +params.argv[0]);
console.log("Qué estoy ejecutando?? -> "+params.argv[1]);
console.log("Pasé parámetros?? ->"+ params.argv.slice(2, params.argv.length));

let base = params.argv[2]; 

if (base!=null && base.substring(0,6).toLowerCase()=="--base" && base.length>6)  {
    
    let multi = base.substring(6,base.length);

    if (esNumero(parseInt(multi))) {

        multi = parseInt(multi); 

        console.log("Tabla de multiplicar del " + multi);

        crear_tabla_en_txt(multi).then( resultado => console.log(resultado))
                                .catch( err  => console.log(err));
    } else {
        console.log(multi + " es un número inválido"); };

} else 
    console.log(base + " Parámetros inválidos");