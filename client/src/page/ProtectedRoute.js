
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";


export default function ProtectedRoute()  {


    const {loggedIn} = useSelector(state=> state.user)

    return loggedIn ? <Outlet /> : <Navigate to="/signin" />;

}