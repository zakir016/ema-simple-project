import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // TWO WAYS
    // const total = cart.reduce((total,prd)=>total+prd.price,0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total+product.price;
        
    }
    // END TWO WAYS
    let shipping = 0;
    if (total>35) {
        shipping = 10;
    }else if(total>20){
        shipping = 5;
    } 
    const tax = total/10;
    const grandTotal = total+shipping+tax;
    const format = num =>{
        const precesion = num.toFixed(2);
        return Number(precesion);
    }
    return (
        <div>
            <h2>Order Summary</h2>
            <p>Item Ordered:{cart.length}</p>
            <p>Product price:{format(total)}</p>
            <p>Shipping cost:{shipping}</p>
            <p>Tax:{format(tax)}</p>
            <p>Total price:{format(grandTotal)}</p>
        </div>
    );
};

export default Cart;