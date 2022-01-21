
/*Validando parámetros de entrada con Yargs configurado en un archivo externo*/

const crear_tabla_en_txt = require('./apps-tarea7-modulo');
const arg = require("./config/yargs");

crear_tabla_en_txt(arg.base, arg.l).then( resultado => console.log(resultado))
                                   .catch( err  => console.log(err));
