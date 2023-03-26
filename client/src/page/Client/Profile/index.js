
import { useSelector } from "react-redux";
import {Text} from '@chakra-ui/react'

export default function Profile(){

    const {user} = useSelector(state=> state.user)
    console.log(user)

    return(
        <div>
            <Text fontSize="22">Profile</Text>
            <code>{JSON.stringify(user)}</code>
        </div>
    )

}