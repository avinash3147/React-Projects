import React, { useContext, useState, useEffect, useReducer } from "react"
import { HANDLE_PAGE, HANDLE_SEARCH, REMOVE_STORY, SET_LOADING, SET_STORIES } from "./Actions"
import reducer from "./Reducer"

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?'

const AppContext = React.createContext()

const initialState = {
    searchQuery: 'react',
    stories: [],
    pages: 0,
    nbPages: 0,
    isLoading: false
}

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const fetchStories = async (url) => {
        dispatch({ type: SET_LOADING, payload: { isLoading: true} })
        try {
            const response = await fetch(url)
            const data = await response.json()
            
            dispatch( { 
                type: SET_STORIES, 
                payload: { 
                    stories: data.hits, 
                    nbPages: data.nbPages, 
                    page: data.page
                }
            })
        } catch (error) {
            dispatch({ type: SET_LOADING, payload: { isLoading: false} })
            console.log(error);
        }
    }

    const handleSearch = (searchQuery) => {
        dispatch({ type: HANDLE_SEARCH, payload: { searchQuery: searchQuery } })
    }

    const handleRemoveStory = (id) => {
        dispatch({ type: REMOVE_STORY, payload: { id: id} })
    }

    const handlePage = (type) => {
        dispatch({ type: HANDLE_PAGE, payload: {type: type} })
    }

    useEffect(() => {
        const url = `${API_ENDPOINT}query=${state.searchQuery}&page=${state.page}`
        fetchStories(url)
    }, [state.searchQuery, state.page])

    return (
        <AppContext.Provider
            value={{
                ...state,
                handleSearch,
                handleRemoveStory, 
                handlePage
            }}
        >
            { children }
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }
