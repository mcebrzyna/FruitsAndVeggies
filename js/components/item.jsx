import React from 'react';

class Item extends React.Component{

    render(){
        return (
            <div className='item'>
                <img src={this.props.src}/>
                <div className='item-name'>{this.props.name}</div>
                <div className='item-price'>{this.props.price} PLN</div>
                <div className='amount-area'>
                    <button className='minus'/>
                    <input value='1'/>
                    <button className='plus'/>
                </div>
                <button className='addToCart-btn'>ADD TO CART</button>
            </div>
        )
    }
}

export default Item;