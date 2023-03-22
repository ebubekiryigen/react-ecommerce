import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from './page/Client/Home'
import Layout from "./page/Layout";
import Signup from "./page/Auth/Signup"
import Signin from "./page/Auth/Signin"
import Products from "./page/Client/Products";


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/products" element={<Products />} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
