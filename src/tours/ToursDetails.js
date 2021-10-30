import TourDetail from "./TourDetail";

const ToursDetails = ({toursData, removeTour}) => {
    // console.log(toursData);
    return (
        <section>
            <div className='title'>
                <h2>Our Tours</h2>
                <div className='underline'></div>

                <div>
                    {
                        toursData.map((tour) => {
                            return (
                                <TourDetail 
                                    key={tour.id}
                                    tourData={tour}
                                    removeTour={removeTour}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default ToursDetails;