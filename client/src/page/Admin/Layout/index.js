import { NavLink, Outlet } from "react-router-dom";


export default function AdminLayout() {
    return(
        <div>
            <nav>
                <ul className="admin-menu">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}