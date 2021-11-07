import { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'

import './StockPhotos.css'

const mainUrl = 'https://api.unsplash.com/photos/'
const schemaUrl = 'https://api.unsplash.com/search/photos/'
const clientId = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`

function StockPhotos() {

    const [loading, setLoading] = useState(false)
    const [photos, setPhotos] = useState([])
    const [page, setPage] = useState(0)
    const [searchQuery, setSearchQuery] = useState('')

    const fetchImages = async () => {
        setLoading(true)
        let url
        const urlPage = `&page=${page}`
        const urlQuery = `&query=${searchQuery}`

        if (searchQuery) {
            url = `${schemaUrl}${clientId}${urlPage}${urlQuery}`
        } else {
            url = `${mainUrl}${clientId}${urlPage}`
        }
        
        try {
            const response = await fetch(url)
            const data = await response.json()
            setPhotos((oldPhotos) => {
                if (searchQuery && page === 1) {
                    return data.results
                }else if (searchQuery) {
                    return [...oldPhotos, ...data.results]
                } else {
                    return [...oldPhotos, ...data]
                }
            })
            setLoading(false)
            // console.log(data);
        } catch (error) {
            setLoading(false)
            console.log(error);
        }
    }

    useEffect(() => {
        fetchImages()
    }, [page])

    useEffect(() => {
        const event = window.addEventListener('scroll', () => {
            if ( !loading && (window.innerHeight + window.scrollY) >= document.body.scrollHeight - 2 ) {
                setPage((oldPage) => {
                    return oldPage + 1
                })
            }
        })
        return () => {
            window.removeEventListener('scroll', event)
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        setPage(1)
    }

    return (
        <main>
            <section className='search'>
                <form className='search-form'>
                    <input type='text' placeholder='Search' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className='form-input' />
                    <button type='submit' className='submit-btn'  onClick={handleSubmit}>
                        <FaSearch />
                    </button>
                </form>
            </section>

            <section className="photos">
                <div className='photos-center'>
                    {
                        photos.map((photo, index) => {
                            return <Photo key={index} {...photo} />
                        })
                    }
                </div>

                { loading && <h2 className='loading'>Loading...</h2> }
            </section>
        </main>
    )
}

export default StockPhotos;