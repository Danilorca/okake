const mongoose = require ('mongoose')

const ProductSchema = new mongoose.Schema(
  {
    name_product:{
      type:String,
      required:[true, "La nombre del producto es requerido"],
    },
    descripcion:{
      type:String,
      required:[true, "La descripción es requerida"],
      minlenght: [3, "La descripción debe tener mínimo 3 carácteres"]
    },
    precio:{
      type:Number,
      required: [true, "El precio es requerido"]
    },
    stock:{
      type:Number,
      required: [true, "La cantidad de stock es requerida"]
    },
    imagen:{
      type: String,
      required: [true, "La imagen es requerida"]
    }

},
{timestamps:true}
)

const Product = mongoose.model("Product", ProductSchema);

module.exports = {ProductSchema, Product}