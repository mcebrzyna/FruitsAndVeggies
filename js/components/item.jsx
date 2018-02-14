import React from 'react';

class Item extends React.Component{

    render(){
        return (
            <div className='item'>
                <img/>
                <div className='item-name'>name</div>
                <div className='item-price'>Rs. 00</div>
                <div className='amount-area'>
                    <button className='minus'/>
                    <input/>
                    <button className='plus'/>
                </div>
                <input type='submit' value='ADD TO CART'/>
            </div>
        )
    }
}

export default Item;