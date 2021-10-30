import { useEffect, useState } from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import PeopleData from './sliderdata'
import './slider.css'

function Slider() {
    const [people, setPeople] = useState(PeopleData)
    const [value, setValue] = useState(0)

    // useEffect(() => {
    //     const lastIndex = people.length - 1
    //     if (value < 0) {
    //         setValue(lastIndex)
    //     }
    //     if (value > lastIndex) {
    //         setValue(0)
    //     }
    // }, [value, people])

    const { id, image, name, title, quote } = people[value];

    return (
        <section className='section'>
            <div className='title'>
                <h2><span>/</span>Reviews</h2>
            </div>

            <div className='section-center'>
                    <article className='position' key={id}>
                        <img
                            src={image}
                            alt={name}
                            className='person-img'
                        />
                        <h4>{name}</h4>
                        <p className='title'>{title}</p>
                        <p className='text'>{quote}</p>
                        <FaQuoteRight className='icon' />
                    </article>

                <button className="prev">
                    <FiChevronLeft />
                </button>
                <button className="next">
                    <FiChevronRight />
                </button>
            </div>
        </section>
    )
}

export default Slider;