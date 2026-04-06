import { Link } from "react-router-dom";
import "./navbar.css";
import { useAuth } from "../context/authContext";
import { useContext } from "react";
function Navbar() {
    const { user, logout } = useAuth();
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
                        {user ? (
                            <>
                                <div className="user_info">
                                    <span className="user_email_text">Hello, {user.email}</span>
                                    <button className="logout_Button" onClick={logout}>Logout</button>
                                </div>
                            </>
                        ) :
                            (<>
                                <Link to="/auth">Login</Link>
                                <Link to="/auth">Sign Up</Link>
                            </>)}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;