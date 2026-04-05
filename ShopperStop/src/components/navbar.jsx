import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="nav_container">
                    <Link to="/" className="navbar_brand">ShopperStop</Link>
                </div>
                <div className="nav_links">
                    <Link to="/">Home</Link>
                    <Link to="/checkout">Cart</Link>
                </div>
                <div className="auth">
                    <div className="auth_links">
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Sign Up</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;