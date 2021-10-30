import Reviews from './Reviews';
import './Reviews.css'

const Review = () => {
    return (
        <main>
            <section className='container'>
                <div className='title'>
                    <h2>Our Reviews</h2>
                    <div className='underline'></div>
                </div>
                <Reviews />
            </section>
        </main>
    )
}

export default Review;
