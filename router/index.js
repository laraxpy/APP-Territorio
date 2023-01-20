const express = require('express');
const router = express.Router();
const homeController = require('../controller/homeController');

module.exports= ()=>{
    router.get('/',homeController.redirector, homeController.pagInicio)
    //router.get('/miterritorio', homeController.miTerritorio)
    //router.get('/mapa', homeController.mapa)
    //router.get('/login', homeController.login)


    return router;
}