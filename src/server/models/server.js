const express = require('express');
const cors = require('cors');
const routerAuthAdmin = require('../routes/usuarios/usuarios')
const routerDashUser = require('../routes/usuarios/usuarios')
const routerDashUserPerfil = require('../routes/usuarios/usuarios')
const routerTicketUser = require('../routes/usuarios/notificaciones')
const routerUserAdmin = require('../routes/administrativa/usuario_editable_admin')
const routerSeleccionarDepartamentos = require('../routes/administrativa/select_deptos_admin')

class Server{
    constructor(){
        this.app=express();
        this.port=process.env.PORT;
        this.apiroutes={
            auth:   '/auth',
            dash:   '/dash',
            perfil: '/perfil',
            ticket: '/ticket',
            admin: '/admin',
            deptos: '/depto_users'
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
        this.app.use(this.apiroutes.dash, routerDashUser);   
        this.app.use(this.apiroutes.perfil, routerDashUserPerfil);
        this.app.use(this.apiroutes.ticket, routerTicketUser);      
        this.app.use(this.apiroutes.admin, routerUserAdmin);
        this.app.use(this.apiroutes.deptos, routerSeleccionarDepartamentos);
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Corriendo en puerto ${this.port}`);
        })
    }
}

module.exports = {Server};