import {useQuery} from "react-query"
import {orderServices} from '../../../services'
import { Text, Table, TableCaption, Th, Tr, Thead, Tbody, Td } from "@chakra-ui/react";

export default function AdminOrders() {

    const {isLoading, isError, data, error} = useQuery('admin:orders', orderServices.getOrders)

    if(isLoading) {
        return <div>Loading...</div>
    }

    if(isError) {
        return <div>Error {error.message}</div>
    }

    return(
        <>
        <Text fontSize="2xl" p={5}>
            Orders
        </Text>

        <Table variant="simple">
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
                <Tr backgroundColor="black" color="white">
                    <Th color="white" fontWeight="bold">Users</Th>
                    <Th color="white" fontWeight="bold">User Address</Th>
                    <Th color="white" fontWeight="bold">Items</Th>
                </Tr>
            </Thead>
            <Tbody>
                {data.map((item)=> (
                    <Tr key={item._id}>
                        <Td>{item.user.email}</Td>
                        <Td>{item.adress}</Td>
                        <Td>{item.items.length}</Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
        </>
    )
}