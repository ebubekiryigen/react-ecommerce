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
                    {items.length > 0 && (
                        <NavLink to="/basket">
                            <Button colorScheme="pink" variant="outline" >
                                Basket ({items.length})
                            </Button>
                        </NavLink>
                    )}
                    <NavLink to="/signin">
                    <Button colorScheme="pink" mr={2}>Sign In</Button>
                    </NavLink>
                    <NavLink to="/signup">
                        <Button colorScheme="pink">Sign Up</Button>
                    </NavLink>
                    </>
                )
            }
            {
                loggedIn && (
                    <>
                    {items.length > 0 && (
                                <NavLink to="/basket">
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