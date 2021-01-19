const controller = {};
const { query } = require('express');
const db= require('../database');


controller.show = (req, res) => {
    const token = req.cookies.jwt;
    console.log(token);
    if(!token)
    {
        return res.status(401).render('login' , {
            message: 'Debes de iniciar sesion para poder navegar'
        });
    }
    db.query('SELECT * FROM ventas', (err, ventas) => {
        if (err) {
        res.json(err);
        }
        res.render('index',{
           index:index
        });
    });
    };

/*controller.create =(req,res)=>{
    const venta_nuevo = req.body;
        db.query('INSERT INTO ventas set ?', [venta_nuevo], (err, ventas) => {
            res.redirect('/');
    });
};*/

controller.list = (req,res) => {
    const token = req.cookies.jwt;
    console.log(token);
    if(!token)
    {
        return res.status(401).render('login' , {
            message: 'Debes de iniciar sesion para poder navegar'
        });
    }
    db.query('select ventas.id_ventas, clientes.id_cliente, libros.id_libro from ventas inner join libros on ventas.id_libro=libros.id_libro inner join clientes on ventas.id_cliente = clientes.id_cliente', (err, ventas)=>{
        res.render('index',{
            ventas:ventas
        })
    });
};

module.exports = controller;

