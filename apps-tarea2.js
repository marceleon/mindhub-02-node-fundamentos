
/* Generación de txt con Tabla del 5*/

const num=5;
const min=1;
const max=10;
let nom_archivo=`Tabla-${num}.txt`;

let fs = require('fs');

let tabla="";

for(let i=min; i<=max; i++){
    let fila=`${num} x ${i} = ${num*i}`;
    tabla = tabla.concat(fila, "\n");
}

console.log("Generado "+nom_archivo+" en " + __dirname);

let grabar = function(nom) {
    let nombre=nom

    fs.writeFile(nombre, tabla, (e) => { 
    
        if(e) 
            console.log("Se produjo un error:" + e)
        else 
            setTimeout(() => {console.log(nombre + " generado")},3000);})
}


console.log(nom_archivo);

grabar(nom_archivo);
grabar("01_"+nom_archivo);
grabar("02_"+nom_archivo);

nom_archivo="OTRONOMBRE"
console.log(nom_archivo);
