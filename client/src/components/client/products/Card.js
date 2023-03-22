import { Box, Button, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";


export default function Card(){
    return(
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3" d="flex" alignItems="center" justifyContent="center" flexDirection="column">
            <NavLink to="#">
                <Image width="100%" src="https://picsum.photos/400/200" alt="product" />
                <Box p="6">
                    <Box d="flex" alignItems="baseline">
                        01/01/2023
                    </Box>
                    <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                        Macbook Pro
                    </Box>
                    <Box>
                        100$
                    </Box>
                </Box>
            </NavLink>
            <Button colorScheme="pink">
                Add To Basket
            </Button>
        </Box>
    )
}