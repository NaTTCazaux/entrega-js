const compra = new carrito();
const listaCompra = $("#tbody");
const miCompra =  $("#carrito");
const procesarCompraBtn = $("#procesar-compra");
const cliente = $("#cliente");
const correo = $("#correo");


cargarEventos();

function cargarEventos(){

   document.addEventListener('DOMContentLoaded', compra.leerLocalStorageCompra());

   miCompra.click((e)=>{compra.eliminarProducto(e)});

   compra.calcularTotal();

   procesarCompraBtn.click((e)=>{compra.procesarCompra(e)});

}


