import {Button} from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

export default function User(){
    return(
        <>
            <NavLink to="/signin">
                <Button colorScheme="blue">Login</Button>
            </NavLink>
            <NavLink to="/signup">
                <Button colorScheme="red">Register</Button>
            </NavLink>
        </>
    )
}