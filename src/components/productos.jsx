
const Productos = ({ productos, agregarAlCarrito }) => {

    return (
        <>
        <div className="text-center mt-5 pt-4">
            <h1 className="fw-bold text-primary display-5">Listado de productos</h1>
        </div>
        <div className="container mt-4">
            <div className="row">
                {productos.map((producto) => (
                    <div className="col-12 col-sm-6 col-md-4 mb-4" key={producto.id}>
                        <div className="card h-100 shadow-sm">
                           <div className="text-center">
                                <h6 className="fw-bold mb-2">{producto.title}</h6>
                                <img
                                    src={producto.image}
                                    className="mx-auto p-3"
                                    alt={producto.title}
                                    style={{ height: '150px', width: 'auto', objectFit: 'contain' }}
                                />
                            </div>
                            <div className="card-body d-flex flex-column">
                                <hr className="my-2" />
                                <p className="card-text fw-bold text-start mt-auto">Precio: ${producto.price}</p>
                                <button className="btn btn-primary mt-2" onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
    );
}

export default Productos;