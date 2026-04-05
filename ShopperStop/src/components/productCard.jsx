import '../pages/home.css';
import { Link } from 'react-router-dom';
function ProductCard({ product }) {
    return (
        <>
            <div className="product_card" key={product.id}>
                <img className="product_card_image" src={product.image} />
                <div className="product_card_content">
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                    <div>
                        <Link>View Details</Link>
                        <button>Add to Cart</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProductCard;