// Creamos el molde constructor y sus metodos

class Producto {
    constructor(id, nombre, descripcion, precio, stock, img) {
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.descripcion = descripcion.toUpperCase();
        this.precio = precio;
        this.stock = stock;
        this.img = img;
    }

    sinIva() {
        this.precio = this.precio - this.precio * 0.21;
    }

    actualizarStock(x) {
        this.stock = this.stock - x;
    }
}

// Creamos un arrary de productos
const productos = [
    new Producto(1, "estilo1", "Diseño de modas.", 4600, 6, "./images/cuadros/1.jpg"),
    new Producto(2, "estilo2", "Diseño de modas.", 5200, 6, "./images/cuadros/2.jpg"),
    new Producto(3, "estilo3", "Diseño de modas.", 5400, 6, "./images/cuadros/3.jpg"),
    new Producto(4, "mapa1", "Mapas de ciudades.", 5600, 6, "./images/cuadros/4.jpg"),
    new Producto(5, "mapa2", "Mapas de ciudades.", 6200, 6, "./images/cuadros/5.jpg"),
    new Producto(6, "mapa3", "Mapas de ciudades.", 6400, 6, "./images/cuadros/6.jpg"),
    new Producto(7, "arte", "Cuadro de arte.", 3200, 6, "./images/cuadros/7.jpg"),
    new Producto(8, "arte1", "Cuadro de arte.", 3400, 6, "./images/cuadros/8.jpg")
];




// Insertamos productos por DOM

for (let i = 0; i < productos.length; i++) {
    $("#principal").append(`
            <div class="col-md-3">
                <div class="cuadroBoton">
                    <img src="${productos[i].img}" class="imagenCuadros"> </img>
                    <div class="container">
                        <h5 class="card-title">${productos[i].nombre}</h5>
                        <p class="card-text">${productos[i].descripcion}</p>
                        <p class="card-text">$${productos[i].precio}</p>
                        <button id="btn${productos[i].id}">Comprar</button>
                    </div>
                </div>
            </div>`);

    $(`#btn${productos.id}`).on('click', function () {
        console.log(`Compraste ${productos[i].nombre}`);
    });
}



//SCROLL ANIMADO
$('.contacto').click(function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $("#sectionContacto").offset().top
    }, 500);
});

//SCROLL ANIMADO
$('.productos').click(function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $("#principal").offset().top
    }, 500);
});
