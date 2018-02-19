import React from 'react';

class CartItem extends React.Component{
    render(){
        return (
            <div className='cart-item'>
                <img src={this.props.src}/>
                <div>
                    <div className='item-name'>{this.props.name}</div>
                    <div className='item-price'>{this.props.price} PLN</div>
                </div>
                <div className='amount-area'>
                    <button className='minus' onClick={() => this.props.handleMinus(this.props.name)}/>
                    <input value={this.props.amount} onChange={ev => this.props.handleChange(ev, this.props.name)}/>
                    <button className='plus' onClick={() => this.props.handlePlus(this.props.name)}/>
                </div>
                <div className='remove' onClick={() => this.props.removeItem(this.props.name)}/>
            </div>
        )
    }
}

export default CartItem;