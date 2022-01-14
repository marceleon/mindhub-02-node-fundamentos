
/* Generación de txt con Tabla del 5*/

const num=5;
const min=1;
const max=10;
const nom_archivo=`Tabla-${num}.txt`;

let fs = require('fs');

let tabla="";

for(let i=min; i<=max; i++){
    let fila=`${num} x ${i} = ${num*i}`;
    tabla = tabla.concat(fila, "\n");
}

console.log("Generado "+nom_archivo+" en " + __dirname);

fs.writeFile(nom_archivo, tabla, (e) => { if(e) {console.log("Se produjo un error:" + e)}});

