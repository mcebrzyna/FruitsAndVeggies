import React from 'react';
import Item from './item.jsx'

class Content extends React.Component{
    loadItems() {
        let items = [];
        const text = this.props.text.toLowerCase();

        this.props.products.forEach( i => {
            if(i.name.toLowerCase().indexOf(text) !== -1){
                items.push(<Item name={i.name} price={i.price} src={i.src} key={i.id}/>)
            }
        });
        return items;
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