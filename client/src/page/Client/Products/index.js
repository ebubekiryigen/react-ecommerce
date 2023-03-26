import { Flex, Grid, Button } from "@chakra-ui/react";
import React from "react";
import { useInfiniteQuery } from "react-query";
import Card from "../../../components/client/products/Card";
import {productServices} from '../../../services'

export default function Products(){

    const {error, data, fetchNextPage , hasNextPage ,isFetching, isFetchingNextPage , status} = useInfiniteQuery("products", productServices.fetchPorductList , {
        getNextPageParam:(lastGroup, allGroups) => {
            const morePagesExist = lastGroup?.length === 12
            if(!morePagesExist) {
                return
            }
            return allGroups.length + 1
        }
    } )
    if(status === 'loading') return "Loading..."
    if(error) return "An error has occurred"

    return(
        <div>
            <Grid templateColumns="repeat(3, 1fr)" gap="4">
                {
                data.pages.map((group,i)=>(
                    <React.Fragment key={i}>
                        {
                            group.map((item,key)=>(
                                <Card item={item} key={key} />
                            ))
                        }
                    </React.Fragment>
                ))
                }
            </Grid>
            <Flex mt="10" mb="10" justifyContent="center">
                <Button isLoading={isFetchingNextPage} onClick={()=> fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage} >
                    {
                        isFetchingNextPage ? "Ürünler yükleniyor..." : hasNextPage ? "Daha Fazla Ürün" : "Başka Ürün Kalmadı"
                    }
                </Button>
                <div>
                    {isFetching && !isFetchingNextPage ? "Fetching..." : null}
                </div>
            </Flex>
        </div>
    )
}