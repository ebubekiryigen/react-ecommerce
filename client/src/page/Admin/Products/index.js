import { useQuery, useMutation, useQueryClient } from "react-query";
import { useMemo } from "react";
import {productServices} from '../../../services'
import { Text } from "@chakra-ui/react";
import { Table, Popconfirm } from "antd";
import { NavLink } from "react-router-dom";

export default function AdminProducts() {

    const queryClient = useQueryClient();

    const {isLoading, isError, data, error} = useQuery(
        "admin:products",
        productServices.fetchPorductList
    )
    const deleteMutation = useMutation(productServices.deleteProduct, {
		onSuccess: () => queryClient.invalidateQueries("admin:products"),
	});

	const columns = useMemo(() => {
		return [
			{
				title: "Title",
				dataIndex: "title",
				key: "title",
			},
			{
				title: "Price",
				dataIndex: "price",
				key: "price",
			},
			{
				title: "Created At",
				dataIndex: "createdAt",
				key: "createdAt",
			},
			{
				title: "Action",
				key: "action",
				render: (text, record) => (
					<>
						<NavLink to={`/admin/products/${record._id}`}>Edit</NavLink>
						<Popconfirm
							title="Are you sure?"
							onConfirm={() => {
								deleteMutation.mutate(record._id, {
									onSuccess: () => {
										console.log("success");
									},
								});
							}}
							onCancel={() => console.log("iptal edildi")}
							okText="Yes"
							cancelText="No"
							placement="left"
						>
							<a href="javascript:;" style={{ marginLeft: 10 }}>
								Delete
							</a>
						</Popconfirm>
					</>
				),
			},
		];
	}, []);

    if(isLoading) {
        return <div>Loading...</div>
    }

    if(isError) {
        return <div>Error {error.message}</div>
    }

    return(
        <>
        <Text>
            admin products
        </Text>
        <Table dataSource={data} columns={columns} rowKey="_id" />
        </>
    )
}