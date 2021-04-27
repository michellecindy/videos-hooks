import './SearchBar.css';
import React, { useState } from 'react';

const SearchBar = ({onFormSubmit }) => {
    const [term, setTerm] = useState('');

    // we can also put this directly in the onChange variable
    const onInputChange = (event) => {
        setTerm(event.target.value);
    }

    const onSubmit = (event) => {
        // to prevent that the browser automatically submits the form when the user actually submits it. 
        // this is because the browser will reload the page on submitting
        event.preventDefault();
        
        // callback from parent component to pass the term there
        onFormSubmit(term);
        
    }

    return (
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input 
                        type="text" 
                        value={term} 
                        onChange={onInputChange}>
                    </input>
                </div>
            </form>
        </div>
    )

}

export default SearchBar;