// app.js

require('colors');

const fs = require('fs');
const inquirer = require('./helpers/inquirer');
const mensajes = require('./helpers/mensajes');
const Habitacion = require('./models/habitacion');

const habitacionesFile = './DB/habitaciones.json';

let habitaciones = [];

const cargarHabitaciones = () => {
    try {
        habitaciones = JSON.parse(fs.readFileSync(habitacionesFile, 'utf8'));
    } catch (error) {
        habitaciones = [];
    }
};

const guardarHabitaciones = () => {
    fs.writeFileSync(habitacionesFile, JSON.stringify(habitaciones, null, 4));
};

const main = async () => {
    cargarHabitaciones();
    
    while (true) {
        const { opcion } = await inquirer.mostrarMenu();
        
        switch (opcion) {
            case '1':
                const { roomNumber, capacity } = await inquirer.agregarHabitacion();
                const nuevaHabitacion = new Habitacion(roomNumber, capacity);
                habitaciones.push(nuevaHabitacion);
                guardarHabitaciones();
                mensajes.habitacionAgregada();
                break;

            case '2':
                const habitacionesDisponibles = habitaciones.map(h => `Habitación ${h.roomNumber}: Capacidad ${h.capacity}`);
                mensajes.mostrarHabitaciones(habitacionesDisponibles);
                break;

            case '3':
                const roomToUpdate = await inquirer.actualizarHabitacion(habitaciones);
                const { newCapacity } = await inquirer.nuevaCapacidad();
                const habitacionIndex = habitaciones.findIndex(h => h.roomNumber === roomToUpdate);
                if (habitacionIndex !== -1) {
                    habitaciones[habitacionIndex].capacity = newCapacity;
                    guardarHabitaciones();
                    mensajes.habitacionActualizada();
                } else {
                    mensajes.habitacionNoEncontrada();
                }
                break;

            case '4':
                const roomToDelete = await inquirer.eliminarHabitacion(habitaciones);
                const habitacionIndexToDelete = habitaciones.findIndex(h => h.roomNumber === roomToDelete);
                if (habitacionIndexToDelete !== -1) {
                    habitaciones.splice(habitacionIndexToDelete, 1);
                    guardarHabitaciones();
                    mensajes.habitacionEliminada();
                } else {
                    mensajes.habitacionNoEncontrada();
                }
                break;

            case '5':
                mensajes.salir();
                process.exit(0);

            default:
                mensajes.opcionInvalida();
        }
    }
};

main();
