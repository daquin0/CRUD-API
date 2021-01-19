/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">    
    <title>Document</title>
</head>
<body>
<!-- AGREGAR Libro -->    
<div>
<div class="container">
    <br>
    <div style="float: right;">
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#agregarlibro">Agregar libro</button>
    </div>
    <br><br>
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Titulo</th>
                    <th>Autor</th>
                    <th>Editorial</th>
                    <th>Lugar de publicacion</th>
                    <th>Precio</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {{#each index}}
                <tr>
                    <td>{{this.id_libro}}</td>
                    <td>{{this.titulo}}</td>
                    <td>{{this.autor}}</td>
                    <td>{{this.editorial}}</td>
                    <td>{{this.lugar_publicacion}}</td>
                    <td>{{this.precio}}</td>
                    <td>
                        <a href="/borrar-libro/{{id_libro}}" type="button" class="btn btn-danger">Eliminar</a>
                        <button class="btn  btn-primary" id="update_libro({{this.id_libro}})">Editar libro</button>
                    </td>
                </tr>
                {{/each }}
            </tbody>
        </table>
    </div>
    <div class="modal fade bd-example-modal-lg" id="agregarlibro" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-body">
            <form action="/agregar-libro" method="POST">
                    <div class="form-group">
                        <label for="titulo">Titulo</label>
                        <input type="text" class="form-control" name="titulo" id="titulo">
                    </div>
                    <div class="form-group">
                        <label for="autor">Autor</label>
                        <input type="text" class="form-control" name="autor" id="autor">
                    </div>
                    <div class="form-group">
                        <label for="editorial">Editorial</label>
                        <input type="text" class="form-control" name="editorial" id="editorial">
                    </div>
                    <div class="form-group">
                        <label for="lugar_publicacion">lugar publicacion</label>
                        <input type="text" class="form-control" name="lugar_publicacion" id="lugar_publicacion">
                    </div>
                    <div class="form-group">
                        <label for="precio">Precio</label>
                        <input type="text" class="form-control" name="precio" id="precio">
                    </div>
                    <button type="submit" class="btn btn-primary">Agregar libro</button>
                </form>
                </div>
        </div>
    </div>
</div>
<div class="modal fade bd-example-modal-lg" id="updatelibro" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-body">
                     <form action="/update-libro" method="POST">
                    <div class="form-group">
                        <label for="titulo_new">Titulo</label>
                        <input type="text" class="form-control" name="titulo_new" id="titulo_new">
                    </div>
                    <div class="form-group">
                        <label for="autor_new">Autor</label>
                        <input type="text" class="form-control" name="autor_new" id="autor_new">
                    </div>
                    <div class="form-group">
                        <label for="editorial_new">Editorial</label>
                        <input type="text" class="form-control" name="editorial_new" id="editorial_new">
                    </div>
                    <div class="form-group">
                        <label for="lugar_publicacion_new">lugar publicacion</label>
                        <input type="text" class="form-control" name="lugar_publicacion_new" id="lugar_publicacion_new">
                    </div>
                    <div class="form-group">
                        <label for="precio_new">Precio</label>
                        <input type="text" class="form-control" name="precio_new" id="precio_new">
                    </div>
                    <button type="submit" class="btn btn-primary">Agregar libro</button>
                </form>
                </div>
        </div>
    </div>
</div>
</div>
<!-- AGREGAR CLIENTE -->
<div>
    <div class="container">
    <br><br><br><br><br>
    <div style="float: right;">
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#agregarcliente">Agregar cliente</button>
    </div>
    <br><br>
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellidos</th>
                    <th>Ciudad</th>
                    <th>Telefono</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {{#each index}}
                <tr>
                    <td>{{this.id_cliente}}</td>
                    <td>{{this.nombre}}</td>
                    <td>{{this.apellidos}}</td>
                    <td>{{this.ciudad}}</td>
                    <td>{{this.telefono}}</td>
                    <td>
                        <a href="/borrar-cliente/{{id_cliente}}" type="button" class="btn btn-danger">Eliminar</a>
                        <button class="btn  btn-primary" id="">Editar cliente</button>
                    </td>
                </tr>
                {{/each }}
            </tbody>
        </table>
    </div>
 <div class="modal fade bd-example-modal-lg" id="agregarcliente" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-body">
            <form action="/agregar-cliente" method="POST">
                    <div class="form-group">
                        <label for="nombre">Nombre</label>
                        <input type="text" class="form-control" name="nombre" id="nombre">
                    </div>
                    <div class="form-group">
                        <label for="apellidos">Apellidos</label>
                        <input type="text" class="form-control" name="apellidos" id="apellidos">
                    </div>
                    <div class="form-group">
                        <label for="ciudad">Ciudad</label>
                        <input type="text" class="form-control" name="ciudad" id="ciudad">
                    </div>
                    <div class="form-group">
                        <label for="telefono">Telefono</label>
                        <input type="text" class="form-control" name="telefono" id="telefono">
                    </div>
                    <button type="submit" class="btn btn-primary">Agregar cliente</button>
                </form>
                </div>
        </div>
    </div>
</div>
<div class="modal fade bd-example-modal-lg" id="updatecliente" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-body">
                     <form action="/update-cliente" method="POST">
                    <div class="form-group">
                        <label for="nombre_new">Nombre</label>
                        <input type="text" class="form-control" name="nombre_new" id="nombre_new">
                    </div>
                    <div class="form-group">
                        <label for="apellido_new">Apellido</label>
                        <input type="text" class="form-control" name="apellido_new" id="apellido_new">
                    </div>
                    <div class="form-group">
                        <label for="ciudad_new">Ciudad</label>
                        <input type="text" class="form-control" name="ciudad_new" id="ciudad_new">
                    </div>
                    <div class="form-group">
                        <label for="telefono_new">Telefono</label>
                        <input type="text" class="form-control" name="telefono_new" id="telefono_new">
                    </div>
                    <button type="submit" class="btn btn-primary">Agregar cliente</button>
                </form>
                </div>
        </div>
    </div>
</div>
</div>
<!-- AGREGAR venta -->    
<div>
<div class="container">
    <br><br><br><br><br><br>
    <div style="float: right;">
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#agregarventa">Agregar venta</button>
    </div>
    <br><br>
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>ID de cliente</th>
                    <th>ID de libro</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {{#each libros}}
                <tr>
                    <td>{{this.id_ventas}}</td>
                    <td>{{this.id_cliente}}</td>
                    <td>{{this.id_libro}}</td>
                    <td>
                        <a href="" type="button" class="btn btn-danger">Eliminar</a>
                        <button class="btn  btn-primary" id="">Editar venta</button>
                    </td>
                </tr>
                {{/each }}
            </tbody>
        </table>
    </div>
    <div class="modal fade bd-example-modal-lg" id="agregarventa" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-body">
            <form action="/agregar-venta" method="POST">
                    <div class="form-group">
                        <label for="id_cliente">ID cliente</label>
                        <input type="text" class="form-control" name="id_cliente" id="id_cliente">
                    </div>
                    <div class="form-group">
                        <label for="id_libro">ID ibro</label>
                        <input type="text" class="form-control" name="id_libro" id="id_libro">
                    </div>
                    <button type="submit" class="btn btn-primary">Agregar venta</button>
                </form>
                </div>
        </div>
    </div>
</div>
</div>
</body>
    <!--<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>-->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<script>
    function updatelibro(titulo, autor, editorial,lugar_publicacion,precio , id){
        document.getElementById("titulo_new").value = nombre;
        document.getElementById("autor_new").value = apellidos;
        document.getElementById("lugar_publicacion_new").value = direccion;
        document.getElementById("precio_new").value = telefono;
        document.getElementById("hidden_id").value = id;
        $("#editarCliente").modal("show");
    }
</script>
</html>*/