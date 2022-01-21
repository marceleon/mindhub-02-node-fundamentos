
/*Parámetros de entrada con Yargs*/

const crear_tabla_en_txt = require('./apps-tarea3-modulo');
const arg = require("yargs").argv;

console.log("Dónde estoy?? -> " +__dirname);
console.log("Qué estoy ejecutando?? -> "+__filename);
console.log("Pasé parámetros?? -> ");
console.log(arg);

if (typeof(arg.base)=="number" &&  parseInt(arg.base)>0) {
   
    multi = parseInt(arg.base); 

    console.log("Tabla de multiplicar del " + multi);

    crear_tabla_en_txt(multi).then( resultado => console.log(resultado))
                            .catch( err  => console.log(err));

} else 
    console.log(arg.base + " Parámetros inválidos");
