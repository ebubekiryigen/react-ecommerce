import { NavLink } from "react-router-dom";

export default function Menu(){
    return(
        <>
            <div className="logo">
                <NavLink to="/">eCommerce</NavLink>
            </div>
            <ul className="menu">
                <li>
                    <NavLink to="/products">Products</NavLink>
                </li>
            </ul>
        </>
    )
}