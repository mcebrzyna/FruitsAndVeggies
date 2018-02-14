import React from 'react';

class Cart extends React.Component{

    render(){
        return (
            <div className='shopping-cart'>
                <div>
                    <span>No. of items :</span>
                    <span>Sub Total :</span>
                </div>
                <div>
                    <span>7</span>
                    <span>357</span>
                </div>
                <div className='cart-icon'/>
            </div>
        )
    }
}

export default Cart;