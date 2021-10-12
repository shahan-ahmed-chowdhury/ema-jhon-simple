import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import Rating from 'react-rating';

const Product = (props) => {
    const { name, img, price, seller, stock, features, star } = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="product-wrapper">
            <img src={img} alt="" />
            <div className="product-info-container">
                <h3 className="product-name">{name}</h3>
                <div className="product-info-wrapper">
                    <div className="product-info">
                        <p>By: {seller}</p>
                        <h3>${price}</h3>
                        <p>only {stock} left in stock - order soon</p>
                        <button onClick={()=>props.handleAddToCart(props.product)} className="add-to-cart-btn">{cartIcon} Add to cart</button>
                    </div>
                    <div className="product-rating">
                        <Rating
                            emptySymbol="far fa-star"
                            fullSymbol="fas fa-star"
                            className="icons"
                            initialRating={star}
                            readonly
                        />
                        <h3>Features:</h3>
                        {
                            features.map(feature => <li>{feature.description}: {feature.value}</li>)
                        }
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Product;