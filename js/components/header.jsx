import React from 'react';
import Search from './search.jsx'
import Cart from './cart.jsx'

class Header extends React.Component{

    render(){
        return (
            <header>
                <div className='main-width'>
                    <span className='logo'>Veggy</span>
                    <Search text={this.props.text} handleText={this.props.handleText}/>
                    <Cart cart={this.props.cart}
                          subTotal={this.props.subTotal}
                          handleMinus={this.props.handleMinus}
                          handlePlus={this.props.handlePlus}
                          handleChange={this.props.handleChange}
                          removeItem={this.props.removeItem}/>
                </div>
            </header>
        )
    }
}

export default Header;