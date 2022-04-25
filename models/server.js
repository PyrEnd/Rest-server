const express = require('express');
const cors = require('cors');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        // Esto reemplaza y "empata" la ruta. No es necesario,
        // pero para sacarlo hay que reemplazar con '/api/usuarios' en 
        // routes(){this.app.use( --->this.usuariosPath<--- , require('../routes/user'));}
        // Línea 36.
        this.usuariosPath = '/api/usuarios';

        // Middlewares
        this.middlewares();


        // Rutas de la aplicación
        this.routes();
    };
    


    middlewares(){
        // CORS
        this.app.use(cors());

        // Lectura y Parseo del body = Obtener datos desde solicitud
        this.app.use(express.json());

        // Directorio público
        this.app.use(express.static('public'));
        
    };


    routes(){
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    };


    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`http://localhost:${this.port}`);
        })
    };





}

module.exports = {
    Server
};