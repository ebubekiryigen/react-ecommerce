import { useParams } from "react-router-dom"
import {productServices} from '../../../services'
import { useQuery } from "react-query";
import {Box, Button, Text} from "@chakra-ui/react"
import moment from "moment";
import './detail.scss'
import ImageGallery from 'react-image-gallery';

export default function ProductDetail(){

    const {product_id} = useParams()
    const {isLoading, error, data} = useQuery(['product', product_id], ()=> productServices.fetchPorductDetail(product_id) )
    if(isLoading) return "Loading..."
    if(error) return "An error has occurred"

    const images = data.photos.map(url=> ({original:url}) )

    return(
    <div className="product-detail">
        <Box height='400px'>
            <ImageGallery items={images} showThumbnails={false} lazyLoad={true} showFullscreenButton={false} />
        </Box>
        <Button marginTop="50" colorScheme="pink" variant="solid">Add to basket</Button>
        <Text as="h2" fontSize="2xl" >{data.title}</Text>
        <Text>{moment(data.createdAt).format('DD/MM/YYYY')}</Text>
        <p>{data.description}</p>
    </div>
    )
}