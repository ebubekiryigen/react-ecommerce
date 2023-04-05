import { Route, Routes } from "react-router-dom";
import AdminLayout from "./Layout";
import AdminHome from "./Home";
import Error from "../Error";
import AdminOrders from "./Orders";
import AdminProducts from "./Products";


export default function Admin(){
    return(
        <Routes>
            <Route path="/" element={<AdminLayout />}>
                <Route index element={<AdminHome />} />
                <Route path="*" element={<Error />} />
                <Route path="orders" element={<AdminOrders />} />
                <Route path="products" element={<AdminProducts />} />
            </Route>
        </Routes>
    )
}