import React from 'react';

class Search extends React.Component{

    render(){
        return (
            <div className='search-area'>
                <input className='text-input'
                       value={this.props.text}
                       onChange={this.props.handleText}
                       placeholder='Search for Vegetables and Fruits'/>
                <div/>
            </div>
        )
    }
}

export default Search;