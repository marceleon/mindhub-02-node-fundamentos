
/* Función que genera txt con Tabla de Multiplicar*/

let fs = require('fs');
let colors = require('colors');

let crear_tabla_en_txt = function (nro, listar=false) {

    let tabla="";
    let ini=1;
    let fin=10;

    console.log(colors.rainbow("Tabla de multiplicar del " + nro));

    for(let i=ini; i<=fin; i++){
        let fila=`${nro} x ${i} = ${nro*i}`;
        if (listar) console.log(colors.random(fila));
        tabla = tabla.concat(fila, "\n");
    }


    let nom_archivo=`Tabla-${nro}.txt`;

    return new Promise((resolve, reject) => {
        fs.writeFile(nom_archivo, tabla, (e) => {     
            if(e) 
                return reject(e)
            else
                return resolve(nom_archivo + " creado!");
        })
    });
};

module.exports = crear_tabla_en_txt;
