const servicio = require("./servicioDatos");

async function obtenerDatos(id, duracion) {
    await servicio.getDatos(id, duracion);
}

async function realizarObtencionDatos() {
    try {
        await obtenerDatos(1, 3000);
        await obtenerDatos(2, 500);
        await obtenerDatos(3, 4000);
        await obtenerDatos(4, 700);
        await obtenerDatos(5, 3500);
    } catch (error) {
        console.error('Error:', error);
    }
}

realizarObtencionDatos();
