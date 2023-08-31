const finDeTransmisionDeDatos = function(id) {
    return new Promise(function(resolve) {
        console.log('Transferencia', id, 'terminada');
        resolve(id);
    });
};

async function obtenDatosDeInternet(id, duracion) {
    console.log('Proceso', id, 'obteniendo datos de Internet');
    await new Promise(function(resolve) {
        setTimeout(function() {
            resolve();
        }, duracion);
    });
    await finDeTransmisionDeDatos(id);
}

module.exports.getDatos = obtenDatosDeInternet;
