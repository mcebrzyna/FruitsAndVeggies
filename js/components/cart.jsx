import React from 'react';
import CartBox from './cartBox.jsx';

class Cart extends React.Component{
    state={
        display: 'none',
    };

    handleClick = () => {
        this.state.display === 'none'?
            this.setState( {display: 'flex'} ):
            this.setState( {display: 'none'} );
    };

    render(){
        return (
            <div className='shopping-cart'>
                <div className='cart-info'>
                    <span>No. of items :</span>
                    <span>Sub Total :</span>
                </div>
                <div className='cart-info'>
                    <span>{this.props.cart.length}</span>
                    <span>{this.props.subTotal}</span>
                </div>
                <button className='cart-icon' onClick={this.handleClick}/>
                <CartBox cart={this.props.cart}
                               subTotal={this.props.subTotal}
                               handleMinus={this.props.handleMinus}
                               handlePlus={this.props.handlePlus}
                               handleChange={this.props.handleChange}
                               removeItem={this.props.removeItem}
                               display={this.state.display}/>
            </div>
        )
    }
}

export default Cart;