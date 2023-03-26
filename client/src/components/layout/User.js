import {Button} from "@chakra-ui/react"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

export default function User(){


    const {loggedIn} = useSelector(state=> state.user)

    return(
        <>
            {
                !loggedIn && (
                    <>
                    <NavLink to="/signin">
                    <Button colorScheme="pink">Login</Button>
                    </NavLink>
                    <NavLink to="/signup">
                        <Button colorScheme="pink">Register</Button>
                    </NavLink>
                    </>
                )
            }
            {
                loggedIn && (
                    <>
                    <NavLink to="/profile">
                    <Button colorScheme="blue">Profile</Button>
                    </NavLink>
                    </>
                )
            }
        </>
    )
}