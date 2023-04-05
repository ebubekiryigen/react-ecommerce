
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";


export default function ProtectedRoute({ admin, component: Component, ...rest }) {

    const {loggedIn,user} = useSelector(state=> state.user)

    if (loggedIn && user.role === "admin") {
        return <Component {...rest} />
    } else if (loggedIn && !admin) {
        return <Navigate to="/" />;
    } else {
        return <Navigate to="/signin" />;
    }
  }