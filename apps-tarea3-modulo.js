
/* Función que genera txt con Tabla de Multiplicar*/

let fs = require('fs');

let crear_tabla_en_txt = function (nro, ini=1, fin=10, listar=false) {

    let tabla="";

    for(let i=ini; i<=fin; i++){
        let fila=`${nro} x ${i} = ${nro*i}`;
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
