
/*YARGS: Definición de parámetros de entrada*/

let arg = require("yargs")
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
                 demandOption: true}
             }) 
    .check( (argv) => { 
        v=(argv.b)     
        if (isNaN(v)) 
            throw  "El argumento ingresado NO es un número";
        if ((v)<1 || (v>20))
            throw "Debes colocar un valor de base entre 1 y 20";
        return true;})
    .argv;

module.exports = arg;
