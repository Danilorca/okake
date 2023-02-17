import React, { useState } from 'react';
import ProductForm from '../components/ProductForm'
import { simplePost } from '../services/simplePost';
import {useNavigate} from 'react-router-dom'


const AddProducts = () => {

  const [errors, setErrors] = useState();
  const navigate = useNavigate()


  const crearProducto= async (values) =>{
    try{
      const response = await simplePost(`http://localhost:8000/api/products`, values)
      console.log(response.data)

      if(response.data.message===""){
        console.log(response.data.product)
        navigate("/productList/")
      }else{
        const errorResponse = response.data.errors;
        const errorArr = []
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
      <h2 className='typography-h2' >Crear un producto</h2>

        {errors?.map((error, index)=>(
          <div className='alert alert-danger' role="alert" key={index}> {error} </div>
        ))}
        <ProductForm name_product="" descripcion="" precio="" stock="" imagen="" onSubmitProp={crearProducto} >
        </ProductForm>

    </div>
  );
}

export default AddProducts;
