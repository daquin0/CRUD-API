const controller = {};
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
    db.query('SELECT * FROM clientes', (err, clientes) => {
        if (err) {
        res.json(err);
        }
        res.render('clientes',{
            clientes:clientes
        });
    });
    };

controller.create =(req,res)=>{
    const cliente_nuevo = req.body;
    db.query('INSERT INTO clientes set ?', [cliente_nuevo], (err, clientes) => {
        res.redirect('/clientes');
    });
};

controller.delete = (req,res) =>{
    const {id_cliente} = req.params;
    db.query('delete from clientes where id_cliente = ?', [id_cliente], (err, clientes) =>{
        if (err) {
            res.send("Este libro no se puede eliminar porque ya esta vendido en tabla ventas");
            }
        else{
            res.redirect('/clientes');
        }
    });
};

controller.update = (req,res) => {
    const id = req.body.hidden_id;
    const nombre_new = req.body.nombre_new;
    const apellidos_new = req.body.apellidos_new;
    const ciudad_new = req.body.ciudad_new;
    const telefono_new = req.body.telefono_new;
    db.query('update clientes set nombre = ?, apellidos = ?, ciudad = ?, telefono = ? where id_cliente = ?', [nombre_new , apellidos_new,ciudad_new,telefono_new , id], async (err,clientes) => {
        if (err){
            res.send(err)
        }
        
        res.redirect('/clientes');
    });
};


module.exports = controller;

