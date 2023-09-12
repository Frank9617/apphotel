const fs = require('fs');

const cargarDatos = (archivo) => {
    try {
        const datos = JSON.parse(fs.readFileSync(archivo, 'utf8'));
        return datos;
    } catch (error) {
        return [];
    }
};

const guardarDatos = (archivo, datos) => {
    fs.writeFileSync(archivo, JSON.stringify(datos, null, 4));
};

module.exports = {
    cargarDatos,
    guardarDatos,
};
