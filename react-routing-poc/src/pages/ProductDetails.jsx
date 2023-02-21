import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

    const params = useParams();

    return (
        <div>
            <h1>This is a product details Page !!</h1>
            <p>Id of the Product is : {params.productId}</p>
        </div>
    )
}

export default ProductDetails
