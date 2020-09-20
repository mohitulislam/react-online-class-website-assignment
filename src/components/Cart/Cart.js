import React from 'react';

const Cart = (props) => {
    
    const cart = props.cart
    let totalPrice = 0;
    for(let i=0;i<cart.length; i++ ){
        const course = cart[i];
        totalPrice = totalPrice + course.price;
    }
    // Need to know java Script reduce
    return (
        <div>
            <h3>Total Course Added:{cart.length} </h3>
            <p>Total Price: ${totalPrice}.00</p>
        </div>
    );
};

export default Cart;