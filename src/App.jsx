import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);



  const checkUser = async()=>{
    return user;
  }


  return (
    <Router>
      
      <Routes>
     
      <Route excat path='/' element={<Home />}></Route>
      <Route excat path="/products/:category" element={<ProductList />}></Route>
      <Route excat path="/product/:id" element={<Product />}></Route>
      <Route excat path="/cart" element={ <Cart />}></Route>
      <Route excat path="/success" element={ <Success />}></Route> 

      <Route excat path="/login" element={user ? <Navigate to="/" /> : <Login />} > </Route>

      <Route excat path="/register" element = {user ? <Navigate to="/" /> : <Register />}> </Route>
         
    </Routes>
    </Router>
  );
};

export default App;