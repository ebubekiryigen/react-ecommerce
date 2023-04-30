import {useQuery} from "react-query"
import {orderServices} from '../../../services'
import { Text, Table, TableCaption, Th, Tr, Thead } from "@chakra-ui/react";

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
                <Tr>
                    <Th>Users</Th>
                    <Th>User</Th>
                    <Th>Items</Th>
                </Tr>
            </Thead>
        </Table>
        </>
    )
}