import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, getStoredCart } from '../../Resources/utilities/fakedb';
import './Shop.css';

const Shop = () => {
    //Setting data to a state
    const [products, setProducts] = useState([]);

    //Search matched product state
    const [displayproducts, setDisplayProducts] = useState([]);

    //Fetching data from API
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setDisplayProducts(data)
            });
    }, []);

    
    //Setting items into cart with click handler
    const[cart, setCart]=useState([])
    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);

        //Setting items into local storage
        addToDb(product.key)
    }

    //Getting items from local storage
    useEffect(() => {
        if(products.length){
            const cartItems = getStoredCart();
            const savedItems = [];
        for (const key in cartItems) {
            const product = products.find(matchedProduct => matchedProduct.key === key);
            if (product) {
                const quantity = cartItems[key];
                product.quantity = quantity;
                savedItems.push(product);
            }
            }
            setCart(savedItems);
        }
    }, [products]);
    
    //Hendle search
    const hendleSearch = (e) => {
        const searchText = e.target.value.toLowerCase();
        const matchedResult = products.filter(product => product.name.toLowerCase().includes(searchText));
        setDisplayProducts(matchedResult);
    }
    
    return (
        <div>
            <div className="search-container">
                <input className="search-bar" onChange={hendleSearch} type="text" placeholder="Search here" />
            </div>
            <div className="shop-container">
            <div className="product-container">
                {
                    displayproducts.map(product => <Product
                        handleAddToCart={handleAddToCart}
                        key={product.key}
                        product={product}
                    ></Product>)
                }
            </div>

            <div className="cart-container">
                <div className="cart">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Shop;