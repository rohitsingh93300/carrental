'use client'

import { createContext, useContext, useState } from 'react'

//create context
const SearchContext = createContext()

//provider
export const SearchContextProvider = ({ children }) => {
    const [searchActive, setSearchActive] = useState(false)
    return <SearchContext.Provider value={{searchActive, setSearchActive}}>
        {children}
    </SearchContext.Provider>
}

export const useSearchContext = () => useContext(SearchContext)