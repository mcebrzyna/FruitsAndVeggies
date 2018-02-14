import React from 'react';
import Search from './search.jsx'
import Cart from './cart.jsx'

class Header extends React.Component{

    render(){
        return (
            <header>
                <div className='main-width'>
                    <span className='logo'>Veggy</span>
                    <Search />
                    <Cart />
                </div>
            </header>
        )
    }
}

export default Header;