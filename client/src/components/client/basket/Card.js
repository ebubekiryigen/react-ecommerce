import { Button, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";


export default function Card({item}){

    return(
        <li key={item._id}>
            <NavLink to={`/products/${item._id}`}>
                {item.title} - {item.price} TL
                <Image
                htmlWidth={200}
                htmlHeight={200}
                src={item.photos[0]}
                alt="basket item" />
            </NavLink>
            <Button mt="2" size="sm" colorScheme="pink"  >
                Remove From Basket
            </Button>
        </li>
    )
}