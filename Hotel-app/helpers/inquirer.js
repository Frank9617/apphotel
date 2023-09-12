import inquirer from 'inquirer';

const mostrarMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'opcion',
            message: 'Selecciona una opción:',
            choices: [
                {
                    name: 'Agregar Habitación',
                    value: '1',
                },
                {
                    name: 'Mostrar Habitaciones',
                    value: '2',
                },
                // Agregar otras opciones aquí...
                {
                    name: 'Salir',
                    value: '5',
                },
            ],
        },
    ]);
};

const agregarHabitacion = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'roomNumber',
            message: 'Ingrese el número de la habitación:',
        },
        {
            type: 'input',
            name: 'capacity',
            message: 'Ingrese la capacidad de la habitación:',
        },
    ]);
};

// Agregar más funciones de interacción con el usuario según sea necesario...

module.exports = {
    mostrarMenu,
    agregarHabitacion,
    // Exportar otras funciones aquí...
};
