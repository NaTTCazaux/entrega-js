const carro = new carrito();
const miCarrito =  $("#carrito");
const elementos =  $("#principal");
const listaProductos = $("#tbody");
const vaciarCarritoBtn = $("#vaciar-carrito");
const procesarPedidoBtn = $("#procesar-pedido");


cargarEventos();

function cargarEventos(){
    
    elementos.click((e)=>{carro.comprarProducto(e)});

    miCarrito.click((e)=>{carro.eliminarProducto(e)});

    vaciarCarritoBtn.click((e)=>{carro.vaciarCarrito(e)});

    document.addEventListener('DOMContentLoaded', carro.leerLocalStorage());

    procesarPedidoBtn.click((e)=>{carro.procesarPedido(e)});
}