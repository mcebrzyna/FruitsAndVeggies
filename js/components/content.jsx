import React from 'react';
import Item from './item.jsx'

class Content extends React.Component{
    loadItems() {
        return (
            this.props.products.map( i => {
            return <Item name={i.name} price={i.price} src={i.src} key={i.id}/>;
            })
        )
    }

    render(){
        if(this.props.products === null){
            return null;
        }
        return (
            <section className='main-content'>
                <div className='main-width'>
                    <div className='items-container'>
                        {this.loadItems()}
                    </div>
                </div>
            </section>
        )
    }
}

export default Content;