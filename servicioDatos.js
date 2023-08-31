let finDeTransmisionDeDatos = function (id,callback){
    console.log('Transferencia',id,'terminada');
    callback();
}
let obtenDatosDeInternet = function (id,duracion,callback){
    console.log('Proceso',id,'obteniendo datos de Internet');
    setTimeout(finDeTransmisionDeDatos,duracion,id,callback);
}
module.exports.getDatos = obtenDatosDeInternet;
