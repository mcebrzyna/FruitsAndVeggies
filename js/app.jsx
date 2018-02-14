import '../scss/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import Content from './components/content.jsx'

document.addEventListener('DOMContentLoaded', function () {

    class App extends React.Component{
        render(){
            return (
                <div className='main-container'>
                    <Header />
                    <Content />
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