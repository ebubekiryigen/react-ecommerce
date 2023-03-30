import { Button, Image, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { removeItemBasket } from "../../../store/product";


export default function Card({item}){

    const dispatch = useDispatch()

    return(
        <li key={item._id}>
            <NavLink to={`/products/${item._id}`}>
                <Text fontSize="18">{item.title} - {item.price} TL</Text>
                <Image
                loading="lazy"
                htmlWidth={200}
                htmlHeight={200}
                src={item.photos[0]}
                alt="basket item" />
            </NavLink>
            <Button mt="2" size="sm" colorScheme="green" onClick={()=> dispatch(removeItemBasket(item._id))} >
                Remove From Basket
            </Button>
        </li>
    )
}