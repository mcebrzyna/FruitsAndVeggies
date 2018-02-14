import React from 'react';

class Cart extends React.Component{

    render(){
        return (
            <div className='shopping-cart'>
                <div className='cart-info'>
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
                <div className='cart-container'>
                    <div className='cart-items'>Empty</div>
                    <input type="submit" value='PROCEED TO CHECKOUT'/>
                </div>
            </div>
        )
    }
}

export default Cart;