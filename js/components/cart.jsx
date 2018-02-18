import React from 'react';

class Cart extends React.Component{
    state = {
        menuDisplay: 'off',
    };

    handleClick = () =>{
        if(this.state.menuDisplay.indexOf('on') === -1){
            this.setState( { menuDisplay: 'on',} );
        }
        else {
            this.setState( {menuDisplay: 'off',} );
        }
    };

    addToCart = () => {
        if(typeof this.props.cart === 'undefined'){
            return null;
        }

        return this.props.cart.map(item => {
            return (
                <div key={item.name}>
                    <div>{item.name}</div>
                    <div>{item.amount}</div>
                </div>
            )
        });
    };

    countTotal = () => {
        let total = 0;
        this.props.cart.forEach(item => {
            total += item.amount * parseFloat(item.price);
        });
        return Math.round(total * 100) / 100;
    };

    render(){
        return (
            <div className='shopping-cart'>
                <div className='cart-info'>
                    <div>
                        <span>No. of items :</span>
                        <span>Sub Total :</span>
                    </div>
                    <div>
                        <span>{this.props.cart.length}</span>
                        <span>{this.countTotal()}</span>
                    </div>
                    <div className='cart-icon' onClick={this.handleClick}/>
                </div>
                <div className='cart-container'
                     style={this.state.menuDisplay === 'on'? {display: 'block'} : {display: 'none'}}>
                    {this.addToCart()}
                    <input type="submit" value='PROCEED TO CHECKOUT'/>
                </div>
            </div>
        )
    }
}

export default Cart;