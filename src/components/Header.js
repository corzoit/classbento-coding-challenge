import React, { useContext } from 'react'
import { SearchContext } from '../context/SearchContext';

export const Header = () => {
    const {keywords, dispatch} = useContext(SearchContext);

    const handleKeywordUpdate = (event) => {
        dispatch({
            type: 'update',
            payload: event.target.value
        });
    }

    return (
        <header className="mt-3">
            <h1>Flickr App</h1>
            <input
                type="text"
                className="form-control"
                value={keywords}
                onChange={handleKeywordUpdate}
                placeholder="Please enter a keyword to search"
            />
        </header>
    )
}
