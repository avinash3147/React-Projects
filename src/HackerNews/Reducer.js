import { HANDLE_PAGE, HANDLE_SEARCH, REMOVE_STORY, SET_LOADING, SET_STORIES } from "./Actions";

const reducer = (state, action) => {
    switch(action.type) {
        case SET_LOADING:
            return {...state, isLoading: action.payload.isLoading}
        case SET_STORIES:
            return {
                ...state,
                stories: action.payload.stories,
                nbPages: action.payload.nbPages,
                page: action.payload.page,
                isLoading: false
            }
        case HANDLE_SEARCH:
            return {
                ...state,
                searchQuery: action.payload.searchQuery
            }
        case REMOVE_STORY:
            return {
                ...state,
                stories: state.stories.filter((story) => story.objectID !== action.payload.id)
            }
        case HANDLE_PAGE:
            if (action.payload.type === 'inc') {
                let nextPage = state.page + 1
                if (nextPage > state.nbPages - 1) {
                    nextPage = 0
                }
                return { ...state, page: nextPage }
            }
            if (action.payload.type === 'dec') {
                let prevPage = state.page - 1
                if (prevPage < 0) {
                    prevPage = state.nbPages - 1
                }
                return { ...state, page: prevPage }
                    }
        default:
            throw new Error(`No Matching "${action.type}" action type"`)
    }
}

export default reducer;