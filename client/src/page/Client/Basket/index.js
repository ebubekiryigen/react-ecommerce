import { Alert } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import Card from "../../../components/client/basket/Card"
import "./index.scss"



export default function Basket(){

    const {items} = useSelector(state => state.product)

    return(
        <>
        {
        items.length <= 0 ?
        <Alert status="warning">Sepette Ürün yok</Alert>
        :
        <ul className="flex">
            {
                items.map((item)=>(
                    <Card item={item} key={item._id} />
                ))
            }
        </ul>
        }
        </>
    )
}