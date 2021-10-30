import { useState } from 'react';
import './LoremIpsum.css'
import LoremIpsumText from "./LoremIpsumData";

const LoremIpsumDataGenerator = () => {

    const [loremIpsumData, setLoremIpsumData] = useState([])
    const [numOfParagraphs, setNumOfParagraphs] = useState(0)

    // const handleChange = (e) => {
    //     const value = e.target.value;
    //     setNumOfParagraphs(value);
    // }

    const handleSubmit = (e) => {
        e.preventDefault()
        let finalParagraphsCount = parseInt(numOfParagraphs)
        if (numOfParagraphs <= 0) {
            finalParagraphsCount = 1
        }
        if (numOfParagraphs > 8) {
            finalParagraphsCount = 8
        }
        setLoremIpsumData(LoremIpsumText.slice(0, finalParagraphsCount))
    }

    return (
        <section className='section-center'>
            <h3>Tired Of Boring Lorum Ipsum?</h3>

            <form className='lorem-form' onSubmit={handleSubmit}>
                <label htmlFor='numOfParagraphs'>Paragraphs: </label>
                <input
                    type='number'
                    id='numOfParagraphs'
                    name='numOfParagraphs'
                    value={numOfParagraphs}
                    onChange={(e) => {setNumOfParagraphs(e.target.value)}}
                />
                <button className='btn'>Generate</button>
            </form>

            <div className='lorem-text'>
                {loremIpsumData.map((text, index) => {
                    return <p key={index}>{text}</p>})}
            </div>
            {/* <article className='lorem-text'>
                {loremIpsumData.map((text, index) => {
                    return <p key={index}>{text}</p>
                })}
            </article> */}
        </section>
    )
}

export default LoremIpsumDataGenerator;