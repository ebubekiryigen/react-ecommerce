import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from './page/Client/Home'
import Layout from "./page/Layout";
import Signup from "./page/Auth/Signup"
import Signin from "./page/Auth/Signin"
import Products from "./page/Client/Products";
import ProductDetail from "./page/Client/Products/Detail";
import { useDispatch, useSelector } from "react-redux";
import { fetchM } from "./store/user";
import { useEffect } from "react";
import Profile from "./page/Client/Profile";
import Basket from "./page/Client/Basket";
import Error from "./page/Error";
import Admin from "./page/Admin";




function Router() {

  const {loggedIn,user} = useSelector(state=> state.user)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchM())
  },[])

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="*" element={<Error />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:product_id" element={<ProductDetail />} />
              <Route path="/basket" element={<Basket />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={loggedIn ? <Profile /> : <Signin />} />
              <Route path="/admin/*" element={loggedIn && user.role === "admin" ? <Admin /> : <Home />} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default Router;
