import React from 'react';

class Item extends React.Component{
    state= {
        amount: 1,
        zoom: false,
    };

    componentDidMount() {

    }

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

    handleChange = (ev) => {
        this.setState({amount: ev.target.value})
    };

    handleClick = () => {
        this.props.sendToCart(this.props.name, this.state.amount, this.props.price, this.props.src);
    };

    zoomClick = () => {
        this.setState( {zoom: !this.state.zoom} )
    };

    zoom = () => {
        if(this.state.zoom){
            return(
                <div className='zoom'>
                    <div>
                        <img src={this.props.src} alt={this.props.name} onClick={this.zoomClick}/>
                        <div>
                            <span>{this.props.name}</span>
                            <span>{this.props.price} PLN</span>
                        </div>
                        <button onClick={this.zoomClick}/>
                    </div>
                </div>
            )
        }
        return null;
    };

    render(){
        return (
            <div className='item'>
                <img src={this.props.src} onClick={this.zoomClick}/>
                <div className='item-name'>{this.props.name}</div>
                <div className='item-price'>{this.props.price} PLN</div>
                <div className='amount-area'>
                    <button className='minus' onClick={this.handleMinus}/>
                    <input value={this.state.amount} onChange={this.handleChange}/>
                    <button className='plus' onClick={this.handlePlus}/>
                </div>
                <button className='addToCart-btn'
                        onClick={this.handleClick}
                        data-name={this.props.name}>ADD TO CART
                </button>
                {this.zoom()}
            </div>
        )
    }
}

export default Item;