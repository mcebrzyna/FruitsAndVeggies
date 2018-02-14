import React from 'react';
import Item from './item.jsx'

class Content extends React.Component{

    render(){
        return (
            <section className='main-content'>
                <div className='main-width'>
                    <div className='items-container'>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                    </div>
                </div>
            </section>
        )
    }
}

export default Content;