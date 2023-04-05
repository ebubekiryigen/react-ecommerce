import {Outlet } from "react-router-dom";
import AdminMenu from "../../../components/admin/layout/Menu";
import './index.scss'

export default function AdminLayout() {
    return(
        <div>
            <nav>
                <AdminMenu />
            </nav>
            <Outlet />
        </div>
    )
}