const UserController = require("../controllers/user.controller")
const authenticate = require("../config/authenticate")
const ProductController = require("../controllers/productos.controller")

module.exports = function(app){

    app.post("/api/register",UserController.Register);
    app.post("/api/login",UserController.Login);
    app.post("/api/logout",UserController.Logout);

    //ENDPOINTS QUE NECESITAN AUTENTICACION
    app.get("/api/users",authenticate, UserController.getAll);
    app.get("/api/user/:id",authenticate,UserController.getUser)

    //PRODUCTOS
    app.get("/api/products", ProductController.findAll);
    app.get("/api/product/:id", ProductController.findOne);
    app.post("/api/products",ProductController.createOne);
    app.put("/api/products/:id", ProductController.updateOne);
    app.delete("/api/products/:id", ProductController.deleteOne)
}