import { useState } from "react"

const TourDetail = ({tourData, removeTour}) => {
    const [readMore, setReadMore] = useState(false);
    console.log(tourData);
    return (
        <article className='single-tour'>
            <img 
                src={tourData.image}
                alt={tourData.name}
            />

            <footer>
                <div className='tour-info'>
                    <h4>{tourData.name}</h4>
                    <h4 className='tour-price'>${tourData.price}</h4>
                </div>

                <p>
                    { readMore ? tourData.info : `${tourData.info.substring(0, 200)}....`}
                    <button 
                        onClick={() => setReadMore(!readMore)}
                    >
                        { readMore ? 'Show Less' : 'Show More'}
                    </button>
                </p>

                <button
                    type='button'
                    className='delete-btn'
                    onClick={() => removeTour(tourData.id)}
                >
                    Not Interested
                </button>
            </footer>
        </article>
    )
}

export default TourDetail;