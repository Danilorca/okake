
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RedesSociales from '../components/RedesSociales';
import { simpleGet } from '../services/simpleGet';



const Main = () => {

    const [products, setProducts] = useState();

    const getAllProducts = async () =>{
        try{
            const response = await simpleGet(`http://localhost:8000/api/products/`)
            console.log(response.data.products)
            setProducts(response.data.products)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        getAllProducts()
    }, []);


    return (
        <div>
            <div className="fotoheader">
                <h1>Recuperamos los sabores del ayer
                    <br />
                    para crear los de mañana
                </h1>
                <Link className='btn btn-sm btn-header'>Comprar</Link>
            </div>
            <h2 className='typography-h2-header'> Lo mejor de la repostería y panadaría para disfrutar </h2>
            <h4 className="container_productos_subtitulos">Conoce nuestros productos recién elaborados
                </h4>

            <div className=" row row-cols-1 row-cols-md-4 g-4 container-card" >
                {products?.map((producto)=>
                    <div className='col '>
                        <div className='card'>
                            <img className="card-img-top" src={producto?.imagen}  alt="imagen"/>
                            <div className = "card-body">
                                <h5 className="card-title card-titulo ">{producto?.name_product} </h5>
                                <p className="card-descripcion">{producto?.descripcion} </p>
                                <p className=" card-precio card-text">$ {producto?.precio} </p>
                                <Link href="#" className="text-center btn btn-sm btn-card-productos">Comprar</Link>
                            </div>
                        </div>
                    </div>
                )}

            </div>

            <div>
            <h2 className='typography-h2-header mb-5'> Comparte tus imagenes en nuestras redes sociales </h2>
            <RedesSociales></RedesSociales>
            </div>
        </div>
    );
}

export default Main;
