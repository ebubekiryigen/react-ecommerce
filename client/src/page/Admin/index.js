import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLayout from "./Layout";
import AdminHome from "./Home";


export default function Admin(){
    return(
        <Routes>
            <Route path="/" element={<AdminLayout />}>
                <Route index element={<AdminHome />} />
            </Route>
        </Routes>
    )
}