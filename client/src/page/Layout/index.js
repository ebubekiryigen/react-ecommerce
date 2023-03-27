import Menu from "../../components/layout/Menu";
import User from "../../components/layout/User";
import './index.scss'
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Flex, Spinner } from "@chakra-ui/react";



export default function Layout(){

        const {loader} = useSelector(state=> state.user)

        return(
            <>
                {
                    !loader && (
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
                {
                    loader && (
                        <>
                            <Flex justifyContent="center" alignItems="center" height="100vh" >
                                <Spinner />
                            </Flex>
                        </>
                    )
                }
            </>
        )
}