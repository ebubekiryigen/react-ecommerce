import { Alert, Box, Button, FormControl, FormLabel, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Textarea, useDisclosure } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import Card from "../../../components/client/basket/Card"
import "./index.scss"
import { useRef } from "react"



export default function Basket(){

    const {isOpen, onOpen, onClose} = useDisclosure()
    const initialRef = useRef()
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
            <Box mb="3"><Button onClick={onOpen} colorScheme="green" size="sm">Order</Button></Box>
            <ul className="flex">
            {
                items.map((item)=>(
                    <Card item={item} key={item._id} />
                ))
            }
            </ul>
            <Modal
            initialFocusRef={initialRef}
            isOpen={isOpen}
            onClose={onClose}
            >
                <ModalOverlay>
                    <ModalContent>
                        <ModalHeader>Order Now</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <FormControl>
                                <FormLabel>Address</FormLabel>
                                <Textarea />
                            </FormControl>
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme="green" mr={3} >
                                Order
                            </Button>
                            <Button onClick={onClose} >Cancel</Button>
                        </ModalFooter>
                    </ModalContent>
                </ModalOverlay>

            </Modal>
        </>
        }
        </>
    )
}