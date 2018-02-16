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
                    <Header />
                    <Content products={this.state.products}/>
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