
/*Validando parámetros de entrada con Yargs*/

/* NO ESTÁ TOMANDO EL VALOR DE ESTA FUNCION
let val_base = (v) => {

    if (isNaN(v)) 
        throw  "El argumento ingresado NO es un número";

    if ((v)<1 || (v>20))
        throw "Debes colocar un valor de base entre 1 y 20";
    
    return true;
};
*/

const crear_tabla_en_txt = require('./apps-tarea7-modulo');
const arg = require("yargs")
    .options({'b' :{ 
                alias:'base',
                type: 'number',
                describe: 'Base de la tabla de multiplicar',
                demandOption: true},
              'l' :{
                 alias:'listar',
                 type: 'boolean',
                 default: false,
                 describe: 'Lista la tabla por consola',
                 demandOption: false}
             }) 
    .check( (argv) => { 
        v=(argv.b)     
        if (isNaN(v)) 
            throw  "El argumento ingresado NO es un número";
        if ((v)<1 || (v>20))
            throw "Debes colocar un valor de base entre 1 y 20";
        return true;})
    .argv;

crear_tabla_en_txt(arg.base, arg.l).then( resultado => console.log(resultado))
                                   .catch( err  => console.log(err));
