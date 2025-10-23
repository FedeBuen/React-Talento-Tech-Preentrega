const Carrito = ({ carrito, eliminarDelCarrito }) => {
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Carrito de Compras</h2>
            {carrito.length === 0 ? (
                <p className="text-center text-muted">Tu carrito está vacío.</p>
            ) : (
                <ul className="list-group">
                    {carrito.map((producto, index) => (
                      <li key={index} className="list-group-item d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <img src={producto.image} alt={producto.title}
                                style={{width: '60px', height: '60px', objectFit: 'contain', marginRight: '15px',}}/>
                            <div>
                                <h6 className="mb-1">{producto.title}</h6>
                                <p className="mb-0 fw-bold text-primary">Precio: ${producto.price}</p>
                            </div>
                          </div>
                          <button className="btn btn-danger btn-sm" onClick={() => eliminarDelCarrito(index)}>Eliminar</button>
                      </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Carrito;
