import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const ProductForm = (props) => {
  const { name_product, descripcion, precio, stock, imagen, onSubmitProp} =
    props;

  return (
    <div>
      <Formik
        initialValues={{
          name_product: name_product,
          descripcion: descripcion,
          precio: precio,
          stock: stock,
          imagen: imagen,
        }}
        validationSchema={Yup.object().shape({
          name_product: Yup.string()
            .min(3, "El nombre es muy corto")
            .max(30, "El nombre es muy largo")
            .required("Por favor ingresa un nombre de un producto"),
          descripcion: Yup.string()
            .min(2, "La descripción es muy corta")
            .max(150, "La descripción es muy larga")
            .required("Por favor ingresa una descripcion"),
          precio: Yup.number().required("Por favor ingresa un precio"),
          stock: Yup.number().required("Por favor ingresa un stock"),
          imagen: Yup.string().required("Por favor ingresa una imagen"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log("INFORMACIÓN DEL PETFORMIK", values);

          onSubmitProp(values);
        }}
      >
        {({ errors, touched, handleSubmit }) => {
          return (
            <div>
              <Form className="">
                <div className="col-md-6 form-products">
                  <div className="form-group">
                    <label htmlFor="name_product">Nombre de producto:</label>
                    <Field
                      className="form-control"
                      id="name_product"
                      type="text"
                      placeholder="Ingresa un nombre de producto"
                      name="name_product"
                    />
                    {errors.name_product && touched.name_product && (
                      <p> {errors.name_product} </p>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="descripcion">Descripción:</label>
                    <Field
                      className="form-control"
                      id="descripcion"
                      type="text"
                      placeholder="Ingresa una descripción"
                      name="descripcion"
                    />
                    {errors.descripcion && touched.descripcion && (
                      <p> {errors.descripcion} </p>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="precio">Precio:</label>
                    <Field
                      className="form-control"
                      id="precio"
                      placeholder="Ingresa un precio"
                      type="number"
                      name="precio"
                    />
                    {errors.precio && touched.precio && (
                      <p> {errors.precio} </p>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="stock">Stock:</label>
                    <Field
                      className="form-control"
                      id="stock"
                      placeholder="Ingresa el stock de productos"
                      type="number"
                      name="stock"
                    />
                   {errors.stock && touched.stock && (
                      <p> {errors.stock} </p>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="imagen">Ingresa una url de imagen:</label>
                    <Field
                      className="form-control"
                      id="imagen"
                      description="imagen"
                      placeholder="Ingresa un url de imagen"
                      type="text"
                      name="imagen"
                    />
                    {errors.imagen && touched.imagen && (
                      <p> {errors.imagen} </p>
                    )}
                  </div>

                  <div className="form-group">
                    <button
                      className="btn-form"
                      type="submit"
                      disabled={
                        Object.values(errors).length > 0 ||
                        Object.values(touched).length === 0
                      }
                    >

                      Enviar
                    </button>
                  </div>
                </div>
              </Form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default ProductForm;
