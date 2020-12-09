import React, { useReducer } from 'react'
import { Header } from './components/Header'
import { Results } from './components/Results'

import { SearchContext } from './context/SearchContext';
import { keywordsReducer } from './context/keywordsReducer';

export const FlickrApp = () => {

    const [keywords, dispatch] = useReducer(keywordsReducer, '');

    return (
        <SearchContext.Provider value={{keywords, dispatch}}>
            <Header />
            <Results />
        </SearchContext.Provider>
    )
}
