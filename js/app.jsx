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

        sendToCart = (name, amount, price) => {
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
            !appear ? tempList.push({name, amount, price}) : '';

            this.setState({
                cart: tempList,
            })
        };

        render(){
            return (
                <div className='main-container'>
                    <Header text={this.state.text} cart={this.state.cart} handleText={this.handleText}/>
                    <Content products={this.state.products} text={this.state.text} sendToCart={this.sendToCart}/>
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