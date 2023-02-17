import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { simpleGet } from "../services/simpleGet";
import { simpleDelete } from "../services/simpleDelete";
import { simplePut } from "../services/simplePut";

const ProductsList = () => {
  const [product, setProduct] = useState();
  const navigate = useNavigate();
  const [nombresProductos, setNombresProductos] = useState();

  const getProducts = async () => {
    try {
      const response = await simpleGet(
        `http://localhost:8000/api/products/`
      );
      console.log(response.data.products);
      setProduct(response.data.products);
      setNombresProductos(response.data.products.map(producto =>{
        return producto.name_product
      }))
    } catch (error) {
      console.log(error);
    }
  };

  const deteleProduct = async (id) => {
    const response = await simpleDelete(`http://localhost:8000/api/products/${id}`);
    console.log(response);
    setProduct(product.filter(producto =>{
      return producto._id !== id
    }))

  };


  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h2 className='typography-h2' >Listado de todos los producto</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {product?.map((producto, index) => {
            return<tr key={index}>
              <td>{producto?.name_product}</td>
              <td>{producto?.precio}</td>
              <td>{producto?.stock}</td>
              <td className="btns-list">
                <Link to={`/editProduct/${producto._id}`} className=" btn btn-sm btn-list-edit"> Editar producto</Link>
                <Link className="btn btn-sm btn-list-delete"  onClick={()=>deteleProduct(producto._id)}>
                Borrar producto
                </Link>
              </td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsList;
