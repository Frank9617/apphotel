const habitacionAgregada = () => {
    console.log('Habitación agregada exitosamente.');
};

const mostrarHabitaciones = (habitaciones) => {
    console.log('Lista de Habitaciones:');
    habitaciones.forEach((habitacion) => {
        console.log(habitacion);
    });
};

// Agregar más funciones de mensajes según sea necesario...

module.exports = {
    habitacionAgregada,
    mostrarHabitaciones,
    // Exportar otras funciones aquí...
};
