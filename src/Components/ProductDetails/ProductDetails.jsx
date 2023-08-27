import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../../services/product.service';

const ProductDetails = () => {
    const { productId } = useParams();
    const [productDetails, setProductDetails] = useState(null);

    const getData = async () => {
        const data = await getProductDetails(productId);
        setProductDetails(data);
    }

    useEffect(() => {
        getData();
    }, [productId]);

    if (!productDetails) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={productDetails.thumbnail} alt="" className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <div className="product-details">
                        <h3>{productDetails.title}</h3>
                        <p className="mb-4">{productDetails.description}</p>
                        <p className="price">${productDetails.price}</p>
                        <button className="btn btn-primary btn-lg">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
