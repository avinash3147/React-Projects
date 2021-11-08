import Pagination from "./Pagination";
import SearchForm from "./SearchForm";
import Stories from "./Stories";

import './HackerNews.css'

function HackerNews() {
    return (
        <>
            <SearchForm />
            <Pagination />
            <Stories />
        </>
    )
}

export default HackerNews;