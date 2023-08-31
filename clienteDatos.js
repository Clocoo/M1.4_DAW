const servicio = require("./servicioDatos");

const obtenerDatos = function(id, duracion) {
    return new Promise(function(resolve, reject) {
        servicio.getDatos(id, duracion)
            .then(function() {
                resolve(id);
            })
            .catch(reject);
    });
};

obtenerDatos(1, 3000)
    .then(function() {
        return obtenerDatos(2, 500);
    })
    .then(function() {
        return obtenerDatos(3, 4000);
    })
    .then(function() {
        return obtenerDatos(4, 700);
    })
    .then(function() {
        return obtenerDatos(5, 3500);
    })
    .catch(function(error) {
        console.error('Error:', error);
    });
