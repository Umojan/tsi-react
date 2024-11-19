import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <div className="product-category">{product.category}</div>
            <div className="product-title">{product.title}</div>
            <div className="product-footer">
                <div className="product-price">${product.price}</div>
                <button className="add-to-cart-button">Add to cart</button>
            </div>
        </div>
    );
};

export default ProductCard;
