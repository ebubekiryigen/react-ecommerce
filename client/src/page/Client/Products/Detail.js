import { useParams } from "react-router-dom"
import {productServices} from '../../../services'
import { useQuery } from "react-query";
import {Box, Button, Text} from "@chakra-ui/react"
import moment from "moment";
import './detail.scss'
import ImageGallery from 'react-image-gallery';
import { useDispatch, useSelector } from "react-redux";
import { addBasket } from "../../../store/product";

export default function ProductDetail(){

    const {product_id} = useParams()
    const dispatch = useDispatch()
    const {items} = useSelector(state=> state.product)
    const {isLoading, error, data} = useQuery(['product', product_id], ()=> productServices.fetchPorductDetail(product_id) )
    if(isLoading) return "Loading..."
    if(error) return "An error has occurred"
    const images = data.photos.map(url=> ({original:url}) )
    const findBasketItem = items.find((item)=> item._id === product_id)

    return(
    <div className="product-detail">
        <Box height='400px'>
            <ImageGallery items={images} showThumbnails={false} lazyLoad={true} showFullscreenButton={false} />
        </Box>
            <Button marginTop="50" colorScheme={findBasketItem ? "green" : "pink"} variant="solid"
            onClick={()=>dispatch(addBasket({data:data, findBasketItem:findBasketItem}))}
        >
            {findBasketItem ? "Remove from Basket" : "Add to basket"}
        </Button>
        <Text as="h2" fontSize="2xl" >{data.title}</Text>
        <Text>{moment(data.createdAt).format('DD/MM/YYYY')}</Text>
        <p>{data.description}</p>
    </div>
    )
}