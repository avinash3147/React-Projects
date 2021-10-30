import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaPeopleArrows, FaQuoteRight} from 'react-icons/fa'

import ReviewsData from "./ReviewsData";

const Reviews = () => {
    const [index, setIndex] = useState(0)
    const {name, job, image, text} = ReviewsData[index]

    const checkValue = (value) => {
        if (value > ReviewsData.length - 1) {
            return 0;
        } 
        if (value < 0) {
            return ReviewsData.length - 1;
        }
        return value;
    }

    const loadNextProfile = () => {
        setIndex(() => {
            let newIndexValue = index + 1;
            return checkValue(newIndexValue);
        });
    }

    const loadPrevProfile = () => {
        setIndex(() => {
            let newIndexValue = index - 1;
            return checkValue(newIndexValue);
        });
    }

    const loadRandomProfile = () => {
        let randomNumber = Math.floor(Math.random() * ReviewsData.length)
        if (randomNumber === index) {
            randomNumber = index + 1;
        }
        setIndex(checkValue(randomNumber))
    }

    return (
        <article className='review'>
            <div className='img-container'>
                <img
                    src={image}
                    alt={name}
                    className='person-img'
                />
                <span className='quote-icon'>
                    <FaQuoteRight />
                </span>
            </div>

            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>

            <div className='button-container'>
                <button className='prev-btn' onClick={() => loadPrevProfile()}>
                    <FaChevronLeft />
                </button>
                <button className='next-btn' onClick={() => loadNextProfile()}>
                    <FaChevronRight />
                </button>
            </div>

            <button  className='random-btn' onClick={() => loadRandomProfile()}>
                Surprise Me
            </button>
        </article>
    )
}

export default Reviews;