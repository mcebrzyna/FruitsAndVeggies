import React from 'react';

class Search extends React.Component{

    render(){
        return (
            <div className='search-area'>
                <form>
                    <input className='text-input' type="text" placeholder='Search for Vegetables and Fruits'/>
                    <input className='submit-btn' type="submit" value=''/>
                </form>
            </div>
        )
    }
}

export default Search;