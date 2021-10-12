import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let totalQuantity = 0;
    let total = 0;
    let shipping = 0;
    for (const item of cart) {
        if (!item.quantity) {
            item.quantity = 1;
        }
            totalQuantity += item.quantity;
            total = item.price * totalQuantity;
            shipping = item.shipping;
    }
    let totalBeforTax = total + shipping;
    let tax = total * 20 / 100;
    let grandTotal = total + shipping + tax;
    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items ordered:{totalQuantity}</h5>
            <p><small>Items: {totalQuantity}</small></p>
            <p><small>Shipping and Handling: ${shipping}</small></p>
            <p><small>Total before tax: ${totalBeforTax.toFixed(2)}</small></p>
            <p><small>Estimated Tax: ${tax.toFixed(2)}</small></p>
            <h3>Order Total: ${grandTotal.toFixed(2)}</h3>
            <button className="review-order-btn">Review your orders</button>
        </div>
    );
};

export default Cart;