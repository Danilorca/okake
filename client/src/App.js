import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./views/Main";
import Login from "./views/Login";
import Register from "./views/Register";
import { UserProvider } from "./contexts/userContext";
import Footer from './components/Footer';
import Nav from "./components/Nav";
import AddProducts from './views/AddProducts';
import EditProducts from './views/EditProducts'
import ProductsList from "./views/ProductsList";

function App() {

  return (
    <div className="App">
      <UserProvider>
        <Nav/>
          <Routes>
            <Route path="/" element={<Main></Main>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/addProduct" element={<AddProducts />}></Route>
            <Route path="/editProduct/:id" element={<EditProducts />}></Route>
            <Route path="/productList/" element={<ProductsList />}></Route>

          </Routes>
        <Footer/>
        </UserProvider>
    </div>
  );
}

export default App;
