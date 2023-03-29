import {Button} from "@chakra-ui/react"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

export default function User(){


    const {loggedIn} = useSelector(state=> state.user)
    const {items} = useSelector(state=> state.product)


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
                    {items.length > 0 && (
                                <NavLink>
                                    <Button colorScheme="pink" variant="outline" >
                                        Basket ({items.length})
                                    </Button>
                                </NavLink>
                    )}
                    <NavLink to="/profile">
                    <Button colorScheme="blue">Profile</Button>
                    </NavLink>
                    </>
                )
            }
        </>
    )
}