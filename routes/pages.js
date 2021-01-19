const express = require('express');
const router = express.Router();
const libroscontroller = require('../controllers/libroscontroller');
const clientescontroller = require('../controllers/clientescontroller');
const ventascontroller = require('../controllers/ventascontroller');
const db = require('../database');
//const controller = require('../controllers/libroscontroller');
const autocontroller = require ('../controllers/autocontroller');


router.get('/clientes', clientescontroller.show);
router.get('/libros', libroscontroller.show);
router.get('/index', ventascontroller.show);
router.post('/agregar-libro', libroscontroller.create);
router.post('/agregar-cliente', clientescontroller.create);
router.get('/borrar-libro/:id_libro',libroscontroller.delete);
router.get('/borrar-cliente/:id_cliente',clientescontroller.delete);
router.post('/editar-cliente/cliente' ,clientescontroller.update);
router.post('/editar-libro/libro' ,libroscontroller.update);
router.get('/', ventascontroller.list);

 

  router.get('/register', (req,res)=>{
    res.render('register')
  });

  router.get('/login', (req,res)=>{
    res.render('login')
  });

router.post('/register', autocontroller.register);
router.post('/login', autocontroller.login);
router.get('/logout', autocontroller.logout);

module.exports = router;