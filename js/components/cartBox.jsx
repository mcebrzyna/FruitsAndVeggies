import React from 'react';
import CartItem from './cartItem.jsx';

class CartBox extends React.Component{
    addToCart = () => {
        if(typeof this.props.cart === 'undefined'){
            return null;
        }

        if(this.props.cart.length === 0){
            return <div className='no-items'>No items in cart.</div>
        }

        return this.props.cart.map(item => {
            return <CartItem name={item.name}
                             price={item.price}
                             amount={item.amount}
                             src={item.src}
                             key={item.name}
                             handleMinus={this.props.handleMinus}
                             handlePlus={this.props.handlePlus}
                             handleChange={this.props.handleChange}
                             removeItem={this.props.removeItem}/>
        });
    };

    render(){
        return (
            <div className='cart-box' style={{display: this.props.display}}>
                <div className='cart-items'>
                    {this.addToCart()}
                </div>
                <input type="submit" value='PROCEED TO CHECKOUT'/>
            </div>
        )
    }
}

export default CartBox;