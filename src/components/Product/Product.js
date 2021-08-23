import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
  const {img,name,seller,price,stock} =  props.product;
    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-name">
                 <h4>{name}</h4>
                 <br />
                 <p>By:{seller}</p>
                 <p>${price}</p>
                 <p>Only {stock} left in stock - order soon</p>
                 <button className="button" onClick={()=>props.handeler(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
          
        </div>
    );
};

export default Product;

 
