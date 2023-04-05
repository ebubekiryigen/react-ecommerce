import { NavLink } from "react-router-dom";


export default function AdminMenu() {
    return(
        <ul className="admin-menu">
            <li>
                <NavLink to="">Home</NavLink>
            </li>
            <li>
                <NavLink to="orders">Orders</NavLink>
            </li>
            <li>
                <NavLink to="products">Products</NavLink>
            </li>
        </ul>
    )
}