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
        };

        handleText = ev => {
            this.setState({text: ev.target.value});
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

        render(){
            return (
                <div className='main-container'>
                    <Header text={this.state.text} handleText={this.handleText}/>
                    <Content products={this.state.products} text={this.state.text}/>
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