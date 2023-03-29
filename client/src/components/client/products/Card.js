import { Box, Button, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import moment from "moment"
import { useDispatch } from "react-redux";
import { addBasket } from "../../../store/product";


export default function Card({item}){


    const dispatch = useDispatch()

    return(
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3" d="flex" alignItems="center" justifyContent="center" flexDirection="column">
            <NavLink to={`${item._id}`}>
                <Image width="100%" height="400" src={item.photos[0]} alt="product" loading="lazy" />
                <Box p="6">
                    <Box d="flex" alignItems="baseline">
                        {moment(item.createdAt).format('DD/MM/YYYY')}
                    </Box>
                    <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                        {item.title}
                    </Box>
                    <Box>
                        $.{item.price}
                    </Box>
                </Box>
            </NavLink>
            <Button colorScheme="pink" onClick={() => dispatch(addBasket(item))}>
                Add To Basket
            </Button>
        </Box>
    )
}