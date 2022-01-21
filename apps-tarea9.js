
/*Listando tabla en colores*/

const crear_tabla_en_txt = require('./apps-tarea9-modulo');
const arg = require("./config/yargs");

crear_tabla_en_txt(arg.base, arg.l).then( resultado => console.log(resultado))
                                   .catch( err  => console.log(err));
