import React, { useState } from 'react'

export const Header = () => {
    const [keyword, setKeyword] = useState('');

    const handleKeywordUpdate = (event) => {
        setKeyword(event.target.value);
    }

    return (
        <header className="mt-3">
            <h1>Flickr App</h1>
            <input
                type="text"
                className="form-control"
                value={keyword}
                onChange={handleKeywordUpdate}
                placeholder="Please enter a keyword to search"
            />
        </header>
    )
}
