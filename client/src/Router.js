import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from './page/Client/Home'
import Layout from "./page/Layout";
import Signup from "./page/Auth/Signup"
import Signin from "./page/Auth/Signin"
import Products from "./page/Client/Products";
import ProductDetail from "./page/Client/Products/Detail";
import { useDispatch } from "react-redux";
import { fetchM } from "./store/user";
import { useEffect } from "react";
import Profile from "./page/Client/Profile";
import ProtectedRoute from "./page/ProtectedRoute";
import Basket from "./page/Client/Basket";
import Error from "./page/Error";


function Router() {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchM())
  })

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
              <Route path="/" element={<ProtectedRoute />}>
                <Route path="/profile" element={<Profile />} />
              </Route>
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default Router;
