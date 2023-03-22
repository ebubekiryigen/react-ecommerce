import Menu from "./Menu";
import User from "./User";
import './index.scss'
import { Outlet } from "react-router-dom";


export default function Layout(){
        return(
            <>
                <nav>
                    <div className="left">
                        <Menu />
                    </div>
                    <div className="right">
                        <User />
                    </div>
                </nav>

                <Outlet />
            </>
        )
}