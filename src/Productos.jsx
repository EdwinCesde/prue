import { cloneElement, useEffect, useState } from "react";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

const Productos = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "Productos"));
                const productosData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProductos(productosData);
            } catch (error) {
                console.error("Error al obtener los productos ", error);
            } finally {
                setLoading(false)
            }
        };

        fetchProductos();
    }, []);

    if (loading) {
        return <p>Cargando productos ...</p>
    }

    return (
        <div>
            <h1>Lista de Productos</h1>
            <ul>
                {productos.map((producto) => (
                    <li key={producto.id}>
                        <h2>{producto.Nombre}</h2>
                        <p>Precio ${producto.Precio}</p>
                        <p>Presentación: {producto.Presentacion}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Productos;