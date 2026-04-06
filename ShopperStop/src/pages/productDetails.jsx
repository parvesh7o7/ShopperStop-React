import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductsByID } from "../data/product";
import "./productDetails.css";

function ProductDetails() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    useEffect(() => {
        const foundProduct = getProductsByID(id);
        if (!foundProduct) {
            navigate("/");
            return;
        }
        setProduct(foundProduct);
    }, [id]);

    if (!product) {
        return (
            <div className="loading_state">
                <p className="loading_text">Loading product...</p>
            </div>
        );
    }
    return (
        <>
            <div className="page">
                <div className="container">
                    <div className="productDetail">
                        <div className="productDetailImage">
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div className="productDetailContent">
                            <h1 className="productName">{product.name}</h1>
                            <p className="productPrice">${product.price}</p>
                            <p className="productDescription">{product.description}</p>
                            <button className="addBtn">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails;