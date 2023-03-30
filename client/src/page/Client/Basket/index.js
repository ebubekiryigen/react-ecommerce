import { Alert, Box, Text } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import Card from "../../../components/client/basket/Card"
import "./index.scss"



export default function Basket(){

    const {items} = useSelector(state => state.product)

    const total = items.reduce((acc, obj)=> acc + obj.price, 0)

    return(
        <>
        {
        items.length <= 0 ?
        <Alert status="warning">You have not any items in your basket</Alert>
        :
        <>
            <Box mb="10"> <Text fontSize="22">Total: {total}</Text> </Box>
            <ul className="flex">
            {
                items.map((item)=>(
                    <Card item={item} key={item._id} />
                ))
            }
            </ul>
        </>
        }
        </>
    )
}