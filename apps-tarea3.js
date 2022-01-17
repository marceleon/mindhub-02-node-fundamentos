
/* Generación de txt con Tabla de un número*/

let crear_tabla_en_txt = require('./apps-tarea3-modulo');

crear_tabla_en_txt(5).then( resultado => console.log(resultado))
                    .catch( err  => console.log(err));
crear_tabla_en_txt(7, 1, 5).then( resultado => console.log(resultado))
                    .catch( err => console.log(err));
crear_tabla_en_txt(3, 1, 20).then( resultado => console.log(resultado))
                    .catch( err => console.log(err));
