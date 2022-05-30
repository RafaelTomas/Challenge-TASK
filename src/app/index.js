const express = require('express');

class App {
    constructor(){
        this.server = express();
        this.middleware();
    }
    
    middleware(){
        this.server.use(express.json());
    }
    routes(){
        router(this.server);
    }
    
}

module.exports = new App().server;