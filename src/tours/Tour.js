import { useState, useEffect } from 'react'

import './Tour.css'
import Loader from './Loader'
import ToursDetails from './ToursDetails'

const url = 'https://course-api.com/react-tours-project'

function Tour() {

    const [loading, setLoading] = useState(true)
    const [toursData, setToursData] = useState([])

    const removeTour = (id) => {
        const newToursData = toursData.filter((tourData) => tourData.id !== id);
        setToursData(newToursData)
    }

    const fetchTourData = async () => {
        setLoading(true)
        try {
            const response = await fetch(url);
            const toursData = await response.json();
            setLoading(false)
            setToursData(toursData)
            // console.log(toursData);
        } catch (error) {
            setLoading(false)
            console.log(error);
        }
    }

    useEffect(() => {
        fetchTourData()
    }, [])

    if (loading) {
        return (
            <main>
                <Loader />
            </main>
        )
    }

    if (toursData.length === 0) {
        return (
            <main>
                <div className='title'>
                    <h2>No Tours Left</h2>
                    <button
                        className='btn'
                        onClick={() => fetchTourData()}>
                            Refresh
                    </button>
                </div>
            </main>
        )
    }
    return (
        <main>
            <ToursDetails
                toursData={toursData}
                removeTour={removeTour}
            />
        </main>
    )
}

export default Tour;