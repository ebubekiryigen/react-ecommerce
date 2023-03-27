
import { useDispatch, useSelector } from "react-redux";
import {Button, Text} from '@chakra-ui/react'
import { logout } from "../../../store/user";
import { useNavigate  } from "react-router-dom"


export default function Profile(){

    const {user} = useSelector(state=> state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logoutHandle = () =>{
        dispatch(logout())
        navigate("/")
    }

    return(
        <div>
            <Text fontSize="22">Profile</Text>
            <code>{JSON.stringify(user)}</code>
            <br />
            <br />
            <Button colorScheme="pink" variant="solid" onClick={logoutHandle} >
                Logout
            </Button>
        </div>
    )

}