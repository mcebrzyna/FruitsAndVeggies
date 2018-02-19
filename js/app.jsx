import '../scss/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import Content from './components/content.jsx'

document.addEventListener('DOMContentLoaded', function () {

    class App extends React.Component{
        url = 'http://localhost:3000/products';
        state = {
            products: null,
            text: '',
            cart: [],
            subTotal: 0,
        };

        componentDidMount() {
            fetch(this.url)
                .then(resp => resp.json())
                .then(resp => {
                    let arr = resp.map( item => item);
                    this.setState({
                        products: arr,
                    })
                })
                .catch(error => console.log(error))
        }

        handleText = ev => {
            this.setState({text: ev.target.value});
        };

        sendToCart = (name, amount, price, src) => {
            //check if adding item has already appeared
            let tempList = this.state.cart;
            let appear = false;
            amount = Number(amount);
            tempList.forEach(item => {
                if(item.name === name){
                    item.amount += Number(amount);
                    appear = true;
                }
            });

            //if first appearance
            !appear ? tempList.push({name, amount, price, src}) : '';

            this.setState({
                cart: tempList,
            }, () => this.countTotal())
        };

        handleMinus = (name) => {
            let tempCart = this.state.cart;
            tempCart.forEach(item => {
                if(item.name === name){
                    item.amount > 1 ? item.amount-- : '';
                }
            });

            this.setState({
                    cart: tempCart
            }, () => this.countTotal() );
        };

        handlePlus = (name) => {
            let tempCart = this.state.cart;
            tempCart.forEach(item => {
                if(item.name === name){
                    item.amount++;
                }
            });

            this.setState({
                cart: tempCart
            }, () => this.countTotal() );
        };

        handleChange = (ev, name) => {
            let tempCart = this.state.cart;
            tempCart.forEach(item => {
                if(item.name === name){
                    item.amount = ev.target.value;
                }
            });

            this.setState({
                cart: tempCart
            }, () => this.countTotal() );
        };

        removeItem = (name) => {
            let tempCart = this.state.cart.filter( item => {
                return item.name !== name;
            });
            this.setState( {cart: tempCart}, () => this.countTotal() )
        };

        countTotal = () => {
            let total = 0;
            this.state.cart.forEach(item => {
                total += item.amount * parseFloat(item.price);
            });
            total = Math.round(total * 100) / 100;

            //adding 0 when: 11.2 -> 11.20
            total = total.toString();
            if(total.slice(total.indexOf('.')).length === 2){
                total += '0';
            }

            this.setState( { subTotal: total,} );
        };

        render(){
            return (
                <div className='main-container'>
                    <Header text={this.state.text}
                            cart={this.state.cart}
                            subTotal={this.state.subTotal}
                            handleText={this.handleText}
                            handleMinus={this.handleMinus}
                            handlePlus={this.handlePlus}
                            handleChange={this.handleChange}
                            removeItem={this.removeItem}/>
                    <Content products={this.state.products}
                             text={this.state.text}
                             sendToCart={this.sendToCart}
                             />
                    <Footer />
                </div>
            )
        }
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    )
});