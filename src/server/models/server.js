const express = require('express');
const cors = require('cors');
const routerAuthAdmin = require('../routes/usuarios/usuarios')

class Server{
    constructor(){
        this.app=express();
        this.port=process.env.PORT;
        this.apiroutes={
            auth:   '/auth'
        };
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(express.static('./src/server/public'));
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.apiroutes.auth, routerAuthAdmin);
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Corriendo en puerto ${this.port}`);
        })
    }
}

module.exports = {Server};