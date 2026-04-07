import { use, useContext } from 'react';
import '../pages/home.css';
import { Link } from 'react-router-dom';
import { useCart } from '../context/cartContext';
function ProductCard({ product }) {
    const { addToCart, cartItem } = useCart();
    const productInCart = cartItem.find((item) => item.id === product.id);
    const productQuantityLabel = productInCart ? `(${productInCart.quantity})` : "";
    return (
        <>
            <div className="product_card" key={product.id}>
                <img className="product_card_image" src={product.image} alt='Image' />
                <div className="product_card_content">
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                    <div>
                        <Link to={`products/${product.id}`}>View Details</Link>
                        <button onClick={() => {
                            addToCart(product.id);
                        }}>Add to Cart {productQuantityLabel}</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProductCard;