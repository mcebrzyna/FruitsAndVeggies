import React from 'react';

class Item extends React.Component{
    state= {
        amount: 1,
    };

    handleMinus = () => {
        let currAmount = this.state.amount;
        if(currAmount > 1){
            this.setState({ amount: --currAmount})
        }
    };

    handlePlus = () => {
        let currAmount = this.state.amount;
        this.setState({ amount: ++currAmount})
    };

    render(){
        return (
            <div className='item'>
                <img src={this.props.src}/>
                <div className='item-name'>{this.props.name}</div>
                <div className='item-price'>{this.props.price} PLN</div>
                <div className='amount-area'>
                    <button className='minus' onClick={this.handleMinus}/>
                    <input value={this.state.amount}/>
                    <button className='plus' onClick={this.handlePlus}/>
                </div>
                <button className='addToCart-btn'>ADD TO CART</button>
            </div>
        )
    }
}

export default Item;