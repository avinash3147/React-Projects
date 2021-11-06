import { useFetch } from "./useFetch";

import './Pagination.css'
import Follower from "./Follower";
import { useEffect, useState } from "react";

function Pagination() {

    const {loading, followersData} = useFetch()
    const [page, setPage] = useState(0)
    const [followers, setFollowers] = useState([])

    useEffect(() => {
        if (loading) {
            return
        }
        setFollowers(followersData[page])
    }, [loading, page])

    const handlePage = (index) => {
        setPage(index)
    }

    const prevPage = () => {
        setPage((oldPage) => {
            let prevPage = oldPage - 1;
            if (prevPage < 0) {
                prevPage = followersData.length - 1
            }
            return prevPage
        })
    }

    const nextPage = () => {
        setPage((oldPage) => {
            let nextPage = oldPage + 1;
            if (nextPage > followersData.length - 1) {
                nextPage = 0
            }
            return nextPage
        })
    }

    return (
        <main>
            <div className='section-title'>
                <h1>{ loading ? 'Loading..' : 'Pagination' }</h1>
                <div className='underline'></div>
            </div>

            <section className='followers'>
                <div className='container'>
                    {
                        followers.map((follower) => {
                            return <Follower key={follower.id} {...follower} />
                        })
                    }
                </div>

                {
                    !loading && <div className='btn-container'>
                        <button className='prev-btn' onClick={prevPage}>prev</button>

                        {
                            followersData.map((item, index) => {
                                return <button key={index} className={`page-btn ${index === page  ? 'active-btn' : null}`} onClick={() => handlePage(index)}>{index + 1}</button>
                            })
                        }

                        <button className='next-btn' onClick={nextPage}>next</button>          
                    </div>
                }
            </section>
        </main>
    )
}

export default Pagination;