const mysql = require('mysql'); // USar la libreria

// Configuracion de la base de datos
const config = mysql.createConnection({
    host: 'Unnamed', //127.0.0.1 
    user: 'root',
    password: '7294',
    database: 'proyectos'
});

module.exports = config; // Exportar la configuracion