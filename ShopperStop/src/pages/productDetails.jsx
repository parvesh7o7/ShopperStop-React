import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductsByID } from "../data/product";
import "./productDetails.css";
import { useCart } from "../context/cartContext";
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

    const { addToCart, cartItem } = useCart();

    if (!product) {
        return (
            <div className="loading_state">
                <p className="loading_text">Loading product...</p>
            </div>
        );
    }


    const productInCart = cartItem.find((item) => item.id === product.id);
    const productQuantityLabel = productInCart ? `(${productInCart.quantity})` : "";

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
                            <button className="addBtn" onClick={() => { addToCart(product.id) }}>Add to Cart {productQuantityLabel}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails;