import { useEffect, useState } from "react";

import Header from './components/Header';
import Footer from './components/Footer';
import Productos from './components/productos';
import Carrito from './components/Carrito';
import './App.css';

function App() {

  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);

  const URL = 'https://fakestoreapi.com/products';

  useEffect(() => {
    fetch(URL)
      .then((respuesta) => respuesta.json())
      .then((datos) => setProductos(datos))
      .catch(() => setError('Error al cargar productos'))
      .finally(() => setCargando(false));
  }, []);

  const agregarAlCarrito = (producto) => {
      setCarrito([...carrito, producto]);
  };

  const eliminarDelCarrito = (indexAEliminar) => {
      setCarrito(carrito.filter((_, index) => index !== indexAEliminar));
  };

    if (cargando) return 'Cargando productos...';
    if (error) return error; 
  
    return (
    <>
      <Header/>
      <Productos productos={productos} agregarAlCarrito={agregarAlCarrito}/>
      <Carrito carrito={carrito} eliminarDelCarrito={eliminarDelCarrito}/>
      <Footer/>
    </>
  );
}

export default App;
