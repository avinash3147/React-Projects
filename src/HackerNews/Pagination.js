import { useGlobalContext } from "./context";

const Pagination = () => {

    const { page, nbPages, handlePage, isLoading } = useGlobalContext()

    return (
        <div className='pagination-container'>
            <button disabled={isLoading} className='prev-btn' onClick={() => handlePage('dec')}>prev</button>
            <p>{page} of {nbPages}</p>
            <button disabled={isLoading} className='next-btn' onClick={() => handlePage('inc')}>next</button>
        </div>
    )
}

export default Pagination;