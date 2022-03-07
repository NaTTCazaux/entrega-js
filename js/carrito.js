


//CARRITO

class carrito {

    comprarProducto(e) {

        e.preventDefault();

        let target = e.target;

        for (let i = 0; i < productos.length; i++) {

            if (target.id == ('btn' + productos[i].id)) {

                //Enviamos el producto seleccionado para tomar sus datos

                this.leerDatosProducto(productos[i]);

            }
        }
    }


    //Leer datos del producto
    leerDatosProducto(elemento) {

        let infoProducto = {

            id: elemento.id,
            nombre: elemento.nombre,
            descripcion: elemento.descripcion,
            precio: elemento.precio,
            img: elemento.img,
            cantidad: 1

        }

        this.insertarCarrito(infoProducto);

    }


    //Muestra el producto seleccionado en carrito
    insertarCarrito(elemento) {

        listaProductos.append(`

            <tr>

                <td>
                    <img src="${elemento.img}" class="imagenCuadros"> </img>
                </td>
                
                <td>
                    <h5 class="card-title">${elemento.nombre}</h5>
                </td>

                <td>
                    <p class="card-title">$${elemento.precio}</p>
                </td>

                <td>
                    <a class="borrar-producto card-title" id=${elemento.id}>Eliminar</a>
                </td>

            </tr>`);

        this.guardarProductosLocalStorage(elemento);

    }

    //Eliminar el producto del carrito
    eliminarProducto(e) {

        e.preventDefault();

        let elemento, elementoID;

        if (e.target.classList.contains('borrar-producto')) {
            e.target.parentElement.parentElement.remove();
        }

        elementoID = e.target.id;

        this.eliminarProductoLocalStorage(elementoID);

        this.calcularTotal();
    }




    //Elimina todos los productos
    vaciarCarrito(e) {

        e.preventDefault();

        this.vaciarLocalStorage();

        listaProductos.html('');
    }





    //LOCAL STORAGE
    //Almacenar en el LS
    guardarProductosLocalStorage(elemento) {

        let elementos;

        elementos = this.obtenerProductosLocalStorage();

        //Agregar el producto al carrito
        elementos.push(elemento);

        //Agregamos al LS
        localStorage.setItem('elementos', JSON.stringify(elementos));
    }


    //Comprobar que hay elementos en el Local storage
    obtenerProductosLocalStorage() {

        let elementoLS;
        //Comprobar si hay algo en LS

        if (localStorage.getItem('elementos') === null) {
            elementoLS = [];
        } else {
            elementoLS = JSON.parse(localStorage.getItem('elementos'));
        }

        return elementoLS;
    }


    //Eliminar producto por ID del LS
    eliminarProductoLocalStorage(elementoID) {

        let elementos;

        elementos = this.obtenerProductosLocalStorage();

        for (const elemento of elementos) {

            if (elemento.id == elementoID) {

                console.log("encontro relacion");

                elementos.splice(elemento, 1);

            }

        }

        localStorage.setItem('elementos', JSON.stringify(elementos));


        /* elementoLS.forEach(

            function (index, elementoLS ) {

                if (elementoLS.id === elementoID) {

                    elementoLS.splice(index, 1);
                }

            });
 */
    }


    //Mostrar los productos guardados en el LS
    leerLocalStorage() {

        let elementoLS;

        elementoLS = this.obtenerProductosLocalStorage();
        elementoLS.forEach(function (elemento) {

            listaProductos.append(`

                <tr>
    
                    <td>
                        <img src="${elemento.img}" class="imagenCuadros"> </img>
                    </td>
                    
                    <td>
                        <h5 class="card-title">${elemento.nombre}</h5>
                    </td>
    
                    <td>
                        <p class="card-text">$${elemento.precio}</p>
                    </td>
    
                    <td>
                        <button class="borrar-producto" id=${elemento.id}>Eliminar</button>
                    </td>
    
                </tr>`);

        });
    }


    //Eliminar todos los datos del LS
    vaciarLocalStorage() {
        localStorage.clear();
    }

    /* COMPRA.HTML */
    //Mostrar los productos guardados en el LS en compra.html
    leerLocalStorageCompra() {
        let elementoLS;

        elementoLS = this.obtenerProductosLocalStorage();
        elementoLS.forEach(function (elemento) {
            listaCompra.append(`

                <tr>
        
                    <td>
                        <img src="${elemento.img}" class="imagenCuadros"> </img>
                    </td>
                    
                    <td>
                        <h5 class="card-title">${elemento.nombre}</h5>
                    </td>

                    <td>
                        <p class="card-text">$${elemento.precio}</p>
                    </td>

                    <td>
                        <button class="borrar-producto" id=${elemento.id}>Eliminar</button>
                    </td>

                </tr>`);

        });
    }


    procesarPedido(e) {

        e.preventDefault();

        if (this.obtenerProductosLocalStorage().length === 0) {

            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'El carrito esta vacio',
                showConfirmButton: false,
                timer: 2000
            })
        } else {
            location.href = "compra.html";
        }
    }



    calcularTotal() {

        let elementoLS;

        let total = 0,
            subtotal = 0,
            igv = 0;

        elementoLS = this.obtenerProductosLocalStorage();

        for (let i = 0; i < elementoLS.length; i++) {

            let element = Number(elementoLS[i].precio * elementoLS[i].cantidad);
            total += element;
        }

        igv = parseFloat(total * 0.21).toFixed(2);

        subtotal = parseFloat(total - igv).toFixed(2);

        $("#subtotal").html("S/. " + subtotal);
        $("#igv").html("S/. " + igv);
        $("#total").html("S/. " + total.toFixed(2));

    }


    procesarCompra(e) {

        e.preventDefault();

        if (compra.obtenerProductosLocalStorage().length === 0) {

            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'No hay productos en el carrito',
                showConfirmButton: false,
                timer: 2000
            })


        } else if (cliente.val().length == 0 || correo.val().length == 0) {

            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Debe ingresar los datos correctamente',
                showConfirmButton: false,
                timer: 2000
            })


        } else {

            const cargandoGif = $("#cargando");

            cargandoGif.css("display", "block");

            setTimeout(() => {

                cargandoGif.css("display", "none");

                $("#loaders").html(`<img src="images/enviado.gif" id="gif-enviado"/>`);

                setTimeout(() => {
                    location.href = "index.html";
                }, 2000);

            }, 2000);
        }
    }

}