const {Product} = require("../models/products.model.js")

module.exports.findAll = (req, res) =>{
  Product.find()
    .then((products) => res.json({message: "",products: products}))
    .catch(err=>res.json({message:"Algo salio mal",errors:err.errors}))
}

module.exports.findOne = (req, res) => {
  const {id} = req.params;
  Product.findOne({_id:id})
    .then(product => res.json({message:"", product: product}))
    .catch(err=>res.json({message:"Algo salio mal",errors:err.errors}))
}

module.exports.createOne = (req, res) => {
  const {body} = req;
  Product.create(body)
    .then(product => res.json ({message: "", product: product}))
    .catch(err=>res.json({message:"Algo salio mal",errors:err.errors}))
}

module.exports.updateOne = (req, res) => {
  const { id } = req.params;
  const { body } =req;
  Product.findByIdAndUpdate({_id:id}, body, {new:true})
  .then(product => res.json ({message: "", product: product}))
  .catch(err=>res.json({message:"Algo salio mal",errors:err.errors}))
}

module.exports.deleteOne = (req, res) => {
  const { id } = req.params;
  Product.findByIdAndDelete ({_id:id})
  .then(product => res.json({message: "", product:product}))
  .catch(err=>res.json({message:"Algo salio mal",errors:err.errors}))
}