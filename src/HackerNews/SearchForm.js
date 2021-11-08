import { useGlobalContext } from "./context";

const SearchForm = () => {

    const { searchQuery, handleSearch } = useGlobalContext()

    return (
        <form className='search-form' onSubmit={(e) => {e.preventDefault()}}>
            <h2>Search Hacker News</h2>
            <input 
                type='text'
                className='form-input'
                value={searchQuery}
                placeholder='Search Article'
                onChange={(e) => handleSearch(e.target.value)}
            />
        </form>
    )
}

export default SearchForm;