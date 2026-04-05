import ProductCard from '../components/productCard';
import { getProducts } from '../data/product';
import './home.css';
import { Link } from 'react-router-dom';
function Home() {
    const products = getProducts();
    return (
        <>
            <div className="homePage">
                <div className="hero">
                    <h1>Welcome to ShopperStop</h1>
                    <p>Shoes at great deals🎉🕛</p>
                </div>
                <div className="mainContent">
                    <p>Our Products:</p>
                    <div className="grid">
                        {products.map((product) => (
                            <ProductCard product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;