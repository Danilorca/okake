import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EditForm from '../components/EditForm';
import {simpleGet} from '../services/simpleGet'
import {simplePut} from '../services/simplePut';


const EditProducts = () => {

  const {id} = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState();
  const [errors, setErrors] = useState();
  const [nombresProductos, setNombresProductos] = useState();


  const getProducts = async () => {
    try {
      const response = await simpleGet(
        `http://localhost:8000/api/products/`
      );
      console.log(response.data.products);
      setNombresProductos(response.data.products.map(producto =>{
        return producto.name_product
      }))
    } catch (error) {
      console.log(error);
    }
  };


  const getOneProduct = async () =>{
    try{
      const response = await simpleGet(`http://localhost:8000/api/product/${id}`)
      console.log(response.data.product)
      setProduct(response.data.product)
    }catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    getOneProduct()
    getProducts()
  }, []);

  const editProduct = async (values) =>{
    try{
      const response = await simplePut(`http://localhost:8000/api/products/${id}`, values)
      console.log(response.data.product)

      if (response.data.message ==="") {
        console.log(response.data.product)
        navigate("/")
      } else{
        const errorResponse = response.data.errors;
        const errorArr = [];
        for (const llave of Object.keys(errorResponse)){
          errorArr.push(errorResponse[llave].message)
        }
        setErrors(errorArr)
      }
    }catch(error){
      console.log(error)
    }

  }


  return (
    <div>
      <h2 className='typography-h2' >Editar un producto</h2>

      {errors?.map((error, index)=>(
        <div className='alert alert-danger' role="alert" key={index}>{error} </div>
      ))}

      {product&&
        <EditForm
        name_product= {product.name_product}
        only_name= { nombresProductos }
        descripcion = {product.descripcion}
        precio = {product.precio}
        stock = {product.stock}
        imagen ={product.imagen}
        onSubmitProp={editProduct}
        />

      }
    </div>
  );
}

export default EditProducts;
