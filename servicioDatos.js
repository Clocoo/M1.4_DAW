const finDeTransmisionDeDatos = function(id) {
    return new Promise(function(resolve) {
        console.log('Transferencia', id, 'terminada');
        resolve(id);
    });
};

const obtenDatosDeInternet = function(id, duracion) {
    console.log('Proceso', id, 'obteniendo datos de Internet');
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            finDeTransmisionDeDatos(id)
                .then(resolve)
                .catch(reject);
        }, duracion);
    });
};

module.exports.getDatos = obtenDatosDeInternet;
