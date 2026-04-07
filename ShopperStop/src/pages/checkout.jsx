import { useCart } from "../context/cartContext";
import "./checkout.css";

function Checkout() {
    const { getCartItem, updateCartItem, removeFromCart, getCartTotal, clearCart } = useCart();
    const cartItems = getCartItem();
    const total = getCartTotal();
    function placeOrder() {
        alert("Placed Order");
        clearCart();
    }
    return (
        <>
            <div className="page">
                <div className="container">
                    <h1 className="pageTitle">Checkout</h1>
                    <div className="checkoutContainer">
                        <div className="checkoutItems">
                            <h2 className="checkout-section-title">Order Summary</h2>
                            {cartItems.map((item) => (
                                <>
                                    <div className="cartItemCard">
                                        <img src={item.product.image} alt={item.product.name} />
                                    </div>
                                    <div className="checkout-item-details">
                                        <h3 className="checkout-item-name">{item.product.name}</h3>
                                        <p className="checkout-item-price">${item.product.price} each</p>
                                    </div>
                                    <div className="checkout-item-controls">
                                        <button className="quantityBtn" onClick={() => updateCartItem(item.id, item.quantity - 1)}>-</button>
                                        <span className="quantityValue">{item.quantity}</span>
                                        <button className="quantityBtn" onClick={() => updateCartItem(item.id, item.quantity + 1)}>+</button>
                                    </div>
                                    <p className="checkout-item-price">${(item.product.price * item.quantity).toFixed(2)}</p>
                                    <button className="removeItem" onClick={() => removeFromCart(item.id)}>Remove</button>
                                    {item.quantity &&
                                        <div className="checkout-summary">
                                            <p className="checkout-subtotal-label">Subtotal:</p>
                                            <p className="checkout-subtotal-value">${total.toFixed(2)}</p>
                                            <p className="checkout-total-label">Total:</p>
                                            <p className="checkout-total-value">${total.toFixed(2)}</p>
                                            <button className="placeOrder" onClick={() => {
                                                placeOrder();
                                            }}>Place Order</button>
                                        </div>
                                    }

                                </>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout;