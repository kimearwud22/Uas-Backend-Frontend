const express = require("express");
const routerInventaris = express.Router()

const controllerInventaris = require('../controllers/inventarisController')

routerInventaris.route('/inventaris')
    .get(controllerInventaris.getAllInventaris)
    .post(controllerInventaris.addInventaris)
    .put(controllerInventaris.update)

routerInventaris.route('/inventaris/:kode')
    .get(controllerInventaris.getInventarisByKode)
    .put(controllerInventaris.update)
    .delete(controllerInventaris.delete)
    .get(controllerInventaris.getInventarisKode)
    
routerInventaris.route('/inventaris/:id')
    .get(controllerInventaris.getInventarisById)
    .put(controllerInventaris.update)

routerInventaris.route('/inventaris/pinjam/:kode')
    .get(controllerInventaris.getInventarisPinjam)
    .post(controllerInventaris.addPinjaman)
    .put(controllerInventaris.updatePinjam)
    .delete(controllerInventaris.deletePinjam)

routerInventaris.route('/inventaris/pinjam')
    .get(controllerInventaris.getInventarisPinjam)
    .post(controllerInventaris.addPinjaman)
    .put(controllerInventaris.updatePinjam)


module.exports = routerInventaris




