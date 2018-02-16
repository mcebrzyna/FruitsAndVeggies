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
                    <div className='cart-icon' onClick={this.handleClick}/>
                </div>
                <div className='cart-container'
                     style={this.state.menuDisplay === 'on'? {display: 'block'} : {display: 'none'}}>
                    <div className='cart-items'>Empty</div>
                    <input type="submit" value='PROCEED TO CHECKOUT'/>
                </div>
            </div>
        )
    }
}

export default Cart;